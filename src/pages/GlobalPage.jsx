'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Building2, Globe2, MapPinned, Plane, Ship, Truck } from 'lucide-react'

const regions = {
  India: ['Maharashtra', 'Gujarat', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Uttar Pradesh'],
  'Middle East': ['Saudi Arabia', 'UAE', 'Oman', 'Qatar'],
  'Export Support': ['Documentation & Compliance', 'Packaging & Dispatch', 'Technical Assistance'],
}

export default function GlobalPage() {
  const [activeRegion, setActiveRegion] = useState('India')

  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="bg-gradient-to-br from-navy-950 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-22">
            <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-indigo-300 font-600 mb-4">
              <Globe2 size={14} />
              Global Presence
            </span>
            <h1 className="font-display font-700 text-[2rem] sm:text-[3rem] leading-[1.1] tracking-tight mb-4 max-w-3xl">
              Trusted Across Regions, Built with Indian Engineering
            </h1>
            <p className="text-indigo-100 text-[14px] sm:text-[16px] max-w-3xl">
              We support clients across India and export-oriented markets with dependable fluid handling systems and project execution support.
            </p>
          </div>
        </section>

        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <MapPinned size={18} className="text-indigo-600 mb-2.5" />
                <div className="text-[12px] uppercase tracking-widest text-slate-500 mb-1">Headquarters</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Pune, India</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <Truck size={18} className="text-indigo-600 mb-2.5" />
                <div className="text-[12px] uppercase tracking-widest text-slate-500 mb-1">Domestic Delivery</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Pan India</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <Ship size={18} className="text-indigo-600 mb-2.5" />
                <div className="text-[12px] uppercase tracking-widest text-slate-500 mb-1">Export Readiness</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Middle East Focus</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <Plane size={18} className="text-indigo-600 mb-2.5" />
                <div className="text-[12px] uppercase tracking-widest text-slate-500 mb-1">Project Support</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Remote + Onsite</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-wrap gap-2.5 mb-5">
              {Object.keys(regions).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-3.5 py-2 rounded-full text-[12px] sm:text-[13px] font-600 border transition-all ${
                    activeRegion === region
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={18} className="text-indigo-600" />
                <h2 className="font-display font-700 text-[1.3rem] sm:text-[1.8rem] text-navy-900">{activeRegion}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {regions[activeRegion].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-[12px] sm:text-[14px] text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
