'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { stats } from '@/consts'

interface StatProps {
  icon: React.ReactNode
  number: number
  label: string
  index: number
}

function Stat({ icon, number, label, index }: StatProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const statRef = useRef(null)
  const isInView = useInView(statRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <motion.div 
        className="h-12 w-12 [&>svg]:h-full [&>svg]:w-full"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
      >
        {icon}
      </motion.div>
      <div className="space-y-2">
        <motion.div 
          className="text-5xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {hasAnimated && (
            <Counter from={0} to={number} duration={2} delay={index * 0.1 + 0.3} />
          )}
        </motion.div>
        <motion.div 
          className="text-sm font-medium tracking-widest lg:text-base"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Custom counter component using Framer Motion
function Counter({ from, to, duration = 2, delay = 0 }) {
  const [count, setCount] = useState(from)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)

        const current = Math.floor(from + (to - from) * progress)
        setCount(current)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animation)
        }
      }

      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(animation)
      }, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [from, to, duration, delay, isInView])

  return <span ref={nodeRef}>{count.toLocaleString()}</span>
}

export default function WhyChooseUs() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-4 lg:gap-16 text-[#002244]">
          {stats.map((stat, index) => (
            <Stat 
              key={stat.label} 
              {...stat} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

