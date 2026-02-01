import { motion } from 'framer-motion'
import Background3D from '../components/Background3D'
import AnimatedCard from '../components/AnimatedCard'

const About = () => {
  const values = [
    {
      title: 'Student-First Approach',
      description: 'Everything we build is designed with students in mind. We understand your challenges and create solutions that actually work.',
      icon: '🎓'
    },
    {
      title: 'Comprehensive Resources',
      description: 'From basics to advanced, we cover everything you need for placement preparation in one place.',
      icon: '📚'
    },
    {
      title: 'Practical Learning',
      description: 'Theory is important, but practice makes perfect. We emphasize hands-on learning and real-world applications.',
      icon: '💡'
    },
    {
      title: 'Community Driven',
      description: 'Built by students, for students. We continuously improve based on feedback from our community.',
      icon: '🤝'
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
          About PrepStack
        </motion.h1>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            At PrepStack, we believe that every student deserves access to quality placement preparation resources. 
            Our mission is to democratize placement preparation by providing comprehensive, free, and accessible 
            learning materials that help students crack their dream placements.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We understand that the placement journey can be overwhelming. That's why we've created a platform 
            that guides you step-by-step, from learning the fundamentals to acing technical interviews.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Our Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We envision a future where no student struggles to find quality placement preparation resources. 
            PrepStack aims to become the go-to platform for students preparing for tech placements, providing:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Structured learning paths for every background and skill level</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Comprehensive practice materials and mock tests</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Real interview experiences and company-specific guides</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>A supportive community of learners and mentors</span>
            </li>
          </ul>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            PrepStack was born out of frustration. As students ourselves, we struggled to find quality, 
            free resources for placement preparation. Everything was scattered across different platforms, 
            and premium courses were often out of reach.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            We decided to change that. PrepStack is our answer to the problem we faced - a single platform 
            where students can find everything they need: roadmaps, practice problems, resources, and guidance. 
            Built by students who understand the journey, for students who are on it.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6 text-neon-cyan text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-neon-blue">Somnath Poddar</h3>
              <p className="text-gray-400 text-sm">Coding & Development</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-neon-purple">Shrish Chandra</h3>
              <p className="text-gray-400 text-sm">UI/UX & Designing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Aarushiy Das</h3>
              <p className="text-gray-400 text-sm">Study Materials & Content</p>
            </motion.div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6 italic">
            Developed for IEM Competition
          </p>
        </motion.div>

        {/* Future Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neon-cyan">Future Roadmap</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Expand question bank with more practice problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Add interactive coding playground</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Implement user accounts and progress tracking</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Add video tutorials and live sessions</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-blue mr-3">→</span>
              <span>Build community forum for discussions</span>
            </li>
          </ul>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12 text-neon-cyan">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-neon-blue">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass rounded-xl p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Join Us on This Journey
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Whether you're just starting or preparing for interviews, PrepStack is here to support you 
            every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/roadmaps"
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              Start Learning
            </a>
            <a
              href="/contact"
              className="px-8 py-4 glass rounded-lg font-semibold text-white hover:scale-105 transition-transform border border-neon-cyan/50"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
