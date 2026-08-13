import { X, RefreshCcw, Minus, Volume2, VolumeX, Heart } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
  onRefresh: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export default function ChatHeader({ onClose, onMinimize, onRefresh, soundEnabled, onToggleSound }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 pt-[calc(0.75rem+env(safe-area-inset-top))] md:pt-4 border-b border-[#26354D] relative z-10 bg-[#060B16] shrink-0">
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        <div className="relative shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pd-gradient p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(231,25,25,0.3)]">
            <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden flex items-center justify-center">
              <img src="/pixiaAVATAR.png" alt="Pixia - AI Growth Concierge" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-[#060B16]" />
          </div>
        </div>
        
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-[#F8FAFC] text-sm sm:text-base leading-tight truncate flex items-center gap-1.5">
            Pixia <Heart className="w-3.5 h-3.5 text-[#E71919] fill-[#E71919]" />
          </h3>
          <p className="text-[11px] sm:text-xs text-[var(--color-pd-text-secondary)] flex items-center gap-1.5 truncate">
            <span className="text-[10px] text-[#F8FAFC]/70 tracking-wide uppercase font-semibold mr-1">AI Growth Concierge</span>
          </p>
          <p className="text-[11px] sm:text-xs text-[var(--color-pd-text-secondary)] flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block shrink-0" />
            <span className="text-green-500 font-medium shrink-0">Online</span>
            <span className="text-[#A5B0C3] truncate hidden xs:inline">• Usually replies instantly</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 shrink-0 ml-2">
        {onToggleSound && (
          <button 
            onClick={onToggleSound}
            className="p-3 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] rounded-md hover:bg-white/5 transition-colors"
            title={soundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        )}
        <button 
          onClick={onRefresh}
          className="p-3 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] rounded-md hover:bg-white/5 transition-colors"
          title="Restart conversation"
        >
          <RefreshCcw className="w-4 h-4" />
        </button>
        <button 
          onClick={onMinimize}
          className="p-3 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] rounded-md hover:bg-white/5 transition-colors hidden md:block"
          title="Minimize"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button 
          onClick={onClose}
          className="p-3 text-[var(--color-pd-text-secondary)] hover:text-[#F8FAFC] rounded-md hover:bg-white/5 transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

