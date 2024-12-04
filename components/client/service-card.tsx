'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import Image from "next/image"
import { useEffect, useState } from 'react'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    image: string
  }
  index: number
  isInView: boolean
}

export function ServiceCard({ service, isInView }: ServiceCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.75, delay:0.3 }}
    >
      <Card className="rounded-none w-full max-w-sm hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative h-52 w-full">
            <Image
              alt={service.title + ' image'}
              className="object-cover"
              fill
              src={service.image}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

