import { useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';

export default function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] z-50 origin-left shadow-[0_0_12px_rgba(231,25,25,0.8)]"
    />
  );
}
