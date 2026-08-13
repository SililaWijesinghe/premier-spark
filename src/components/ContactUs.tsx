import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Rocket,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Mic, Zap, Map as MapIcon
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function ContactUs() {
  const [activeScreen, setActiveScreen] = useState<'chat' | 'dialer' | 'whatsapp' | 'map'>('chat');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: "Hi there! 👋 How can we help you grow your brand today?", sender: 'bot', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const whatsappMessageRef = useRef(whatsappMessage);

  useEffect(() => {
    whatsappMessageRef.current = whatsappMessage;
  }, [whatsappMessage]);

  useEffect(() => {
    if (activeScreen === 'whatsapp') {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isKeyboardVisible, activeScreen]);

  const handleSendMessage = () => {
    const currentMsg = whatsappMessageRef.current;
    if (currentMsg.trim()) {
      const newMsg = currentMsg.trim();
      setChatHistory(prev => [...prev, { text: newMsg, sender: 'user', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
      setWhatsappMessage('');
      
      setTimeout(() => {
         window.open(`https://wa.me/94761668155?text=${encodeURIComponent(newMsg)}`, '_blank');
      }, 800);
    }
  };

  useEffect(() => {
    if (activeScreen === 'whatsapp') {
      const handleKeyDown = (e: KeyboardEvent) => {
        setIsKeyboardVisible(true);
        if (e.key === 'Backspace') {
          setWhatsappMessage(prev => prev.slice(0, -1));
        } else if (e.key === 'Enter') {
          handleSendMessage();
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          setWhatsappMessage(prev => prev + e.key);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeScreen]);

  const x = useMotionValue(-0.15);
  const y = useMotionValue(-0.05);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(-0.15);
    y.set(-0.05);
  };

  return (
    <div className="bg-[#060B16] min-h-screen text-[#F8FAFC] pt-24 pb-12 overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text & Actions) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(231,25,25,0.2)]">
                  <Zap className="w-3.5 h-3.5" /> Contact Us
                </div>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 text-xs font-medium tracking-wide">Live: Available for Consultations</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let's Build <br />
                Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">Extraordinary.</span>
              </h1>
              <p className="text-lg text-[#A5B0C3] max-w-md leading-relaxed">
                We're here to help you grow your brand, increase revenue, and dominate your market with digital strategies that actually work.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 max-w-md">
              <a href="mailto:sales@premierdigital.lk" className="group flex items-center justify-between bg-[#141F33] hover:bg-[#1A2639] border border-[#26354D] hover:border-[#E71919]/40 shadow-lg rounded-2xl p-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E71919] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    <Mail className="w-5 h-5 text-[#F8FAFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC]">Send an Email</h3>
                    <p className="text-sm text-[#A5B0C3]">sales@premierdigital.lk</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#26354D] flex items-center justify-center group-hover:border-red-500 group-hover:text-[#E71919] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <a href="https://wa.me/94761668155" target="_blank" rel="noreferrer" className="group flex items-center justify-between bg-[#141F33] hover:bg-[#1A2639] border border-[#26354D] hover:border-[#E71919]/40 shadow-lg rounded-2xl p-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                    <WhatsAppIcon className="w-5 h-5 text-[#F8FAFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC]">Chat on WhatsApp</h3>
                    <p className="text-sm text-[#A5B0C3]">We're online now</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#26354D] flex items-center justify-center group-hover:border-[#25D366] group-hover:text-[#25D366] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <a href="tel:+94761668155" className="group flex items-center justify-between bg-[#141F33] hover:bg-[#1A2639] border border-[#26354D] hover:border-[#E71919]/40 shadow-lg rounded-2xl p-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,122,0,0.4)]">
                    <Phone className="w-5 h-5 text-[#F8FAFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC]">Schedule a Call</h3>
                    <p className="text-sm text-[#A5B0C3]">Book a free strategy call</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#26354D] flex items-center justify-center group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
              
              <div className="group flex items-center justify-between bg-[#141F33] hover:bg-[#1A2639] border border-[#26354D] hover:border-[#E71919]/40 shadow-lg rounded-2xl p-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A2639] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F8FAFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC]">Visit Us</h3>
                    <a href="https://maps.app.goo.gl/WFhqcrRGVM4Q4EPd9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A5B0C3] leading-snug hover:text-[#F8FAFC] transition-colors">No.165A 2/4, Sausiri Building,<br />High Level Road, Nugegoda</a>
                  </div>
                </div>
              </div>

              <Link to="/services" className="group flex items-center justify-between bg-[#141F33] hover:bg-[#1A2639] border border-[#26354D] hover:border-[#E71919]/40 shadow-lg rounded-2xl p-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A2639] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-[#F8FAFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC]">Browse our Services</h3>
                    <p className="text-sm text-[#A5B0C3]">Explore what we offer</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#26354D] flex items-center justify-center group-hover:border-white group-hover:text-[#F8FAFC] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#1A2639] overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#1A2639] overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#1A2639] overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=68" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#FF7A00] font-bold">
                5.0 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <div className="text-sm text-[#A5B0C3]">
                <span className="text-[#F8FAFC] font-medium">Trusted by 200+</span><br />
                businesses worldwide
              </div>
            </div>
          </motion.div>

          {/* Right Column (Phone Mockup + Background) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end min-h-[600px] lg:min-h-[800px] items-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center scale-110 lg:scale-125 lg:translate-x-12">
              <img 
                src="/contactBg%20Art.webp" 
                alt="Rocket Launch 3D Elements" 
                className="w-full max-w-[800px] object-contain object-center mix-blend-screen opacity-70 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)]"
              />
              {/* Fade overlays for seamless edge blending */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B16] via-transparent to-[#060B16] opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#060B16] via-transparent to-[#060B16] opacity-80" />
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div 
              className="relative w-[360px] h-[740px] z-10 lg:-mr-8 scale-[0.85] sm:scale-100 origin-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1500 }}
              data-lenis-prevent="true"
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-[#E71919] rounded-[55px] blur-[60px] opacity-20" style={{ transform: "translateZ(-40px)" }} />
                
                {/* Phone Back Depth Layers (Thicker) */}
                <div className="absolute inset-0 bg-[#060B16] rounded-[55px] shadow-2xl" style={{ transform: "translateZ(-40px)" }} />
                <div className="absolute inset-0 bg-[#10192A] rounded-[55px]" style={{ transform: "translateZ(-30px)" }} />
                <div className="absolute inset-0 bg-[#1A2639] rounded-[55px]" style={{ transform: "translateZ(-20px)" }} />
                <div className="absolute inset-0 bg-zinc-700 rounded-[55px]" style={{ transform: "translateZ(-10px)" }} />

                {/* iPhone Frame Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-600 via-zinc-800 to-zinc-900 rounded-[55px] p-[2px]" style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 bg-[#060B16] rounded-[53px] m-[3px]" style={{ transformStyle: "preserve-3d" }} />
                  <div className="absolute top-24 -left-[2px] w-[3px] h-12 bg-zinc-700 rounded-l-md" style={{ transform: "translateZ(-15px)" }} /> {/* Volume Up */}
                  <div className="absolute top-40 -left-[2px] w-[3px] h-12 bg-zinc-700 rounded-l-md" style={{ transform: "translateZ(-15px)" }} /> {/* Volume Down */}
                  <div className="absolute top-32 -right-[2px] w-[3px] h-16 bg-zinc-700 rounded-r-md" style={{ transform: "translateZ(-15px)" }} /> {/* Power Button */}
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-[#060B16] rounded-[50px] overflow-hidden flex flex-col border-[6px] border-black" style={{ transform: "translateZ(1px)" }}>
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#060B16] rounded-full z-50 flex items-center justify-between px-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1A2639]/80 shadow-inner" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a2a] relative overflow-hidden">
                        <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
                      </div>
                    </div>

                    {/* App Header */}
                    {activeScreen === 'chat' ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col h-full"
                      >
                        <div className="pt-14 pb-4 px-6 bg-[#060B16] border-b border-[#26354D]/50 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-[1px] shrink-0">
                            <div className="w-full h-full bg-[#10192A] rounded-full flex items-center justify-center overflow-hidden">
                              <img src="/cropped-pd-Logo-Png.webp" alt="Premier Digital" className="w-full h-full object-cover" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-[#F8FAFC] font-semibold text-sm">Premier Digital</h3>
                            <p className="text-green-500 text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online now
                            </p>
                          </div>
                        </div>

                        {/* Chat Interface */}
                        <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 custom-scrollbar bg-[#060B16]/80">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-[#10192A]/80 rounded-2xl rounded-tl-sm p-4 max-w-[85%] border border-[#26354D]/50"
                          >
                            <p className="text-sm text-[#A5B0C3] leading-relaxed">
                              Hi there! 👋 I'm your digital growth assistant.
                            </p>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="bg-[#10192A]/80 rounded-2xl rounded-tl-sm p-4 max-w-[85%] border border-[#26354D]/50"
                          >
                            <p className="text-sm text-[#A5B0C3] leading-relaxed">
                              Ready to dominate your market?<br/>How would you like to get started today?
                            </p>
                          </motion.div>

                          {/* Interactive Options */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="space-y-2.5 pt-2"
                          >
                            <a href="mailto:sales@premierdigital.lk" className="block w-full bg-[#FF3333] hover:bg-[#E71919] text-[#F8FAFC] p-3.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors shadow-lg shadow-red-500/20">
                              <Mail className="w-4 h-4" /> Send an Email
                            </a>
                            <button onClick={() => setActiveScreen('whatsapp')} className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#F8FAFC] p-3.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors shadow-lg shadow-[#25D366]/20">
                              <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
                            </button>
                            <button onClick={() => setActiveScreen('map')} className="block w-full bg-[#18C6D1] hover:bg-[#15b0b9] text-[#F8FAFC] p-3.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors shadow-lg shadow-[#18C6D1]/20">
                              <MapIcon className="w-4 h-4" /> View Office Location
                            </button>
                            <button onClick={() => setActiveScreen('dialer')} className="block w-full bg-[#1A2639]/80 hover:bg-zinc-700 text-[#F8FAFC] p-3.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors border border-[#26354D]/50">
                              <Phone className="w-4 h-4" /> Schedule a Call
                            </button>
                            <Link to="/services" className="block w-full bg-[#1A2639]/80 hover:bg-zinc-700 text-[#F8FAFC] p-3.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors border border-[#26354D]/50">
                              <ArrowRight className="w-4 h-4" /> Browse our Services
                            </Link>
                          </motion.div>
                        </div>

                        {/* Bottom Input Area Mockup */}
                        <div className="p-4 bg-[#060B16] border-t border-zinc-900 pb-8 relative z-20">
                          <div className="w-full bg-[#10192A]/50 rounded-full h-12 border border-[#26354D] flex items-center px-4">
                            <span className="text-[#7C889C] text-sm">Type a message...</span>
                            <Send className="w-4 h-4 text-zinc-600 ml-auto" />
                          </div>
                          <div className="w-32 h-1 bg-zinc-700 rounded-full mx-auto mt-5" />
                        </div>
                      </motion.div>
                    ) : activeScreen === 'dialer' ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col bg-[#060B16] pt-14"
                      >
                        <div className="px-6 pb-2 pt-2 flex items-center justify-between">
                          <button onClick={() => setActiveScreen('chat')} className="text-[#FF7A00] hover:text-orange-400 flex items-center gap-1 text-sm font-medium transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back
                          </button>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-6 pb-8">
                          <div className="mb-8 text-center">
                            <h2 className="text-[#F8FAFC] text-3xl font-light tracking-wider mb-2">+94 76 166 8155</h2>
                            <p className="text-[#7C889C] text-sm">Premier Digital</p>
                          </div>
                          
                          {/* Dial Pad Grid */}
                          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-10 w-full max-w-[240px]">
                            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num, i) => (
                               <div key={i} className="w-16 h-16 rounded-full bg-[#1A2639]/60 flex flex-col items-center justify-center text-3xl font-light text-[#F8FAFC] active:bg-zinc-700 transition-colors cursor-pointer select-none">
                                 {num}
                               </div>
                            ))}
                          </div>

                          {/* Call Button */}
                          <a href="tel:+94761668155" className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-colors active:scale-95">
                             <Phone className="w-7 h-7 text-[#F8FAFC] fill-current" />
                          </a>
                        </div>
                        <div className="p-4 bg-[#060B16] pb-8 mt-auto">
                          <div className="w-32 h-1 bg-zinc-700 rounded-full mx-auto mt-5" />
                        </div>
                      </motion.div>
                    ) : activeScreen === 'map' ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col bg-[#060B16] pt-8"
                      >
                        <div className="px-6 pb-2 pt-2 flex items-center justify-between absolute top-4 left-0 right-0 z-50">
                          <button onClick={() => setActiveScreen('chat')} className="w-8 h-8 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                          </button>
                        </div>
                        
                        <div className="flex-1 w-full relative">
                          <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=6.8744,79.8973&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                          ></iframe>
                        </div>

                        <div className="p-4 bg-[#060B16] border-t border-zinc-900 pb-8 absolute bottom-0 w-full z-50">
                           <div className="flex items-center gap-3 mb-4">
                             <div className="w-10 h-10 rounded-full bg-[#1A2639]/80 flex items-center justify-center shrink-0">
                               <MapPin className="w-5 h-5 text-[#E71919]" />
                             </div>
                             <div>
                               <h4 className="text-white text-sm font-semibold">Premier Digital</h4>
                               <p className="text-[#A5B0C3] text-xs">Nugegoda, Sri Lanka</p>
                             </div>
                           </div>
                           <div className="w-32 h-1 bg-zinc-700 rounded-full mx-auto" />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 flex flex-col bg-[#0b141a] pt-14 relative"
                      >
                        {/* WhatsApp Header */}
                        <div className="px-2 pb-2 pt-2 bg-[#1f2c34] flex items-center gap-2 border-b border-[#26354D]/30">
                          <button onClick={() => setActiveScreen('chat')} className="text-[#00a884] p-1 flex items-center">
                            <ArrowRight className="w-5 h-5 rotate-180" />
                          </button>
                          <div className="w-9 h-9 rounded-full bg-zinc-700 overflow-hidden shrink-0">
                            <img src="/cropped-pd-Logo-Png.webp" alt="Premier Digital" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-[#e9edef] font-medium text-base truncate">Premier Digital</h3>
                            <p className="text-[#8696a0] text-xs">online</p>
                          </div>
                          <div className="flex items-center gap-4 text-[#aebac1] pr-2">
                            <Phone className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Chat Area */}
                        <div 
                          className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 flex flex-col" 
                          style={{ backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png")', backgroundSize: 'contain', backgroundRepeat: 'repeat', opacity: 0.8 }}
                          onClick={() => setIsKeyboardVisible(false)}
                        >
                          <div className="flex justify-center mb-4">
                            <span className="bg-[#182229] text-[#8696a0] text-xs px-3 py-1 rounded-lg">Today</span>
                          </div>
                          {chatHistory.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[80%] rounded-lg p-2 relative ${msg.sender === 'user' ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none' : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'}`}>
                                <p className="text-sm leading-snug pb-3">{msg.text}</p>
                                <span className="text-[10px] text-[#8696a0] absolute bottom-1 right-2">{msg.time}</span>
                              </div>
                            </div>
                          ))}
                          <div ref={chatEndRef} />
                        </div>

                        {/* WhatsApp Input Area */}
                        <div className="bg-[#1f2c34] p-2 flex items-end gap-2 relative z-20">
                          <div className="text-[#8696a0] p-2">
                            <span className="text-2xl leading-none">+</span>
                          </div>
                          <div 
                            className="flex-1 bg-[#2a3942] rounded-2xl min-h-[40px] px-3 py-2 flex items-center cursor-text overflow-hidden"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsKeyboardVisible(true);
                            }}
                          >
                            {whatsappMessage ? (
                              <span className="text-[#e9edef] text-sm break-all">{whatsappMessage}</span>
                            ) : (
                              <span className="text-[#8696a0] text-sm">Message</span>
                            )}
                          </div>
                          <div className="pb-1">
                            {whatsappMessage ? (
                              <button onClick={handleSendMessage} className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-[#F8FAFC]">
                                <Send className="w-5 h-5 ml-1" />
                              </button>
                            ) : (
                              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#8696a0]">
                                <Mic className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Fake Keyboard */}
                        {isKeyboardVisible && (
                          <motion.div 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="absolute bottom-0 left-0 w-full z-30"
                          >
                            <div className="bg-[#d1d5db] dark:bg-[#1a1a1a] p-1.5 pb-6 w-full flex flex-col gap-1.5 rounded-b-[44px]">
                              {/* Row 1 */}
                              <div className="flex justify-center gap-1">
                                {['q','w','e','r','t','y','u','i','o','p'].map(key => (
                                  <button key={key} onClick={(e) => { e.stopPropagation(); setWhatsappMessage(p => p + key); }} className="w-[9%] h-11 bg-white dark:bg-[#4a4a4c] rounded-md shadow-sm text-black dark:text-[#F8FAFC] text-xl active:bg-gray-200 dark:active:bg-gray-500 font-normal">
                                    {key}
                                  </button>
                                ))}
                              </div>
                              {/* Row 2 */}
                              <div className="flex justify-center gap-1 px-4">
                                {['a','s','d','f','g','h','j','k','l'].map(key => (
                                  <button key={key} onClick={(e) => { e.stopPropagation(); setWhatsappMessage(p => p + key); }} className="w-[10%] h-11 bg-white dark:bg-[#4a4a4c] rounded-md shadow-sm text-black dark:text-[#F8FAFC] text-xl active:bg-gray-200 dark:active:bg-gray-500 font-normal">
                                    {key}
                                  </button>
                                ))}
                              </div>
                              {/* Row 3 */}
                              <div className="flex justify-center gap-1">
                                <button className="w-[12%] h-11 bg-[#b3b8c0] dark:bg-[#2c2c2e] rounded-md shadow-sm text-black dark:text-[#F8FAFC] flex items-center justify-center text-xl">
                                  ⇧
                                </button>
                                {['z','x','c','v','b','n','m'].map(key => (
                                  <button key={key} onClick={(e) => { e.stopPropagation(); setWhatsappMessage(p => p + key); }} className="w-[10%] h-11 bg-white dark:bg-[#4a4a4c] rounded-md shadow-sm text-black dark:text-[#F8FAFC] text-xl active:bg-gray-200 dark:active:bg-gray-500 font-normal">
                                    {key}
                                  </button>
                                ))}
                                <button onClick={(e) => { e.stopPropagation(); setWhatsappMessage(p => p.slice(0, -1)); }} className="w-[12%] h-11 bg-[#b3b8c0] dark:bg-[#2c2c2e] rounded-md shadow-sm text-black dark:text-[#F8FAFC] flex items-center justify-center text-xl">
                                  ⌫
                                </button>
                              </div>
                              {/* Row 4 */}
                              <div className="flex justify-center gap-1">
                                <button className="w-[22%] h-11 bg-[#b3b8c0] dark:bg-[#2c2c2e] rounded-md shadow-sm text-black dark:text-[#F8FAFC] text-sm font-medium">
                                  123
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); setWhatsappMessage(p => p + ' '); }} className="flex-1 h-11 bg-white dark:bg-[#4a4a4c] rounded-md shadow-sm text-black dark:text-[#F8FAFC] active:bg-gray-200 dark:active:bg-gray-500">
                                  space
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); handleSendMessage(); }} className="w-[22%] h-11 bg-[#007aff] rounded-md shadow-sm text-[#F8FAFC] text-sm font-medium active:bg-blue-600">
                                  return
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Features Strip */}
      <section className="relative z-20 mt-12 border-y border-[#26354D]/50 bg-[#060B16]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-[#FF7A00] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-[#F8FAFC] mb-1">Fast Response</h4>
                <p className="text-sm text-[#A5B0C3]">We reply within minutes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-[#FF7A00] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-[#F8FAFC] mb-1">Tailored Strategy</h4>
                <p className="text-sm text-[#A5B0C3]">Solutions built for your goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-[#FF7A00] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-[#F8FAFC] mb-1">Proven Results</h4>
                <p className="text-sm text-[#A5B0C3]">Real growth. Real impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#FF7A00] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-[#F8FAFC] mb-1">Trusted Partner</h4>
                <p className="text-sm text-[#A5B0C3]">We grow when you grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-20 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#10192A]/30 border border-[#26354D]/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Start a Conversation</h2>
              <p className="text-[#A5B0C3] text-lg">
                Choose the way that's most convenient for you.<br />
                Our team is ready to deliver the <span className="text-[#FF7A00] font-medium">right solution for your business</span>.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-[#FF3333] hover:bg-[#E71919] text-[#F8FAFC] px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-colors shrink-0"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-20">
            <p className="text-center text-xs font-semibold tracking-widest text-zinc-600 uppercase mb-8">
              TRUSTED BY LEADING BRANDS
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {['TechNova', 'CloudScale', 'Brandify', 'NextGen', 'Velocity', 'GrowthLab'].map((brand, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold font-sans text-[#A5B0C3]">
                  <div className="w-6 h-6 bg-zinc-400 rounded-sm" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
