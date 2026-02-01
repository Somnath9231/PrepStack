import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'

const DSATopics = () => {
  const topics = [
    {
      name: 'Array',
      description: 'Collection of elements in contiguous memory',
      icon: '📊',
      link: '/practice/dsa/array',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Stack',
      description: 'LIFO data structure',
      icon: '📚',
      link: '/practice/dsa/stack',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Queue',
      description: 'FIFO data structure',
      icon: '🚶',
      link: '/practice/dsa/queue',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Linked List',
      description: 'Dynamic data structure with nodes',
      icon: '🔗',
      link: '/practice/dsa/linked-list',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Tree',
      description: 'Hierarchical data structure',
      icon: '🌳',
      link: '/practice/dsa/tree',
      color: 'from-yellow-500 to-green-500'
    },
    {
      name: 'Graph',
      description: 'Network of connected nodes',
      icon: '🕸️',
      link: '/practice/dsa/graph',
      color: 'from-pink-500 to-purple-500'
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
          DSA Topics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Select a topic to learn and practice
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link key={index} to={topic.link}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`glass rounded-xl p-8 h-full relative overflow-hidden group bg-gradient-to-br ${topic.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{topic.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-neon-cyan">
                    {topic.name}
                  </h3>
                  <p className="text-gray-400">{topic.description}</p>
                  <motion.div
                    className="mt-6 flex items-center text-neon-blue"
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
      </div>
    </div>
  )
}

export default DSATopics
