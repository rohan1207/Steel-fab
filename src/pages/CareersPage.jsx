'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Link } from 'react-router-dom'
import { fetchJobs, trackLead } from '@/lib/api'
import { Briefcase } from 'lucide-react'

export default function CareersPage() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs().then(setJobs).catch(() => setJobs([]))
    trackLead({ type: 'career_visit', sourcePage: '/careers', subject: 'Careers page visit' }).catch(() => {})
  }, [])

  return (
    <main>
      <Navbar />
      <div className="pt-nav">
        <section className="bg-gradient-to-br from-navy-950 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <Briefcase size={20} className="text-indigo-300 mb-4" />
            <h1 className="font-display font-700 text-[2rem] sm:text-[3rem] leading-tight mb-4">Careers at SEPL</h1>
            <p className="text-indigo-100 max-w-2xl text-[14px] sm:text-[16px]">Live openings updated by HR through our admin portal.</p>
          </div>
        </section>
        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {jobs.length === 0 ? (
              <p className="text-slate-500">No active openings right now. Share your profile via enquiry.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((role) => (
                  <div key={role._id} className="rounded-2xl border bg-white p-5 hover:border-indigo-200 transition-all">
                    <h3 className="font-display font-700 text-[17px] text-navy-900 mb-2">{role.title}</h3>
                    <p className="text-[13px] text-slate-500 mb-3">{role.department} · {role.location} · {role.experience}</p>
                    <p className="text-[13px] text-slate-600 mb-4 line-clamp-3">{role.description}</p>
                    <Link
                      to={`/enquiry?job=${encodeURIComponent(role.title)}&product=Career Application`}
                      className="btn-pill btn-outline text-[12px] w-full justify-center"
                      onClick={() => trackLead({ type: 'career_application', sourcePage: '/careers', jobId: role._id, jobTitle: role.title, subject: `Apply: ${role.title}` }).catch(() => {})}
                    >
                      Apply Now
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
