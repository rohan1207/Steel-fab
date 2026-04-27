'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '@/lib/data'

const textVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

const imageVariants = {
  enter: { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next, paused])

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative h-[100svh] min-h-[560px] sm:min-h-[600px] max-h-[900px] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={`img-${current}`}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/96 via-navy-950/82 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(15,23,42,0.35)_0%,rgba(15,23,42,0)_55%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px]">
          {/* Tag */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-[12px] font-500 tracking-wide backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                {slide.tag}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
              className="font-display font-800 text-white text-[2.1rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.12] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_3px_18px_rgba(2,6,23,0.6)]"
            >
              {slide.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Subline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="text-slate-200 text-[14px] sm:text-[16px] leading-relaxed mb-7 sm:mb-8 max-w-[480px] drop-shadow-[0_2px_12px_rgba(2,6,23,0.55)]"
            >
              {slide.subline}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="flex flex-wrap gap-3 mb-9 sm:mb-12"
            >
              <Link href="/enquiry" className="btn-pill btn-primary">
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-pill btn-ghost-white">
                Explore Products
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="flex gap-6 sm:gap-8"
            >
              <div>
                <div className="font-display font-700 text-2xl text-white drop-shadow-[0_2px_10px_rgba(2,6,23,0.5)]">{slide.stat1.value}</div>
                <div className="text-[12px] text-slate-300 tracking-wide mt-0.5">{slide.stat1.label}</div>
              </div>
              <div className="w-px bg-white/15" />
              <div>
                <div className="font-display font-700 text-2xl text-white drop-shadow-[0_2px_10px_rgba(2,6,23,0.5)]">{slide.stat2.value}</div>
                <div className="text-[12px] text-slate-300 tracking-wide mt-0.5">{slide.stat2.label}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 36 : 16, background: i === current ? 'rgba(129,140,248,0.4)' : 'rgba(255,255,255,0.2)' }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-0 bg-indigo-400 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.5, ease: 'linear' }}
                    key={`prog-${current}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-[calc(50%-24px)] right-6 lg:right-10 z-10 hidden md:flex flex-col gap-1.5 items-center">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[3px] rounded-full transition-all duration-300 ${
              i === current ? 'h-8 bg-indigo-400' : 'h-3 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
