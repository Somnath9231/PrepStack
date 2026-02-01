import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'

const Aptitude = () => {
  const sections = [
    {
      name: 'Quantitative Aptitude',
      description: 'Mathematical problem-solving and numerical ability',
      icon: '🔢',
      link: '/practice/aptitude/quantitative',
      color: 'from-blue-500 to-cyan-500',
      topics: ['Arithmetic', 'Algebra', 'Geometry', 'Number Systems', 'Percentages', 'Ratios']
    },
    {
      name: 'Logical Reasoning',
      description: 'Analytical thinking and pattern recognition',
      icon: '🧩',
      link: '/practice/aptitude/logical',
      color: 'from-purple-500 to-pink-500',
      topics: ['Pattern Recognition', 'Sequence & Series', 'Logical Puzzles', 'Syllogisms', 'Blood Relations']
    },
    {
      name: 'Verbal Ability',
      description: 'Language skills and communication',
      icon: '📝',
      link: '/practice/aptitude/verbal',
      color: 'from-green-500 to-teal-500',
      topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Synonyms & Antonyms', 'Sentence Correction']
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
          Aptitude Preparation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Master quantitative, logical, and verbal reasoning skills
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Link key={index} to={section.link}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                className={`glass rounded-xl p-8 h-full relative overflow-hidden group bg-gradient-to-br ${section.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-neon-cyan">
                    {section.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {section.topics.slice(0, 3).map((topic, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                        {topic}
                      </span>
                    ))}
                    {section.topics.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                        +{section.topics.length - 3} more
                      </span>
                    )}
                  </div>
                  <motion.div
                    className="flex items-center text-neon-blue"
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

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm italic">
            More features, questions, and data coming soon. This platform will be continuously updated.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Aptitude
