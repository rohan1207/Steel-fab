'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Calendar, Building2, Globe, Settings, Truck } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/data'

const iconMap = {
  shield: Shield,
  calendar: Calendar,
  building: Building2,
  globe: Globe,
  settings: Settings,
  truck: Truck,
}

function FeatureCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = iconMap[item.icon] || Shield

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col sm:flex-row gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl hover:bg-indigo-50/50 transition-colors duration-300"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-100 group-hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
          <Icon size={18} className="text-indigo-600 group-hover:text-white transition-colors duration-300 sm:hidden" strokeWidth={1.75} />
          <Icon size={21} className="text-indigo-600 group-hover:text-white transition-colors duration-300 hidden sm:block" strokeWidth={1.75} />
        </div>
      </div>
      <div>
        <h3 className="font-display font-700 text-[14px] sm:text-[16px] text-navy-900 mb-1.5 sm:mb-2">{item.title}</h3>
        <p className="text-slate-500 text-[12px] sm:text-[14px] leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="section-pad bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-[12px] font-600 tracking-widest uppercase text-indigo-600 mb-4">
              Why SEPL
            </span>
            <h2 className="font-display font-700 text-[2.1rem] sm:text-[2.5rem] text-navy-900 tracking-tight leading-[1.15] mb-6">
              Why Choose Us
            </h2>
            <p className="text-slate-500 text-[15.5px] leading-relaxed mb-8 max-w-md">
              With nearly three decades of engineering expertise, we deliver fluid handling systems that set the industry benchmark for quality, reliability, and performance.
            </p>

            {/* Accent Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-indigo-900 p-7 text-white">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-600/30 blur-3xl" />
              <div className="relative z-10">
                <div className="font-display font-700 text-[2rem] text-white mb-1">ISO 9001:2008</div>
                <div className="text-indigo-200 text-[14px] mb-4">Certified by DNV — Design, Manufacturing & Supply</div>
                <div className="flex gap-5">
                  <div>
                    <div className="font-600 text-[1.4rem] text-white">ISO</div>
                    <div className="text-[11px] text-indigo-300">Standards</div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="font-600 text-[1.4rem] text-white">ASTM</div>
                    <div className="text-[11px] text-indigo-300">Design</div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="font-600 text-[1.4rem] text-white">BIS</div>
                    <div className="text-[11px] text-indigo-300">Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-1 sm:gap-0">
            {WHY_CHOOSE_US.map((item, i) => (
              <FeatureCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
