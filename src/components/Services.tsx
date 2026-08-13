import { useState } from 'react';
import { PenTool, Megaphone, MonitorPlay, Code, Search, Video, Calendar, Filter, X, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from '@tanstack/react-router';

const services = [
  {
    icon: PenTool,
    title: 'Branding & Creative\nDesign',
    color: "from-[#E71919] to-[#FF7A00]",
    details: {
      headline: "Stop Being Ignored. Become Unforgettable.",
      fullDescription: "In a split second, your audience decides if they trust you based purely on aesthetics. We craft premium, psychology-driven brand identities that instantly command respect, justify higher pricing, and forge deep emotional connections with your ideal clients.",
      benefits: [
        "Authority Bias: Look like the undisputed market leader.",
        "Halo Effect: Beautiful design makes your product seem inherently better.",
        "Brand Loyalty: Visuals that create visceral, lasting connections."
      ],
      ctaText: "Elevate My Brand"
    }
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing\nServices',
    color: "from-[#FF7A00] to-[#FBBF24]",
    details: {
      headline: "Dominate Your Digital Landscape.",
      fullDescription: "Hope is not a strategy. We engineer aggressive, data-backed digital marketing ecosystems designed to surround your target audience, obliterate your competition, and create a predictable pipeline of high-intent leads.",
      benefits: [
        "Omnipresence: Be everywhere your customers are looking.",
        "Social Proof: Amplify your credibility at scale.",
        "Predictable Growth: Turn marketing from an expense into an investment."
      ],
      ctaText: "Scale My Growth"
    }
  },
  {
    icon: MonitorPlay,
    title: 'Advertising Services',
    color: "from-[#18C6D1] to-[#0EA5E9]",
    details: {
      headline: "Buy Customers, Not Just Clicks.",
      fullDescription: "Stop setting money on fire with poorly optimized ads. We utilize hyper-targeted behavioral data and direct-response copywriting to create ad campaigns that capture attention, trigger urgency, and force immediate action.",
      benefits: [
        "Hyper-Targeting: Show ads only to people ready to buy.",
        "Scarcity & Urgency: Ad copy that drives immediate conversions.",
        "Maximized ROI: Every dollar spent is tracked and optimized."
      ],
      ctaText: "Maximize My ROI"
    }
  },
  {
    icon: Code,
    title: 'Website Design &\nDevelopment',
    color: "from-[#8B5CF6] to-[#EC4899]",
    details: {
      headline: "Turn Your Website Into a 24/7 Sales Machine.",
      fullDescription: "Your website is your digital storefront. If it's slow, confusing, or ugly, you are actively losing money. We build lightning-fast, conversion-optimized websites utilizing cognitive ease to guide users effortlessly from visitors to paying customers.",
      benefits: [
        "Cognitive Ease: Frictionless UI/UX that practically forces conversions.",
        "Speed Optimization: Sub-second load times to prevent bounce rates.",
        "Mobile First: Flawless experiences across all devices."
      ],
      ctaText: "Build My Sales Machine"
    }
  },
  {
    icon: Search,
    title: 'SEO & Google Visibility',
    color: "from-[#FF7A00] to-[#FBBF24]",
    details: {
      headline: "Capture High-Intent Traffic Before Your Competitors Do.",
      fullDescription: "When people search for your services, they are ready to buy. If you aren't on page one, you don't exist. We use advanced semantic SEO to secure your position at the top, capturing the most lucrative traffic in your industry.",
      benefits: [
        "Authority Bias: Google's top spot implies you are the best.",
        "Compound Growth: SEO is an asset that grows in value over time.",
        "High Intent: Capture users at the exact moment they need you."
      ],
      ctaText: "Dominate Search Results"
    }
  },
  {
    icon: Video,
    title: 'Video Production &\nContent Creation',
    color: "from-[#E71919] to-[#EC4899]",
    details: {
      headline: "Command Attention in a Distracted World.",
      fullDescription: "Text tells, but video sells. We produce cinematic, high-retention video content designed to hijack the brain's orienting reflex, keeping viewers glued to the screen and effortlessly absorbing your brand's message.",
      benefits: [
        "Visual Storytelling: Bypass logical objections with emotional narratives.",
        "Pattern Interrupts: Instantly grab attention in crowded feeds.",
        "Trust Building: Let customers see the real faces behind your brand."
      ],
      ctaText: "Create Cinematic Content"
    }
  },
  {
    icon: Calendar,
    title: 'Event Management &\nBrand Activation',
    color: "from-[#18C6D1] to-[#0EA5E9]",
    details: {
      headline: "Create Experiences They Will Never Forget.",
      fullDescription: "Digital is great, but physical experiences forge unbreakable bonds. We architect immersive brand activations and events utilizing the peak-end rule, ensuring your audience leaves with powerful, positive memories of your brand.",
      benefits: [
        "Peak-End Rule: Guarantee unforgettable moments.",
        "Reciprocity: Create experiences that make attendees want to buy.",
        "Brand Immersion: Surround your audience with your brand's ethos."
      ],
      ctaText: "Plan My Event"
    }
  },
  {
    icon: Filter,
    title: 'Lead Generation &\nBusiness Growth',
    color: "from-[#EC4899] to-[#8B5CF6]",
    details: {
      headline: "Flood Your Sales Pipeline With Qualified Buyers.",
      fullDescription: "Stop chasing cold leads. We build automated lead generation funnels that utilize value-first psychology to attract high-quality prospects, warming them up and pre-qualifying them before they ever speak to your sales team.",
      benefits: [
        "Commitment & Consistency: Micro-yes funnels that increase conversions.",
        "Pre-Qualification: Only talk to people who actually want to buy.",
        "Automated Scaling: A machine that generates leads while you sleep."
      ],
      ctaText: "Flood My Pipeline"
    }
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#060B16]">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E71919]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]"
          >
            <Zap className="w-3.5 h-3.5" /> Comprehensive Capabilities
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] mb-6 leading-[1.1] tracking-tight"
          >
            Our Services as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">Digital Marketing Agency</span> in Colombo
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#FF7A00] text-lg md:text-xl font-bold mb-6 tracking-wide"
          >
            Web Design, Digital Marketing & Branding Services
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A5B0C3] text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium"
          >
            As your dedicated <strong className="text-[#F8FAFC]">digital marketing agency in Colombo</strong>, Premier Digital provides web design, SEO,
            branding, graphic design, and video production for businesses in Nugegoda and across Sri Lanka.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              key={index} 
              onClick={() => setActiveService(service)}
              className="bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/60 rounded-[32px] p-8 hover:bg-[#0E1728] transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-[260px] cursor-pointer shadow-[0_15px_35px_rgba(6,11,22,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E71919]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="h-24 w-full mb-6 relative flex items-center justify-center">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#0E1728] to-[#060B16] border border-[#26354D] group-hover:border-[#E71919]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(6,11,22,0.5)] transform group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-1 rounded-xl border border-[#E71919]/40 bg-gradient-to-br from-red-950/40 to-[#060B16] shadow-[inset_0_0_12px_rgba(231,25,25,0.2)]" />
                  <service.icon className="w-7 h-7 text-[#E71919] relative z-10 drop-shadow-[0_0_8px_rgba(231,25,25,0.5)]" strokeWidth={1.8} />
                </div>
              </div>

              <h3 className="text-lg font-extrabold text-[#F8FAFC] whitespace-pre-line leading-tight tracking-tight group-hover:text-[#E71919] transition-colors relative z-10">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link to="/services" className="bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:opacity-90 text-[#F8FAFC] px-9 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(231,25,25,0.4)] flex items-center gap-2 cursor-pointer">
            Explore All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#060B16]/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E1728] border border-[#26354D] rounded-[32px] w-full max-w-2xl shadow-[0_25px_60px_rgba(6,11,22,0.9)] relative overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E71919] to-[#FF7A00]" />
              
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 p-2 bg-[#141F33] hover:bg-[#26354D] rounded-full transition-colors z-10 text-[#A5B0C3] hover:text-[#F8FAFC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E71919]/30 to-red-900/40 border border-[#E71919]/40 flex items-center justify-center text-[#E71919] shadow-[0_0_20px_rgba(231,25,25,0.3)] mb-8">
                  <activeService.icon className="w-8 h-8 text-[#E71919]" />
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#F8FAFC] text-left tracking-tight">{activeService.details.headline}</h3>
                
                <p className="text-base text-[#A5B0C3] leading-relaxed mb-8 text-left font-medium">
                  {activeService.details.fullDescription}
                </p>

                <div className="space-y-4 mb-10 text-left">
                  {activeService.details.benefits.map((benefit: string, i: number) => {
                    const [bold, rest] = benefit.split(': ');
                    return (
                      <div key={i} className="flex items-start gap-3 text-[#A5B0C3]">
                        <CheckCircle2 className="w-6 h-6 text-[#E71919] shrink-0 mt-0.5" />
                        <span className="font-medium text-sm">
                          <strong className="text-[#F8FAFC] font-bold">{bold}:</strong> {rest}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-8 border-t border-[#26354D] flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setActiveService(null)}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:opacity-90 text-[#F8FAFC] px-8 py-4 rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(231,25,25,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {activeService.details.ctaText} <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="w-full sm:w-auto bg-[#141F33] hover:bg-[#26354D] text-[#F8FAFC] px-8 py-4 rounded-full font-bold text-base transition-colors flex items-center justify-center cursor-pointer border border-[#26354D]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
