import { motion } from 'motion/react';
import { MapPin, ArrowUp, Zap } from 'lucide-react';

export default function ResultsSection() {
  const linePath1 = "M 0,35 L 15,25 L 30,30 L 45,15 L 60,20 L 75,5 L 90,15 L 100,5";
  const linePath2 = "M 0,30 L 15,30 L 30,20 L 45,25 L 60,10 L 75,10 L 90,20 L 100,0";
  const fillPath1 = "M 0,35 L 15,25 L 30,30 L 45,15 L 60,20 L 75,5 L 90,15 L 100,5 L 100,40 L 0,40 Z";
  const fillPath2 = "M 0,30 L 15,30 L 30,20 L 45,25 L 60,10 L 75,10 L 90,20 L 100,0 L 100,40 L 0,40 Z";

  return (
    <section className="py-20 md:py-32 relative bg-[#060B16] overflow-hidden border-t border-[#26354D]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E71919]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Cards */}
          <div className="relative min-h-[680px] lg:min-h-[720px] w-full hidden md:block">
            {/* Card 1: Top Locations */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-10 left-0 w-[280px] xl:w-80 bg-[#141F33]/95 hover:bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/50 rounded-[32px] p-5 xl:p-7 shadow-[0_20px_50px_rgba(6,11,22,0.8)] z-10 backdrop-blur-xl transition-all cursor-default"
            >
              <div className="flex gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#26354D]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#26354D]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#26354D]" />
              </div>
              <h3 className="text-[#F8FAFC] text-xs font-bold uppercase tracking-wider mb-6">Top Locations</h3>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0E1728]/80 rounded-2xl p-5 border border-[#26354D] group relative overflow-hidden transition-all"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#E71919]/0 via-[#E71919]/10 to-[#E71919]/0 -translate-x-full"
                    animate={{ translateX: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                  <div className="flex items-center gap-2 text-[#E71919] mb-4 relative z-10">
                    <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="text-xs font-bold text-[#F8FAFC]">Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1 font-medium">Market share</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">13.72%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1 font-medium">Keywords</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">135</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0E1728]/80 rounded-2xl p-5 border border-[#26354D] group relative overflow-hidden transition-all"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#E71919]/0 via-[#E71919]/10 to-[#E71919]/0 -translate-x-full"
                    animate={{ translateX: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
                  />
                  <div className="flex items-center gap-2 text-[#E71919] mb-4 relative z-10">
                    <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="text-xs font-bold text-[#F8FAFC]">Jurong Town, Singapore</span>
                  </div>
                  <div className="flex justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1 font-medium">Market share</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">20.02%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1 font-medium">Keywords</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">121</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: Total Sales */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, 10, 0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute top-4 left-[35%] xl:left-[300px] w-[300px] xl:w-[340px] bg-[#141F33]/95 hover:bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/50 rounded-[32px] p-5 xl:p-7 shadow-[0_20px_50px_rgba(6,11,22,0.8)] z-20 backdrop-blur-xl transition-all cursor-default group"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-xs text-[#A5B0C3] font-bold uppercase tracking-wider">Total product sales</p>
                <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded text-[10px] font-bold border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <ArrowUp className="w-3 h-3" />
                  15.06%
                </div>
              </div>
              <motion.h3 
                className="text-3xl font-extrabold text-[#F8FAFC] mb-6 tracking-tight flex items-baseline gap-1"
              >
                $80,969
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 1, repeat: Infinity }} 
                  className="w-2 h-6 bg-[#E71919] inline-block rounded-sm relative top-1"
                />
              </motion.h3>
              
              {/* SVG Morphing Line Chart */}
              <div className="h-24 w-full relative">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(231, 25, 25, 0.4)" />
                      <stop offset="100%" stopColor="rgba(231, 25, 25, 0)" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    animate={{ d: [fillPath1, fillPath2, fillPath1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    fill="url(#lineGrad)" 
                  />
                  <motion.path 
                    animate={{ d: [linePath1, linePath2, linePath1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    fill="none" 
                    stroke="#E71919" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="drop-shadow-[0_0_8px_rgba(231,25,25,0.8)]" 
                  />
                  
                  {/* Moving glowing dot on line */}
                  <motion.circle 
                    r="2.5" 
                    fill="#fff" 
                    className="drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
                    animate={{ 
                      cx: [0, 15, 30, 45, 60, 75, 90, 100, 90, 75, 60, 45, 30, 15, 0],
                      cy: [35, 25, 30, 15, 20, 5, 15, 5, 15, 5, 20, 15, 30, 25, 35] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[10px] text-[#A5B0C3] mt-3 px-1 font-semibold">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </motion.div>

            {/* Card 3: Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -8, 0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute top-[220px] left-[25%] xl:left-[260px] w-[320px] xl:w-[360px] bg-[#141F33]/95 hover:bg-[#141F33] border border-[#26354D] hover:border-[#E71919]/50 rounded-[32px] p-5 xl:p-7 shadow-[0_20px_50px_rgba(6,11,22,0.8)] z-30 backdrop-blur-xl transition-all cursor-default"
            >
              <div className="flex gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E71919]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <h3 className="text-[#F8FAFC] text-xs font-bold uppercase tracking-wider mb-6">Overview of "Adjustable standing desk"</h3>
              
              <div className="flex justify-between mb-8">
                <div>
                  <p className="text-[10px] text-[#A5B0C3] mb-1 font-semibold">Search Volume</p>
                  <p className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight">70.8K</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#A5B0C3] mb-1 font-semibold">Mentions</p>
                  <p className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight">21K</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-[#A5B0C3] mb-4 font-semibold flex justify-between">
                  Modelled traffic per month
                  <span className="flex items-center gap-1 text-green-400 font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live
                  </span>
                </p>
                <div className="bg-[#0E1728]/80 rounded-2xl p-5 border border-[#26354D] h-40 flex items-end justify-between gap-4">
                  {/* Bar 1 */}
                  <motion.div 
                    animate={{ height: ['40%', '70%', '40%'] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                    className="w-full bg-[#26354D] rounded-t-md hover:bg-[#A5B0C3]/50 transition-colors cursor-pointer" 
                  />
                  {/* Bar 2 */}
                  <motion.div 
                    animate={{ height: ['25%', '50%', '25%'] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full bg-[#26354D] rounded-t-md relative overflow-hidden group hover:bg-[#A5B0C3]/50 transition-colors cursor-pointer"
                  >
                     <div className="absolute top-0 left-0 w-full h-[25%] bg-[#E71919]" />
                  </motion.div>
                  {/* Bar 3 (Featured/Red) */}
                  <motion.div 
                    animate={{ height: ['70%', '95%', '70%'] }} 
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-full bg-gradient-to-t from-[#E71919] to-[#FF7A00] rounded-t-md relative shadow-[0_0_15px_rgba(231,25,25,0.6)] hover:brightness-110 transition-all cursor-pointer" 
                  />
                  {/* Bar 4 */}
                  <motion.div 
                    animate={{ height: ['85%', '60%', '85%'] }} 
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-full bg-[#26354D] rounded-t-md hover:bg-[#A5B0C3]/50 transition-colors cursor-pointer" 
                  />
                  {/* Bar 5 */}
                  <motion.div 
                    animate={{ height: ['60%', '85%', '60%'] }} 
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="w-full bg-[#26354D] rounded-t-md hover:bg-[#A5B0C3]/50 transition-colors cursor-pointer" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Mobile representation of cards */}
          <div className="md:hidden space-y-6 relative z-20 w-full mt-6">
             <div className="bg-[#141F33]/95 backdrop-blur-xl border border-[#26354D] rounded-[32px] p-6 shadow-2xl">
               <h3 className="text-[#F8FAFC] text-xs font-bold mb-6">Top Locations</h3>
               <div className="bg-[#0E1728] rounded-2xl p-5 border border-[#26354D] relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#E71919]/0 via-[#E71919]/10 to-[#E71919]/0 -translate-x-full"
                    animate={{ translateX: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                  <div className="flex items-center gap-2 text-[#E71919] mb-5 relative z-10">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#F8FAFC]">Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1">Market share</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC]">13.72%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A5B0C3] mb-1">Keywords</p>
                      <p className="text-xl font-extrabold text-[#F8FAFC]">135</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Side: Text */}
          <div className="lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]"
            >
              <Zap className="w-3.5 h-3.5" /> Proven Market Leadership
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] mb-8 leading-[1.1] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">Results-driven</span> Digital<br />
              Marketing Agency<br />
              at Colombo
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#A5B0C3] text-lg leading-relaxed font-medium"
            >
              Back in 2020, we started off with two people with a passion for branding, marketing and sales. Today we're a team of marketing strategists, designers, developers, SEO and paid ads specialists based in Colombo, serving businesses across Nugegoda, the Western Province and Sri Lanka.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

