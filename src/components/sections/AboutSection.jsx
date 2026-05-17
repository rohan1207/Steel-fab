'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Factory, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { value: '1995', label: 'Established', icon: TrendingUp },
  { value: 'ISO 9001:2015', label: 'Certified Company', icon: Award },
  { value: 'NSIC', label: 'Registered', icon: Factory } ,
  { value: 'Pune', label: 'Maharashtra, India', icon: Globe } ,
]

const MOTTO = 'Environment Friendly · Safe · Economical · Fast · Easy · Reliable'

const shortText = `SEPL was established in the year 1995. The company is managed by a team of directors with vast experience and expertise in their respective fields of operation.

SEPL is an ISO 9001:2015 certified company for design, manufacture and supply of Loading Arm Systems / Unloading Arm Systems, Independent Swivel Joints, Storage Tanks, Floating Suction Assemblies, Prover Tanks, and manufacturer of Mechanical Seal Support Systems — coolers, pressure vessels, thermosyphons and API Plan 52/53.`

const fullText = `${shortText}

SEPL is an NSIC registered company for the above products. SEPL's quality policy is to enhance customer satisfaction by supplying world-class quality products at the right time and at the right price.

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
            <h2 className="font-display font-700 text-[2rem] sm:text-[2.45rem] text-navy-900 tracking-tight leading-[1.15] mb-3">
              Welcome to Steelfab Engineering Pvt. Ltd.
            </h2>
            <p className="text-[13px] sm:text-[14px] font-600 uppercase tracking-[0.08em] text-indigo-700 mb-2">
              Steelfab Engineering
            </p>
            <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed mb-2">
              {MOTTO}
            </p>
            <p className="text-[13px] font-600 uppercase tracking-wider text-navy-800 mb-6">
              Fluid Transferring &amp; Handling Solution
            </p>

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
              <Link href="/about" className="btn-pill btn-primary text-[13.5px]">
                Learn About SEPL
                <ArrowRight size={15} />
              </Link>
              <Link href="/global" className="btn-pill btn-outline text-[13.5px]">
                Global Exports
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
