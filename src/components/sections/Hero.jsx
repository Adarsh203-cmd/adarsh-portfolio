import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { GradientText } from '../ui/GradientText';
import ProfilePhoto from '../../assets/images/Profile-photo.jpg';
import ResumeFile from '../../assets/resume/AdarshP-FullStack-Developer.pdf';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'AdarshP-FullStack-Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle get in touch - scroll to contact section
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle scroll indicator - scroll to about section
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container-max-width section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-2xl">
                <img
                  src={ProfilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-300/20" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            Hi, I'm <GradientText className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{PERSONAL_INFO.name}</GradientText>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-blue-700 mb-6 font-medium"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-blue-500/20"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgb(59, 130, 246)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
              const Icon = platform === 'github' ? Github : Linkedin;
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: "rgb(59, 130, 246)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-3 rounded-full hover:bg-blue-50 hover:shadow-lg"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              onClick={handleScrollDown}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;