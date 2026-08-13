import { motion } from 'motion/react';
import { TrendingUp, Globe, Star, PenTool, Cpu, HeadphonesIcon, ChevronRight, Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onActionClick: (action: string) => void;
}

const QUICK_ACTIONS = [
  {
    id: 'grow',
    title: 'Grow My Business',
    desc: 'Get more leads, sales and growth',
    icon: TrendingUp,
    color: 'text-[#E71919]',
  },
  {
    id: 'website',
    title: 'Build a Website',
    desc: 'Modern, fast & conversion focused',
    icon: Globe,
    color: 'text-[#FF7A00]',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    desc: 'SEO, Social Media, Ads & more',
    icon: Star,
    color: 'text-yellow-500',
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    desc: 'Logo, Brand identity, Graphics',
    icon: PenTool,
    color: 'text-purple-500',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    desc: 'AI solutions to automate & scale',
    icon: Cpu,
    color: 'text-blue-500',
  },
  {
    id: 'expert',
    title: 'Talk to an Expert',
    desc: 'Connect with our growth experts',
    icon: HeadphonesIcon,
    color: 'text-green-500',
  },
];

const POPULAR_QUESTIONS = [
  "How can Premier Digital help my business?",
  "What makes you different?",
  "Can I see your pricing?",
];

export default function WelcomeScreen({ onActionClick }: WelcomeScreenProps) {
  return (
    <div className="p-4 md:p-6 space-y-6 overflow-x-hidden relative">
      
      {/* Welcome Message */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative flex justify-between items-start"
      >
        <div className="z-10 pt-2 flex-1">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-2 flex flex-col gap-1">
            <span>Hi! 👋</span>
            <span className="flex items-center gap-2">
              I'm Pixia <Heart className="w-6 h-6 text-[#E71919] fill-[#E71919]" />
            </span>
          </h2>
          <p className="text-[var(--color-pd-text-secondary)] text-sm leading-relaxed max-w-[200px]">
            Your AI Growth Concierge from Premier Digital. I can help you find the right strategy to grow your business online.
          </p>
        </div>
        {/* Pixia Avatar & Speech Bubble */}
        <div className="absolute right-0 top-0 w-32 h-32 md:w-36 md:h-36 z-0 pointer-events-none transform translate-x-4 -translate-y-2 flex items-center justify-center">
          {/* Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="absolute -left-[140px] top-2 bg-[#1C1C20] border border-[#26354D] rounded-[18px] rounded-tr-[4px] px-3 py-2 shadow-xl z-20 hidden xs:block"
          >
            <p className="text-[11px] font-medium text-[#F8FAFC] leading-tight">
              Let's grow your<br />business together! 🚀
            </p>
            {/* Speech bubble pointer */}
            <div className="absolute top-3 -right-[6px] w-3 h-3 bg-[#1C1C20] border-t border-r border-[#26354D] transform rotate-45" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 20, y: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="w-28 h-28 relative z-10 rounded-full overflow-hidden p-[2px] bg-pd-gradient shadow-[0_0_30px_rgba(255,32,40,0.4)]"
          >
            <div className="w-full h-full bg-[#060B16] rounded-full overflow-hidden">
              <img 
                src="/pixiaAVATAR.png" 
                alt="Pixia" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow for the welcome area */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-pd-red)] opacity-20 rounded-full blur-[60px] pointer-events-none" />
      </motion.div>

      {/* Primary Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10 pt-4">
        {QUICK_ACTIONS.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              onClick={() => onActionClick(action.title)}
              className="glass-card text-left p-3.5 rounded-xl group relative overflow-hidden bg-[var(--color-pd-card)] border-white/5 hover:bg-[var(--color-pd-surface)]"
            >
              <div className="flex gap-3 items-start relative z-10">
                <div className={`mt-0.5 p-2 rounded-lg bg-[#060B16] border border-[#26354D] group-hover:border-${action.color.split('-')[1]}-500/30 transition-colors`}>
                  <Icon className={`w-4 h-4 ${action.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] text-sm font-semibold mb-0.5 group-hover:text-[#F8FAFC] transition-all">{action.title}</h4>
                  <p className="text-[11px] text-[var(--color-pd-text-secondary)] leading-tight">{action.desc}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          );
        })}
      </div>

      {/* Popular Questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10"
      >
        <h4 className="text-[13px] font-semibold text-[#F8FAFC]/80 mb-3 flex items-center gap-2">
          Popular Questions 🔥
        </h4>
        <div className="space-y-2">
          {POPULAR_QUESTIONS.map((question, index) => (
            <button
              key={index}
              onClick={() => onActionClick(question)}
              className="w-full text-left glass-card p-3 rounded-xl flex items-center justify-between group bg-[var(--color-pd-card)] border-white/5 hover:bg-[var(--color-pd-surface)]"
            >
              <span className="text-[13px] text-[var(--color-pd-text-secondary)] group-hover:text-[#F8FAFC] transition-colors">{question}</span>
              <ChevronRight className="w-4 h-4 text-[var(--color-pd-text-secondary)] group-hover:text-[#F8FAFC] transform group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
