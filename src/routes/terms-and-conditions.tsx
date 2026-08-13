import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import TermsAndConditions from '@/components/legal/TermsAndConditions';

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Premier Digital" },
      { name: "description", content: "Review the Terms and Conditions for using the Premier Digital website, services, and software solutions." },
      { property: "og:title", content: "Terms and Conditions | Premier Digital" },
      { property: "og:description", content: "Review the Terms and Conditions for using the Premier Digital website, services, and software solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <PageTransition>
      <main><TermsAndConditions /></main>
    </PageTransition>
  );
}
