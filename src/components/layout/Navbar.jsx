'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white border-b border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
            : 'bg-white border-b border-slate-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[76px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 max-w-[76%] lg:max-w-none">
              <img
                src="/logo.png"
                alt="SEPL logo"
                className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="font-sans font-700 text-[11.5px] sm:text-[13px] lg:text-[14px] leading-tight text-slate-900 tracking-[0.01em] truncate">
                  Steelfab Engineering Pvt. Ltd.
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-500 mt-0.5 tracking-[0.015em] truncate hidden sm:block">
                  AN ISO 9001:2015 Certified Company
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) =>
                item.highlight ? null : (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'nav-link-underline flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-600 rounded-xl transition-all duration-200',
                        'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/80'
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={13}
                          className={cn(
                            'transition-transform duration-200 text-slate-400',
                            activeDropdown === item.label && 'rotate-180 text-indigo-500'
                          )}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.children && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-[0_16px_36px_rgba(15,23,42,0.12)] p-2 min-w-[220px]">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-500 text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all duration-150 group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 transition-colors" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <Link
                href="/enquiry"
                className="btn-pill btn-primary hidden md:inline-flex text-[13px] py-2.5 px-5 shadow-[0_8px_20px_rgba(67,56,202,0.25)]"
              >
                Enquiry
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 border border-slate-200/80 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy-950/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[90vw] max-w-[340px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100">
                <span className="font-sans font-700 text-navy-900 text-[16px] tracking-[0.01em]">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 border border-slate-200/70"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-3">
                {NAV_ITEMS.map((item, i) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-600 text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={15}
                            className={cn(
                              'transition-transform duration-200 text-slate-400',
                              mobileExpanded === item.label && 'rotate-180 text-indigo-500'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 pl-4 border-l border-indigo-100 py-1 mb-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2.5 text-[13px] font-500 text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-[14px] font-600 rounded-xl transition-colors',
                          item.highlight
                            ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 mt-2'
                            : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="px-4 py-5 border-t border-slate-100">
                <Link
                  href="/enquiry"
                  onClick={() => setMobileOpen(false)}
                  className="btn-pill btn-primary w-full justify-center"
                >
                  Send Enquiry
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}