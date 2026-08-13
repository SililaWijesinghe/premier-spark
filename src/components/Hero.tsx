import { Send, User, Mail, Phone, Building2, Zap, Volume2, VolumeX, Play } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

export default function Hero() {
  const [introStep, setIntroStep] = useState<'video1' | 'video2' | 'form'>('video1');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  // Ambient futuristic synth music with fade in and fade out
  useEffect(() => {
    const isVideoPlaying = introStep === 'video1' || introStep === 'video2';
    if (isVideoPlaying && !isVideoMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx && !audioCtxRef.current) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 1.5); // Smooth fade in
          
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(400, ctx.currentTime);

          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(220, ctx.currentTime); // A3

          const osc2 = ctx.createOscillator();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(329.63, ctx.currentTime); // E4

          const osc3 = ctx.createOscillator();
          osc3.type = 'sine';
          osc3.frequency.setValueAtTime(440, ctx.currentTime); // A4

          osc1.connect(filter);
          osc2.connect(filter);
          osc3.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();
          osc3.start();

          gainNodeRef.current = gain;
          oscillatorsRef.current = [osc1, osc2, osc3];
        } else if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.linearRampToValueAtTime(0.1, audioCtxRef.current.currentTime + 1);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      // Fade out audio
      if (gainNodeRef.current && audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.8);
          setTimeout(() => {
            oscillatorsRef.current.forEach(osc => {
              try { osc.stop(); } catch (e) {}
            });
            oscillatorsRef.current = [];
            if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
              audioCtxRef.current.close();
            }
            audioCtxRef.current = null;
            gainNodeRef.current = null;
          }, 800);
        } catch (e) {}
      }
    }

    return () => {
      // cleanup on unmount
      if (gainNodeRef.current && audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.5);
          setTimeout(() => {
            oscillatorsRef.current.forEach(osc => { try { osc.stop(); } catch (e) {} });
            if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
              audioCtxRef.current?.close();
            }
          }, 500);
        } catch (e) {}
      }
    };
  }, [introStep, isVideoMuted]);

  // Auto re-trigger video intro after 20 seconds of showing the form
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (introStep === 'form') {
      timer = setTimeout(() => {
        setIntroStep('video1');
      }, 20000); // Replay video intro sequence every 20s for an engaging experience
    }
    return () => clearTimeout(timer);
  }, [introStep]);

  // Handle video mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  // 3D Phone Rotation State
  const x = useMotionValue(-0.15);
  const y = useMotionValue(-0.05);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(-0.15);
    y.set(-0.05);
  };

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E71919]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7A00]/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="text-left space-y-8 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(231,25,25,0.2)]"
            >
              <Zap className="w-3.5 h-3.5" /> Premier Digital Marketing Agency
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.1]"
            >
              Top Digital<br />
              Marketing Agency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">
                in Colombo
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-[#F8FAFC] mb-4">
                Web Design, Digital Marketing & Branding Services
              </h2>
              <p className="text-lg text-[#A5B0C3] max-w-xl leading-relaxed font-medium">
                As your dedicated digital marketing agency in Colombo, Premier Digital provides web design, SEO, branding, graphic design, and video production for businesses in Nugegoda and across Sri Lanka.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <Link to="/services" className="w-full sm:w-auto bg-gradient-to-r from-[#E71919] to-[#FF7A00] hover:from-[#E71919] hover:to-[#E71919] text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_10px_30px_rgba(231,25,25,0.4)] flex justify-center items-center gap-2">
                Explore Services <span className="text-xl leading-none">&rarr;</span>
              </Link>
              <a href="https://wa.me/94761668155" target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-[#26354D] hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#F8FAFC] px-8 py-4 rounded-full text-base font-bold transition-all flex justify-center items-center gap-2">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> WhatsApp Us
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <p className="text-base text-[#F8FAFC] font-medium">
                  5 stars out of 70+ Reviews across 
                </p>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <svg className="w-5 h-5 text-[#0064E0]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.42 16.48H15c-1.32 0-2.48-.82-3-2.02l-2.1-4.63c-.34-.78-1.12-1.31-1.95-1.31H7.58c-1.28 0-2.32 1.04-2.32 2.32s1.04 2.32 2.32 2.32h.37c1.32 0 2.48.82 3 2.02l2.1 4.63c.34.78 1.12 1.31 1.95 1.31h.42c1.28 0 2.32-1.04 2.32-2.32s-1.04-2.32-2.32-2.32zm.17-5.59l-1.8 1.4.37.82 2.1-1.63c.53-.4.85-1.03.85-1.7 0-1.18-.96-2.14-2.14-2.14H15l1.6 1.7h-1.65c-.3 0-.6.12-.8.34l-.9 1.21 2.34-1.7z"/>
                  </svg>
                  <svg className="w-5 h-5 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <svg className="w-5 h-5 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l3.71 7.51 8.29 1.2-6 5.85 1.42 8.25L12 18.91l-7.42 3.9L6 14.56 0 8.71l8.29-1.2L12 0z"/>
                  </svg>
                  <span className="text-[#00B67A] font-semibold text-sm tracking-tight -ml-1">Trustpilot</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column (Animated Form & Phone Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full min-h-[444px] sm:min-h-[600px] flex justify-center items-start sm:items-center lg:ml-auto mt-8 lg:mt-0"
          >
            {/* Abstract Artistic Background Image (Rocket with Floating Icons) */}
             <motion.div 
               animate={{ 
                 y: [0, -15, 0]
               }}
               transition={{ 
                 duration: 12,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="absolute z-0 pointer-events-none hidden sm:flex items-center justify-center top-1/2 left-1/2 -translate-x-[40%] lg:-translate-x-[50%] -translate-y-1/2 h-[800px] lg:h-[1200px]"
             >
               {/* 
                 Seamless Image Blending Container: 
                 By letting the container shrink-wrap the image's intrinsic width, the linear gradients 
                 will perfectly align with the true edges of the image, erasing any sharp borders.
               */}
               <div 
                 className="relative inline-flex items-center justify-center h-full z-10 shrink-0"
                 style={{
                   maskImage: 'radial-gradient(50% 50% at 50% 50%, black 40%, transparent 100%)',
                   WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 40%, transparent 100%)'
                 }}
               >
                 <img 
                   src="/newHomeHeroBgImg.webp" 
                   alt="Growth Rocket Background" 
                   className="h-full w-auto object-contain relative z-10 max-w-none"
                 />
               </div>
             </motion.div>

             <motion.div 
               animate={{ 
                 opacity: [0.1, 0.3, 0.1],
                 scale: [1, 1.1, 1]
               }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -inset-10 bg-gradient-to-br from-[#FF6B00]/40 via-transparent to-[#FF7A00]/40 rounded-full blur-[100px] pointer-events-none z-0" 
             />
             
            {/* Interactive Phone Mockup (iPhone 17 Pro Max Orange) */}
            <div 
              className="relative w-[320px] sm:w-[360px] h-[740px] mx-auto z-10 scale-[0.6] sm:scale-[0.85] lg:scale-95 origin-top sm:origin-center mb-[-296px] sm:mb-0"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1500 }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-[#FF6B00] rounded-[55px] blur-[60px] opacity-30 pointer-events-none" style={{ transform: "translateZ(-40px)" }} />
                
                {/* Phone Back Depth Layers (Orange Titanium) */}
                <div className="absolute inset-0 bg-[#3a1600] rounded-[55px] shadow-2xl pointer-events-none" style={{ transform: "translateZ(-40px)" }} />
                <div className="absolute inset-0 bg-[#572200] rounded-[55px] pointer-events-none" style={{ transform: "translateZ(-30px)" }} />
                <div className="absolute inset-0 bg-[#7a2f00] rounded-[55px] pointer-events-none" style={{ transform: "translateZ(-20px)" }} />
                <div className="absolute inset-0 bg-[#9c3d00] rounded-[55px] pointer-events-none" style={{ transform: "translateZ(-10px)" }} />

                {/* iPhone Frame Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa160] via-[#FF6B00] to-[#b34a00] rounded-[55px] p-[3px] pointer-events-none" style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 bg-[#060B16] rounded-[52px] m-[1px] pointer-events-none" style={{ transformStyle: "preserve-3d" }} />
                  <div className="absolute top-24 -left-[3px] w-[3px] h-12 bg-[#9c3d00] rounded-l-md pointer-events-none" style={{ transform: "translateZ(-15px)" }} /> {/* Volume Up */}
                  <div className="absolute top-40 -left-[3px] w-[3px] h-12 bg-[#9c3d00] rounded-l-md pointer-events-none" style={{ transform: "translateZ(-15px)" }} /> {/* Volume Down */}
                  <div className="absolute top-32 -right-[3px] w-[3px] h-16 bg-[#9c3d00] rounded-r-md pointer-events-none" style={{ transform: "translateZ(-15px)" }} /> {/* Power Button */}
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-[#0a0a0a] rounded-[48px] overflow-hidden flex flex-col border-[6px] border-black pointer-events-auto" style={{ transform: "translateZ(1px)" }}>
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-9 bg-[#060B16] rounded-[18px] z-50 flex items-center justify-between px-3">
                      <div className="w-3 h-3 rounded-full bg-[#1A2639]/80 shadow-inner" />
                      <div className="w-3 h-3 rounded-full bg-[#0a0a2a] relative overflow-hidden">
                        <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
                      </div>
                    </div>

                     <AnimatePresence mode="wait">
                      {introStep === 'video1' ? (
                        <motion.div
                          key="video-intro-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 z-40 bg-[#060B16] flex flex-col items-center justify-center overflow-hidden"
                        >
                          <video 
                            ref={videoRef}
                            src="/mobileIntro.mp4" 
                            autoPlay 
                            muted={isVideoMuted}
                            playsInline 
                            onEnded={() => setIntroStep('video2')}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Sound Toggle Button */}
                          <button
                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                            className="absolute top-16 right-6 z-50 bg-[#060B16]/60 backdrop-blur-md border border-white/20 text-[#F8FAFC] p-2.5 rounded-full hover:bg-[#060B16]/80 transition-all cursor-pointer shadow-lg"
                            title={isVideoMuted ? "Unmute Sound" : "Mute Sound"}
                          >
                            {isVideoMuted ? <VolumeX className="w-4 h-4 text-[#A5B0C3]" /> : <Volume2 className="w-4 h-4 text-[#E71919]" />}
                          </button>

                          <div className="absolute bottom-10 z-50 flex items-center gap-3">
                            <button
                              onClick={() => setIntroStep('form')}
                              className="bg-[#060B16]/80 backdrop-blur-md border border-red-500/50 text-[#F8FAFC] px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(231,25,25,0.5)] hover:border-[#E71919] transition-all cursor-pointer"
                            >
                              Skip Intro &rarr;
                            </button>
                          </div>
                        </motion.div>
                      ) : introStep === 'video2' ? (
                        <motion.div
                          key="video-intro-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 z-40 bg-[#060B16] flex flex-col items-center justify-center overflow-hidden"
                        >
                          <video 
                            ref={videoRef}
                            src="/mobileIntro1.mp4" 
                            autoPlay 
                            muted={isVideoMuted}
                            playsInline 
                            onEnded={() => setIntroStep('form')}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Sound Toggle Button */}
                          <button
                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                            className="absolute top-16 right-6 z-50 bg-[#060B16]/60 backdrop-blur-md border border-white/20 text-[#F8FAFC] p-2.5 rounded-full hover:bg-[#060B16]/80 transition-all cursor-pointer shadow-lg"
                            title={isVideoMuted ? "Unmute Sound" : "Mute Sound"}
                          >
                            {isVideoMuted ? <VolumeX className="w-4 h-4 text-[#A5B0C3]" /> : <Volume2 className="w-4 h-4 text-[#E71919]" />}
                          </button>

                          <div className="absolute bottom-10 z-50 flex items-center gap-3">
                            <button
                              onClick={() => setIntroStep('form')}
                              className="bg-[#060B16]/80 backdrop-blur-md border border-red-500/50 text-[#F8FAFC] px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(231,25,25,0.5)] hover:border-[#E71919] transition-all cursor-pointer"
                            >
                              Skip Intro &rarr;
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="form-content"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="flex-1 overflow-y-auto bg-[#0a0a0a] custom-scrollbar relative"
                        >
                          {/* Floating Replay Intro Button */}
                          <div className="absolute top-16 right-4 z-30">
                            <button
                              onClick={() => setIntroStep('video1')}
                              className="bg-[#10192A]/80 backdrop-blur-md border border-[#E71919]/40 text-[#F8FAFC] px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(231,25,25,0.3)] hover:border-[#E71919] hover:bg-[#1A2639] transition-all cursor-pointer"
                            >
                              <Play className="w-3 h-3 text-[#E71919] fill-[#E71919]" /> Replay Intro
                            </button>
                          </div>
                          {/* Animated Background Gradients with Premier Red, Yellow, Orange */}
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <motion.div 
                              animate={{ 
                                opacity: [0.25, 0.5, 0.25],
                                scale: [1, 1.3, 1],
                                x: [0, 30, 0],
                                y: [0, -30, 0]
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#E71919]/40 via-[#E71919]/30 to-orange-500/30 rounded-full blur-[70px]"
                            />
                            <motion.div 
                              animate={{ 
                                opacity: [0.2, 0.45, 0.2],
                                scale: [1.3, 1, 1.3],
                                x: [0, -30, 0],
                                y: [0, 30, 0]
                              }}
                              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-yellow-500/30 via-[#E71919]/30 to-[#FF7A00]/40 rounded-full blur-[70px]"
                            />
                          </div>

                          {/* Logo Header */}
                          <div className="absolute top-14 left-0 right-0 flex justify-center z-10">
                            <Logo className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
                          </div>

                          <div className="relative w-full min-h-full p-6 pt-28 flex flex-col z-10">
                            <div className="text-center mb-6 mt-2">
                              <h3 className="text-3xl font-extrabold text-[#F8FAFC] mb-2 leading-tight">Claim Your<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_20px_rgba(231,25,25,0.4)]">Free Audit</span></h3>
                              <p className="text-[13px] text-[#A5B0C3] font-medium">Let's discuss how we can skyrocket your growth.</p>
                            </div>

                            <form className="space-y-4 flex-1 flex flex-col">
                              <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <User className="h-5 w-5 text-[#A5B0C3] group-focus-within:text-[#FF6B00] transition-colors" />
                                </div>
                                <input 
                                  type="text" 
                                  placeholder="Your Name" 
                                  className="w-full bg-[#060B16]/80 backdrop-blur-md border border-[#26354D] text-[#F8FAFC] text-[15px] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all placeholder:text-[#7C889C] shadow-inner"
                                />
                              </div>

                              <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <Mail className="h-5 w-5 text-[#A5B0C3] group-focus-within:text-[#FF6B00] transition-colors" />
                                </div>
                                <input 
                                  type="email" 
                                  placeholder="Email Address" 
                                  className="w-full bg-[#060B16]/80 backdrop-blur-md border border-[#26354D] text-[#F8FAFC] text-[15px] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all placeholder:text-[#7C889C] shadow-inner"
                                />
                              </div>

                              <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <Phone className="h-5 w-5 text-[#A5B0C3] group-focus-within:text-[#FF6B00] transition-colors" />
                                </div>
                                <input 
                                  type="tel" 
                                  placeholder="Phone Number" 
                                  className="w-full bg-[#060B16]/80 backdrop-blur-md border border-[#26354D] text-[#F8FAFC] text-[15px] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all placeholder:text-[#7C889C] shadow-inner"
                                />
                              </div>

                              <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <Building2 className="h-5 w-5 text-[#A5B0C3] group-focus-within:text-[#FF6B00] transition-colors" />
                                </div>
                                <input 
                                  type="text" 
                                  placeholder="Company URL" 
                                  className="w-full bg-[#060B16]/80 backdrop-blur-md border border-[#26354D] text-[#F8FAFC] text-[15px] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all placeholder:text-[#7C889C] shadow-inner"
                                />
                              </div>

                              <button 
                                type="button" 
                                className="w-full bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] hover:opacity-95 text-[#F8FAFC] rounded-xl py-4 text-[15px] font-bold shadow-[0_0_25px_rgba(231,25,25,0.4)] transition-all flex items-center justify-center gap-2 mt-auto cursor-pointer"
                              >
                                Get Free Strategy Plan
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </button>
                            </form>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

