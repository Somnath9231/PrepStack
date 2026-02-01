import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'

const AptitudeDetail = () => {
  const { section } = useParams()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const aptitudeData = {
    quantitative: {
      name: 'Quantitative Aptitude',
      description: 'Quantitative aptitude tests your mathematical skills, numerical ability, and problem-solving capabilities. It\'s crucial for technical roles and competitive exams.',
      whatItTests: 'Tests your ability to work with numbers, solve mathematical problems, understand data, and apply mathematical concepts to real-world scenarios.',
      questionTypes: [
        {
          type: 'Arithmetic',
          examples: [
            {
              question: 'If 15% of a number is 45, what is 30% of that number?',
              solution: 'Let the number be x. 15% of x = 45, so x = 45/0.15 = 300. Therefore, 30% of 300 = 90.'
            },
            {
              question: 'A train travels 240 km in 3 hours. What is its average speed?',
              solution: 'Average speed = Total distance / Total time = 240 km / 3 hours = 80 km/h'
            }
          ]
        },
        {
          type: 'Algebra',
          examples: [
            {
              question: 'Solve for x: 3x + 7 = 22',
              solution: '3x + 7 = 22 → 3x = 22 - 7 = 15 → x = 15/3 = 5'
            },
            {
              question: 'If x² - 5x + 6 = 0, find the values of x.',
              solution: 'Factorizing: (x-2)(x-3) = 0, so x = 2 or x = 3'
            }
          ]
        },
        {
          type: 'Geometry',
          examples: [
            {
              question: 'Find the area of a circle with radius 7 cm.',
              solution: 'Area = πr² = π × 7² = 49π ≈ 153.94 cm²'
            },
            {
              question: 'A rectangle has length 10 cm and width 6 cm. Find its perimeter.',
              solution: 'Perimeter = 2(length + width) = 2(10 + 6) = 2 × 16 = 32 cm'
            }
          ]
        }
      ]
    },
    logical: {
      name: 'Logical Reasoning',
      description: 'Logical reasoning evaluates your ability to think critically, recognize patterns, and solve problems using logic and reasoning.',
      whatItTests: 'Tests your analytical thinking, pattern recognition, ability to draw conclusions, and solve puzzles using logical deduction.',
      questionTypes: [
        {
          type: 'Pattern Recognition',
          examples: [
            {
              question: 'What comes next: 2, 6, 12, 20, 30, ?',
              solution: 'Pattern: +4, +6, +8, +10, so next is +12. Answer: 42'
            },
            {
              question: 'Complete: A, C, E, G, ?',
              solution: 'Pattern: Skip one letter. A→C→E→G→I. Answer: I'
            }
          ]
        },
        {
          type: 'Logical Puzzles',
          examples: [
            {
              question: 'All roses are flowers. Some flowers fade quickly. Therefore:',
              solution: 'Some roses may fade quickly (since some flowers fade and roses are flowers)'
            },
            {
              question: 'If all cats are animals, and some animals are pets, then:',
              solution: 'Some cats may be pets (but not necessarily all)'
            }
          ]
        },
        {
          type: 'Sequence & Series',
          examples: [
            {
              question: 'Find the next number: 1, 4, 9, 16, 25, ?',
              solution: 'Pattern: Perfect squares. 1², 2², 3², 4², 5², so next is 6² = 36'
            },
            {
              question: 'What comes next: 5, 10, 20, 40, ?',
              solution: 'Pattern: Multiply by 2. 5×2=10, 10×2=20, 20×2=40, so next is 40×2=80'
            }
          ]
        }
      ]
    },
    verbal: {
      name: 'Verbal Ability',
      description: 'Verbal ability tests your language skills, vocabulary, grammar, and comprehension. Essential for communication roles and general aptitude.',
      whatItTests: 'Tests your command of language, reading comprehension, vocabulary, grammar rules, and ability to understand and express ideas clearly.',
      questionTypes: [
        {
          type: 'Reading Comprehension',
          examples: [
            {
              question: 'What is the main idea of the passage?',
              solution: 'Read the entire passage carefully, identify the central theme, and select the option that best summarizes it.'
            },
            {
              question: 'What can be inferred from the passage?',
              solution: 'Look for implied meanings and conclusions that can be drawn from the given information.'
            }
          ]
        },
        {
          type: 'Grammar',
          examples: [
            {
              question: 'Choose the correct sentence: A) He don\'t like it. B) He doesn\'t like it.',
              solution: 'Answer: B) "He doesn\'t like it" is correct. Third person singular requires "doesn\'t" not "don\'t"'
            },
            {
              question: 'Identify the error: "The team are playing well."',
              solution: 'Error: "team" is singular, so it should be "The team is playing well."'
            }
          ]
        },
        {
          type: 'Vocabulary',
          examples: [
            {
              question: 'What is the synonym of "abundant"?',
              solution: 'Synonyms: plentiful, copious, ample, profuse. Antonym: scarce'
            },
            {
              question: 'Choose the word opposite in meaning to "benevolent":',
              solution: 'Benevolent means kind/charitable. Opposite: malevolent, cruel, harsh'
            }
          ]
        }
      ]
    }
  }

  const data = aptitudeData[section?.toLowerCase()] || aptitudeData.quantitative

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          to="/practice/aptitude"
          className="inline-flex items-center text-neon-blue hover:text-neon-cyan mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Aptitude
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          {data.name}
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">{data.description}</p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-neon-cyan">What It Tests</h3>
              <p className="text-gray-300">{data.whatItTests}</p>
            </div>
          </motion.div>

          {/* Question Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-neon-cyan">Common Question Types</h2>
            <div className="space-y-4">
              {data.questionTypes.map((qType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-neon-blue">{qType.type}</h3>
                  <div className="space-y-4">
                    {qType.examples.map((example, exIndex) => (
                      <motion.button
                        key={exIndex}
                        onClick={() => setExpandedIndex(expandedIndex === `${index}-${exIndex}` ? null : `${index}-${exIndex}`)}
                        className="w-full text-left glass rounded-lg p-4 hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold mb-1">{example.question}</p>
                            <p className="text-gray-400 text-sm">Click to see solution</p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedIndex === `${index}-${exIndex}` ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                        <AnimatePresence>
                          {expandedIndex === `${index}-${exIndex}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-gray-300"><strong className="text-neon-purple">Solution:</strong> {example.solution}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm italic">
              More features, questions, and data coming soon. This platform will be continuously updated.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AptitudeDetail
