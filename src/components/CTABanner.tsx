import { ArrowRight, Zap } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

export default function CTABanner() {
  return (
    <section className="pt-10 md:pt-16 pb-10 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[32px] border border-[#26354D] bg-black overflow-hidden shadow-[0_25px_60px_rgba(6,11,22,0.9)]"
      >
        {/* Background Image / Rocket Art & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
            <img src="/aboutCtaBgArt.webp" alt="CTA Background" className="w-full h-full object-cover opacity-90 mix-blend-screen scale-110 object-right" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#E71919]/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-20 px-8 py-16 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(231,25,25,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Take Action Today
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-4 tracking-tight leading-[1.1]">
              Ready to Take Your Business <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1]">to the Next Level?</span>
            </h2>
            <p className="text-[#A5B0C3] text-base sm:text-lg font-medium">Let's build a strategy that drives real, measurable results.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:from-[#E71919] hover:to-[#E71919] text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase transition-all shadow-[0_0_25px_rgba(231,25,25,0.4)] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/94761668155" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#0E1728]/80 backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 hover:bg-[#141F33] text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
              <WhatsAppIcon className="w-5 h-5 text-[#E71919]" /> Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

