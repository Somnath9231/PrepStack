import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'

const Algorithms = () => {
  const categories = [
    {
      name: 'Searching',
      description: 'Find elements efficiently in data structures',
      icon: '🔍',
      link: '/practice/algorithms/searching',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Sorting',
      description: 'Arrange data in specific order',
      icon: '📊',
      link: '/practice/algorithms/sorting',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Greedy',
      description: 'Make locally optimal choices',
      icon: '💎',
      link: '/practice/algorithms/greedy',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Recursion',
      description: 'Solve problems by breaking them down',
      icon: '🌀',
      link: '/practice/algorithms/recursion',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Dynamic Programming',
      description: 'Optimize by storing subproblem results',
      icon: '⚡',
      link: '/practice/algorithms/dynamic-programming',
      color: 'from-yellow-500 to-green-500'
    },
  ]

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          to="/practice"
          className="inline-flex items-center text-neon-blue hover:text-neon-cyan mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Practice
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Algorithms
        </motion.h1>

        {/* What are Algorithms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">What are Algorithms?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            An algorithm is a step-by-step procedure or set of rules designed to solve a problem or perform a task. 
            Think of it as a recipe: just like a recipe tells you how to cook a dish step by step, an algorithm tells 
            a computer how to solve a problem step by step.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Algorithms are the foundation of computer science. They help us write efficient code that can process data 
            quickly, find information, sort items, and solve complex problems. Every program you use relies on algorithms 
            to function.
          </p>
        </motion.div>

        {/* Why Algorithms Matter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Why Algorithms Matter in Placements</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Technical Interviews:</strong> Most companies test your algorithmic thinking and problem-solving skills</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Coding Rounds:</strong> You'll be asked to implement algorithms to solve real-world problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Efficiency:</strong> Understanding algorithms helps you write optimized code that companies value</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Problem-Solving:</strong> Strong algorithmic knowledge demonstrates your analytical thinking abilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">✓</span>
              <span><strong>Competitive Edge:</strong> Companies like Google, Amazon, and Microsoft heavily focus on algorithms</span>
            </li>
          </ul>
        </motion.div>

        {/* Algorithm Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-neon-cyan">Algorithm Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                  className={`glass rounded-xl p-8 h-full relative overflow-hidden group bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
                >
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-neon-cyan">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <motion.div
                      className="flex items-center text-neon-blue"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Learn More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm italic">
            More features, questions, and data coming soon. This platform will be continuously updated.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Algorithms
