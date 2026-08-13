import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import OurWorks from '@/components/OurWorks';

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works & Case Studies | Premier Digital" },
      { name: "description", content: "Explore our portfolio of high-performing digital marketing campaigns, high-speed web apps, and brand transformations in Colombo and worldwide." },
      { property: "og:title", content: "Our Works & Case Studies | Premier Digital" },
      { property: "og:description", content: "Explore our portfolio of high-performing digital marketing campaigns, high-speed web apps, and brand transformations in Colombo and worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <PageTransition>
      <main className="pt-24"><OurWorks /></main>
    </PageTransition>
  );
}
