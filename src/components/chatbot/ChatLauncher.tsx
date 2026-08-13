import { motion, AnimatePresence } from 'motion/react';
import { Bot, MessageCircle, X, ArrowRight, TrendingUp, DollarSign, Megaphone, Users, Target, BarChart3, Lightbulb, Zap, Award, ThumbsUp, Rocket, Sparkles, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import type { ChatState } from './PremierDigitalChatbot';

interface ChatLauncherProps {
  chatState: ChatState;
  setChatState: (state: ChatState) => void;
  isTyping?: boolean;
  unreadCount?: number;
  onActionClick?: (action: string) => void;
}

export default function ChatLauncher({ chatState, setChatState, isTyping = false, unreadCount = 0, onActionClick }: ChatLauncherProps) {
  const [isExploding, setIsExploding] = useState(false);

  // Generate random angles and distances for the icon splash
  const ICONS = [
    { Icon: TrendingUp, color: 'text-green-400' },
    { Icon: DollarSign, color: 'text-yellow-400' },
    { Icon: Megaphone, color: 'text-blue-400' },
    { Icon: Users, color: 'text-purple-400' },
    { Icon: Target, color: 'text-red-400' },
    { Icon: BarChart3, color: 'text-cyan-400' },
    { Icon: Lightbulb, color: 'text-yellow-300' },
    { Icon: Zap, color: 'text-orange-400' },
    { Icon: Award, color: 'text-pink-400' },
    { Icon: ThumbsUp, color: 'text-blue-300' },
    { Icon: Rocket, color: 'text-[var(--color-pd-red)]' },
    { Icon: Sparkles, color: 'text-yellow-200' },
  ];

  const handleLaunchChat = () => {
    setIsExploding(true);
    
    setTimeout(() => {
      setChatState('chat');
      setIsExploding(false);
    }, 300);
  };

  if (chatState === 'chat') return null;

  return (
    <div className="fixed bottom-0 left-0 w-full md:bottom-7 md:left-auto md:w-auto md:right-7 z-[90] flex flex-col items-center md:items-end pointer-events-none pb-0 md:pb-0 px-0 md:px-0">
      <AnimatePresence mode="wait">
        {chatState === 'onboarding' && (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            className="mb-4 glass-panel pointer-events-auto p-5 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.7)] w-[340px] border border-[var(--color-pd-orange)]/40 relative overflow-hidden overscroll-contain"
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-pd-orange)]/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-pd-orange)]" />
                <h4 className="text-[#F8FAFC] font-semibold text-sm">Welcome! I am Pixia.</h4>
              </div>
              <button 
                onClick={() => setChatState('collapsed')}
                className="text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors"
                aria-label="Close Onboarding"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="mb-5 relative z-10">
              <p className="text-[var(--color-pd-text-secondary)] text-[13px] leading-relaxed mb-4">
                Since it's your first time here, you can explore our key services on the website, or ask me directly about:
              </p>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => { 
                    setChatState('chat'); 
                    if (onActionClick) onActionClick("What Web Development services do you offer?"); 
                  }} 
                  className="flex items-center gap-2 text-left bg-white/5 hover:bg-white/10 p-2.5 rounded-lg border border-[#26354D] transition-colors group cursor-pointer"
                >
                   <LayoutGrid className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                   <span className="text-[12px] text-[#F8FAFC]/90">Web Development Services</span>
                </button>
                <button 
                  onClick={() => { 
                    setChatState('chat'); 
                    if (onActionClick) onActionClick("Tell me about your SEO & Growth strategies."); 
                  }} 
                  className="flex items-center gap-2 text-left bg-white/5 hover:bg-white/10 p-2.5 rounded-lg border border-[#26354D] transition-colors group cursor-pointer"
                >
                   <TrendingUp className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                   <span className="text-[12px] text-[#F8FAFC]/90">SEO & Growth Strategies</span>
                </button>
                <button 
                  onClick={() => { 
                    setChatState('chat'); 
                    if (onActionClick) onActionClick("How do your Digital Marketing campaigns work?"); 
                  }} 
                  className="flex items-center gap-2 text-left bg-white/5 hover:bg-white/10 p-2.5 rounded-lg border border-[#26354D] transition-colors group cursor-pointer"
                >
                   <Target className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                   <span className="text-[12px] text-[#F8FAFC]/90">Digital Marketing Campaigns</span>
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setChatState('chat');
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[var(--color-pd-orange)] text-[#F8FAFC] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[var(--color-pd-red)] shadow-[0_0_15px_rgba(255,106,0,0.4)] transition-all cursor-pointer"
            >
              <span>Just Start Chatting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
        {chatState === 'preview' && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="mb-4 glass-panel pointer-events-auto p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[300px] border border-[var(--color-pd-red)]/20 relative overflow-hidden overscroll-contain"
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-pd-red)]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-pd-gradient p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(255,32,40,0.3)]">
                  <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center">
                    <img src="/pixiaAVATAR.png" alt="Pixia - AI Growth Concierge" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#060B16]" />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-medium text-sm">Pixia</h4>
                  <p className="text-green-500 text-[11px] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setChatState('collapsed')}
                className="text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="mb-5 relative z-10">
              <h3 className="text-[#F8FAFC] text-xl font-bold mb-1 flex items-center gap-2">
                Hi! 👋 I'm Pixia
              </h3>
              <p className="text-[var(--color-pd-text-secondary)] text-sm leading-relaxed">
                Your AI Growth Concierge. Ready to take your business to the next level? 🚀
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setChatState('chat');
              }}
              className="w-full py-3 px-4 rounded-xl bg-pd-gradient text-[#F8FAFC] font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,32,40,0.3)] hover:shadow-[0_0_30px_rgba(255,32,40,0.5)] transition-all group relative z-10"
            >
              <span>Chat Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-3 relative z-10">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=14" className="w-6 h-6 rounded-full border-2 border-[#060B16] object-cover" alt="Client 1" />
                <img src="https://i.pravatar.cc/100?img=25" className="w-6 h-6 rounded-full border-2 border-[#060B16] object-cover" alt="Client 2" />
                <img src="https://i.pravatar.cc/100?img=42" className="w-6 h-6 rounded-full border-2 border-[#060B16] object-cover" alt="Client 3" />
              </div>
              <p className="text-[10px] text-[var(--color-pd-text-secondary)] leading-tight">
                Trusted by 200+ <br /> businesses worldwide
              </p>
            </div>
          </motion.div>
        )}

        {(chatState === 'collapsed' || isExploding) && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-auto pointer-events-auto"
          >
            {/* --- DESKTOP VIEW: Floating Pill --- */}
            <div 
              className={`hidden md:flex relative cursor-pointer group items-center justify-center pd-chat-launcher-btn ${isExploding ? 'pointer-events-none' : ''}`}
              onClick={!isExploding ? handleLaunchChat : undefined}
            >
              <div className="absolute inset-0 z-0 bg-[var(--color-pd-red)] rounded-[32px] blur-[20px] opacity-30 animate-pulse pointer-events-none group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E71919] to-orange-500 rounded-[32px] blur-[10px] opacity-20 animate-pulse-glow pointer-events-none" />
              
              <div className={`relative z-10 glass-panel pr-5 pl-2 py-2 rounded-[32px] flex items-center gap-3 shadow-[0_0_20px_rgba(255,32,40,0.3)] border border-[var(--color-pd-red)]/30 group-hover:shadow-[0_0_30px_rgba(255,32,40,0.5)] transition-all duration-300 ${isExploding ? 'scale-95 brightness-125' : ''}`}>
                <div className="relative w-12 h-12 rounded-full bg-pd-gradient p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(255,32,40,0.4)]">
                  <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center">
                    <img src="/pixiaAVATAR.png" alt="Pixia - AI Growth Concierge" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#060B16]" />
                </div>

                <div className="flex flex-col min-w-[100px]">
                  {isTyping ? (
                    <>
                      <span className="text-[var(--color-pd-red)] font-medium text-sm flex items-center gap-1">Generating</span>
                      <div className="flex gap-1 mt-1">
                        <div className="w-1 h-1 rounded-full bg-[var(--color-pd-red)] opacity-50 typing-dot-1 glow-red"></div>
                        <div className="w-1 h-1 rounded-full bg-[var(--color-pd-red)] opacity-50 typing-dot-2 glow-red"></div>
                        <div className="w-1 h-1 rounded-full bg-[var(--color-pd-red)] opacity-50 typing-dot-3 glow-red"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-[#F8FAFC] font-medium text-sm">
                        {unreadCount > 0 ? 'New message!' : "Hi! I'm Pixia 👋"}
                      </span>
                      <span className="text-[var(--color-pd-text-secondary)] text-[11px]">
                        {unreadCount > 0 ? 'Click to read' : 'How can I help you grow?'}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {unreadCount > 0 && !isExploding && !isTyping && (
                <div className="absolute -top-1 -right-1 bg-[var(--color-pd-red)] text-[#F8FAFC] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,32,40,0.8)] border-2 border-[#060B16] z-20">
                  {unreadCount}
                </div>
              )}
            </div>

            {/* --- MOBILE VIEW: Modern Floating Pill --- */}
            <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] pointer-events-none pb-[calc(1rem+env(safe-area-inset-bottom))] px-4">
              <div 
                className={`relative z-10 w-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto ${isExploding ? 'translate-y-full opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}`}
                onClick={!isExploding ? handleLaunchChat : undefined}
              >
                <div className="w-full max-w-[400px] glass-panel p-2 pl-2.5 rounded-full flex items-center justify-between border border-[var(--color-pd-red)]/20 shadow-[0_20px_40px_-10px_rgba(255,32,40,0.3)] cursor-pointer backdrop-blur-2xl bg-[#060B16]/90 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-pd-red)]/10 via-transparent to-[#FF7A00]/10 opacity-60" />
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E71919] to-orange-500 blur-[20px] opacity-[0.08] animate-pulse-glow" />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="relative w-10 h-10 rounded-full bg-pd-gradient p-[1px] shadow-[0_0_15px_rgba(255,32,40,0.3)] flex-shrink-0 overflow-visible">
                      <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center relative z-10">
                        <img src="/pixiaAVATAR.png" className="w-full h-full object-cover" alt="Pixia - AI Growth Concierge" />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-[2px] border-[#060B16] z-20" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[#F8FAFC] font-semibold text-[14px] tracking-tight flex items-center gap-1.5">
                        {unreadCount > 0 ? 'New message!' : 'Ask Pixia'} <Sparkles className="w-3 h-3 text-[#FF7A00]" />
                      </span>
                      <span className="text-[#94A3B8] text-[11px] font-medium tracking-wide flex items-center">
                        {isTyping ? (
                          <span className="text-[var(--color-pd-red)] flex items-center gap-1">
                            Generating<span className="flex gap-0.5 ml-0.5"><span className="typing-dot-1 w-1 h-1 bg-current rounded-full" /><span className="typing-dot-2 w-1 h-1 bg-current rounded-full" /><span className="typing-dot-3 w-1 h-1 bg-current rounded-full" /></span>
                          </span>
                        ) : 'AI Growth Concierge'}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0 pr-1">
                    <div className="h-9 w-9 rounded-full bg-pd-gradient text-white flex items-center justify-center shadow-[0_4px_15px_rgba(231,25,25,0.4)] group-hover:scale-105 active:scale-95 transition-all duration-300">
                      {isTyping ? (
                        <div className="flex gap-0.5">
                           <div className="w-1 h-1 rounded-full bg-white opacity-60 animate-bounce" />
                           <div className="w-1 h-1 rounded-full bg-white opacity-60 animate-bounce delay-75" />
                           <div className="w-1 h-1 rounded-full bg-white opacity-60 animate-bounce delay-150" />
                        </div>
                      ) : (
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </div>
                  </div>

                  {unreadCount > 0 && !isExploding && !isTyping && (
                    <div className="absolute top-0 right-0 bg-[#FF7A00] text-[#F8FAFC] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,106,0,0.8)] border-2 border-[#060B16] z-20 animate-pulse transform translate-x-1/4 -translate-y-1/4">
                      {unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
