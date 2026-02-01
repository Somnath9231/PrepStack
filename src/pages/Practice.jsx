import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const Practice = () => {
  const categories = [
    {
      title: 'Data Structures & Algorithms',
      description: 'Practice arrays, trees, graphs, and more',
      icon: '🌳',
      link: '/practice/dsa',
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'Algorithms',
      description: 'Sorting, searching, dynamic programming',
      icon: '⚡',
      link: '/practice/algorithms',
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Programming Languages',
      description: 'Practice coding in C, C++, Java, Python',
      icon: '💻',
      link: '/programming-languages',
      color: 'from-neon-cyan to-neon-purple'
    },
    {
      title: 'Aptitude',
      description: 'Quantitative, logical, and verbal reasoning',
      icon: '🧮',
      link: '/practice/aptitude',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and common questions',
      icon: '🎯',
      link: '/interview-prep',
      color: 'from-neon-purple to-neon-cyan'
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
          Practice & Learn
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Choose a category to start practicing
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-xl p-8 h-full relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-neon-cyan">
                    {category.title}
                  </h3>
                  <p className="text-gray-400">{category.description}</p>
                  <motion.div
                    className="mt-6 flex items-center text-neon-blue"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Start Practicing</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Practice
