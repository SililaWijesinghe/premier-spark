import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import AboutUs from '@/components/AboutUs';

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Premier Digital (Pvt) Ltd Colombo" },
      { name: "description", content: "Learn about Premier Digital, Colombo's premier digital marketing and software engineering agency driving measurable ROI for modern brands." },
      { property: "og:title", content: "About Us | Premier Digital (Pvt) Ltd Colombo" },
      { property: "og:description", content: "Learn about Premier Digital, Colombo's premier digital marketing and software engineering agency driving measurable ROI for modern brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <main><AboutUs /></main>
    </PageTransition>
  );
}
