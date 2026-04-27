'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Settings, Layers, Droplets, FlaskConical, RotateCcw, Wrench } from 'lucide-react'
import { PRODUCTS } from '@/lib/data'

const iconMap = {
  'loading-arms': Settings,
  'unloading-arms': Layers,
  'floating-suction': Droplets,
  'prover-tanks': FlaskConical,
  'swivel-joints': RotateCcw,
  'test-aiders': Wrench,
}

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[product.id] || Settings

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-7 hover:border-indigo-200 hover:shadow-[0_8px_40px_rgba(67,56,202,0.1)] transition-all duration-300 flex flex-col"
    >
      {product.tag && (
        <span className="absolute top-5 right-5 text-[11px] font-500 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300">
        <Icon size={18} className="text-indigo-600 sm:hidden" strokeWidth={1.75} />
        <Icon size={22} className="text-indigo-600 hidden sm:block" strokeWidth={1.75} />
      </div>

      <h3 className="font-display font-700 text-[15px] sm:text-[18px] text-navy-900 mb-2 sm:mb-3 leading-snug">
        {product.title}
      </h3>
      <p className="text-slate-500 text-[12px] sm:text-[14px] leading-relaxed flex-1 mb-4 sm:mb-6">
        {product.description}
      </p>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/enquiry"
          className="btn-pill btn-primary text-[11px] sm:text-[13px] py-2 px-3 sm:py-2.5 sm:px-5 flex-1 justify-center"
        >
          Request Quote
        </Link>
        <Link
          href={product.href}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex-shrink-0"
          aria-label={`View ${product.title}`}
        >
          <ArrowRight size={14} className="sm:hidden" />
          <ArrowRight size={16} className="hidden sm:block" />
        </Link>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.div>
  )
}

export default function ProductsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="products" className="section-pad bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[12px] font-600 tracking-widest uppercase text-indigo-600 mb-4">
            Our Product Range
          </span>
          <h2 className="font-display font-700 text-[2.2rem] sm:text-[2.6rem] text-navy-900 tracking-tight mb-4">
            Our Products
          </h2>
          <p className="text-slate-500 text-[16px] max-w-xl mx-auto leading-relaxed">
            Comprehensive fluid handling solutions engineered to the highest international standards for every industrial application.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-pill btn-outline">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
