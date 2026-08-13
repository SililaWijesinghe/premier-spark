import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import CustomCursor from './CustomCursor';
import PremierDigitalChatbot from './chatbot/PremierDigitalChatbot';

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <CustomCursor />
      <ScrollToTop />
      <div className="min-h-screen bg-[#060B16] text-[#F8FAFC] font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
        <PremierDigitalChatbot />
      </div>
    </ReactLenis>
  );
}
