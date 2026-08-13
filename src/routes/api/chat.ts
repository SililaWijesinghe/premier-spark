import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_INSTRUCTION = `You are Pixia, an elite AI Growth Concierge for Premier Digital. Your singular goal is to guide visitors, convert them into clients, and help them scale their businesses, using premium, elegant, and highly engaging language.

PREMIER DIGITAL KNOWLEDGE:
- Services: Branding, Digital Marketing, Ads, Web Design, AI & Automation.
- Value Proposition: We build powerful brands and drive real sales. No fluff. We accelerate growth.
- Contact: sales@premierdigital.lk, +94 76 166 8155, Nugegoda, Sri Lanka.

COMMUNICATION STYLE:
- Elegant & Premium, human-like and sophisticated, never robotic.
- Concise & Powerful: under 3 sentences.
- Persuasive & Consultative, always ending with a low-friction call to action.

RULES:
1. MAX 3 SENTENCES. NO EXCEPTIONS.
2. NO BULLET POINTS unless asked. NO ESSAYS.
3. Be empathetic and professional.
4. Reply ONLY with JSON of shape {"text": string, "options": [{"label": string, "id": string}]} with 2-3 follow-up options, labels under 5 words.`;

type IncomingFile = { base64: string; type: string; name?: string };
type IncomingMessage = { role: "user" | "bot"; content: string; file?: IncomingFile };

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

function toContent(text: string, file?: IncomingFile) {
  if (file && ALLOWED_TYPES.includes(file.type)) {
    const url = file.base64.startsWith("data:")
      ? file.base64
      : `data:${file.type};base64,${file.base64}`;
    return [
      ...(text ? [{ type: "text", text }] : []),
      { type: "image_url", image_url: { url } },
    ];
  }
  return text;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            message?: string;
            file?: IncomingFile;
            history?: IncomingMessage[];
          };
          const message = (body.message ?? "").trim();
          if (!message && !body.file) {
            return Response.json({ error: "Message or file is required" }, { status: 400 });
          }

          const apiKey = process.env["LOVABLE_API_KEY"];
          if (!apiKey) {
            return Response.json({ error: "AI is not configured" }, { status: 500 });
          }

          const messages = [
            { role: "system", content: SYSTEM_INSTRUCTION },
            ...(body.history ?? []).map((m) => ({
              role: m.role === "bot" ? "assistant" : "user",
              content: toContent(m.content, m.file),
            })),
            { role: "user", content: toContent(message, body.file) },
          ];

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages,
              response_format: { type: "json_object" },
            }),
          });

          if (!res.ok) {
            const errorBody = await res.text();
            console.error(`AI gateway failed [${res.status}]: ${errorBody}`);
            return Response.json({ error: "AI request failed" }, { status: res.status });
          }

          const data = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const raw = data.choices?.[0]?.message?.content ?? "{}";
          let parsed: { text?: string; options?: { label: string; id: string }[] } = {};
          try {
            parsed = JSON.parse(raw);
          } catch {
            parsed = { text: raw };
          }

          return Response.json({
            text: (parsed.text ?? "").replace(/\\n/g, "\n"),
            options: parsed.options ?? [],
          });
        } catch (error) {
          console.error("Chat API error:", error);
          return Response.json({ error: "An error occurred" }, { status: 500 });
        }
      },
    },
  },
});
