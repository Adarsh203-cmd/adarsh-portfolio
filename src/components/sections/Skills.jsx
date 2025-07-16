import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Globe, Wrench, Zap, ChevronRight } from 'lucide-react';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: <Globe size={20} />,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    skills: [
      { name: "React.js", icon: "⚛️", expertise: "Advanced" },
      { name: "JavaScript", icon: "🟨", expertise: "Advanced" },
      { name: "HTML/CSS", icon: "🎨", expertise: "Expert" },
      { name: "Tailwind CSS", icon: "💨", expertise: "Advanced" },
      { name: "Responsive Design", icon: "📱", expertise: "Advanced" },
      { name: "Socket.io Client", icon: "🔌", expertise: "Intermediate" }
    ]
  },
  backend: {
    title: "Backend",
    icon: <Database size={20} />,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    skills: [
      { name: "Django", icon: "🐍", expertise: "Advanced" },
      { name: "Node.js", icon: "🟢", expertise: "Intermediate" },
      { name: "Express.js", icon: "🚀", expertise: "Intermediate" },
      { name: "REST API", icon: "🔗", expertise: "Advanced" },
      { name: "Socket.io", icon: "⚡", expertise: "Intermediate" },
      { name: "JWT Authentication", icon: "🔐", expertise: "Intermediate" },
      { name: "Firebase", icon: "🔥", expertise: "Intermediate" }
    ]
  },
  database: {
    title: "Database",
    icon: <Database size={20} />,
    color: "from-purple-500 to-violet-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    skills: [
      { name: "MySQL", icon: "🐬", expertise: "Advanced" },
      { name: "PostgreSQL", icon: "🐘", expertise: "Advanced" },
      { name: "MongoDB", icon: "🍃", expertise: "Advanced" },
      { name: "Oracle", icon: "🔴", expertise: "Intermediate" },
      { name: "SQL", icon: "📊", expertise: "Advanced" }
    ]
  },
  languages: {
    title: "Languages",
    icon: <Code size={20} />,
    color: "from-orange-500 to-red-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    skills: [
      { name: "Python", icon: "🐍", expertise: "Expert" },
      { name: "JavaScript", icon: "💛", expertise: "Advanced" },
      { name: "Java", icon: "☕", expertise: "Advanced" },
      { name: "C/C++", icon: "⚡", expertise: "Intermediate" }
    ]
  },
  tools: {
    title: "Tools",
    icon: <Wrench size={20} />,
    color: "from-teal-500 to-cyan-400",
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
    borderColor: "border-teal-200",
    skills: [
      { name: "Git & GitHub", icon: "🐙", expertise: "Advanced" },
      { name: "VS Code", icon: "💙", expertise: "Expert" },
      { name: "Postman", icon: "📮", expertise: "Advanced" },
      { name: "Cohere API", icon: "🤖", expertise: "Intermediate" }
    ]
  }
};

  const getExpertiseColor = (expertise) => {
    switch (expertise) {
      case 'Expert': return 'text-green-600 bg-green-100';
      case 'Advanced': return 'text-blue-600 bg-blue-100';
      case 'Intermediate': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My toolkit for building modern web applications
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Tabs - Mobile: Horizontal scroll, Desktop: Vertical */}
          <div className="lg:w-1/3">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 whitespace-nowrap flex-shrink-0 lg:flex-shrink lg:w-full ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={activeCategory === key ? 'text-white' : 'text-gray-500'}>
                    {category.icon}
                  </span>
                  <span className="font-medium">{category.title}</span>
                  <ChevronRight 
                    size={16} 
                    className={`ml-auto transition-transform duration-200 ${
                      activeCategory === key ? 'rotate-90' : ''
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`${skillCategories[activeCategory].bgColor} ${skillCategories[activeCategory].borderColor} border-2 rounded-2xl p-6 min-h-[300px]`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-white rounded-xl shadow-sm`}>
                    <span className="text-gray-700">
                      {skillCategories[activeCategory].icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {skillCategories[activeCategory].title} Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {skillCategories[activeCategory].skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white/90 transition-all duration-200 hover:shadow-md group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {skill.name}
                            </h4>
                          </div>
                          <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium mt-1 ${getExpertiseColor(skill.expertise)}`}>
                            {skill.expertise}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Stats */}
        <FadeInWhenVisible delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  20+
                </motion.div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  3+
                </motion.div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  2+
                </motion.div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  100%
                </motion.div>
                <div className="text-gray-300 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Skills;