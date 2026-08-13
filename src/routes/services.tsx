import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import ServicesPageSection from '@/components/ServicesPage';

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services & Web Design | Premier Digital" },
      { name: "description", content: "Explore SEO, PPC advertising, custom web development, social media marketing, and bespoke software solutions in Sri Lanka." },
      { property: "og:title", content: "Digital Marketing Services & Web Design | Premier Digital" },
      { property: "og:description", content: "Explore SEO, PPC advertising, custom web development, social media marketing, and bespoke software solutions in Sri Lanka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageTransition>
      <main><ServicesPageSection /></main>
    </PageTransition>
  );
}
