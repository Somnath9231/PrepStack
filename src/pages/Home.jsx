import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import EnhancedScene3D from '../components/EnhancedScene3D'
import Background3D from '../components/Background3D'
import ParticleSystem from '../components/ParticleSystem'
import AnimatedCard from '../components/AnimatedCard'
import StatCounter from '../components/StatCounter'

const Home = () => {
  const features = [
    {
      title: 'DSA & Algorithms',
      description: 'Master data structures and algorithms with comprehensive resources',
      icon: '📊',
      link: '/dsa'
    },
    {
      title: 'Programming Languages',
      description: 'Learn C, C++, Java, Python, and more with structured roadmaps',
      icon: '💻',
      link: '/programming-languages'
    },
    {
      title: 'Aptitude',
      description: 'Practice quantitative, logical, and verbal reasoning',
      icon: '🧮',
      link: '/practice'
    },
    {
      title: 'Interview Prep',
      description: 'Ace your interviews with mock tests and preparation guides',
      icon: '🎯',
      link: '/interview-prep'
    },
  ]

  const stats = [
    { value: 1000, suffix: '+', label: 'Students' },
    { value: 50, suffix: '+', label: 'Companies' },
    { value: 500, suffix: '+', label: 'Resources' },
    { value: 95, suffix: '%', label: 'Success Rate' },
  ]

  return (
    <div className="pt-20 relative">
      <Background3D />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleSystem />
        <div className="absolute inset-0 opacity-30">
          <EnhancedScene3D />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 flex justify-center"
            >
              <motion.img 
                src="/pp.png" 
                alt="PrepStack Logo" 
                className="h-64 w-64 md:h-80 md:w-80 drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Crack Placements Smarter
              </span>
              <br />
              <span className="text-white">with PrepStack</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Coding • DSA • Aptitude • Interview Prep
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/roadmaps"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform animate-glow"
              >
                Get Started
              </Link>
              <Link
                to="/practice"
                className="px-8 py-4 glass rounded-lg font-semibold text-white hover:scale-105 transition-transform border border-neon-cyan/50"
              >
                Start Practicing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-cyan">
            Trusted by Top Companies
          </h2>
          <div className="overflow-hidden">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex space-x-12 animate-scroll">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex space-x-12 flex-shrink-0">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <motion.img
                        key={num}
                        src={`/L${num}.png`}
                        alt={`Company ${num}`}
                        className="h-20 w-auto opacity-70"
                        whileHover={{
                          opacity: 1,
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(0, 217, 255, 0.3))'
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-neon-cyan"
          >
            What We Offer
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <AnimatedCard delay={index * 0.1} className="relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-neon-blue">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </AnimatedCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass rounded-xl p-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students preparing for their dream placements
            </p>
            <Link
              to="/roadmaps"
              className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              Explore Roadmaps
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
