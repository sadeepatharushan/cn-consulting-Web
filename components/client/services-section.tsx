'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '@/consts'
import { ServiceCard } from './service-card'


export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="Services" className="w-full pt-12 pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-4xl font-semibold tracking-tighter text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay:0.3 }}
        >
          Core services we offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}


