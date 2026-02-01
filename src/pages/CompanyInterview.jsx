import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'

const CompanyInterview = () => {
  const { company } = useParams()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const companyData = {
    tcs: {
      name: 'TCS',
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          type: 'Technical',
          question: 'What is the difference between C and C++?',
          answer: 'C is a procedural programming language, while C++ is an object-oriented extension of C. C++ supports classes, objects, inheritance, polymorphism, and encapsulation, which C does not.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of pointers in C.',
          answer: 'Pointers are variables that store memory addresses. They allow direct memory manipulation and are used for dynamic memory allocation, passing by reference, and building data structures like linked lists.'
        },
        {
          type: 'HR',
          question: 'Why do you want to join TCS?',
          answer: 'TCS is a global leader in IT services with a strong reputation for innovation and employee development. I\'m drawn to the company\'s commitment to digital transformation and the opportunity to work on diverse projects with cutting-edge technologies.'
        },
        {
          type: 'HR',
          question: 'Tell me about yourself.',
          answer: 'I am a [your background] with a passion for technology and problem-solving. I have experience in [relevant skills] and am eager to contribute to TCS\'s mission of delivering excellence in IT services.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between array and linked list?',
          answer: 'Arrays store elements in contiguous memory with fixed size, allowing O(1) access. Linked lists use dynamic memory with nodes connected by pointers, allowing O(1) insertion/deletion but O(n) access.'
        },
        {
          type: 'HR',
          question: 'What are your strengths and weaknesses?',
          answer: 'My strengths include strong problem-solving skills, adaptability, and teamwork. A weakness I\'m working on is sometimes being too detail-oriented, but I\'ve learned to balance perfectionism with efficiency.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of recursion.',
          answer: 'Recursion is a programming technique where a function calls itself to solve a problem. It consists of a base case (stopping condition) and a recursive case (function calling itself with modified parameters).'
        },
        {
          type: 'HR',
          question: 'Where do you see yourself in 5 years?',
          answer: 'In 5 years, I see myself as a senior developer or technical lead at TCS, having contributed to multiple successful projects and mentoring junior developers. I aim to specialize in [your interest area].'
        },
        {
          type: 'Technical',
          question: 'What is the difference between stack and queue?',
          answer: 'Stack follows LIFO (Last In First Out) principle with push/pop operations. Queue follows FIFO (First In First Out) with enqueue/dequeue operations. Both are linear data structures.'
        },
        {
          type: 'HR',
          question: 'How do you handle pressure and deadlines?',
          answer: 'I prioritize tasks, break down complex problems, and communicate proactively with my team. I stay organized and maintain a positive attitude, focusing on solutions rather than problems.'
        }
      ]
    },
    infosys: {
      name: 'Infosys',
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          type: 'Technical',
          question: 'What is object-oriented programming?',
          answer: 'OOP is a programming paradigm based on objects containing data (attributes) and code (methods). Key principles include encapsulation, inheritance, polymorphism, and abstraction.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of inheritance in Java.',
          answer: 'Inheritance allows a class to inherit properties and methods from another class. The child class (subclass) extends the parent class (superclass), promoting code reusability and establishing an "is-a" relationship.'
        },
        {
          type: 'HR',
          question: 'Why Infosys?',
          answer: 'Infosys is known for its innovation, global presence, and commitment to employee growth. I\'m excited about the learning opportunities and the chance to work on transformative digital projects.'
        },
        {
          type: 'HR',
          question: 'Describe a challenging project you worked on.',
          answer: 'I worked on [project description] where I faced [challenge]. I solved it by [solution], which taught me [learning]. This experience improved my [skills].'
        },
        {
          type: 'Technical',
          question: 'What is the difference between method overloading and overriding?',
          answer: 'Overloading: Same method name, different parameters in the same class. Overriding: Child class redefines a method from parent class with same signature.'
        },
        {
          type: 'HR',
          question: 'How do you stay updated with technology?',
          answer: 'I follow tech blogs, participate in online courses, contribute to open-source projects, and practice coding on platforms like LeetCode and HackerRank.'
        },
        {
          type: 'Technical',
          question: 'What is a database and explain normalization.',
          answer: 'A database stores organized data. Normalization is the process of organizing data to reduce redundancy and dependency, typically involving 1NF, 2NF, and 3NF forms.'
        },
        {
          type: 'HR',
          question: 'What motivates you?',
          answer: 'I\'m motivated by solving complex problems, continuous learning, and contributing to meaningful projects. I enjoy the challenge of turning ideas into working solutions.'
        }
      ]
    },
    wipro: {
      name: 'Wipro',
      color: 'from-green-500 to-teal-500',
      questions: [
        {
          type: 'Technical',
          question: 'What is Python and its advantages?',
          answer: 'Python is a high-level, interpreted programming language. Advantages include simple syntax, extensive libraries, versatility (web, data science, AI), and strong community support.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of exception handling.',
          answer: 'Exception handling manages runtime errors using try, except, and finally blocks. It prevents program crashes and allows graceful error recovery.'
        },
        {
          type: 'HR',
          question: 'Why Wipro?',
          answer: 'Wipro\'s reputation for innovation and global delivery model excites me. I value the company\'s focus on sustainability and digital transformation.'
        },
        {
          type: 'HR',
          question: 'How do you work in a team?',
          answer: 'I believe in clear communication, active listening, and collaborative problem-solving. I contribute my expertise while learning from teammates and ensure everyone\'s voice is heard.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between list and tuple in Python?',
          answer: 'Lists are mutable (can be modified), use square brackets, and have more methods. Tuples are immutable (cannot be modified), use parentheses, and are faster.'
        },
        {
          type: 'HR',
          question: 'Tell me about a time you failed and what you learned.',
          answer: 'I once [situation]. I failed because [reason]. I learned [lesson] and now I [improvement]. This experience made me more [quality].'
        },
        {
          type: 'Technical',
          question: 'What is SQL and explain JOIN operations.',
          answer: 'SQL is a language for managing relational databases. JOIN combines rows from multiple tables based on related columns. Types include INNER, LEFT, RIGHT, and FULL JOIN.'
        },
        {
          type: 'HR',
          question: 'What are your salary expectations?',
          answer: 'I\'m more focused on the role, growth opportunities, and learning. I\'m confident that Wipro offers competitive compensation aligned with industry standards.'
        }
      ]
    },
    accenture: {
      name: 'Accenture',
      color: 'from-pink-500 to-red-500',
      questions: [
        {
          type: 'Technical',
          question: 'What is cloud computing?',
          answer: 'Cloud computing delivers computing services (servers, storage, databases, networking) over the internet. Benefits include scalability, cost-effectiveness, and accessibility.'
        },
        {
          type: 'Technical',
          question: 'Explain REST API.',
          answer: 'REST (Representational State Transfer) is an architectural style for web services. It uses HTTP methods (GET, POST, PUT, DELETE) and follows stateless, client-server communication.'
        },
        {
          type: 'HR',
          question: 'Why Accenture?',
          answer: 'Accenture\'s leadership in digital transformation and consulting excites me. I\'m drawn to the diverse projects and the opportunity to work with cutting-edge technologies.'
        },
        {
          type: 'HR',
          question: 'How do you handle conflicting priorities?',
          answer: 'I assess urgency and importance, communicate with stakeholders, and prioritize based on business impact. I use tools like task lists and time management techniques.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between HTTP and HTTPS?',
          answer: 'HTTP is unencrypted, while HTTPS uses SSL/TLS encryption. HTTPS ensures secure data transmission and is essential for sensitive information like passwords and payments.'
        },
        {
          type: 'HR',
          question: 'Describe your ideal work environment.',
          answer: 'I thrive in collaborative, innovative environments with clear communication, opportunities for growth, and a balance between autonomy and support from leadership.'
        },
        {
          type: 'Technical',
          question: 'What is Agile methodology?',
          answer: 'Agile is an iterative development approach emphasizing collaboration, customer feedback, and adaptive planning. It includes frameworks like Scrum and Kanban.'
        },
        {
          type: 'HR',
          question: 'What makes you unique?',
          answer: 'My combination of technical skills, problem-solving ability, and strong communication sets me apart. I bring enthusiasm, adaptability, and a commitment to continuous learning.'
        }
      ]
    },
    cognizant: {
      name: 'Cognizant',
      color: 'from-blue-600 to-indigo-600',
      questions: [
        {
          type: 'Technical',
          question: 'What is JavaScript and its key features?',
          answer: 'JavaScript is a dynamic, interpreted language for web development. Key features include event-driven programming, prototype-based inheritance, and support for both functional and OOP paradigms.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of closures in JavaScript.',
          answer: 'Closures allow inner functions to access variables from outer functions even after the outer function has returned. They enable data privacy and function factories.'
        },
        {
          type: 'HR',
          question: 'Why Cognizant?',
          answer: 'Cognizant\'s focus on digital transformation and innovation aligns with my career goals. I\'m excited about the diverse projects and global opportunities.'
        },
        {
          type: 'HR',
          question: 'How do you handle feedback?',
          answer: 'I view feedback as a growth opportunity. I listen actively, ask clarifying questions, and take actionable steps to improve. I appreciate constructive criticism.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between let, const, and var?',
          answer: 'var is function-scoped and hoisted. let and const are block-scoped. const cannot be reassigned, while let can be. Both let and const are not hoisted.'
        },
        {
          type: 'HR',
          question: 'What are your hobbies?',
          answer: 'I enjoy [hobbies]. These activities help me maintain work-life balance, develop creativity, and sometimes provide insights that I apply to my professional work.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of promises in JavaScript.',
          answer: 'Promises represent the eventual completion of an asynchronous operation. They have three states: pending, fulfilled, and rejected. They help avoid callback hell.'
        },
        {
          type: 'HR',
          question: 'Why should we hire you?',
          answer: 'I bring strong technical skills, problem-solving ability, and a passion for learning. I\'m a team player who\'s committed to delivering quality work and contributing to Cognizant\'s success.'
        }
      ]
    },
    capgemini: {
      name: 'Capgemini',
      color: 'from-orange-500 to-yellow-500',
      questions: [
        {
          type: 'Technical',
          question: 'What is the difference between compilation and interpretation?',
          answer: 'Compilation converts entire code to machine language before execution (C, C++). Interpretation executes code line by line (Python, JavaScript). Compiled code is faster; interpreted code is more flexible.'
        },
        {
          type: 'Technical',
          question: 'Explain the concept of multithreading.',
          answer: 'Multithreading allows multiple threads to run concurrently within a process, sharing the same memory space. It improves performance and responsiveness in applications.'
        },
        {
          type: 'HR',
          question: 'Why Capgemini?',
          answer: 'Capgemini\'s reputation for innovation and digital transformation excites me. I\'m drawn to the collaborative culture and opportunities for professional growth.'
        },
        {
          type: 'HR',
          question: 'How do you manage your time?',
          answer: 'I use prioritization techniques, set clear goals, break tasks into manageable chunks, and use tools like calendars and to-do lists. I also avoid multitasking to maintain focus.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between process and thread?',
          answer: 'A process is an independent program with its own memory space. A thread is a lightweight unit within a process, sharing memory with other threads in the same process.'
        },
        {
          type: 'HR',
          question: 'What challenges have you overcome?',
          answer: 'I once faced [challenge]. I overcame it by [approach], which taught me resilience and problem-solving. This experience strengthened my [skills/qualities].'
        },
        {
          type: 'Technical',
          question: 'What is the OSI model?',
          answer: 'The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It standardizes network communication.'
        },
        {
          type: 'HR',
          question: 'Are you willing to relocate?',
          answer: 'Yes, I\'m flexible and willing to relocate for the right opportunity. I\'m excited about new experiences and contributing to Capgemini\'s global presence.'
        }
      ]
    },
    amazon: {
      name: 'Amazon',
      color: 'from-yellow-500 to-orange-500',
      questions: [
        {
          type: 'Technical',
          question: 'Explain the concept of data structures.',
          answer: 'Data structures are ways of organizing and storing data efficiently. Common types include arrays, linked lists, stacks, queues, trees, and graphs. Each has specific use cases and performance characteristics.'
        },
        {
          type: 'Technical',
          question: 'What is the time complexity of binary search?',
          answer: 'Binary search has O(log n) time complexity. It works on sorted arrays by repeatedly dividing the search interval in half.'
        },
        {
          type: 'HR',
          question: 'Why Amazon?',
          answer: 'Amazon\'s customer-centric approach and innovation culture inspire me. I\'m excited about the scale of problems and the opportunity to work with world-class technology.'
        },
        {
          type: 'HR',
          question: 'Tell me about a time you demonstrated leadership.',
          answer: 'I led [project/situation] where I [actions]. I motivated the team by [approach], resulting in [outcome]. This experience taught me [learnings].'
        },
        {
          type: 'Technical',
          question: 'What is the difference between BFS and DFS?',
          answer: 'BFS (Breadth-First Search) explores level by level using a queue. DFS (Depth-First Search) explores as far as possible using a stack. BFS finds shortest paths; DFS uses less memory.'
        },
        {
          type: 'HR',
          question: 'What is Amazon\'s leadership principle you relate to most?',
          answer: 'I relate most to "Customer Obsession" because I believe in understanding and solving customer problems. I always prioritize user needs in my work.'
        },
        {
          type: 'Technical',
          question: 'Explain dynamic programming.',
          answer: 'Dynamic programming solves complex problems by breaking them into simpler subproblems and storing results to avoid recomputation. It\'s used for optimization problems.'
        },
        {
          type: 'HR',
          question: 'How do you handle ambiguity?',
          answer: 'I gather information, ask clarifying questions, break down the problem, and make informed decisions. I\'m comfortable with uncertainty and adapt as situations evolve.'
        },
        {
          type: 'Technical',
          question: 'What is the difference between array and hash table?',
          answer: 'Arrays provide O(1) access by index but O(n) search. Hash tables provide O(1) average-case access/search by key using hash functions, but require more memory.'
        },
        {
          type: 'HR',
          question: 'Describe a time you disagreed with a decision.',
          answer: 'I once disagreed with [situation]. I respectfully presented my perspective with data and reasoning. We discussed and reached a better solution together.'
        },
        {
          type: 'Technical',
          question: 'What is system design and why is it important?',
          answer: 'System design is creating architecture for scalable, reliable systems. It\'s important for handling large-scale applications, ensuring performance, and planning for growth.'
        },
        {
          type: 'HR',
          question: 'What questions do you have for us?',
          answer: 'I\'d like to know about team structure, growth opportunities, current projects, and how success is measured. I\'m also curious about Amazon\'s culture and values.'
        }
      ]
    }
  }

  const data = companyData[company?.toLowerCase()] || companyData.tcs

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          to="/interview-prep"
          className="inline-flex items-center text-neon-blue hover:text-neon-cyan mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Interview Prep
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}
        >
          {data.name} Interview Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Common fresher interview questions - Technical & HR
        </motion.p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {data.questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full glass rounded-xl p-6 text-left hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'Technical' 
                        ? 'bg-neon-blue/20 text-neon-blue' 
                        : 'bg-neon-purple/20 text-neon-purple'
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-xl p-6 mt-2 ml-4 border-l-4 border-neon-cyan">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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

export default CompanyInterview
