import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Zap } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Digital marketing is a mix of short-term and long-term strategies. While Paid Ads (PPC) can generate traffic and leads almost immediately within the first week, organic strategies like SEO typically take 3 to 6 months to show significant, compounding results. We set clear timelines and KPIs during our initial strategy phase."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We partner with businesses of all sizes. For startups, we focus on establishing a strong brand foundation and rapid market penetration. For established businesses, we focus on scaling operations, optimizing conversion rates, and expanding market share. Our strategies are custom-tailored to your current business stage."
  },
  {
    question: "What makes your agency different from others?",
    answer: "We are obsessed with ROI and data-driven decisions rather than vanity metrics. Instead of just delivering traffic, we focus on conversion rate optimization and revenue growth. Our team acts as an extension of your business, maintaining transparent communication and providing real-time performance dashboards."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: "Success is measured strictly against your business objectives. We track core metrics such as Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Conversion Rates, and total Revenue Generated. We provide detailed monthly reports translating complex data into actionable business insights."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We believe in earning your business every month. While we recommend a minimum 3-month commitment for SEO to see initial momentum, our core services operate on flexible agreements. We want you to stay with us because you're seeing incredible results, not because you're locked into a contract."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 relative bg-[#060B16] overflow-hidden border-t border-[#26354D]">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E71919]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]"
          >
            <Zap className="w-3.5 h-3.5" /> Clarity & Transparency
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 tracking-tight leading-[1.1]"
          >
            Got questions? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">We've got answers.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[32px] transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#141F33] border-[#E71919]/60 shadow-[0_15px_35px_rgba(6,11,22,0.7)]' 
                    : 'bg-[#141F33]/80 border-[#26354D]/80 hover:bg-[#141F33] hover:border-[#26354D]'
                } border backdrop-blur-xl cursor-pointer`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Active Indicator Line */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#E71919] to-[#FF7A00] transition-transform duration-300 origin-top ${
                    isOpen ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-lg md:text-xl font-extrabold transition-colors duration-300 tracking-tight ${isOpen ? 'text-[#E71919]' : 'text-[#F8FAFC] group-hover:text-[#E71919]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-[#E71919]/20 text-[#E71919] border border-[#E71919]/40' : 'bg-[#0E1728] border border-[#26354D] text-[#A5B0C3] group-hover:text-[#F8FAFC] group-hover:border-[#26354D]'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-6 text-[#A5B0C3] leading-relaxed text-sm md:text-base pr-8 font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

