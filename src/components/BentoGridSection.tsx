import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const features = [
  {
    image: "/Results driven digital marketing strategies.webp",
    title: "Results driven",
    subtitle: "digital marketing strategies",
  },
  {
    image: "/Strong Reporting to track ROI.webp",
    title: "Strong Reporting",
    subtitle: "to track ROI",
  },
  {
    image: "/Highly Rated by clients.webp",
    title: "Highly Rated",
    subtitle: "by clients",
  },
  {
    image: "/360 Digital Marketing Campaigns.webp",
    title: "360° Digital",
    subtitle: "Marketing Campaigns",
  },
  {
    image: "/Data-driven Marketing campaigns.webp",
    title: "Data-driven",
    subtitle: "Marketing Campaigns",
  }
];

export default function BentoGridSection() {
  return (
    <section className="py-20 md:py-32 bg-[#060B16] overflow-hidden relative mt-0 pl-[1px]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-tr from-[#E71919]/20 to-[#FF7A00]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-[#18C6D1]/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]"
          >
            <Zap className="w-3.5 h-3.5" /> WHY PREMIER DIGITAL
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#F8FAFC] mb-8 leading-[1.1] tracking-tight"
          >
            Driving Growth with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400 drop-shadow-[0_0_35px_rgba(231,25,25,0.2)]">
              Powerful Digital Strategies
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A5B0C3] leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Smart strategies. Real data. Measurable results.
            <br />
            Everything your business needs to grow online.
          </motion.p>
        </div>

        {/* Features Row - Neuromorphic Black Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center relative group bg-[#000000] p-6 lg:p-5 xl:p-6 rounded-[28px] border border-white/[0.03] shadow-[10px_10px_20px_rgba(0,0,0,0.6),-5px_-5px_15px_rgba(255,255,255,0.02)] hover:-translate-y-2 hover:shadow-[10px_15px_30px_rgba(231,25,25,0.15),-5px_-5px_15px_rgba(255,255,255,0.02)] hover:border-[#E71919]/20 transition-all duration-500"
            >
              <div className="w-36 h-36 xl:w-40 xl:h-40 mb-6 relative">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  loading="lazy"
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-lg xl:text-xl font-extrabold text-[#F8FAFC] mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-400 transition-all">
                {feature.title}
              </h3>
              <p className="text-xs xl:text-sm text-[#A5B0C3] font-medium mb-6 flex-grow">
                {feature.subtitle}
              </p>
              
              {/* Small red line at the bottom */}
              <div className="w-6 h-[3px] bg-gradient-to-r from-[#E71919] to-[#FF7A00] rounded-full opacity-80 group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

