import { motion } from 'framer-motion'
import { useState } from 'react'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const Resources = () => {
  const [downloading, setDownloading] = useState(null)

  const resources = [
    {
      category: 'Resume Templates',
      items: [
        { name: 'Tech Resume Template - Modern', type: 'PDF', size: '2.1 MB' },
        { name: 'Fresher Resume Template', type: 'PDF', size: '1.8 MB' },
        { name: 'Experienced Professional Template', type: 'PDF', size: '2.3 MB' },
        { name: 'ATS-Friendly Resume Template', type: 'DOCX', size: '1.5 MB' },
      ]
    },
    {
      category: 'Cheat Sheets',
      items: [
        { name: 'DSA Cheat Sheet - Complete', type: 'PDF', size: '3.2 MB' },
        { name: 'Python Quick Reference', type: 'PDF', size: '1.1 MB' },
        { name: 'JavaScript ES6+ Cheat Sheet', type: 'PDF', size: '0.9 MB' },
        { name: 'SQL Commands Reference', type: 'PDF', size: '1.4 MB' },
        { name: 'Git Commands Cheat Sheet', type: 'PDF', size: '0.8 MB' },
      ]
    },
    {
      category: 'PDFs',
      items: [
        { name: 'Complete Placement Guide 2024', type: 'PDF', size: '5.6 MB' },
        { name: 'Interview Questions Handbook', type: 'PDF', size: '4.2 MB' },
        { name: 'System Design Basics', type: 'PDF', size: '3.8 MB' },
        { name: 'Aptitude Practice Book', type: 'PDF', size: '6.1 MB' },
      ]
    },
    {
      category: 'Interview Experiences',
      items: [
        { name: 'Google Interview Experience - 2024', type: 'PDF', size: '1.2 MB' },
        { name: 'Amazon SDE Interview - Complete Guide', type: 'PDF', size: '2.1 MB' },
        { name: 'Microsoft Interview Process', type: 'PDF', size: '1.5 MB' },
        { name: 'Startup Interview Tips & Tricks', type: 'PDF', size: '1.8 MB' },
      ]
    },
  ]

  const handleDownload = (itemName) => {
    setDownloading(itemName)
    // Simulate download
    setTimeout(() => {
      setDownloading(null)
    }, 2000)
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
          Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Download free resources to boost your preparation
        </motion.p>

        <div className="space-y-12">
          {resources.map((resource, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-neon-cyan">
                {resource.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resource.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-xl p-6 relative group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{item.type}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.type === 'PDF' ? '📄' : '📝'}
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => handleDownload(item.name)}
                      disabled={downloading === item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {downloading === item.name ? (
                        <>
                          <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </motion.svg>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources
