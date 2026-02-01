import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Background3D from '../components/Background3D'

const AlgorithmDetail = () => {
  const { category } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useState('c')

  const algorithmData = {
    searching: {
      name: 'Searching Algorithms',
      description: 'Searching algorithms help find specific elements in a data structure efficiently.',
      types: [
        { name: 'Linear Search', complexity: 'O(n)', description: 'Check each element sequentially until found' },
        { name: 'Binary Search', complexity: 'O(log n)', description: 'Search in sorted array by dividing in half' },
        { name: 'Hash Table Search', complexity: 'O(1) average', description: 'Use hash function for constant-time lookup' }
      ],
      examples: [
        { problem: 'Find if a number exists in an array', solution: 'Use linear search for unsorted, binary search for sorted' },
        { problem: 'Find first occurrence of an element', solution: 'Modify binary search to check left side first' },
        { problem: 'Search in rotated sorted array', solution: 'Use modified binary search with pivot detection' }
      ],
      languages: {
        c: { notes: 'Implement using loops and pointers. Binary search requires sorted array.', example: 'int binarySearch(int arr[], int n, int key) { ... }' },
        cpp: { notes: 'Use STL algorithms like find(), binary_search(), or implement custom functions.', example: 'bool found = binary_search(arr.begin(), arr.end(), key);' },
        java: { notes: 'Use Arrays.binarySearch() for built-in or implement custom search methods.', example: 'int index = Arrays.binarySearch(arr, key);' },
        python: { notes: 'Use in operator, index() method, or implement binary search manually.', example: 'if key in arr: index = arr.index(key)' }
      }
    },
    sorting: {
      name: 'Sorting Algorithms',
      description: 'Sorting algorithms arrange data in a specific order (ascending or descending).',
      types: [
        { name: 'Bubble Sort', complexity: 'O(n²)', description: 'Compare adjacent elements and swap if needed' },
        { name: 'Quick Sort', complexity: 'O(n log n) average', description: 'Divide and conquer using pivot element' },
        { name: 'Merge Sort', complexity: 'O(n log n)', description: 'Divide array, sort halves, then merge' }
      ],
      examples: [
        { problem: 'Sort an array of integers', solution: 'Use Quick Sort for average case, Merge Sort for worst case guarantee' },
        { problem: 'Sort strings alphabetically', solution: 'Use comparison-based sort with string comparison' },
        { problem: 'Sort by multiple criteria', solution: 'Implement custom comparator function' }
      ],
      languages: {
        c: { notes: 'Implement sorting functions manually. Use qsort() from stdlib.h for built-in.', example: 'void quickSort(int arr[], int low, int high) { ... }' },
        cpp: { notes: 'Use STL sort() function or implement custom. sort() uses introsort (hybrid).', example: 'sort(arr.begin(), arr.end());' },
        java: { notes: 'Use Arrays.sort() or Collections.sort(). Can provide custom Comparator.', example: 'Arrays.sort(arr);' },
        python: { notes: 'Use sorted() function or list.sort() method. Both are stable and efficient.', example: 'sorted_arr = sorted(arr)' }
      }
    },
    greedy: {
      name: 'Greedy Algorithms',
      description: 'Greedy algorithms make locally optimal choices at each step to find a global optimum.',
      types: [
        { name: 'Activity Selection', complexity: 'O(n log n)', description: 'Select maximum non-overlapping activities' },
        { name: 'Huffman Coding', complexity: 'O(n log n)', description: 'Optimal prefix coding for compression' },
        { name: 'Dijkstra\'s Algorithm', complexity: 'O(V²) or O(E log V)', description: 'Find shortest path in weighted graph' }
      ],
      examples: [
        { problem: 'Minimum coins for change', solution: 'Always choose largest coin that doesn\'t exceed remaining amount' },
        { problem: 'Interval scheduling', solution: 'Sort by end time, always pick earliest ending compatible activity' },
        { problem: 'Fractional knapsack', solution: 'Sort by value/weight ratio, take items greedily' }
      ],
      languages: {
        c: { notes: 'Implement greedy logic with loops and sorting. Use structs for complex data.', example: 'void greedyActivitySelection(Activity arr[], int n) { ... }' },
        cpp: { notes: 'Use priority_queue for efficient greedy selection. STL algorithms help.', example: 'priority_queue<int> pq; pq.push(item);' },
        java: { notes: 'Use PriorityQueue for greedy selection. Comparator helps with custom ordering.', example: 'PriorityQueue<Integer> pq = new PriorityQueue<>();' },
        python: { notes: 'Use heapq module for priority queue. List comprehensions simplify greedy logic.', example: 'import heapq; heapq.heappush(pq, item)' }
      }
    },
    recursion: {
      name: 'Recursion',
      description: 'Recursion is a technique where a function calls itself to solve smaller instances of the same problem.',
      types: [
        { name: 'Tail Recursion', complexity: 'O(n)', description: 'Recursive call is the last operation' },
        { name: 'Tree Traversal', complexity: 'O(n)', description: 'Visit all nodes using recursive calls' },
        { name: 'Backtracking', complexity: 'O(2^n)', description: 'Try all possibilities and backtrack if needed' }
      ],
      examples: [
        { problem: 'Calculate factorial', solution: 'fact(n) = n * fact(n-1) with base case fact(0) = 1' },
        { problem: 'Fibonacci sequence', solution: 'fib(n) = fib(n-1) + fib(n-2) with base cases' },
        { problem: 'Tower of Hanoi', solution: 'Move n-1 disks to aux, move largest, then move n-1 to destination' }
      ],
      languages: {
        c: { notes: 'Define recursive function with base case. Watch for stack overflow with deep recursion.', example: 'int factorial(int n) { if(n <= 1) return 1; return n * factorial(n-1); }' },
        cpp: { notes: 'Similar to C. Can use memoization to optimize. Consider iterative solutions for performance.', example: 'int fib(int n) { if(n <= 1) return n; return fib(n-1) + fib(n-2); }' },
        java: { notes: 'Recursion works well with method calls. Use memoization (HashMap) to cache results.', example: 'int fact(int n) { if(n <= 1) return 1; return n * fact(n-1); }' },
        python: { notes: 'Python has recursion limit (default 1000). Use sys.setrecursionlimit() if needed. Memoization with @lru_cache.', example: 'def fact(n): return 1 if n <= 1 else n * fact(n-1)' }
      }
    },
    'dynamic-programming': {
      name: 'Dynamic Programming',
      description: 'Dynamic Programming optimizes recursive solutions by storing results of subproblems to avoid recomputation.',
      types: [
        { name: 'Memoization', complexity: 'O(n)', description: 'Top-down approach with caching' },
        { name: 'Tabulation', complexity: 'O(n)', description: 'Bottom-up approach with table filling' },
        { name: 'State Transition', complexity: 'Varies', description: 'Define states and transitions between them' }
      ],
      examples: [
        { problem: 'Fibonacci with DP', solution: 'Store computed values in array to avoid redundant calculations' },
        { problem: 'Longest Common Subsequence', solution: 'Build 2D table comparing characters of both strings' },
        { problem: '0/1 Knapsack', solution: 'For each item, decide to include or exclude based on previous states' }
      ],
      languages: {
        c: { notes: 'Use arrays for memoization table. Initialize properly. Watch for memory allocation.', example: 'int dp[MAX]; int fib(int n) { if(dp[n] != -1) return dp[n]; return dp[n] = fib(n-1) + fib(n-2); }' },
        cpp: { notes: 'Use vector for dynamic sizing. Can use map for sparse memoization. Clear initialization important.', example: 'vector<int> dp(n+1, -1); int fib(int n) { ... }' },
        java: { notes: 'Use ArrayList or HashMap for memoization. Initialize with -1 or null. Type safety helps.', example: 'int[] dp = new int[n+1]; Arrays.fill(dp, -1);' },
        python: { notes: 'Use list or dict for memoization. @lru_cache decorator simplifies memoization. List comprehensions for tabulation.', example: 'dp = [-1] * (n+1); def fib(n): ...' }
      }
    }
  }

  const data = algorithmData[category?.toLowerCase()] || algorithmData.searching
  const languages = ['c', 'cpp', 'java', 'python']
  const languageNames = { c: 'C', cpp: 'C++', java: 'Java', python: 'Python' }

  return (
    <div className="pt-20 min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          to="/practice/algorithms"
          className="inline-flex items-center text-neon-blue hover:text-neon-cyan mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Algorithms
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
            <p className="text-gray-300 text-lg leading-relaxed">{data.description}</p>
          </motion.div>

          {/* Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Types</h2>
            <div className="space-y-4">
              {data.types.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                    <span className="text-neon-cyan text-sm font-mono">{type.complexity}</span>
                  </div>
                  <p className="text-gray-400">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neon-cyan">Example Problems</h2>
            <div className="space-y-3">
              {data.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <p className="text-gray-300 mb-2"><strong className="text-neon-blue">Problem:</strong> {example.problem}</p>
                  <p className="text-gray-400"><strong className="text-neon-purple">Solution:</strong> {example.solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Language Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
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

export default AlgorithmDetail
