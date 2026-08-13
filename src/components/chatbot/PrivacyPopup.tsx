import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPopup({ isOpen, onClose }: PrivacyPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex flex-col bg-[var(--color-pd-surface)]/95 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <h3 className="text-[#F8FAFC] font-semibold tracking-wide">Chatbot Privacy Policy</h3>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#F8FAFC]/70 hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar text-sm text-[#F8FAFC]/80 space-y-5 leading-relaxed">
            <p>
              Your privacy is very important to us. This chatbot ("Pixia - AI Growth Concierge") is designed to provide you with helpful information about our services and assist you with your inquiries.
            </p>
            
            <h4 className="text-[#F8FAFC] font-medium text-base">Data Collection</h4>
            <p>
              When you interact with the chatbot, we may collect and store the contents of your messages to improve our services and train our AI models. We do not collect personally identifiable information unless you explicitly provide it.
            </p>

            <h4 className="text-[#F8FAFC] font-medium text-base">Usage of Data</h4>
            <p>
              The data collected is used solely for the purpose of improving the chatbot's conversational abilities and understanding user needs. Your data will not be sold to third parties.
            </p>

            <h4 className="text-[#F8FAFC] font-medium text-base">Third-Party Services</h4>
            <p>
              This chatbot uses third-party AI models to generate responses. By using this chatbot, you acknowledge that your messages may be processed by these third-party providers in accordance with their respective privacy policies.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
