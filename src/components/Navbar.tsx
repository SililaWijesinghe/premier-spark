import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLinkStyle = (path: string) => {
    return currentPath === path 
      ? 'text-[#F8FAFC] border-b-2 border-[#E71919] pb-1' 
      : 'text-[#A5B0C3] hover:text-[#F8FAFC] transition-colors';
  };
  
  const getMobileLinkStyle = (path: string) => {
    return currentPath === path ? 'text-[#F8FAFC] font-bold' : 'text-[#A5B0C3]';
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#060B16]/85 backdrop-blur-2xl border-b border-[#26354D]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Logo className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden lg:flex ml-10 items-baseline space-x-8 text-sm font-medium">
            <Link to="/" className={getLinkStyle('/')}>Home</Link>
            <Link to="/about" className={getLinkStyle('/about')}>About Us</Link>
            <Link to="/services" className={getLinkStyle('/services')}>Services</Link>
            <Link to="/works" className={getLinkStyle('/works')}>Our Works</Link>
            <Link to="/contact" className={getLinkStyle('/contact')}>Contact</Link>
          </div>

          <div className="hidden lg:flex relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:from-[#E71919] hover:to-[#E71919] text-[#F8FAFC] px-6 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(231,25,25,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <span>Quick Connect</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-3 w-64 bg-[#060B16] border border-[#26354D] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden p-2 z-50"
                >
                  <div className="px-3 py-2 border-b border-[#26354D] mb-1">
                    <div className="text-xs text-[#A5B0C3] font-medium">Premier Digital Hotline</div>
                    <div className="text-[#F8FAFC] font-bold text-sm">+94 76 166 8155</div>
                  </div>
                  
                  <a 
                    href="tel:+94761668155" 
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#10192A] text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E71919]/20 text-[#E71919] flex items-center justify-center group-hover:bg-[#E71919] group-hover:text-[#F8FAFC] transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Call Directly</div>
                      <div className="text-[10px] text-[#A5B0C3]">Speak with our experts</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/94761668155" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#10192A] text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors group mt-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-[#F8FAFC] transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">WhatsApp Chat</div>
                      <div className="text-[10px] text-[#A5B0C3]">Instant message us</div>
                    </div>
                  </a>

                  <Link 
                    to="/contact" 
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#10192A] text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors group mt-1 border-t border-[#26354D] pt-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1A2639] text-[#A5B0C3] flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Request a Quote</div>
                      <div className="text-[10px] text-[#A5B0C3]">Fill our consultation form</div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F8FAFC] hover:text-[#E71919] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060B16]/95 backdrop-blur-2xl border-b border-[#26354D] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${getMobileLinkStyle('/')} block px-4 py-2.5 rounded-xl bg-[#10192A]/50 text-base font-medium`}>Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${getMobileLinkStyle('/about')} block px-4 py-2.5 rounded-xl bg-[#10192A]/50 text-base font-medium`}>About Us</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`${getMobileLinkStyle('/services')} block px-4 py-2.5 rounded-xl bg-[#10192A]/50 text-base font-medium`}>Services</Link>
              <Link to="/works" onClick={() => setIsMobileMenuOpen(false)} className={`${getMobileLinkStyle('/works')} block px-4 py-2.5 rounded-xl bg-[#10192A]/50 text-base font-medium`}>Our Works</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${getMobileLinkStyle('/contact')} block px-4 py-2.5 rounded-xl bg-[#10192A]/50 text-base font-medium`}>Contact</Link>
              
              <div className="pt-3 border-t border-[#26354D] space-y-2">
                <a href="tel:+94761668155" className="w-full bg-gradient-to-r from-[#E71919] to-[#FF7A00] text-[#F8FAFC] px-6 py-3.5 rounded-xl text-center text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-[0_5px_20px_rgba(231,25,25,0.3)]">
                  <Phone className="w-4 h-4" /> Call: +94 76 166 8155
                </a>
                <a href="https://wa.me/94761668155" target="_blank" rel="noreferrer" className="w-full bg-[#10192A] border border-[#26354D] text-[#F8FAFC] px-6 py-3.5 rounded-xl text-center text-sm font-bold transition-all flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

