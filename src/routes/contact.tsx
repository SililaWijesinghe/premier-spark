import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import ContactUs from '@/components/ContactUs';

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Premier Digital Colombo" },
      { name: "description", content: "Get in touch with Premier Digital for digital marketing, SEO, and web development in Colombo, Sri Lanka. Free consultations available." },
      { property: "og:title", content: "Contact Us | Premier Digital Colombo" },
      { property: "og:description", content: "Get in touch with Premier Digital for digital marketing, SEO, and web development in Colombo, Sri Lanka. Free consultations available." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageTransition>
      <main><ContactUs /></main>
    </PageTransition>
  );
}
