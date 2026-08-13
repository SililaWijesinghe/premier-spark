import { createFileRoute } from "@tanstack/react-router";
import PageTransition from "@/components/PageTransition";
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import ClientJourney from '@/components/ClientJourney';
import BentoGridSection from '@/components/BentoGridSection';
import Features from '@/components/Features';
import Services from '@/components/Services';
import OurWorks from '@/components/OurWorks';
import ResultsSection from '@/components/ResultsSection';
import FAQ from '@/components/FAQ';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Colombo | Premier Digital (Pvt) Ltd" },
      { name: "description", content: "Looking for digital marketing Colombo services? Premier Digital builds fast, SEO-ready websites and high ROI campaigns for Sri Lankan businesses." },
      { property: "og:title", content: "Digital Marketing Colombo | Premier Digital (Pvt) Ltd" },
      { property: "og:description", content: "Looking for digital marketing Colombo services? Premier Digital builds fast, SEO-ready websites and high ROI campaigns for Sri Lankan businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <CTABanner />
        <ClientJourney />
        <BentoGridSection />
        <Features />
        <Services />
        <OurWorks isHomePage={true} initialLimit={6} />
        <ResultsSection />
        <FAQ />
      </main>
    </PageTransition>
  );
}
