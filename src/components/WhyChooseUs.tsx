import { Target, Users, Zap, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: Target,
    title: 'Proven Track Record',
    description: 'We\'ve helped businesses across industries achieve consistent growth and measurable results.'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Strategists, designers and marketers working together to deliver exceptional outcomes.'
  },
  {
    icon: Zap,
    title: 'Agile & Innovative',
    description: 'We stay ahead of trends and adapt quickly to keep you ahead of your competition.'
  },
  {
    icon: Shield,
    title: 'Client-First Approach',
    description: 'We listen, we care, and we\'re committed to your long-term success.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative bg-[#060B16] overflow-hidden border-t border-[#26354D]">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E71919]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]"
          >
            <Zap className="w-3.5 h-3.5" /> Why Choose Premier Digital
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 leading-[1.1] tracking-tight"
          >
            Your Growth Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">Our Mission</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/60 rounded-[32px] p-8 transition-all duration-300 shadow-[0_15px_35px_rgba(6,11,22,0.5)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E71919]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0E1728] to-[#060B16] border border-[#26354D] group-hover:border-[#E71919]/60 shadow-[0_0_20px_rgba(6,11,22,0.5)] transition-all mb-6">
                <div className="absolute inset-1 rounded-xl border border-[#E71919]/40 bg-gradient-to-br from-[#E71919]/10 to-[#141F33] shadow-[inset_0_0_12px_rgba(231,25,25,0.2)]" />
                <reason.icon className="w-6 h-6 text-[#E71919] relative z-10 drop-shadow-[0_0_8px_rgba(231,25,25,0.5)]" strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[#F8FAFC] font-extrabold text-lg mb-3 tracking-tight group-hover:text-[#E71919] transition-colors">{reason.title}</h3>
                <p className="text-[#A5B0C3] text-sm leading-relaxed font-medium">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

