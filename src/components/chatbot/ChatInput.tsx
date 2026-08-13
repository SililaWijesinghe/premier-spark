import { Paperclip, Send, Mic, X, Image as ImageIcon, FileText, AlertCircle } from 'lucide-react';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileData } from './types';

interface ChatInputProps {
  onSend: (message: string, file?: FileData) => void;
  disabled?: boolean;
  onOpenPrivacy: () => void;
}

export default function ChatInput({ onSend, disabled, onOpenPrivacy }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [file, setFile] = useState<FileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'text/plain'];

  // Auto-dismiss error
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError(null);
    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File must be smaller than 5MB');
      return;
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('Only JPG, PNG, WEBP, PDF, and TXT files are allowed');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFile({
        name: selectedFile.name,
        type: selectedFile.type,
        base64: reader.result as string
      });
    };
    reader.onerror = () => {
      setError('Failed to read file');
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if ((message.trim() || file) && !disabled) {
      onSend(message, file || undefined);
      setMessage('');
      handleRemoveFile();
    }
  };

  return (
    <div className="p-4 pt-2 bg-transparent relative z-10 border-t border-white/5">
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-4 right-4 -top-12 z-50 px-3 py-2 bg-[var(--color-pd-surface)] border border-red-500/30 shadow-[0_4px_20px_rgba(255,0,0,0.15)] rounded-lg flex items-center gap-2 text-red-400 text-xs"
          >
            <AlertCircle className="w-3.5 h-3.5 text-[#E71919]" />
            <span className="flex-1 font-medium">{error}</span>
            <button onClick={() => setError(null)} className="p-1 hover:bg-white/10 rounded-md transition-colors text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC]">
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {file && (
        <div className="mb-2 px-3 py-2 bg-[var(--color-pd-surface)] border border-[#26354D] rounded-lg flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 min-w-0">
            {file.type.startsWith('image/') ? (
              <img src={file.base64} alt="Preview" className="w-8 h-8 rounded-md object-cover border border-white/5" />
            ) : (
              <div className="w-8 h-8 bg-[#060B16]/50 rounded-md flex items-center justify-center border border-white/5">
                <FileText className="w-4 h-4 text-[#F8FAFC]/70" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[#F8FAFC]/90 font-medium truncate">{file.name}</p>
              <p className="text-[9px] text-[#F8FAFC]/50">{file.type.split('/')[1]?.toUpperCase()}</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={handleRemoveFile}
            className="p-1.5 text-[#F8FAFC]/50 hover:text-red-400 hover:bg-white/5 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex items-center gap-2 mb-3 overflow-x-auto custom-scrollbar pb-2 pt-1 px-1">
        {[
          "Book a Meeting",
          "View Case Studies",
          "Get SEO Audit",
        ].map((action, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSend(action)}
            disabled={disabled}
            className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-[#26354D] text-[11px] text-[#F8FAFC]/90 hover:bg-white/10 hover:border-white/20 transition-colors disabled:opacity-50"
          >
            {action}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-2 p-1 pl-4 rounded-full border transition-all duration-300 ${
          isFocused
            ? 'border-[var(--color-pd-red)]/50 shadow-[0_0_15px_rgba(255,32,40,0.15)] bg-[var(--color-pd-card)]'
            : 'border-[#26354D] bg-[var(--color-pd-card)]'
        }`}
      >
        <input
          id="pd-chat-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          placeholder="Ask Pixia anything..."
          className="flex-1 bg-transparent text-[13px] text-[#F8FAFC] placeholder-[var(--color-pd-text-secondary)] outline-none"
        />
        
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/webp,application/pdf,text/plain"
          className="hidden"
        />
        
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-1.5 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] transition-colors"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        
        <button
          type="submit"
          disabled={(!message.trim() && !file) || disabled}
          className="w-8 h-8 rounded-full bg-pd-gradient flex items-center justify-center text-[#F8FAFC] shadow-[0_2px_10px_rgba(255,32,40,0.3)] hover:shadow-[0_4px_15px_rgba(255,32,40,0.5)] transition-all disabled:opacity-50 disabled:shadow-none hover:scale-105 active:scale-95"
        >
          <Send className="w-3.5 h-3.5 ml-[-2px]" />
        </button>
      </form>
      <div className="text-center mt-3">
        <p className="text-[10px] text-[var(--color-pd-text-secondary)]">
          We respect your privacy. Read our <button type="button" onClick={onOpenPrivacy} className="text-[var(--color-pd-red)] hover:underline cursor-pointer">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
}
