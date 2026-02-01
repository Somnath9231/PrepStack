import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'

const DSATopic = () => {
  const { topic } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useState('c')

  const topicData = {
    array: {
      name: 'Array',
      definition: 'An array is a collection of elements stored in contiguous memory locations. Each element can be accessed using its index.',
      useCases: [
        'Storing multiple values of the same type',
        'Implementing other data structures (stacks, queues)',
        'Matrix operations and image processing',
        'Lookup tables and caching'
      ],
      timeComplexity: {
        access: 'O(1)',
        search: 'O(n)',
        insertion: 'O(n)',
        deletion: 'O(n)'
      },
      languages: {
        c: {
          notes: 'In C, arrays are fixed-size and stored in contiguous memory. Declaration: int arr[10]; Access: arr[index];',
          example: 'int numbers[5] = {1, 2, 3, 4, 5};'
        },
        cpp: {
          notes: 'C++ supports both C-style arrays and STL containers like vector. Vectors are dynamic and more flexible.',
          example: 'vector<int> arr = {1, 2, 3, 4, 5};'
        },
        java: {
          notes: 'Java arrays are objects. They have a fixed length. ArrayList provides dynamic arrays with more functionality.',
          example: 'int[] arr = {1, 2, 3, 4, 5};'
        },
        python: {
          notes: 'Python lists are dynamic arrays. They can hold different data types and support many built-in methods.',
          example: 'arr = [1, 2, 3, 4, 5]'
        }
      }
    },
    stack: {
      name: 'Stack',
      definition: 'A stack is a linear data structure that follows LIFO (Last In First Out) principle. Elements are added and removed from the same end (top).',
      useCases: [
        'Function call management',
        'Expression evaluation',
        'Undo/Redo operations',
        'Backtracking algorithms',
        'Syntax parsing'
      ],
      timeComplexity: {
        push: 'O(1)',
        pop: 'O(1)',
        peek: 'O(1)',
        search: 'O(n)'
      },
      languages: {
        c: {
          notes: 'Implement using arrays with a top pointer. Operations: push(), pop(), peek(), isEmpty().',
          example: 'struct Stack { int data[MAX]; int top; };'
        },
        cpp: {
          notes: 'Use STL stack container: #include <stack>. Operations: push(), pop(), top(), empty().',
          example: 'stack<int> s; s.push(10);'
        },
        java: {
          notes: 'Use java.util.Stack class or ArrayDeque. Methods: push(), pop(), peek(), isEmpty().',
          example: 'Stack<Integer> stack = new Stack<>();'
        },
        python: {
          notes: 'Use list as stack: append() for push, pop() for pop. Or use collections.deque for better performance.',
          example: 'stack = []; stack.append(10)'
        }
      }
    },
    queue: {
      name: 'Queue',
      definition: 'A queue is a linear data structure that follows FIFO (First In First Out) principle. Elements are added at the rear and removed from the front.',
      useCases: [
        'Task scheduling',
        'Breadth-First Search (BFS)',
        'Print queue management',
        'CPU scheduling',
        'Request handling in servers'
      ],
      timeComplexity: {
        enqueue: 'O(1)',
        dequeue: 'O(1)',
        front: 'O(1)',
        search: 'O(n)'
      },
      languages: {
        c: {
          notes: 'Implement using arrays with front and rear pointers. Handle circular queue for better space utilization.',
          example: 'struct Queue { int data[MAX]; int front, rear; };'
        },
        cpp: {
          notes: 'Use STL queue: #include <queue>. Operations: push(), pop(), front(), empty().',
          example: 'queue<int> q; q.push(10);'
        },
        java: {
          notes: 'Use java.util.Queue interface with LinkedList or ArrayDeque. Methods: offer(), poll(), peek().',
          example: 'Queue<Integer> queue = new LinkedList<>();'
        },
        python: {
          notes: 'Use collections.deque for efficient queue operations. Methods: append(), popleft(), appendleft(), pop().',
          example: 'from collections import deque; q = deque()'
        }
      }
    },
    'linked-list': {
      name: 'Linked List',
      definition: 'A linked list is a linear data structure where elements are stored in nodes, each containing data and a reference to the next node.',
      useCases: [
        'Dynamic memory allocation',
        'Implementing stacks and queues',
        'Graph representation',
        'Music playlists',
        'Browser history'
      ],
      timeComplexity: {
        insertion: 'O(1) at head, O(n) at end',
        deletion: 'O(1) at head, O(n) at end',
        search: 'O(n)',
        access: 'O(n)'
      },
      languages: {
        c: {
          notes: 'Define node structure with data and next pointer. Use malloc() for dynamic allocation.',
          example: 'struct Node { int data; struct Node* next; };'
        },
        cpp: {
          notes: 'Similar to C but can use classes. STL doesn\'t have linked list container, implement manually.',
          example: 'class Node { public: int data; Node* next; };'
        },
        java: {
          notes: 'Use java.util.LinkedList class. It implements List and Deque interfaces with many built-in methods.',
          example: 'LinkedList<Integer> list = new LinkedList<>();'
        },
        python: {
          notes: 'Python doesn\'t have built-in linked list. Implement using classes or use list (which is actually dynamic array).',
          example: 'class Node: def __init__(self, data): self.data = data; self.next = None'
        }
      }
    },
    tree: {
      name: 'Tree',
      definition: 'A tree is a hierarchical data structure with a root node and child nodes. Each node can have multiple children but only one parent.',
      useCases: [
        'File system representation',
        'Database indexing',
        'Decision trees',
        'Expression evaluation',
        'Organizational hierarchy'
      ],
      timeComplexity: {
        search: 'O(log n) for BST, O(n) for general',
        insertion: 'O(log n) for BST, O(1) for general',
        deletion: 'O(log n) for BST, O(n) for general',
        traversal: 'O(n)'
      },
      languages: {
        c: {
          notes: 'Define tree node with data and pointers to left/right children. Use recursion for traversal.',
          example: 'struct TreeNode { int data; struct TreeNode* left, *right; };'
        },
        cpp: {
          notes: 'Similar to C but can use classes. Implement traversal algorithms: inorder, preorder, postorder.',
          example: 'class TreeNode { public: int val; TreeNode* left, *right; };'
        },
        java: {
          notes: 'Define TreeNode class. Common operations: insert, delete, search, traverse. Use recursion extensively.',
          example: 'class TreeNode { int val; TreeNode left, right; }'
        },
        python: {
          notes: 'Define TreeNode class. Python\'s recursion limit may need adjustment for deep trees.',
          example: 'class TreeNode: def __init__(self, val): self.val = val; self.left = None; self.right = None'
        }
      }
    },
    graph: {
      name: 'Graph',
      definition: 'A graph is a collection of nodes (vertices) connected by edges. It can be directed or undirected, weighted or unweighted.',
      useCases: [
        'Social networks',
        'GPS navigation',
        'Web page linking',
        'Network routing',
        'Dependency resolution'
      ],
      timeComplexity: {
        'adjacency list': 'O(V + E)',
        'adjacency matrix': 'O(V²)',
        'BFS/DFS': 'O(V + E)',
        'shortest path': 'O((V + E) log V)'
      },
      languages: {
        c: {
          notes: 'Represent using adjacency list (array of linked lists) or adjacency matrix (2D array).',
          example: 'struct Graph { int V; struct Node** adj; };'
        },
        cpp: {
          notes: 'Use vector<vector<int>> for adjacency list. Implement BFS using queue, DFS using recursion/stack.',
          example: 'vector<vector<int>> graph(V);'
        },
        java: {
          notes: 'Use ArrayList<ArrayList<Integer>> or HashMap for adjacency list. Implement traversal algorithms.',
          example: 'ArrayList<ArrayList<Integer>> graph = new ArrayList<>();'
        },
        python: {
          notes: 'Use dictionary or list of lists. NetworkX library provides advanced graph operations.',
          example: 'graph = {0: [1, 2], 1: [0, 3], 2: [0]}'
        }
      }
    }
  }

  const data = topicData[topic?.toLowerCase()] || topicData.array
  const languages = ['c', 'cpp', 'java', 'python']
  const languageNames = { c: 'C', cpp: 'C++', java: 'Java', python: 'Python' }

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
          {data.name}
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Definition</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{data.definition}</p>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Use Cases</h2>
            <ul className="space-y-2">
              {data.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-neon-blue mr-3">•</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Time Complexity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Time Complexity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(data.timeComplexity).map(([operation, complexity]) => (
                <div key={operation} className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 capitalize mb-1">{operation}</div>
                  <div className="text-neon-cyan font-semibold">{complexity}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Implementation by Language</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {languages.map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedLanguage === lang
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'glass text-gray-300 hover:text-white'
                  }`}
                >
                  {languageNames[lang]}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLanguage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-neon-blue">
                  {languageNames[selectedLanguage]} Implementation
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-300">Notes:</h4>
                  <p className="text-gray-400">{data.languages[selectedLanguage].notes}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-300">Example:</h4>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-neon-cyan">
                    {data.languages[selectedLanguage].example}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Video Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Video Resources</h2>
            <div className="space-y-3">
              {[
                `Introduction to ${data.name}`,
                `${data.name} Implementation Tutorial`,
                `${data.name} Problems and Solutions`,
                `Advanced ${data.name} Concepts`
              ].map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="glass rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span className="text-gray-300">{title}</span>
                  <span className="text-neon-cyan text-sm">Watch →</span>
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

export default DSATopic
