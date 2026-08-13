import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';
import TikTokIcon from './icons/TikTokIcon';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <footer className="relative bg-[#060B16] pt-20 md:pt-28 pb-10 md:pb-12 overflow-hidden border-t border-zinc-900">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#E71919]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E71919]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24 pb-10 md:pb-16 border-b border-[#26354D]/80"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E71919]/10 border border-[#E71919]/30 text-[#E71919] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(231,25,25,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Let's Collaborate
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] mb-6 leading-[1.1]">
              Let's build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#18C6D1] drop-shadow-[0_0_35px_rgba(231,25,25,0.4)]">
                something great.
              </span>
            </h2>
            <p className="text-[#A5B0C3] text-lg md:text-xl max-w-xl font-medium">
              We help businesses build powerful brands, attract the right audience, and achieve measurable growth.
            </p>
          </div>
          <motion.a 
            href="mailto:sales@premierdigital.lk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto justify-center group relative flex items-center gap-4 bg-[#0a0a0a] border border-[#26354D] hover:border-[#E71919]/60 px-8 py-4 rounded-full text-[#F8FAFC] font-bold tracking-wide uppercase text-sm shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all cursor-pointer"
          >
            <span>Start a project</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E71919] to-[#FF7A00] flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-[0_0_15px_rgba(231,25,25,0.4)]">
              <ArrowRight className="w-4 h-4 text-[#F8FAFC]" />
            </div>
          </motion.a>
        </motion.div>

        {/* Main Footer Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-16 md:mb-20"
        >
          
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col h-full">
            <div className="mb-8 lg:mb-10">
              <Logo className="h-16 lg:h-20" />
            </div>
            <div className="flex flex-col gap-6">
              <a href="tel:+94761668155" className="text-[#A5B0C3] hover:text-[#F8FAFC] text-base font-medium flex items-center gap-3 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#26354D] flex items-center justify-center group-hover:bg-[#E71919]/20 group-hover:border-[#E71919]/60 group-hover:text-[#E71919] transition-all">
                  <Phone className="w-4 h-4 text-[#E71919]" />
                </div>
                +94 76 166 8155
              </a>
              <a href="mailto:sales@premierdigital.lk" className="text-[#A5B0C3] hover:text-[#F8FAFC] text-base font-medium flex items-center gap-3 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#26354D] flex items-center justify-center group-hover:bg-[#E71919]/20 group-hover:border-[#E71919]/60 group-hover:text-[#E71919] transition-all">
                  <Mail className="w-4 h-4 text-[#E71919]" />
                </div>
                sales@premierdigital.lk
              </a>
              <div className="text-[#A5B0C3] text-sm md:text-base font-medium flex items-start gap-3 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0a0a0a] border border-[#26354D] flex items-center justify-center group-hover:bg-[#E71919]/20 group-hover:border-[#E71919]/60 transition-all">
                  <MapPin className="w-4 h-4 text-[#E71919]" />
                </div>
                <a href="https://maps.app.goo.gl/WFhqcrRGVM4Q4EPd9" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-[#F8FAFC] transition-colors">
                  No.165A 2/4, Sausiri Building,<br />High Level Road, Nugegoda
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6 flex flex-col h-full">
            <h4 className="text-[#F8FAFC] font-extrabold mb-8 lg:mb-10 uppercase tracking-wider text-xs text-[#E71919]">Company</h4>
            <ul className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between flex-1 lg:pb-[10px]">
              {['Home', 'About Us', 'Our Works', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Our Works' ? '/works' : link === 'Contact' ? '/contact' : '/contact'} 
                    className="text-[#A5B0C3] hover:text-[#F8FAFC] text-sm font-medium transition-colors relative group inline-block"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#E71919] transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col h-full">
            <h4 className="text-[#F8FAFC] font-extrabold mb-8 lg:mb-10 uppercase tracking-wider text-xs text-[#E71919]">Services</h4>
            <ul className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between flex-1 lg:pb-[10px]">
              {['Branding & Creative Design', 'Digital Marketing', 'Advertising Agency', 'Website Design & Dev'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-[#A5B0C3] hover:text-[#F8FAFC] text-sm font-medium transition-colors relative group inline-block">
                    {service}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#E71919] transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col h-full">
            <h4 className="text-[#F8FAFC] font-extrabold mb-8 lg:mb-10 uppercase tracking-wider text-xs text-[#E71919]">Socials</h4>
            <ul className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between flex-1 lg:pb-[10px]">
              {[
                { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/PremierDigitalPvtLtd' },
                { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/premierdigitalpvt?igsh=bGw5Mjc0ZGY3aHVk' },
                { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/premier-digital-pvt-ltd/' },
                { name: 'TikTok', icon: TikTokIcon, url: 'https://www.tiktok.com/@premier.digital2?_r=1&_t=ZS-98g5ppH5PBn' }
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#A5B0C3] hover:text-[#F8FAFC] text-sm font-medium flex items-center gap-3 transition-colors group">
                    <social.icon className="w-4 h-4 text-[#E71919] group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C889C] font-medium"
        >
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Premier Digital (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#A5B0C3] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#A5B0C3] transition-colors">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
