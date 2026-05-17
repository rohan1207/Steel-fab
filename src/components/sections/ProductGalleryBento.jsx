'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Images } from 'lucide-react'
import BentoGrid from '@/components/gallery/BentoGrid'
import { useGallery } from '@/hooks/useGallery'

const PREVIEW_COUNT = 7

export default function ProductGalleryBento() {
  const { items } = useGallery()
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })
  const previewItems = items.slice(0, PREVIEW_COUNT)

  return (
    <section id="gallery" className="section-pad bg-gradient-to-b from-white via-slate-50/80 to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[12px] font-600 tracking-widest uppercase text-indigo-600 mb-4">
              <Images size={14} />
              Product Gallery
            </span>
            <h2 className="font-display font-700 text-[2rem] sm:text-[2.5rem] text-navy-900 tracking-tight leading-[1.12] mb-3">
              Engineered Systems, Built in Pune
            </h2>
            <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
              A glimpse of our loading arms, swivel joints, prover tanks, and manufacturing excellence — crafted for oil, gas, chemical, and aviation applications.
            </p>
          </div>
          <Link href="/gallery" className="btn-pill btn-primary text-[13.5px] shrink-0 self-start lg:self-auto">
            View All Gallery
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <BentoGrid items={previewItems} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link href="/gallery" className="btn-pill btn-outline">
            Explore Full Gallery
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
