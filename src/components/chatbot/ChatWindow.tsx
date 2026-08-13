import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import WelcomeScreen from './WelcomeScreen';
import Conversation from './Conversation';
import PrivacyPopup from './PrivacyPopup';
import { MessageProps } from './MessageBubble';
import { Home, LayoutGrid, Briefcase, Phone, Zap, ShieldCheck, Brain, TrendingUp } from 'lucide-react';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  messages: MessageProps[];
  isTyping: boolean;
  onSendMessage: (msg: string, file?: import("./types").FileData) => void;
  onActionClick: (action: string) => void;
  onRefresh: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function ChatWindow({
  isOpen,
  onClose,
  onMinimize,
  messages,
  isTyping,
  onSendMessage,
  onActionClick,
  onRefresh,
  soundEnabled,
  onToggleSound
}: ChatWindowProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if they clicked the launcher button or inside the window
      if (windowRef.current && !windowRef.current.contains(event.target as Node)) {
        // Also ensure they didn't click inside a modal/portal that might be open
        const target = event.target as Element;
        if (!target.closest('.pd-chat-launcher-btn')) {
          onMinimize();
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onMinimize]);

  // Show welcome screen if there are no messages
  const showWelcome = messages.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={windowRef}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
          className="fixed inset-0 md:inset-auto md:bottom-24 md:right-7 z-50 flex flex-col glass-panel md:rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden bg-[var(--color-pd-surface)] overscroll-contain w-full h-[100dvh] md:w-[400px] lg:w-[440px] md:h-[700px] md:max-h-[calc(100vh-120px)]"
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Subtle outer glow */}
          <div className="absolute inset-0 border border-[var(--color-pd-red)]/20 md:rounded-[32px] pointer-events-none" />
          
          <ChatHeader 
            onClose={onClose} 
            onMinimize={onMinimize} 
            onRefresh={onRefresh} 
            soundEnabled={soundEnabled}
            onToggleSound={onToggleSound}
          />
          
          <div className="flex-1 flex flex-col min-h-0 relative z-10 bg-[var(--color-pd-bg)] overflow-y-auto custom-scrollbar overscroll-contain" data-lenis-prevent>
            {showWelcome ? (
              <WelcomeScreen onActionClick={onActionClick} />
            ) : (
              <Conversation messages={messages} isTyping={isTyping} onActionClick={onActionClick} />
            )}
            <PrivacyPopup isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
          </div>
          
          <div className="bg-[var(--color-pd-surface)]">
            <ChatInput onSend={onSendMessage} disabled={isTyping} onOpenPrivacy={() => setIsPrivacyOpen(true)} />
            
            {/* Custom Bottom Nav (Mobile/App feel) */}
            <div className="flex justify-between items-center px-6 pb-4 pt-2 border-t border-white/5 relative z-10">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={onRefresh}
                className="flex flex-col items-center gap-1 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <Home className="w-5 h-5" />
                <span className="text-[10px]">Home</span>
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => onActionClick("What services do you offer?")}
                className="flex flex-col items-center gap-1 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <LayoutGrid className="w-5 h-5" />
                <span className="text-[10px]">Services</span>
              </motion.button>
              
              {/* Chat Active Item */}
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const input = document.getElementById('pd-chat-input') as HTMLInputElement;
                  if (input) input.focus();
                }}
                className="flex flex-col items-center gap-1 text-[#F8FAFC] relative -mt-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-pd-gradient p-[1px] shadow-[0_0_20px_rgba(255,106,0,0.4)] group-hover:shadow-[0_0_25px_rgba(255,106,0,0.6)] transition-shadow">
                  <div className="w-full h-full bg-[var(--color-pd-surface)] rounded-full flex items-center justify-center">
                    <img src="/pixiaAVATAR.png" className="w-8 h-8 rounded-full" alt="Chat" />
                  </div>
                </div>
                <span className="text-[10px] text-[var(--color-pd-orange)] font-medium">Chat</span>
              </motion.button>

              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => onActionClick("Can I see your previous work/portfolio?")}
                className="flex flex-col items-center gap-1 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-[10px]">Work</span>
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => onActionClick("How can I get in touch with you?")}
                className="flex flex-col items-center gap-1 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="text-[10px]">Contact</span>
              </motion.button>
            </div>

            {/* Features Bar */}
            <div className="grid grid-cols-4 gap-2 py-4 pb-4 mb-[env(safe-area-inset-bottom)] md:mb-0 px-2 bg-[var(--color-pd-bg)]/80 relative z-10">
              <div className="flex flex-col items-center text-center gap-1.5">
                <Zap className="w-4 h-4 text-[var(--color-pd-red)]" />
                <span className="text-[9px] text-[var(--color-pd-text-secondary)] leading-tight">Instant<br/>Replies</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
                <span className="text-[9px] text-[var(--color-pd-text-secondary)] leading-tight">Secure &<br/>Private</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <Brain className="w-4 h-4 text-[var(--color-pd-red)]" />
                <span className="text-[9px] text-[var(--color-pd-text-secondary)] leading-tight">AI Powered<br/>Smart Bot</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF7A00]" />
                <span className="text-[9px] text-[var(--color-pd-text-secondary)] leading-tight">Growth<br/>Focused</span>
              </div>
            </div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
