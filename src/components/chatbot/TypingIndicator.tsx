import { motion } from 'motion/react';

export default function TypingIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex w-full mt-4 justify-start"
    >
      <div className="w-8 h-8 rounded-full bg-pd-gradient p-[1px] mr-3 shrink-0 mt-auto shadow-[0_0_10px_rgba(255,32,40,0.3)]">
        <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center">
          <img src="/pixiaAVATAR.png" alt="Pixia - AI Growth Concierge" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="px-5 py-4 bg-gradient-to-br from-[#1C1C20] to-[#121214] border border-[#26354D] rounded-[24px] rounded-bl-[8px] flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.03)_inset]">
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0 }}
            className="w-2 h-2 rounded-full bg-[var(--color-pd-red)]/80"
          />
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="w-2 h-2 rounded-full bg-[var(--color-pd-red)]/80"
          />
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="w-2 h-2 rounded-full bg-[var(--color-pd-red)]/80"
          />
        </div>
      </div>
    </motion.div>
  );
}
