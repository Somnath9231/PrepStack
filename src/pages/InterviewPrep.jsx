import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const InterviewPrep = () => {
  const interviewTypes = [
    {
      title: 'Technical Interview',
      description: 'Master coding rounds, system design, and technical problem-solving',
      icon: '💻',
      color: 'from-neon-blue to-neon-cyan',
      content: 'Technical interviews test your programming skills, problem-solving abilities, and knowledge of computer science fundamentals. You\'ll face coding challenges, algorithm questions, and system design problems.'
    },
    {
      title: 'HR Interview',
      description: 'Ace behavioral questions and showcase your soft skills',
      icon: '🤝',
      color: 'from-neon-purple to-neon-blue',
      content: 'HR interviews focus on your personality, communication skills, cultural fit, and behavioral competencies. Common topics include your background, strengths, weaknesses, and why you want to join the company.'
    },
    {
      title: 'Managerial Interview',
      description: 'Demonstrate leadership, decision-making, and strategic thinking',
      icon: '👔',
      color: 'from-neon-cyan to-neon-purple',
      content: 'Managerial interviews assess your leadership potential, decision-making skills, and ability to handle complex situations. You may face case studies, scenario-based questions, and discussions about team management.'
    },
  ]

  const companies = [
    { name: 'TCS', color: 'from-blue-500 to-cyan-500', icon: '🔵' },
    { name: 'Infosys', color: 'from-purple-500 to-pink-500', icon: '🟣' },
    { name: 'Wipro', color: 'from-green-500 to-teal-500', icon: '🟢' },
    { name: 'Accenture', color: 'from-pink-500 to-red-500', icon: '🔴' },
    { name: 'Cognizant', color: 'from-blue-600 to-indigo-600', icon: '🔷' },
    { name: 'Capgemini', color: 'from-orange-500 to-yellow-500', icon: '🟠' },
    { name: 'Amazon', color: 'from-yellow-500 to-orange-500', icon: '📦' },
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
          Interview Preparation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Comprehensive guides to ace every type of interview
        </motion.p>

        {/* Interview Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-neon-cyan">Interview Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviewTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-xl p-6 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-neon-cyan">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <p className="text-gray-300 text-sm">{type.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company-Wise Preparation */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-neon-cyan">Company-Wise Interview Prep</h2>
          <p className="text-gray-400 mb-8 text-center">
            Click on any company to view common interview questions and preparation tips
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {companies.map((company, index) => (
              <Link key={index} to={`/interview-prep/${company.name.toLowerCase()}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass rounded-xl p-6 text-center bg-gradient-to-br ${company.color} bg-opacity-20 border border-white/10 hover:border-white/30 transition-all cursor-pointer`}
                >
                  <div className="text-4xl mb-3">{company.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-6 text-neon-cyan">General Interview Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-neon-blue">Before the Interview</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Research the company thoroughly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Review your resume and projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Practice common questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Prepare questions to ask the interviewer</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-neon-blue">During the Interview</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Listen carefully and think before answering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Communicate your thought process clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Stay calm and confident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-cyan mr-2">✓</span>
                    <span>Ask clarifying questions when needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default InterviewPrep
