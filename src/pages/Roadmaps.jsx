import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const Roadmaps = () => {
  const [expandedRoadmap, setExpandedRoadmap] = useState(null)

  const roadmaps = [
    {
      id: 'bca',
      title: 'BCA Placement Roadmap',
      description: 'Complete roadmap for BCA students targeting tech placements',
      phases: [
        { semester: 'Semester 1-2', topics: ['Programming Fundamentals', 'Basic Data Structures', 'Mathematics'] },
        { semester: 'Semester 3-4', topics: ['Advanced DSA', 'Database Management', 'Web Development Basics'] },
        { semester: 'Semester 5-6', topics: ['System Design', 'Interview Preparation', 'Mock Tests'] },
      ]
    },
    {
      id: 'btech',
      title: 'BTech Placement Roadmap',
      description: 'Comprehensive 4-year roadmap for engineering students',
      phases: [
        { semester: 'Year 1', topics: ['Programming Basics', 'Mathematics & Logic', 'Problem Solving'] },
        { semester: 'Year 2', topics: ['Core DSA', 'Object-Oriented Programming', 'Database Systems'] },
        { semester: 'Year 3', topics: ['Advanced Algorithms', 'System Design', 'Projects'] },
        { semester: 'Year 4', topics: ['Interview Prep', 'Mock Interviews', 'Resume Building'] },
      ]
    },
    {
      id: 'bba',
      title: 'BBA Placement Roadmap',
      description: 'Pathway for BBA students transitioning to tech roles',
      phases: [
        { semester: 'Phase 1', topics: ['Programming Basics', 'Logic Building', 'Basic Math'] },
        { semester: 'Phase 2', topics: ['Data Structures', 'Problem Solving', 'Aptitude'] },
        { semester: 'Phase 3', topics: ['Interview Skills', 'Technical Prep', 'Communication'] },
      ]
    },
    {
      id: 'nontech',
      title: 'Non-Tech to Tech Roadmap',
      description: 'Complete transition guide for non-technical backgrounds',
      phases: [
        { semester: 'Month 1-3', topics: ['Programming Fundamentals', 'Basic Concepts', 'Practice'] },
        { semester: 'Month 4-6', topics: ['DSA Basics', 'Projects', 'Portfolio Building'] },
        { semester: 'Month 7-9', topics: ['Advanced Topics', 'Interview Prep', 'Networking'] },
      ]
    },
    {
      id: 'starter',
      title: 'Programming Starter Roadmap',
      description: 'Begin your programming journey from scratch',
      phases: [
        { semester: 'Week 1-4', topics: ['Choose a Language', 'Basic Syntax', 'Simple Programs'] },
        { semester: 'Week 5-8', topics: ['Control Structures', 'Functions', 'Data Types'] },
        { semester: 'Week 9-12', topics: ['Projects', 'Practice Problems', 'Next Steps'] },
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
          Placement Roadmaps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Choose your path and follow a structured learning journey
        </motion.p>

        <div className="space-y-6">
          {roadmaps.map((roadmap, index) => (
            <div key={roadmap.id}>
              <AnimatedCard
                delay={index * 0.1}
                onClick={() => setExpandedRoadmap(expandedRoadmap === roadmap.id ? null : roadmap.id)}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-neon-cyan">
                      {roadmap.title}
                    </h3>
                    <p className="text-gray-400">{roadmap.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedRoadmap === roadmap.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </AnimatedCard>

              <AnimatePresence>
                {expandedRoadmap === roadmap.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-xl p-6 mt-4 ml-8">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full" />
                        <div className="ml-8 space-y-8">
                          {roadmap.phases.map((phase, phaseIndex) => (
                            <motion.div
                              key={phaseIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: phaseIndex * 0.1 }}
                              className="relative"
                            >
                              <div className="absolute -left-12 top-2 w-4 h-4 bg-neon-cyan rounded-full border-4 border-dark" />
                              <h4 className="text-xl font-semibold mb-3 text-neon-blue">
                                {phase.semester}
                              </h4>
                              <ul className="space-y-2">
                                {phase.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
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

export default Roadmaps
