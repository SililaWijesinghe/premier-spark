import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Megaphone, 
  Target, 
  LayoutTemplate, 
  Search, 
  Video, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  X,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  details: {
    headline: string;
    fullDescription: string;
    benefits: string[];
    ctaText: string;
  };
};

const services: Service[] = [
  {
    id: "branding",
    title: "Branding & Creative Design",
    description: "Build a strong, professional, and memorable brand identity for your business.",
    icon: Palette,
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
    id: "digital-marketing",
    title: "Digital Marketing Services",
    description: "Grow your business online with strategic digital marketing solutions designed to increase visibility, engagement, leads, and sales.",
    icon: Megaphone,
    color: "from-[#18C6D1] to-[#0EA5E9]",
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
    id: "advertising",
    title: "Advertising Services",
    description: "Promote your brand with creative advertising campaigns that reach the right audience and deliver measurable results.",
    icon: Target,
    color: "from-[#FBBF24] to-[#18C6D1]",
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
    id: "web-design",
    title: "Website Design & Development",
    description: "Create a professional digital platform that represents your brand and converts visitors into customers.",
    icon: LayoutTemplate,
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
    id: "seo",
    title: "SEO & Google Visibility",
    description: "Improve your online visibility and help customers find your business through Google search.",
    icon: Search,
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
    id: "video",
    title: "Video & Content Creation",
    description: "High-quality visuals that make your brand impossible to ignore.",
    icon: Video,
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
    id: "event",
    title: "Event Management",
    description: "Plan and execute professional events and brand experiences that create impact and customer engagement.",
    icon: Calendar,
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
    id: "lead-gen",
    title: "Lead Generation",
    description: "We help businesses attract the right customers through strategic campaigns, landing pages, digital ads, and inquiry-focused content.",
    icon: TrendingUp,
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

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="bg-[#060B16] min-h-screen text-[#F8FAFC] pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#E71919]/20 rounded-[100%] blur-[120px] mix-blend-screen opacity-60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-500 text-xs font-medium tracking-wide">Live: Available for New Projects</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] to-[#FF7A00]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-[#A5B0C3] max-w-3xl mx-auto leading-relaxed"
          >
            We provide end-to-end branding and digital marketing solutions to help businesses build a strong brand identity, highly effective digital platforms, grow their presence online, and generate high-quality leads.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#141F33] border border-[#26354D] rounded-[32px] p-8 hover:border-[#E71919]/60 shadow-[0_15px_35px_rgba(6,11,22,0.5)] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#060B16] via-[#060B16]/40 to-transparent group-hover:from-[#060B16]/80 transition-all z-10 pointer-events-none`} />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-500 pointer-events-none z-10`} />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6 shrink-0`}>
                    <div className="w-full h-full bg-[#0E1728] rounded-[15px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#F8FAFC]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#A5B0C3] transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#A5B0C3] leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-sm font-semibold text-[#F8FAFC]/50 group-hover:text-[#F8FAFC] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#060B16]/90 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E1728] border border-[#26354D] rounded-[32px] w-full max-w-2xl shadow-[0_25px_60px_rgba(6,11,22,0.9)] relative overflow-hidden my-auto"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${activeService.color}`} />
              
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 p-2 bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/60 hover:text-[#F8FAFC] rounded-full transition-all z-10 shadow-lg text-[#A5B0C3] hover:text-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.color} p-[1px] mb-8 inline-block`}>
                  <div className="w-full h-full bg-[#0E1728] rounded-[15px] flex items-center justify-center">
                    <activeService.icon className="w-8 h-8 text-[#F8FAFC]" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">{activeService.details.headline}</h3>
                
                <p className="text-lg text-[#A5B0C3] leading-relaxed mb-8">
                  {activeService.details.fullDescription}
                </p>

                <div className="space-y-4 mb-10">
                  {activeService.details.benefits.map((benefit, i) => {
                    const [bold, rest] = benefit.split(': ');
                    return (
                      <div key={i} className="flex items-start gap-3 text-[#A5B0C3]">
                        <CheckCircle2 className="w-6 h-6 text-[#E71919] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#F8FAFC]">{bold}:</strong> {rest}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-8 border-t border-[#26354D] flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setActiveService(null)}
                    className={`w-full sm:w-auto bg-gradient-to-r ${activeService.color} hover:opacity-90 text-[#F8FAFC] px-8 py-4 rounded-full font-bold text-lg transition-opacity flex items-center justify-center gap-2`}
                  >
                    {activeService.details.ctaText} <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="w-full sm:w-auto bg-[#141F33] border border-[#26354D] hover:border-[#F8FAFC]/60 text-[#F8FAFC] px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] border border-[#26354D] bg-[#141F33] overflow-hidden shadow-[0_25px_60px_rgba(6,11,22,0.9)]"
        >
          {/* Background Image / Rocket Art & Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060B16] via-[#060B16]/80 to-transparent z-10" />
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
                Ready to Grow Your Brand <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1]">and Business?</span>
              </h2>
              <p className="text-[#A5B0C3] text-base sm:text-lg font-medium">Let's build a strategy that drives real results. Partner with Premier Digital today.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:from-[#E71919] hover:to-[#E71919] text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase transition-all shadow-[0_0_25px_rgba(231,25,25,0.4)] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="https://wa.me/94761668155" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#060B16]/80 backdrop-blur-xl border border-[#26354D]/80 hover:border-[#E71919]/60 hover:bg-[#141F33] text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#E71919]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
