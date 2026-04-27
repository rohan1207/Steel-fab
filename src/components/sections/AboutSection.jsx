'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Factory, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { value: '1995', label: 'Established', icon: TrendingUp },
  { value: '3128', label: 'Sq. Meter Facility', icon: Factory },
  { value: 'ISO 9001', label: 'DNV Certified', icon: Award },
  { value: 'Global', label: 'Export Markets', icon: Globe },
]

const shortText = `SEPL was established in the year 1995. Company is managed by team of directors with vast experience and expertise in their respective fields of Operation. SEPL is an ISO 9001:2008 Certified Company for Design. Steelfab Engineering Private Ltd.

We take this opportunity to introduce ourselves as one of the largest and leading manufacturers of fluid handling System.`

const fullText = `SEPL was established in the year 1995. Company is managed by team of directors with vast experience and expertise in their respective fields of Operation. SEPL is an ISO 9001:2008 Certified Company for Design. Steelfab Engineering Private Ltd.

We take this opportunity to introduce ourselves as one of the largest and leading manufacturers of fluid handling System. Steelfab Engineering Pvt. Ltd (SEPL) came in existence in the year 1995, and since then there has been no looking back.

SEPL now has 3128 sq meter area with world class manufacturing facilities at two places. SEPL has achieved ISO 9001:2008 by DNV and also SEPL confirms to some of the highest design standard in India and world ISO, ASTM and BIS with sales volume nearly 10 cr.

Today we are leading Manufacturer, Supplier, Exporter of a wide range of Loading Arms, Unloading Arms, Loading Arms Systems, Unloading Arms Systems, Swivel Joints, Floating Suction Assemblies, Prover Tanks, Storage Tanks for Industrial applications. Our setup is situated in Pune, Maharashtra, India. Majorly we serve our products to customers in Saudi Arabia.`

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(30,27,75,0.12)]">
              <Image
                src="/steel1.jpg"
                alt="SEPL Manufacturing Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
            </div>

            

            {/* Stats grid overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3 mt-10"
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-display font-700 text-[15px] text-navy-900 leading-tight">{value}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[12px] font-600 tracking-widest uppercase text-indigo-600 mb-4">
              About Us
            </span>
            <h2 className="font-display font-700 text-[2.1rem] sm:text-[2.5rem] text-navy-900 tracking-tight leading-[1.15] mb-6">
              Three Decades of Engineering Excellence
            </h2>

            <div className="text-slate-600 text-[15px] leading-relaxed space-y-4">
              {(expanded ? fullText : shortText).split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 btn-pill btn-outline text-[13.5px]"
            >
              {expanded ? 'Read Less' : 'Read More'}
              <ArrowRight
                size={15}
                className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
              />
            </button>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/introduction" className="btn-pill btn-primary text-[13.5px]">
                Learn About SEPL
                <ArrowRight size={15} />
              </Link>
              <Link href="/about/manufacturing" className="btn-pill btn-outline text-[13.5px]">
                Our Facility
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
