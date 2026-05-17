'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, X, ZoomIn } from 'lucide-react'
import { GALLERY_ITEMS, BENTO_LAYOUT_CLASS } from '@/lib/galleryData'

function BentoTile({ item, index, onPreview }) {
  const layoutClass = BENTO_LAYOUT_CLASS[item.layout] || BENTO_LAYOUT_CLASS.default

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 min-h-[120px] ${layoutClass}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-navy-950/10 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
        <span className="text-[10px] sm:text-[11px] font-600 uppercase tracking-wider text-indigo-300 mb-1">
          {item.category}
        </span>
        <h3 className="font-display font-700 text-white text-[14px] sm:text-[17px] leading-snug pr-8">
          {item.title}
        </h3>
      </div>

      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {onPreview && (
          <button
            type="button"
            onClick={() => onPreview(item)}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/25"
            aria-label={`Preview ${item.title}`}
          >
            <ZoomIn size={16} />
          </button>
        )}
        <Link
          href={item.href}
          className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-indigo-500/80"
          aria-label={`View ${item.title}`}
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  )
}

export default function BentoGrid({ items = GALLERY_ITEMS, enableLightbox = false }) {
  const [preview, setPreview] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 auto-rows-[130px] sm:auto-rows-[150px] lg:auto-rows-[160px]">
        {items.map((item, i) => (
          <BentoTile
            key={item.id}
            item={item}
            index={i}
            onPreview={enableLightbox ? setPreview : undefined}
          />
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20"
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={preview.image} alt={preview.title} fill className="object-cover" sizes="90vw" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy-950 to-transparent">
              <p className="text-indigo-300 text-xs uppercase tracking-wider mb-1">{preview.category}</p>
              <h3 className="font-display font-700 text-white text-xl">{preview.title}</h3>
              <Link href={preview.href} className="inline-flex items-center gap-1.5 mt-3 text-sm text-indigo-200 hover:text-white">
                View details <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
