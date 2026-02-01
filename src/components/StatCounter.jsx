import { motion, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

const StatCounter = ({ end, suffix = '' }) => {
  const count = useMotionValue(0)
  const rounded = useSpring(count, { damping: 50, stiffness: 100 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    count.set(end)
  }, [count, end])

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(Math.floor(latest))
  })

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default StatCounter
