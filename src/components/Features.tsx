import { BarChart3, Coins, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: BarChart3,
    title: 'Data-Driven Strategies',
    description: 'Smart strategies backed by data, not guesswork.',
  },
  {
    icon: Coins,
    title: 'Creative that Converts',
    description: 'Eye-catching designs that drive action and results.',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Focused Campaigns',
    description: 'We focus on leads, sales and measurable growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Reliable',
    description: 'Clear communication, honest reporting, real results.',
  }
];

export default function Features() {
  return (
    <section className="bg-[#060B16] relative pb-12 pt-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#141F33]/90 backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 rounded-[32px] shadow-[0_20px_50px_rgba(6,11,22,0.8)] overflow-hidden transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-[#26354D]">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ backgroundColor: 'rgba(231, 25, 25, 0)' }}
                whileHover={{ backgroundColor: 'rgba(231, 25, 25, 0.05)' }}
                className={`flex gap-4 items-center p-6 lg:p-8 transition-colors group ${
                  index !== 0 ? 'border-t border-[#26354D] md:border-t-0' : ''
                } ${
                  index > 1 ? 'md:border-t md:border-[#26354D] lg:border-t-0' : ''
                }`}
              >
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0E1728] to-[#060B16] border border-[#26354D] group-hover:border-[#E71919]/60 shadow-[0_0_20px_rgba(6,11,22,0.5)] transition-all">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-2xl bg-[#E71919]/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {/* Inner red ring */}
                  <div className="absolute inset-1 rounded-xl border border-[#E71919]/40 bg-gradient-to-br from-red-950/40 to-[#060B16] shadow-[inset_0_0_12px_rgba(231,25,25,0.2)]"></div>
                  
                  <feature.icon className="w-5 h-5 text-[#E71919] relative z-10 drop-shadow-[0_0_8px_rgba(231,25,25,0.5)]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[#F8FAFC] font-extrabold text-[15px] mb-1 tracking-tight group-hover:text-[#E71919] transition-colors">{feature.title}</h3>
                  <p className="text-[#A5B0C3] text-xs leading-relaxed font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

