import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Premier Digital" },
      { name: "description", content: "Read the Privacy Policy of Premier Digital (Pvt) Ltd to understand how we safeguard your data and privacy rights." },
      { property: "og:title", content: "Privacy Policy | Premier Digital" },
      { property: "og:description", content: "Read the Privacy Policy of Premier Digital (Pvt) Ltd to understand how we safeguard your data and privacy rights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <main><PrivacyPolicy /></main>
    </PageTransition>
  );
}
