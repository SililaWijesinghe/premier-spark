import { motion } from 'motion/react';

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className="relative inline-flex items-center group select-none">
      <img src="/pd-Logo-02-Png.webp" alt="Premier Digital" className={`relative z-10 block ${className}`} />
      
      {/* True inside surface illumination using CSS mask matching the logo pixels and color-dodge blend mode */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-20 pointer-events-none mix-blend-color-dodge bg-gradient-to-r from-red-500 via-[#E71919] to-yellow-400"
        style={{
          maskImage: 'url(/pd-Logo-02-Png.webp)',
          WebkitMaskImage: 'url(/pd-Logo-02-Png.webp)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  );
}



