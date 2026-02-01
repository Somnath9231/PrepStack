import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const ProgrammingLanguages = () => {
  const [expandedLanguage, setExpandedLanguage] = useState(null)

  const languages = [
    {
      id: 'c',
      name: 'C',
      icon: '🔵',
      color: 'from-blue-500 to-cyan-500',
      what: 'C is a general-purpose, procedural programming language developed in the 1970s. It\'s known for its efficiency and close-to-hardware capabilities.',
      whyExists: 'C was created to provide a high-level language that could still interact closely with hardware. It bridged the gap between assembly language and high-level languages, making system programming more accessible.',
      where: 'System programming, embedded systems, operating systems, game development, compilers',
      companies: 'Microsoft, Oracle, Intel, NVIDIA, embedded systems companies',
      why: 'Companies value C programmers for their understanding of low-level operations, memory management, and system architecture. It\'s essential for performance-critical applications.',
      roadmap: [
        'Week 1-2: Basic syntax, variables, data types',
        'Week 3-4: Control structures (if, loops)',
        'Week 5-6: Functions and arrays',
        'Week 7-8: Pointers and memory management',
        'Week 9-10: Structures and file handling',
        'Week 11-12: Practice projects'
      ]
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500',
      what: 'C++ is an extension of C with object-oriented programming features. It combines high-level abstractions with low-level control.',
      whyExists: 'C++ was created to add object-oriented features to C while maintaining its performance. It allows developers to write efficient, reusable code with modern programming paradigms.',
      where: 'Game development, system software, competitive programming, high-performance applications, desktop applications',
      companies: 'Google, Microsoft, Adobe, game studios (Unreal Engine), financial trading systems',
      why: 'C++ is crucial for roles requiring performance optimization. It\'s widely used in tech giants for building scalable systems and is a favorite in competitive programming.',
      roadmap: [
        'Week 1-2: C++ basics, OOP concepts',
        'Week 3-4: Classes and objects',
        'Week 5-6: STL (Standard Template Library)',
        'Week 7-8: Advanced OOP (inheritance, polymorphism)',
        'Week 9-10: Templates and exceptions',
        'Week 11-12: Projects and practice'
      ]
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      color: 'from-orange-500 to-red-500',
      what: 'Java is an object-oriented, platform-independent language. Write once, run anywhere (WORA) is its key feature.',
      whyExists: 'Java was created to solve the problem of platform dependency. The "write once, run anywhere" philosophy made it ideal for enterprise applications that need to run on multiple systems.',
      where: 'Enterprise applications, Android development, web applications, big data, banking systems',
      companies: 'Amazon, Google, Oracle, IBM, banks (JPMorgan, Goldman Sachs), Netflix',
      why: 'Java is the backbone of enterprise software. Companies like Amazon, Google, and banks heavily use Java. Strong job market with high demand.',
      roadmap: [
        'Week 1-2: Java basics, OOP fundamentals',
        'Week 3-4: Collections framework',
        'Week 5-6: Exception handling, I/O',
        'Week 7-8: Multithreading and concurrency',
        'Week 9-10: JDBC, networking basics',
        'Week 11-12: Spring framework basics'
      ]
    },
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      color: 'from-yellow-500 to-green-500',
      what: 'Python is a high-level, interpreted language known for its simplicity and readability. It emphasizes code readability and simplicity.',
      whyExists: 'Python was created to prioritize code readability and developer productivity. Its simple syntax allows developers to express concepts in fewer lines of code than other languages.',
      where: 'Web development, data science, AI/ML, automation, scripting, backend development',
      companies: 'Google, Facebook, Instagram, Spotify, Dropbox, NASA, Reddit',
      why: 'Python is the fastest-growing language. Companies love it for rapid development, data analysis, and AI/ML projects. High demand in startups and tech companies.',
      roadmap: [
        'Week 1-2: Python basics, data types',
        'Week 3-4: Control flow, functions',
        'Week 5-6: Data structures (lists, dicts)',
        'Week 7-8: OOP in Python, modules',
        'Week 9-10: File handling, APIs',
        'Week 11-12: Projects (web scraping, automation)'
      ]
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '🟨',
      color: 'from-yellow-400 to-orange-500',
      what: 'JavaScript is the language of the web. It\'s a versatile, high-level language that runs in browsers and on servers (Node.js).',
      whyExists: 'JavaScript was created to add interactivity to web pages. It started as a browser-only language but evolved into a full-stack solution with Node.js, enabling developers to use one language for both frontend and backend.',
      where: 'Web development, frontend/backend, mobile apps (React Native), desktop apps (Electron)',
      companies: 'Facebook, Google, Netflix, Uber, Airbnb, Microsoft, PayPal',
      why: 'JavaScript is essential for web development. Almost every company needs JavaScript developers. Full-stack opportunities are abundant.',
      roadmap: [
        'Week 1-2: JavaScript basics, DOM manipulation',
        'Week 3-4: Functions, arrays, objects',
        'Week 5-6: ES6+ features, async/await',
        'Week 7-8: Node.js basics, npm',
        'Week 9-10: React or Vue.js basics',
        'Week 11-12: Full-stack project'
      ]
    },
  ]

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Programming Languages
        </motion.h1>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">What are Programming Languages?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Programming languages are tools that allow us to communicate with computers. Just like humans use 
            languages (English, Hindi, etc.) to communicate, programmers use programming languages to give 
            instructions to computers. Each language has its own syntax (rules) and is suited for different 
            types of tasks.
          </p>
        </motion.div>

        {/* Language Cards */}
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={lang.id}>
              <AnimatedCard
                delay={index * 0.1}
                onClick={() => setExpandedLanguage(expandedLanguage === lang.id ? null : lang.id)}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{lang.icon}</span>
                    <div>
                      <h3 className="text-2xl font-semibold text-neon-cyan">{lang.name}</h3>
                      <p className="text-gray-400">Click to learn more</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedLanguage === lang.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </AnimatedCard>

              <AnimatePresence>
                {expandedLanguage === lang.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-xl p-8 mt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">📖</span> What is {lang.name}?
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{lang.what}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">💡</span> Why does it exist?
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{lang.whyExists}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">🌍</span> Where is it used?
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{lang.where}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">🏢</span> Companies using it
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{lang.companies}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">💼</span> Why do companies want it?
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{lang.why}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-neon-blue flex items-center">
                            <span className="mr-2">🗺️</span> Beginner Roadmap
                          </h4>
                          <div className="space-y-2">
                            {lang.roadmap.map((step, stepIndex) => (
                              <motion.div
                                key={stepIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: stepIndex * 0.05 }}
                                className="flex items-center text-gray-300 glass rounded-lg p-3"
                              >
                                <span className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                                {step}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgrammingLanguages
