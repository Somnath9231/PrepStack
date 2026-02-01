import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'

const DSADetail = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('c')

  const languages = [
    { id: 'c', name: 'DSA in C', color: 'from-blue-500 to-cyan-500' },
    { id: 'cpp', name: 'DSA in C++', color: 'from-purple-500 to-pink-500' },
    { id: 'java', name: 'DSA in Java', color: 'from-orange-500 to-red-500' },
    { id: 'python', name: 'DSA in Python', color: 'from-yellow-500 to-green-500' },
  ]

  const topics = [
    'Array', 'Stack', 'Queue', 'Linked List', 'Tree', 'Graph', 'Dynamic Programming'
  ]

  const languageContent = {
    c: {
      notes: 'C is a powerful low-level programming language perfect for understanding memory management and data structures at a fundamental level. Learning DSA in C helps you understand how data structures work under the hood.',
      topics: topics,
      videos: [
        'Introduction to Arrays in C',
        'Stack Implementation in C',
        'Queue Data Structure in C',
        'Linked Lists Explained',
        'Tree Traversal Algorithms',
        'Graph Algorithms in C',
        'Dynamic Programming Basics'
      ]
    },
    cpp: {
      notes: 'C++ combines the power of C with object-oriented programming. It\'s widely used in competitive programming and system development. Learning DSA in C++ gives you access to STL (Standard Template Library) which provides ready-made data structures.',
      topics: topics,
      videos: [
        'STL Arrays and Vectors',
        'Stack and Queue using STL',
        'Linked Lists in C++',
        'Binary Trees and BST',
        'Graph Representation',
        'DP Patterns in C++',
        'Advanced Algorithms'
      ]
    },
    java: {
      notes: 'Java is an object-oriented language used extensively in enterprise applications. Learning DSA in Java helps you understand collections framework and prepares you for backend development roles.',
      topics: topics,
      videos: [
        'Arrays and ArrayLists',
        'Stack and Queue Collections',
        'LinkedList Implementation',
        'TreeSet and TreeMap',
        'Graph Algorithms',
        'Memoization in Java',
        'Java Collections Framework'
      ]
    },
    python: {
      notes: 'Python\'s simple syntax makes it ideal for learning DSA concepts quickly. It\'s widely used in data science, web development, and automation. Python\'s built-in data structures make implementation easier.',
      topics: topics,
      videos: [
        'Lists and Arrays in Python',
        'Stack and Queue',
        'Linked Lists',
        'Binary Trees',
        'Graph Algorithms',
        'Dynamic Programming',
        'Python Data Structures'
      ]
    }
  }

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Data Structures & Algorithms
        </motion.h1>

        {/* What is DSA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">What is DSA?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Data Structures and Algorithms (DSA) are fundamental concepts in computer science. 
            <strong className="text-neon-blue"> Data Structures</strong> are ways to organize and store data efficiently, 
            while <strong className="text-neon-purple"> Algorithms</strong> are step-by-step procedures to solve problems.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Think of data structures as containers (like boxes, shelves, or filing cabinets) and algorithms as 
            instructions on how to use these containers effectively.
          </p>
        </motion.div>

        {/* Why DSA is Important */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Why is DSA Important for Placements?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Problem-Solving Skills:</strong> DSA teaches you to break down complex problems into manageable parts</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Technical Interviews:</strong> Most tech companies test DSA knowledge in coding rounds</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Efficient Code:</strong> Understanding DSA helps you write optimized, scalable code</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Career Growth:</strong> Strong DSA foundation opens doors to top tech companies</span>
            </li>
          </ul>
        </motion.div>

        {/* Topics List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Core Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg p-4 text-center border border-neon-blue/30"
              >
                <span className="text-white font-medium">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-neon-cyan">
            Choose Your Language
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedLanguage === lang.id
                    ? `bg-gradient-to-r ${lang.color} text-white shadow-lg`
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {lang.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Language Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLanguage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
              {languages.find(l => l.id === selectedLanguage)?.name}
            </h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-neon-blue">Notes</h4>
              <p className="text-gray-300 leading-relaxed">
                {languageContent[selectedLanguage].notes}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-neon-blue">Topic Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {languageContent[selectedLanguage].topics.map((topic, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-neon-blue">Video Resources</h4>
              <div className="space-y-2">
                {languageContent[selectedLanguage].videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{video}</span>
                      <span className="text-neon-cyan text-sm">Watch →</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DSADetail
