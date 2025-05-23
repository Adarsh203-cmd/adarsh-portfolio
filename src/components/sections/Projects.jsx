// src/components/sections/Projects.jsx - Ultra Creative Design
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, ArrowRight, X, Play, Pause, Code2, Zap, Star } from 'lucide-react';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { PROJECTS } from '../../utils/constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Auto-rotate projects
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const ProjectHexagon = ({ project, index, isActive, isHovered }) => {
    const scale = isActive ? 1.1 : isHovered ? 1.05 : 1;
    const rotation = isActive ? 0 : index * 15;

    return (
      <motion.div
        className="relative"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        animate={{
          scale,
          rotate: isActive ? 0 : rotation,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onHoverStart={() => setHoveredProject(index)}
        onHoverEnd={() => setHoveredProject(null)}
      >
        {/* Hexagon Background */}
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isActive ? "#3B82F6" : "#6366F1"} />
                <stop offset="100%" stopColor={isActive ? "#1D4ED8" : "#4F46E5"} />
              </linearGradient>
              <filter id={`glow-${index}`}>
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="100,20 170,60 170,140 100,180 30,140 30,60"
              fill={`url(#gradient-${index})`}
              filter={isActive ? `url(#glow-${index})` : 'none'}
              className="transition-all duration-300"
            />
          </svg>
          
          {/* Project Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={project.image || "/api/placeholder/128/128"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Star size={16} className="text-white" />
            </motion.div>
          )}

          {/* Floating Tech Icons */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  className="absolute bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.cos(techIndex * 90 * Math.PI / 180) * 80,
                    y: Math.sin(techIndex * 90 * Math.PI / 180) * 80,
                  }}
                  transition={{ delay: techIndex * 0.1, type: "spring" }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const ProjectTimeline = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
        {index + 1}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-gray-600">{project.duration}</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" size={20} />
    </motion.div>
  );

  return (
    <section ref={containerRef} id="projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Code2 size={48} className="text-blue-600" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Creative Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my projects through an interactive journey of innovation and creativity
            </p>
            
            {/* Auto-play Control */}
            <motion.button
              onClick={() => setAutoPlay(!autoPlay)}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-medium">
                {autoPlay ? 'Pause' : 'Play'} Auto-Rotate
              </span>
            </motion.button>
          </div>
        </FadeInWhenVisible>

        {/* Main Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Hexagon Constellation */}
          <motion.div 
            className="relative h-[600px] flex items-center justify-center"
            style={{ y }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Hexagon Grid */}
            <div className="relative">
              {PROJECTS.map((project, index) => {
                const angle = (index * 360) / PROJECTS.length;
                const radius = index === currentIndex ? 0 : 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={project.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: x - 100,
                      y: y - 100,
                      zIndex: index === currentIndex ? 10 : 1,
                    }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    onClick={() => {
                      setCurrentIndex(index);
                      setAutoPlay(false);
                    }}
                  >
                    <ProjectHexagon
                      project={project}
                      index={index}
                      isActive={index === currentIndex}
                      isHovered={hoveredProject === index}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {PROJECTS.map((_, index) => {
                if (index === currentIndex) return null;
                const angle = (index * 360) / PROJECTS.length;
                const radius = 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius + 300;
                const y = Math.sin((angle * Math.PI) / 180) * radius + 300;

                return (
                  <motion.line
                    key={index}
                    x1="300"
                    y1="300"
                    x2={x}
                    y2={y}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                );
              })}
              <defs>
                <linearGradient id="connectionGradient">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="space-y-6"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {PROJECTS[currentIndex].title}
                </h3>
                {PROJECTS[currentIndex].featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{PROJECTS[currentIndex].duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{PROJECTS[currentIndex].teamSize}</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {PROJECTS[currentIndex].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {PROJECTS[currentIndex].technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => setSelectedProject(PROJECTS[currentIndex])}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Zap size={18} />
                  Explore Details
                </motion.button>
                
                <div className="flex gap-2">
                  {PROJECTS[currentIndex].liveUrl && (
                    <a
                      href={PROJECTS[currentIndex].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-700 px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-gray-200"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  
                  {PROJECTS[currentIndex].githubUrl && (
                    <a
                      href={PROJECTS[currentIndex].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Timeline */}
        <FadeInWhenVisible>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Project Timeline
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROJECTS.map((project, index) => (
                <ProjectTimeline key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-3xl relative overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                      <X size={20} />
                    </button>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-white/90">{selectedProject.duration}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                    
                    {selectedProject.highlights && (
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">✨ Key Highlights</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.highlights.map((highlight, index) => (
                            <div key={index} className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">🛠️ Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl font-medium shadow-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={20} />
                          Launch Project
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Github size={20} />
                          View Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;