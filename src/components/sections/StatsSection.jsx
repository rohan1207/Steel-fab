'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '29+', label: 'Years of Excellence', suffix: '' },
  { value: '3128', label: 'Sq. Meter Facility', suffix: '+' },
  { value: '500', label: 'Projects Completed', suffix: '+' },
  { value: '10Cr', label: 'Annual Sales Volume', suffix: '+' },
  { value: '3', label: 'Continents Served', suffix: '' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 bg-gradient-to-br from-navy-900 to-indigo-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-navy-800/50 blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="font-display font-800 text-[2.2rem] text-white leading-none mb-1.5">
                {stat.value}
                <span className="text-indigo-300">{stat.suffix}</span>
              </div>
              <div className="text-[12.5px] text-indigo-200/80 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
