import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCheck, FileText, Image as ImageIcon } from 'lucide-react';
import { Target, TrendingUp, Star, Globe, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';
import { FileData } from './types';

export interface MessageProps {
  key?: string | number;
  role: 'user' | 'bot';
  content: string;
  file?: FileData;
  options?: { label: string; id: string }[];
  onOptionClick?: (label: string) => void;
}

const getOptionIcon = (id: string) => {
  switch (id) {
    case 'leads': return <Target className="w-4 h-4 text-[#FF7A00]" />;
    case 'sales': return <TrendingUp className="w-4 h-4 text-[var(--color-pd-red)]" />;
    case 'awareness': return <Star className="w-4 h-4 text-yellow-500" />;
    case 'website': return <Globe className="w-4 h-4 text-[#FF7A00]" />;
    default: return <Sparkles className="w-4 h-4 text-[var(--color-pd-red)]" />;
  }
};

export default function MessageBubble({ role, content, file, options, onOptionClick }: MessageProps) {
  const isBot = role === 'bot';
  const processedContent = content.replace(/\\n/g, '\n');
  const [displayedContent, setDisplayedContent] = useState(isBot ? '' : processedContent);
  const [isTypingText, setIsTypingText] = useState(isBot);
  
  // Current time formatted as HH:MM AM/PM
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    if (isBot) {
      let i = 0;
      const intervalId = setInterval(() => {
        i += 3;
        if (i >= processedContent.length) {
          setDisplayedContent(processedContent);
          setIsTypingText(false);
          clearInterval(intervalId);
        } else {
          setDisplayedContent(processedContent.slice(0, i));
        }
      }, 15);
      return () => clearInterval(intervalId);
    } else {
      setDisplayedContent(processedContent);
    }
  }, [processedContent, isBot]);

  return (
    <motion.div
      initial={isBot ? { opacity: 0, x: -10 } : { scale: 0.98, opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`flex w-full mt-4 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-pd-gradient p-[1px] mr-3 shrink-0 mt-auto shadow-[0_0_10px_rgba(255,32,40,0.3)]">
          <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center">
            <img src="/pixiaAVATAR.png" alt="Pixia - AI Growth Concierge" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
      
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-[88%]`}>
        <div
          className={`px-5 py-4 text-[14px] leading-relaxed font-sans relative ${
            isBot
              ? 'bg-gradient-to-br from-[#1C1C20] to-[#121214] border border-[#26354D] rounded-[24px] rounded-bl-[8px] text-[#F8FAFC]/95 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.03)_inset]'
              : 'bg-pd-gradient rounded-[24px] rounded-br-[8px] text-[#F8FAFC] shadow-lg shadow-[var(--color-pd-red)]/20'
          }`}
        >
          {isBot ? (
            <div className="prose prose-sm prose-invert max-w-none prose-p:my-1.5 prose-p:leading-[1.6] prose-headings:font-bold prose-headings:mb-2 prose-headings:mt-3 prose-headings:text-[#F8FAFC] prose-headings:tracking-tight prose-h1:text-[18px] prose-h2:text-[16px] prose-h3:text-[15px] prose-strong:text-[#F8FAFC] prose-strong:font-semibold prose-strong:text-[var(--color-pd-red)] prose-ul:my-2 prose-ul:list-disc prose-ul:pl-4 prose-li:my-1 prose-li:text-[#F8FAFC]/90 prose-a:text-[var(--color-pd-orange)] prose-a:no-underline hover:prose-a:underline prose-li:marker:text-[var(--color-pd-red)] text-[14px]">
              <Markdown>{displayedContent}</Markdown>
              {isTypingText && <span className="inline-block w-1.5 h-4 ml-1 bg-[var(--color-pd-red)] animate-pulse align-middle" />}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {file && (
                <div className="flex items-center gap-2 p-2 bg-[#060B16]/20 rounded-lg max-w-[200px]">
                  {file.type.startsWith('image/') ? (
                    <img src={file.base64} alt={file.name} className="w-10 h-10 object-cover rounded-md" />
                  ) : (
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-md">
                      <FileText className="w-5 h-5 text-[#F8FAFC]/80" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#F8FAFC]/90 truncate">{file.name}</p>
                    <p className="text-[8px] text-[#F8FAFC]/50">{file.type.split('/')[1]?.toUpperCase() || 'FILE'}</p>
                  </div>
                </div>
              )}
              {displayedContent && <div>{displayedContent}</div>}
            </div>
          )}
          
          <div className={`flex items-center gap-1 mt-2 justify-end ${isBot ? 'text-[10px] text-[#F8FAFC]/40' : 'text-[10px] text-[#F8FAFC]/80'}`}>
            <span>{time}</span>
            {!isBot && <CheckCheck className="w-3 h-3" />}
          </div>
        </div>
        
        {/* Render Options if any */}
        <AnimatePresence>
          {options && options.length > 0 && !isTypingText && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex flex-wrap gap-2 mt-3 w-full"
            >
              {options.map((opt, i) => (
                <motion.button
                  key={opt.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => onOptionClick?.(opt.label)}
                  className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-br from-[#1C1C20] to-[#121214] border border-[#26354D] rounded-full hover:border-[var(--color-pd-red)]/50 hover:shadow-[0_0_15px_rgba(255,32,40,0.2)] transition-all text-left shadow-lg cursor-pointer"
                >
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {getOptionIcon(opt.id)}
                  </div>
                  <span className="text-[13px] text-[#F8FAFC]/90 font-medium group-hover:text-[#F8FAFC] transition-colors tracking-wide">{opt.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
