import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ChatLauncher from './ChatLauncher';
import ChatWindow from './ChatWindow';
import { MessageProps } from './MessageBubble';
import { FileData } from './types';

export type ChatState = 'collapsed' | 'preview' | 'chat' | 'onboarding';

export default function PremierDigitalChatbot() {
  const [chatState, setChatState] = useState<ChatState>('collapsed');
  const [messages, setMessages] = useState<MessageProps[]>(() => {
    try {
      const saved = sessionStorage.getItem('pd_chat_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem('pd_chat_sound');
      return saved !== 'false'; // Default to true
    } catch {
      return true;
    }
  });

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      localStorage.setItem('pd_chat_sound', next.toString());
      return next;
    });
  };

  // Play subtle pop sound when AI starts typing
  useEffect(() => {
    if (isTyping && soundEnabled) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {
        console.error("Audio play failed:", e);
      }
    }
  }, [isTyping, soundEnabled]);

  // Show preview or onboarding after a delay, only if there's no chat history
  useEffect(() => {
    if (messages.length > 0) return;
    const timer = setTimeout(() => {
      const hasSeenOnboarding = localStorage.getItem('pd_chat_onboarding_done');
      if (!hasSeenOnboarding) {
        setChatState('onboarding');
        localStorage.setItem('pd_chat_onboarding_done', 'true');
      } else {
        setChatState(prev => prev === 'collapsed' ? 'preview' : prev);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [messages.length]);

  // Save history to session storage whenever messages change
  useEffect(() => {
    sessionStorage.setItem('pd_chat_history', JSON.stringify(messages));
  }, [messages]);

  // Clear unread count when chat is opened
  useEffect(() => {
    if (chatState === 'chat') {
      setUnreadCount(0);
    }
  }, [chatState]);

  const handleSendMessage = async (content: string, file?: FileData) => {
    if (isTyping) return; // Prevent duplicate clicks
    const newUserMessage: MessageProps = { role: 'user', content, file };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: content,
          file: file,
          history: messages
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI server");
      }

      const data = await response.json();
      
      setMessages(prev => {
        return [...prev, {
          role: 'bot',
          content: data.text,
          options: data.options
        }];
      });
      
      // Auto-expand if collapsed when response arrives
      setChatState(current => {
        if (current !== 'chat') {
          setUnreadCount(prev => prev + 1);
          return 'chat';
        }
        return current;
      });
      
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        role: 'bot',
        content: "Oops, something went wrong on our end. Please try again later."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: string) => {
    if (isTyping) return;
    handleSendMessage(action);
  };

  const handleRefresh = () => {
    if (isTyping) return;
    setMessages([]);
    setIsTyping(false);
    sessionStorage.removeItem('pd_chat_history');
  };

  return (
    <>
      <AnimatePresence>
        {chatState === 'chat' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setChatState('collapsed')}
            className="fixed inset-0 bg-[#060B16]/60 z-40 backdrop-blur-sm cursor-pointer"
          />
        )}
      </AnimatePresence>
      <ChatLauncher 
        chatState={chatState}
        setChatState={setChatState}
        isTyping={isTyping}
        unreadCount={unreadCount}
        onActionClick={handleActionClick}
      />
      
      <ChatWindow
        isOpen={chatState === 'chat'}
        onClose={() => setChatState('collapsed')}
        onMinimize={() => setChatState('collapsed')}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={handleSendMessage}
        onActionClick={handleActionClick}
        onRefresh={handleRefresh}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />
    </>
  );
}
