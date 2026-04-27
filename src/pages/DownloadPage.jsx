'use client'

import { useMemo, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Download, FileBadge2, FileText, Filter, ShieldCheck } from 'lucide-react'

const resources = [
  { title: 'Loading Arm Systems - Product Brochure', type: 'Brochure', size: '2.4 MB', updated: 'Jan 2026' },
  { title: 'Unloading Arm Systems - Technical Datasheet', type: 'Datasheet', size: '1.2 MB', updated: 'Dec 2025' },
  { title: 'Floating Suction Assemblies - Catalog', type: 'Catalog', size: '2.0 MB', updated: 'Nov 2025' },
  { title: 'Prover Tanks - Product Details', type: 'Brochure', size: '1.5 MB', updated: 'Jan 2026' },
  { title: 'Swivel Joints - Technical Datasheet', type: 'Datasheet', size: '1.1 MB', updated: 'Oct 2025' },
  { title: 'Quality & Compliance Certificate Pack', type: 'Certificate', size: '0.9 MB', updated: 'Feb 2026' },
]

const filters = ['All', 'Brochure', 'Datasheet', 'Catalog', 'Certificate']

export default function DownloadPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredResources = useMemo(
    () => (activeFilter === 'All' ? resources : resources.filter((item) => item.type === activeFilter)),
    [activeFilter]
  )

  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
            <h1 className="font-display font-700 text-[2rem] sm:text-[2.8rem] text-navy-900 tracking-tight mb-3">Downloads Center</h1>
            <p className="text-slate-600 text-[14px] sm:text-[16px] max-w-3xl">
              Access latest brochures, technical documents and compliance resources in one place.
            </p>
          </div>
        </section>

        <section className="bg-slate-50/60 min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-indigo-600" />
              <span className="text-[12px] font-600 uppercase tracking-[0.12em] text-slate-500">Filter by type</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-2 rounded-full text-[12px] sm:text-[13px] font-600 border transition-all ${
                    activeFilter === filter
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredResources.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-200 hover:shadow-[0_10px_30px_rgba(67,56,202,0.08)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-600 uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                      <FileBadge2 size={12} />
                      {item.type}
                    </span>
                    <span className="text-[11px] text-slate-500">{item.size}</span>
                  </div>
                  <h3 className="font-display font-700 text-[16px] text-navy-900 leading-snug mb-2">{item.title}</h3>
                  <p className="text-[12px] text-slate-500 mb-4">Updated: {item.updated}</p>
                  <Link href="/enquiry" className="btn-pill btn-outline w-full justify-center text-[12.5px]">
                    <Download size={14} />
                    Download
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-indigo-700 mt-0.5" />
                <p className="text-[13px] sm:text-[14px] text-indigo-900 leading-relaxed">
                  Need a project-specific document pack? Share your requirement and we will send the exact technical set.
                </p>
              </div>
              <Link href="/enquiry" className="btn-pill btn-primary text-[12.5px]">
                Request Document Pack
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
