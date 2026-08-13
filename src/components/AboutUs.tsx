import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, Lightbulb, Users, Target, Handshake,
  Rocket, TrendingUp, Globe, Search, FileText, 
  PenTool, Code, Shield, Award, Eye, Heart, Zap, Mail, Linkedin, ArrowRight,
  ThumbsUp, LayoutTemplate, BarChart3, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const teamMembers = [
    { name: 'Artha Rupasinghe', role: 'Founder & CEO', initials: 'AR' },
    { name: 'Nethmi Perera', role: 'Head of Strategy', initials: 'NP' },
    { name: 'Hasitha Jayawardena', role: 'Lead Developer', initials: 'HJ' },
    { name: 'Shenali De Silva', role: 'Creative Director', initials: 'SS' },
    { name: 'Kavindu Rathnayake', role: 'Senior Growth Engineer', initials: 'KR' },
  ];

  return (
    <div className="bg-[#060B16] min-h-screen text-[#F8FAFC] pt-24 pb-0 overflow-hidden font-sans relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-tr from-[#E71919]/30 to-[#FF7A00]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-[#18C6D1]/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 relative"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]">
                <Zap className="w-3.5 h-3.5" /> About Premier Digital
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                <span className="block text-[#F8FAFC]">We Don't Do</span>
                <span className="block text-[#F8FAFC]">Marketing.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] to-[#FF7A00] drop-shadow-[0_0_20px_rgba(231,25,25,0.4)]">
                  We Engineer
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FBBF24] to-[#18C6D1] drop-shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                  Digital Growth.
                </span>
              </h1>
              
              <p className="text-[#A5B0C3] text-lg sm:text-xl mb-10 max-w-xl leading-relaxed font-medium">
                We help businesses grow bigger, faster and smarter with data-driven strategies, creative solutions and cutting-edge technology.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact" className="relative group overflow-hidden bg-[#E71919] hover:bg-red-600 text-[#F8FAFC] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(231,25,25,0.4)] hover:shadow-[0_15px_40px_rgba(231,25,25,0.6)]">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Start Your Growth Journey</span> 
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/works" className="bg-transparent border border-[#26354D] hover:border-[#F8FAFC]/60 text-[#F8FAFC] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 group hover:bg-white/5">
                    <span>See Our Work</span> 
                    <ArrowRight className="w-5 h-5 text-[#E71919] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Client 1" className="w-11 h-11 rounded-full object-cover border-2 border-[#E71919]/60 shadow-md" />
                    <img src="https://i.pravatar.cc/100?img=32" alt="Client 2" className="w-11 h-11 rounded-full object-cover border-2 border-[#E71919]/60 shadow-md" />
                    <img src="https://i.pravatar.cc/100?img=52" alt="Client 3" className="w-11 h-11 rounded-full object-cover border-2 border-[#E71919]/60 shadow-md" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                      <span className="text-[#F8FAFC] font-extrabold text-base">5.0</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                    </div>
                    <p className="text-xs text-[#A5B0C3] font-medium leading-tight">Trusted by 200+<br/>businesses worldwide</p>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-[#26354D] hidden sm:block"></div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#F8FAFC] font-extrabold text-base">5.0</span>
                      <span className="text-[#F8FAFC] font-extrabold tracking-wide">Clutch</span>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[480px] sm:h-[600px] lg:h-[700px] flex items-center justify-center w-full"
          >
            <div className="relative w-full h-full max-w-[700px] flex items-center justify-center">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                {/* Seamless Image Blending Container */}
                {/* We use thick, deep linear gradients pulling the page's exact background color (#060B16) 
                    over the edges of the image to create a seamless, borderless vignette. */}
                <div className="relative flex items-center justify-center w-full h-[600px] lg:h-[800px] z-10 shrink-0">
                  <img 
                    src="/aboutUSHeroBgImg.webp" 
                    alt="Growth Ecosystem" 
                    className="w-full h-full object-contain scale-[1.35] relative z-10"
                  />
                  {/* Aggressive edge blending gradients matching the page background (#060B16) */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-[#060B16] via-[#060B16]/95 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-[#060B16] via-[#060B16]/95 to-transparent" />
                    <div className="absolute left-0 inset-y-0 w-[40%] bg-gradient-to-r from-[#060B16] via-[#060B16]/95 to-transparent" />
                    <div className="absolute right-0 inset-y-0 w-[40%] bg-gradient-to-l from-[#060B16] via-[#060B16]/95 to-transparent" />
                    {/* Extra inset shadow for a perfectly soft corner bleed */}
                    <div className="absolute inset-0 shadow-[inset_0_0_150px_100px_#060B16] mix-blend-normal" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none">
                {[
                  { icon: Target, title: 'SEO', desc: 'Rank Higher', mobilePos: { top: '15%', left: '10%' }, delay: 0.4 },
                  { icon: ThumbsUp, title: 'Social Media', desc: 'Build Influence', mobilePos: { top: '35%', left: '0%' }, delay: 0.5 },
                  { icon: Code, title: 'Web Dev', desc: 'Convert Better', mobilePos: { top: '55%', left: '0%' }, delay: 0.6 },
                  { icon: Rocket, title: 'Growth', desc: 'Scale Bigger', mobilePos: { top: '75%', left: '10%' }, delay: 0.7 },
                  
                  { icon: LayoutTemplate, title: 'Web Design', desc: 'Convert Better', mobilePos: { top: '20%', right: '10%' }, delay: 0.5 },
                  { icon: Star, title: 'Branding', desc: 'Stand Out', mobilePos: { top: '40%', right: '0%' }, delay: 0.6 },
                  { icon: BarChart3, title: 'Analytics', desc: 'Data Driven', mobilePos: { top: '60%', right: '0%' }, delay: 0.7 },
                  { icon: TrendingUp, title: 'Paid Ads', desc: 'Drive Results', mobilePos: { top: '80%', right: '10%' }, delay: 0.8 },
                ].map((tab, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: tab.delay, duration: 0.6, type: 'spring', bounce: 0.4 }}
                    className="absolute pointer-events-auto bg-[#0A0F1A]/80 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-xl sm:rounded-2xl py-1.5 px-2 sm:py-3 sm:px-4 flex items-center gap-2 sm:gap-3 transition-all cursor-pointer group hover:-translate-y-1 scale-75 sm:scale-100 origin-center"
                    style={{ ...tab.mobilePos }}
                  >
                    <div className="bg-[#141A25] border border-[#E71919]/30 text-[#E71919] p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:border-[#E71919]/60 transition-all shadow-[0_0_10px_rgba(231,25,25,0.1)]">
                      <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="whitespace-nowrap pr-1 sm:pr-2">
                      <div className="text-[11px] sm:text-sm font-bold text-[#F8FAFC] leading-tight mb-0.5">{tab.title}</div>
                      <div className="text-[8px] sm:text-[10px] text-[#8F9BB3] font-medium">{tab.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Journey */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#141F33]/90 backdrop-blur-xl border border-[#26354D] rounded-[32px] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col gap-8 shadow-[0_20px_50px_rgba(6,11,22,0.8)] group">
          
          {/* Background World Map - Hidden on mobile */}
          <div 
            className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none transition-opacity duration-1000 group-hover:opacity-[0.12] hidden md:block"
            style={{ 
              backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'invert(1)' 
            }}
          />

          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start xl:items-center justify-between relative z-10">
            {/* Left Text Content */}
            <div className="xl:w-1/3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
                OUR JOURNEY
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-[1.1] text-[#F8FAFC] tracking-tight">
                From a Small Team<br className="hidden sm:inline" />to a Growth Partner<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">Businesses Trust</span>
              </h2>
              <p className="text-[#A5B0C3] text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                Our journey has been all about one thing – delivering real results and building lasting partnerships.
              </p>
            </div>

            {/* Right Graph Content - No scrollbar, fully fluid */}
            <div className="xl:w-2/3 w-full py-2 overflow-visible">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-visible">
              
              {/* SVG Line */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 1000 350" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E71919" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#E71919" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FF7A00" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Base line */}
                <path 
                  d="M 100 280 L 300 240 L 500 190 L 700 130 L 900 70" 
                  fill="none" stroke="#E71919" strokeWidth="1.5" strokeOpacity="0.25" 
                />
                
                {/* Animated glowing line */}
                <motion.path 
                  d="M 100 280 L 300 240 L 500 190 L 700 130 L 900 70" 
                  fill="none" 
                  stroke="url(#journeyGrad)" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 0 12px rgba(231,25,25,0.9))' }}
                />
              </svg>

              {/* Points & Text */}
              {[
                { year: '2019', title: 'Founded', desc: 'with vision', x: '10%', y: '80%' },
                { year: '2020', title: 'First 100+', desc: 'happy clients', x: '30%', y: '68%' },
                { year: '2021', title: 'Expanded', desc: 'offerings', x: '50%', y: '54%' },
                { year: '2025', title: 'Delivered', desc: 'AI solutions', x: '70%', y: '37%' },
                { year: '2026', title: 'Enterprise', desc: 'Growth Partner', x: '90%', y: '20%' },
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  className="absolute flex flex-col items-center text-center -translate-x-1/2"
                  style={{ left: point.x, top: point.y }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.5 }}
                >
                  {/* Glowing Dot & Stem */}
                  <div className="flex flex-col items-center">
                    <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full bg-[#E71919] border-2 border-[#141F33] shadow-[0_0_15px_rgba(231,25,25,0.9)] relative">
                      <div className="absolute inset-0 bg-[#E71919] blur-[6px] rounded-full animate-pulse opacity-90" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="mt-2 sm:mt-3">
                    <div className="text-[#E71919] font-extrabold text-xs sm:text-sm md:text-base mb-0.5">{point.year}</div>
                    <div className="font-bold text-[#F8FAFC] text-[10px] sm:text-[11px] md:text-[13px] mb-0.5 whitespace-nowrap">{point.title}</div>
                    <div className="text-[9px] sm:text-[10px] text-[#A5B0C3] whitespace-nowrap font-medium">{point.desc}</div>
                  </div>
                </motion.div>
              ))}

              {/* Rocket */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -60, y: 60 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: [0, -8, 0]
                }}
                viewport={{ once: true }}
                transition={{ 
                  opacity: { delay: 2, duration: 0.5 },
                  scale: { delay: 2, duration: 0.5 },
                  x: { delay: 2, duration: 0.8, type: "spring", bounce: 0.4 },
                  y: { delay: 2, duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute z-20 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: '95%', top: '10%' }}
              >
                <img 
                  src="/singleRocket.png" 
                  alt="Premier Digital Rocket" 
                  className="w-full h-full object-contain rotate-[55deg] drop-shadow-[0_15px_25px_rgba(231,25,25,0.4)]"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-[#E71919] to-[#FF7A00] rounded-full blur-[18px] opacity-80 animate-pulse mix-blend-screen" />
              </motion.div>

            </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center pt-2 sm:pt-4 border-t border-[#26354D]">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="bg-[#0E1728] backdrop-blur-xl border border-[#26354D] hover:border-[#E71919] text-[#F8FAFC] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(6,11,22,0.6)] group">
                <span>See Our Full Journey</span> 
                <ArrowRight className="w-4 h-4 text-[#E71919] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. What Makes Us Different */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E71919]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF7A00]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Side: Title & Flowchart */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
                <Zap className="w-3.5 h-3.5" /> What Makes Us Different
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 leading-[1.1] tracking-tight text-[#F8FAFC]">
                A Complete Growth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400 drop-shadow-sm">Ecosystem</span> Under <br />
                One Roof
              </h2>
            </motion.div>
            
            {/* Interactive Flowchart Diagram */}
            <div className="w-full flex justify-center lg:justify-start overflow-hidden py-4">
              <div className="relative w-[600px] min-w-[600px] h-[520px] scale-[0.55] sm:scale-[0.75] lg:scale-100 origin-top lg:origin-left mb-[-234px] sm:mb-[-130px] lg:mb-0">
               
               {/* Connections SVG */}
               <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'drop-shadow(0 0 4px rgba(231,25,25,0.4))' }}>
                 <defs>
                   <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#E71919" stopOpacity="0" />
                     <stop offset="50%" stopColor="#E71919" stopOpacity="1" />
                     <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 
                 {/* Pill to Logo Paths */}
                 {[40, 100, 160, 220, 280, 340, 400, 460].map((y, i) => {
                   const d = `M 150 ${y} C 210 ${y}, 210 250, 260 250`;
                   return (
                     <g key={i}>
                       <path d={d} fill="none" stroke="#E71919" strokeWidth="1" strokeOpacity="0.2" />
                       <motion.path 
                         d={d} 
                         fill="none" 
                         stroke="url(#flowGrad)" 
                         strokeWidth="2.5"
                         strokeDasharray="60 140"
                         animate={{ strokeDashoffset: [200, 0] }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
                         style={{ filter: 'drop-shadow(0 0 6px rgba(231,25,25,0.8))' }}
                       />
                     </g>
                   );
                 })}
                 
                 {/* Logo to Success Card Paths */}
                 <g>
                   <path d="M 360 250 L 440 250" fill="none" stroke="#E71919" strokeWidth="2" strokeOpacity="0.2" />
                   <path d="M 360 230 C 400 230, 400 210, 440 210" fill="none" stroke="#E71919" strokeWidth="1" strokeOpacity="0.15" />
                   <path d="M 360 270 C 400 270, 400 290, 440 290" fill="none" stroke="#E71919" strokeWidth="1" strokeOpacity="0.15" />
                   <motion.path 
                     d="M 360 250 L 440 250" 
                     fill="none" 
                     stroke="url(#flowGrad)" 
                     strokeWidth="4"
                     strokeDasharray="50 70"
                     animate={{ strokeDashoffset: [120, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     style={{ filter: 'drop-shadow(0 0 8px rgba(231,25,25,1))' }}
                   />
                 </g>
               </svg>

               {/* Service Pills (Left) */}
               <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-[20px] z-10 w-[150px]">
                 {[
                   { icon: Search, name: 'SEO' },
                   { icon: ThumbsUp, name: 'Social Media' },
                   { icon: Star, name: 'Branding' },
                   { icon: LayoutTemplate, name: 'Web Design' },
                   { icon: FileText, name: 'Content' },
                   { icon: Zap, name: 'Automation' },
                   { icon: TrendingUp, name: 'Paid Ads' },
                   { icon: BarChart3, name: 'Analytics' },
                 ].map((service, i) => (
                   <motion.div 
                     key={i} 
                     whileHover={{ scale: 1.05, borderColor: "rgba(231,25,25,0.6)" }}
                     className="flex items-center gap-3 bg-[#141F33]/90 backdrop-blur-md border border-[#26354D] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] relative h-10 shadow-lg cursor-pointer transition-all duration-300 group hover:shadow-[0_0_15px_rgba(231,25,25,0.3)]"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-[#E71919]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                     <service.icon className="w-3.5 h-3.5 text-[#A5B0C3] group-hover:text-[#E71919] transition-colors relative z-10" />
                     <span className="relative z-10">{service.name}</span>
                   </motion.div>
                 ))}
               </div>
               
               {/* Center Logo Node */}
               <div className="absolute left-[310px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] z-20">
                 {/* Glowing rings */}
                 <motion.div 
                   animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }} 
                   transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 rounded-full border-2 border-[#E71919] shadow-[0_0_30px_rgba(231,25,25,0.8)] pointer-events-none"
                 />
                 <motion.div 
                   animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.2, 0.7] }} 
                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 rounded-full border border-[#FF7A00] shadow-[0_0_50px_rgba(255,122,0,0.5)] pointer-events-none"
                 />
                 {/* Main bubble */}
                 <div className="absolute inset-1.5 rounded-full bg-[#141F33] backdrop-blur-xl border-2 border-[#E71919] flex items-center justify-center shadow-[inset_0_0_20px_rgba(231,25,25,0.8)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
                    <img src="/cropped-pd-Logo-Png.webp" alt="Premier Digital Logo" className="w-12 h-12 object-contain relative z-10 left-0.5 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                 </div>
               </div>

               {/* Business Success Card (Right) */}
               <motion.div 
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="absolute left-[440px] top-1/2 -translate-y-1/2 bg-[#141F33]/90 backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 rounded-2xl p-5 z-10 w-40 h-48 flex flex-col justify-center text-center shadow-[0_20px_40px_rgba(6,11,22,0.8)] transition-all duration-300 cursor-default group"
               >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#E71919]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-[13px] font-bold text-[#F8FAFC] mb-5 leading-tight tracking-wide group-hover:text-[#FF7A00] transition-colors">BUSINESS<br/>SUCCESS</div>
                    <TrendingUp className="w-10 h-10 text-[#E71919] mx-auto drop-shadow-[0_0_15px_rgba(231,25,25,0.8)] group-hover:scale-110 transition-transform" />
                    {/* Fake animated bar chart */}
                    <div className="flex justify-center items-end gap-2 mt-5 h-8">
                      <motion.div animate={{ height: ['40%', '70%', '40%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm" />
                      <motion.div animate={{ height: ['60%', '90%', '60%'] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 bg-gradient-to-t from-[#E71919] to-orange-400 rounded-t-sm" />
                      <motion.div animate={{ height: ['80%', '100%', '80%'] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 bg-gradient-to-t from-[#FF7A00] to-yellow-200 rounded-t-sm drop-shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
                    </div>
                  </div>
               </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 lg:mt-0 mt-8 relative">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

            {[
              { icon: Lightbulb, title: 'Innovation First', desc: 'We use the latest tools, technologies and AI to craft strategies that keep you ahead of the competition.' },
              { icon: Users, title: 'Human Creativity', desc: 'Technology powers us, creativity defines us. Human ideas that connect and convert.' },
              { icon: Target, title: 'Performance Driven', desc: 'We measure, analyze and optimize everything for maximum ROI.' },
              { icon: Handshake, title: 'Long-Term Partnership', desc: 'We grow when you grow. Your success is our success.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                className="relative bg-[#141F33] backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 hover:bg-[#141F33]/90 rounded-3xl p-6 xl:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(231,25,25,0.3)] group overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E71919]/10 blur-[40px] rounded-full group-hover:bg-[#E71919]/30 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-6 relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0E1728] border border-[#26354D] group-hover:border-[#E71919]/60 transition-colors shadow-lg">
                    <div className="absolute inset-0 bg-[#E71919] blur-[15px] opacity-10 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
                    <feature.icon className="w-6 h-6 text-[#E71919] group-hover:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#F8FAFC] text-lg xl:text-xl mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF7A00] transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#A5B0C3] leading-relaxed font-medium group-hover:text-[#F8FAFC] transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Impact In Numbers */}
      <section className="py-20 md:py-32 relative overflow-hidden z-10">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E71919]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
           >
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
               <Zap className="w-3.5 h-3.5" /> Proven Results
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight">
               Our Impact In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">Numbers</span>
             </h2>
           </motion.div>

           <div className="max-w-md mx-auto lg:max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-5">
             {[
               { icon: Rocket, number: '250+', label: 'Projects Completed' },
               { icon: Users, number: '40+', label: 'Industries Served' },
               { icon: TrendingUp, number: '95%', label: 'Client Retention' },
               { icon: Star, number: '4.9★', label: 'Client Satisfaction' },
               { icon: Globe, number: 'Millions', label: 'Organic Reach Generated' },
             ].map((stat, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.6 }}
                 whileHover={{ scale: 1.02, y: -4 }}
                 className="relative bg-[#141F33] backdrop-blur-2xl border border-[#26354D] hover:border-[#E71919]/60 rounded-3xl p-6 lg:p-8 flex items-center lg:flex-col lg:items-center lg:text-center gap-6 lg:gap-4 group transition-all duration-300 shadow-[0_15px_35px_rgba(6,11,22,0.8)] overflow-hidden"
               >
                 {/* Card Glow Background */}
                 <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-b from-[#E71919]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity rounded-3xl" />
                 
                 {/* Icon Box with Orange Aura */}
                 <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-[#0E1728] border border-[#26354D] flex items-center justify-center group-hover:border-[#E71919]/60 transition-colors shadow-lg">
                   <div className="absolute inset-0 bg-[#E71919] blur-[15px] opacity-25 group-hover:opacity-60 transition-opacity rounded-2xl" />
                   <stat.icon className="w-7 h-7 text-[#E71919] group-hover:scale-110 transition-transform relative z-10" strokeWidth={1.75} />
                 </div>

                 {/* Text Content */}
                 <div className="relative z-10 flex flex-col lg:items-center">
                   <div className="text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF7A00] transition-all">
                     {stat.number}
                   </div>
                   <div className="text-xs lg:text-sm font-medium text-[#A5B0C3] group-hover:text-[#F8FAFC] transition-colors">
                     {stat.label}
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#E71919]/5 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
            <Zap className="w-3.5 h-3.5" /> Step-By-Step Execution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#F8FAFC] tracking-tight">
            Our Proven 6-Step Process to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">Drive Your Growth</span>
          </h2>
          <p className="text-[#A5B0C3] text-base max-w-xl mx-auto font-medium">
            A seamless, transparent roadmap designed to take your brand from vision to market leadership.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { icon: Search, title: 'Discover', desc: 'We understand your business, goals and challenges.' },
            { icon: FileText, title: 'Research', desc: 'In-depth market research and competitor analysis.' },
            { icon: PenTool, title: 'Strategy', desc: 'We craft a data-driven strategy tailored to your business.' },
            { icon: Code, title: 'Build', desc: 'Our experts bring the strategy to life with precision.' },
            { icon: Rocket, title: 'Launch', desc: 'We launch, test and optimize for best performance.' },
            { icon: TrendingUp, title: 'Scale', desc: 'We scale what works and drive sustainable growth.' },
          ].map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative bg-[#141F33] backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 rounded-3xl p-6 flex flex-col items-center text-center group transition-all duration-300 shadow-[0_15px_30px_rgba(6,11,22,0.8)] overflow-hidden"
            >
               {/* Hover Glow */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#E71919]/10 blur-[30px] rounded-full group-hover:bg-[#E71919]/30 transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#E71919]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

               <div className="relative z-10 w-full flex flex-col items-center">
                 <div className="w-16 h-16 rounded-2xl bg-[#0E1728] border border-[#26354D] flex items-center justify-center mb-6 group-hover:border-[#E71919]/60 transition-colors shadow-[0_0_20px_rgba(6,11,22,0.8)] relative">
                   <div className="absolute inset-0 bg-[#E71919] blur-[15px] opacity-15 group-hover:opacity-40 transition-opacity rounded-2xl" />
                   <step.icon className="w-7 h-7 text-[#E71919] group-hover:scale-110 transition-transform relative z-10" />
                 </div>
                 <div className="text-xs font-bold text-[#E71919] tracking-wider mb-2">STEP 0{idx + 1}</div>
                 <h3 className="font-bold text-[#F8FAFC] text-lg mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF7A00] transition-all">{step.title}</h3>
                 <p className="text-xs text-[#A5B0C3] leading-relaxed font-medium group-hover:text-[#F8FAFC] transition-colors">{step.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Values & Team */}
      <section className="py-20 md:py-32 border-t border-[#26354D] bg-[#0E1728]/40 relative overflow-hidden z-10">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#E71919]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Values */}
            <div className="lg:col-span-5">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
                   <Zap className="w-3.5 h-3.5" /> Our Values
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-[#F8FAFC] tracking-tight">
                   Built on Values.<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">Driven by Purpose.</span>
                 </h2>
                 <p className="text-[#A5B0C3] text-sm md:text-base mb-10 md:mb-12 leading-relaxed font-medium">
                   Our core principles guide every strategy we build and every relationship we nurture.
                 </p>
               </motion.div>
                
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 {[
                   { icon: Shield, title: 'Integrity', desc: 'We do what\'s right, always.' },
                   { icon: Award, title: 'Excellence', desc: 'We never stop improving.' },
                   { icon: Eye, title: 'Transparency', desc: 'Clear communication, real results.' },
                   { icon: Heart, title: 'Passion', desc: 'We love what we do and it shows.' },
                   { icon: Users, title: 'Collaboration', desc: 'We work as your growth partner.' },
                   { icon: Zap, title: 'Impact', desc: 'We create results that matter.' },
                 ].map((val, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1, duration: 0.5 }}
                     whileHover={{ y: -4, scale: 1.02 }}
                     className="relative bg-[#141F33] backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 rounded-2xl p-5 group transition-all duration-300 shadow-[0_10px_25px_rgba(6,11,22,0.6)] overflow-hidden"
                   >
                     {/* Hover glow */}
                     <div className="absolute inset-0 bg-gradient-to-br from-[#E71919]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                     
                     <div className="relative z-10">
                       <div className="w-10 h-10 rounded-xl bg-[#0E1728] border border-[#26354D] flex items-center justify-center mb-3 group-hover:border-[#E71919]/60 transition-colors shadow-lg relative">
                         <div className="absolute inset-0 bg-[#E71919] blur-[10px] opacity-15 group-hover:opacity-40 transition-opacity rounded-xl" />
                         <val.icon className="w-5 h-5 text-[#E71919] group-hover:scale-110 transition-transform relative z-10" />
                       </div>
                       <h3 className="font-bold text-[#F8FAFC] text-base mb-1 group-hover:text-[#FF7A00] transition-colors">{val.title}</h3>
                       <p className="text-xs text-[#A5B0C3] font-medium leading-relaxed">{val.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>

            {/* Right: Team Slider */}
            <div className="lg:col-span-7 flex flex-col items-center">
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-center mb-10 md:mb-16"
               >
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(231,25,25,0.15)]">
                   <Users className="w-3.5 h-3.5" /> MEET THE MINDS BEHIND OUR SUCCESS
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#F8FAFC] tracking-tight">
                   A Team of Experts <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">Passionate About Growth</span>
                 </h2>
               </motion.div>
                
               {/* Team Carousel Slider with Peeking Cards */}
               <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden py-6 px-4">
                 
                 {/* Carousel Deck Container */}
                 <div className="relative flex items-center justify-center gap-4 sm:gap-6 min-h-[460px]">
                   
                   {/* Left Peeking Card */}
                   {(() => {
                     const prevIndex = activeTeamIndex === 0 ? teamMembers.length - 1 : activeTeamIndex - 1;
                     const prevMember = teamMembers[prevIndex];
                     return (
                       <div 
                         onClick={() => setActiveTeamIndex(prevIndex)}
                         className="hidden sm:flex flex-col w-[260px] md:w-[280px] bg-[#141F33]/60 backdrop-blur-xl border border-[#26354D] rounded-3xl overflow-hidden opacity-50 scale-90 hover:opacity-75 hover:scale-95 transition-all duration-300 cursor-pointer shadow-lg select-none group"
                       >
                         <div className="aspect-[4/4] bg-[#0E1728] relative overflow-hidden flex items-center justify-center">
                           <div className="w-24 h-24 rounded-full bg-[#141F33] border border-[#26354D] flex items-center justify-center text-[#A5B0C3] font-bold text-xl">
                             {prevMember.initials}
                           </div>
                         </div>
                         <div className="p-5 text-center">
                           <h4 className="font-bold text-[#F8FAFC] text-base truncate">{prevMember.name}</h4>
                           <p className="text-xs text-[#A5B0C3] truncate">{prevMember.role}</p>
                         </div>
                       </div>
                     );
                   })()}

                   {/* Active Center Card */}
                   <div className="w-full max-w-sm sm:max-w-md relative z-20">
                     <AnimatePresence mode="wait">
                       <motion.div 
                         key={activeTeamIndex}
                         initial={{ opacity: 0, x: 50, scale: 0.95, filter: 'blur(8px)' }}
                         animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                         exit={{ opacity: 0, x: -50, scale: 0.95, filter: 'blur(8px)' }}
                         transition={{ duration: 0.4, ease: "easeInOut" }}
                         className="w-full bg-[#141F33] backdrop-blur-2xl border-2 border-[#E71919]/70 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(231,25,25,0.3)] relative group"
                       >
                         {/* Ambient card glow */}
                         <div className="absolute inset-0 bg-gradient-to-b from-[#E71919]/15 via-transparent to-[#060B16] pointer-events-none" />

                         {/* Photo / Avatar Section */}
                         <div className="aspect-[4/4] bg-[#0E1728] relative overflow-hidden flex items-center justify-center">
                           <div className="absolute inset-0 bg-gradient-to-t from-[#141F33] via-[#141F33]/30 to-transparent z-10" />
                           
                           {/* Realistic portrait placeholder / initials */}
                           <div className="w-32 h-32 rounded-full bg-[#0E1728] border-2 border-[#E71919]/60 flex items-center justify-center text-[#F8FAFC] font-extrabold text-3xl z-10 shadow-[0_0_30px_rgba(231,25,25,0.5)]">
                             {teamMembers[activeTeamIndex].initials}
                           </div>

                           {/* Background watermark */}
                           <div className="absolute bottom-4 right-4 z-20 text-[#E71919]/40 font-bold tracking-widest text-xs uppercase">premier digital</div>
                         </div>

                         {/* Details Section */}
                         <div className="p-6 text-center relative z-20 bg-gradient-to-t from-[#141F33] to-transparent">
                           <h3 className="font-extrabold text-xl text-[#F8FAFC] mb-1.5 tracking-wide">
                             {teamMembers[activeTeamIndex].name}
                           </h3>
                           <p className="text-xs font-bold text-[#E71919] mb-5 tracking-wider uppercase">
                             {teamMembers[activeTeamIndex].role}
                           </p>

                           {/* Social Links */}
                           <div className="flex justify-center gap-4">
                             <a href="#" className="w-10 h-10 rounded-full bg-[#0E1728] border border-[#E71919]/40 flex items-center justify-center text-[#E71919] hover:bg-[#E71919] hover:text-[#F8FAFC] transition-all shadow-[0_0_15px_rgba(231,25,25,0.2)]">
                               <Linkedin className="w-4 h-4" />
                             </a>
                             <a href="#" className="w-10 h-10 rounded-full bg-[#0E1728] border border-[#E71919]/40 flex items-center justify-center text-[#E71919] hover:bg-[#E71919] hover:text-[#F8FAFC] transition-all shadow-[0_0_15px_rgba(231,25,25,0.2)]">
                               <Mail className="w-4 h-4" />
                             </a>
                           </div>
                         </div>
                       </motion.div>
                     </AnimatePresence>

                     {/* Navigation Arrows */}
                     <button 
                       onClick={() => setActiveTeamIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))}
                       className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#141F33] border-2 border-[#E71919]/50 text-[#F8FAFC] flex items-center justify-center hover:bg-[#E71919] hover:border-[#E71919] transition-all z-30 shadow-[0_0_20px_rgba(231,25,25,0.4)] group"
                       aria-label="Previous member"
                     >
                       <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                     </button>
                     <button 
                       onClick={() => setActiveTeamIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))}
                       className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#141F33] border-2 border-[#E71919]/50 text-[#F8FAFC] flex items-center justify-center hover:bg-[#E71919] hover:border-[#E71919] transition-all z-30 shadow-[0_0_20px_rgba(231,25,25,0.4)] group"
                       aria-label="Next member"
                     >
                       <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                     </button>
                   </div>

                   {/* Right Peeking Card */}
                   {(() => {
                     const nextIndex = activeTeamIndex === teamMembers.length - 1 ? 0 : activeTeamIndex + 1;
                     const nextMember = teamMembers[nextIndex];
                     return (
                       <div 
                         onClick={() => setActiveTeamIndex(nextIndex)}
                         className="hidden sm:flex flex-col w-[260px] md:w-[280px] bg-[#141F33]/60 backdrop-blur-xl border border-[#26354D] rounded-3xl overflow-hidden opacity-50 scale-90 hover:opacity-75 hover:scale-95 transition-all duration-300 cursor-pointer shadow-lg select-none group"
                       >
                         <div className="aspect-[4/4] bg-[#0E1728] relative overflow-hidden flex items-center justify-center">
                           <div className="w-24 h-24 rounded-full bg-[#141F33] border border-[#26354D] flex items-center justify-center text-[#A5B0C3] font-bold text-xl">
                             {nextMember.initials}
                           </div>
                         </div>
                         <div className="p-5 text-center">
                           <h4 className="font-bold text-[#F8FAFC] text-base truncate">{nextMember.name}</h4>
                           <p className="text-xs text-[#A5B0C3] truncate">{nextMember.role}</p>
                         </div>
                       </div>
                     );
                   })()}

                 </div>

                 {/* Pagination Dots */}
                 <div className="flex justify-center items-center gap-2 mt-6">
                   {teamMembers.map((_, idx) => (
                     <button
                       key={idx}
                       onClick={() => setActiveTeamIndex(idx)}
                       className={`h-2 rounded-full transition-all duration-300 ${activeTeamIndex === idx ? 'w-8 bg-[#E71919] shadow-[0_0_10px_rgba(231,25,25,0.8)]' : 'w-2 bg-[#26354D] hover:bg-[#A5B0C3]/50'}`}
                       aria-label={`Go to slide ${idx + 1}`}
                     />
                   ))}
                 </div>
               </div>
                
               <div className="flex justify-center">
                  <Link to="/contact" className="border border-[#26354D] bg-[#141F33]/50 hover:bg-[#141F33] hover:border-[#E71919]/60 text-[#F8FAFC] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_10px_20px_rgba(6,11,22,0.6)] group">
                    <span>Meet the Full Team</span> 
                    <ArrowRight className="w-4 h-4 text-[#E71919] group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="pt-10 md:pt-16 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#141F33] via-[#0E1728] to-[#141F33] border border-[#26354D] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-[0_20px_50px_rgba(6,11,22,0.8)]">
          {/* Background Image / Rocket Art & Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#060B16] via-[#060B16]/80 to-transparent z-10" />
             <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
               <img src="/aboutCtaBgArt.webp" alt="CTA Background" className="w-full h-full object-cover opacity-90 mix-blend-screen scale-110 object-right" />
             </div>
             <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#E71919]/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-20 max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(231,25,25,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Let's Grow Together
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-[1.1] text-[#F8FAFC]">
              Ready to Take Your Business<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-yellow-400">to the Next Level?</span>
            </h2>
            <p className="text-[#A5B0C3] text-base sm:text-lg mb-8 font-medium">
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="relative group overflow-hidden bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#E71919] text-[#F8FAFC] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(231,25,25,0.4)]">
                  <span>Start a Project</span> 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="bg-[#0E1728]/80 backdrop-blur-xl border border-[#26354D] hover:border-[#E71919]/60 text-[#F8FAFC] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(6,11,22,0.5)] group hover:bg-[#141F33]">
                  <span>Book a Strategy Call</span> 
                  <ArrowRight className="w-5 h-5 text-[#E71919] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

