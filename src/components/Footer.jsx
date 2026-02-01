import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass border-t border-white/10 mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}pp.png`} alt="PrepStack" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                PrepStack
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Crack placements smarter with comprehensive preparation resources.
            </p>
          </div>

          <div>
            <h3 className="text-neon-cyan font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/roadmaps" className="text-gray-400 hover:text-neon-blue transition-colors">Roadmaps</Link></li>
              <li><Link to="/practice" className="text-gray-400 hover:text-neon-blue transition-colors">Practice</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-neon-blue transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-neon-cyan font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dsa" className="text-gray-400 hover:text-neon-blue transition-colors">DSA</Link></li>
              <li><Link to="/programming-languages" className="text-gray-400 hover:text-neon-blue transition-colors">Languages</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-neon-cyan font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-2">© 2026 PrepStack. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Under development website by Somnath's Team for IEM Competition</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
