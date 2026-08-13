import { useEffect, useRef } from 'react';
import MessageBubble, { MessageProps } from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ConversationProps {
  messages: MessageProps[];
  isTyping: boolean;
  onActionClick?: (action: string) => void;
}

export default function Conversation({ messages, isTyping, onActionClick }: ConversationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // If we are within 100px of the bottom, we are not user-scrolling away
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      isUserScrolling.current = !isNearBottom;
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });

    // Use ResizeObserver on the container's scrollHeight
    const resizeObserver = new ResizeObserver(() => {
      if (!isUserScrolling.current) {
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
      }
    });

    // Observe all children and the container itself
    resizeObserver.observe(container);
    Array.from(container.children).forEach(child => resizeObserver.observe(child));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
           mutation.addedNodes.forEach(node => {
             if (node instanceof Element) {
               resizeObserver.observe(node);
             }
           });
        }
      });
      if (!isUserScrolling.current) {
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
      }
    });

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true
    });
    
    const handleResize = () => {
      if (!isUserScrolling.current) {
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Initial scroll
    if (!isUserScrolling.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
      }, 50);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="p-4 md:p-6 space-y-2 flex flex-col overflow-x-hidden"
      style={{ scrollBehavior: 'auto' }}
    >
      {messages.map((msg, idx) => (
        <MessageBubble 
          key={idx} 
          role={msg.role} 
          content={msg.content} 
          options={msg.options}
          onOptionClick={onActionClick} 
        />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      <div ref={bottomRef} className="h-2 shrink-0" />
    </div>
  );
}
