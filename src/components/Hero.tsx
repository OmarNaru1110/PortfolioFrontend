import { Github, Linkedin, Mail, MoveDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CloudPattern } from './CloudPattern';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Mount Fuji */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src="/mount-fuji.jpg"
          alt="Mount Fuji with Cherry Blossoms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6D3]/70 via-[#F5E6D3]/60 to-[#F5E6D3]"></div>
      </motion.div>

      {/* Red Sun - Japanese Flag Inspired */}
      <motion.div
        className="absolute top-24 right-12 sm:right-24 lg:right-32 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#DC143C] rounded-full shadow-2xl opacity-80"></div>
          <motion.div
            className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#DC143C] rounded-full opacity-40"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Japanese Clouds */}
      <motion.div
        className="absolute top-32 left-10 text-[#C9A875] w-64 h-20 z-10 opacity-60"
        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-[#C9A875] w-48 h-16 z-10 opacity-50"
        animate={{ x: [0, -15, 0], y: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-[#C9A875] w-56 h-20 z-10 opacity-40"
        animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          className="space-y-8 bg-[#F5E6D3]/80 backdrop-blur-sm p-8 sm:p-12 rounded-lg border-4 border-[#C9A875] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-[#DC143C] tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Welcome
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#3D2817]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Omar Elnaggar
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#DC143C] mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 1 }}
            ></motion.div>
            <motion.p
              className="text-xl sm:text-2xl text-[#5C4033]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Backend Software Engineer
            </motion.p>
          </div>

          <motion.p
            className="text-lg sm:text-xl text-[#6B5644] max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            "I build robust, dynamic and efficient backend systems"
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.a
              href="https://github.com/OmarNaru1110"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#EDE0D4] hover:bg-[#DC143C] text-[#3D2817] hover:text-[#F5E6D3] rounded-full transition-colors border-2 border-[#C9A875]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/omarnaru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#EDE0D4] hover:bg-[#DC143C] text-[#3D2817] hover:text-[#F5E6D3] rounded-full transition-colors border-2 border-[#C9A875]"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:omarnaru2002@gmail.com"
              className="p-3 bg-[#EDE0D4] hover:bg-[#DC143C] text-[#3D2817] hover:text-[#F5E6D3] rounded-full transition-colors border-2 border-[#C9A875]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC143C] hover:bg-[#B01030] text-[#F5E6D3] rounded transition-colors border-2 border-[#8B0000] shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Journey
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MoveDown size={20} />
              </motion.div>
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/163VS5FniNkM3sljwxx8USQI9-wg8FYWs/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#EDE0D4] hover:bg-[#C9A875] text-[#3D2817] rounded transition-colors border-2 border-[#C9A875] hover:border-[#DC143C] shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
