'use client'

import { useMemo, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Building2, Factory, Fuel, Pipette } from 'lucide-react'

const clientGroups = {
  'Oil & Gas': [
    'HPCL (Hindustan Petroleum Corporation Limited)',
    'BPCL (Bharat Petroleum Corporation Limited)',
    'IOCL (Indian Oil Corporation Limited)',
    'CPCL (Chennai Petroleum Corporation Limited)',
  ],
  Petrochemical: [
    'Deepak Fertilizers & Petrochemicals Corporation Ltd.',
    'Rashtriya Chemicals & Fertilizers Ltd.',
    'Gulf Petrochem India Pvt Ltd',
    'Technip Engineering and Services',
  ],
  Industrial: [
    'Honeywell Automation India Ltd',
    'Gilbarco Veeder Root Pvt Ltd',
    'Vermont Technologies Pvt Ltd',
    'Mahathi Infra Services Pvt Ltd',
  ],
}

export default function ClientsPage() {
  const [active, setActive] = useState('Oil & Gas')
  const activeClients = useMemo(() => clientGroups[active], [active])

  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
            <h1 className="font-display font-700 text-[2rem] sm:text-[2.8rem] text-navy-900 tracking-tight mb-3">
              Our Clients
            </h1>
            <p className="text-slate-600 text-[14px] sm:text-[16px] max-w-3xl">
              Trusted by major organizations across oil & gas, petrochemical and industrial sectors for fluid handling systems.
            </p>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Fuel size={18} className="text-indigo-600 mb-2" />
                <div className="text-[12px] text-slate-500 uppercase tracking-widest mb-1">Segment</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Oil & Gas</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Pipette size={18} className="text-indigo-600 mb-2" />
                <div className="text-[12px] text-slate-500 uppercase tracking-widest mb-1">Segment</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Petrochemical</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Factory size={18} className="text-indigo-600 mb-2" />
                <div className="text-[12px] text-slate-500 uppercase tracking-widest mb-1">Segment</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Industrial</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Building2 size={18} className="text-indigo-600 mb-2" />
                <div className="text-[12px] text-slate-500 uppercase tracking-widest mb-1">Relationship</div>
                <div className="font-display font-700 text-[15px] text-navy-900">Long-Term Partners</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-5">
              {Object.keys(clientGroups).map((group) => (
                <button
                  key={group}
                  onClick={() => setActive(group)}
                  className={`px-3.5 py-2 rounded-full text-[12px] sm:text-[13px] font-600 border transition-all ${
                    active === group
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {activeClients.map((client) => (
                <div
                  key={client}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 text-[13px] sm:text-[14px] text-slate-700 hover:border-indigo-200 hover:shadow-[0_10px_24px_rgba(67,56,202,0.08)] transition-all"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
