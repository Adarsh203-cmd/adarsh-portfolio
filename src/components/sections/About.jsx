import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Heart, 
  Sparkles, 
  MapPin, 
  BookOpen,
  Target,
  Zap
} from 'lucide-react';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import AboutPhoto from '../../assets/images/About-photo.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = {
    story: {
      title: "My Story",
      icon: <BookOpen size={18} />,
      color: "from-blue-500 to-cyan-400"
    },
    passion: {
      title: "What Drives Me",
      icon: <Heart size={18} />,
      color: "from-red-500 to-pink-400"
    },
    vision: {
      title: "My Vision",
      icon: <Target size={18} />,
      color: "from-purple-500 to-violet-400"
    }
  };

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Python, Django, React specialist",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solver",
      description: "AI-powered solutions builder",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation Focused",
      description: "Modern tech enthusiast",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const tabContent = {
    story: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Hey, I'm <span className="font-semibold text-gray-900">Adarsh</span> — a passionate full-stack developer with a love for crafting clean, scalable, and meaningful digital experiences. My journey into tech started with curiosity and evolved into a full-blown drive to build solutions that matter.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I specialize in <span className="font-semibold text-blue-600">Python and Django</span> for building powerful backends, and I bring interfaces to life using <span className="font-semibold text-cyan-600">React, Tailwind CSS</span>, and modern JavaScript. I've built everything from internal business tools to smart AI-based apps — always with attention to detail and performance.
        </p>
      </div>
    ),
    passion: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          What truly drives me is the <span className="font-semibold text-red-600">intersection of creativity and logic</span>. Every line of code I write is an opportunity to solve real problems and create experiences that users genuinely love.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I'm fascinated by how technology can transform ideas into reality. Whether it's optimizing database queries for better performance or creating intuitive user interfaces, I find joy in the process of continuous learning and improvement.
        </p>
      </div>
    ),
    vision: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          When I'm not coding, you'll find me learning new tech, solving real-world problems, or helping friends turn ideas into working products. I believe in <span className="font-semibold text-purple-600">collaborative growth</span> and the power of teamwork.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I'm currently looking for opportunities where I can collaborate with great minds, keep growing, and make an impact through code. Let's build something amazing together!
        </p>
      </div>
    )
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles size={16} />
              Get to know me
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Developer, creator, and problem-solver passionate about building the future
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Section */}
          <FadeInWhenVisible>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 z-10"></div>
                <img
                  src={AboutPhoto}
                  alt="Adarsh P"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-xl shadow-lg"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-400 p-4 rounded-xl shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Content Section */}
          <FadeInWhenVisible delay={0.2}>
            <div>
              {/* Highlights Cards */}
              <div className="grid gap-4 mb-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-r ${highlight.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>


            </div>
          </FadeInWhenVisible>
        </div>

        {/* Tabbed Content Section */}
        <FadeInWhenVisible delay={0.4}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              {Object.entries(tabs).map(([key, tab]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all duration-200 ${
                    activeTab === key
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeInWhenVisible>


      </div>
    </section>
  );
};

export default About;