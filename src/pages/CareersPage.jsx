import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Briefcase, GraduationCap, HeartHandshake, Hammer, ShieldCheck, Users } from 'lucide-react'

const openings = [
  {
    title: 'Design Engineer - Mechanical',
    type: 'Full Time',
    location: 'Pune, Maharashtra',
    experience: '2-5 Years',
  },
  {
    title: 'Production Supervisor',
    type: 'Full Time',
    location: 'Pune, Maharashtra',
    experience: '4-8 Years',
  },
  {
    title: 'Quality Assurance Engineer',
    type: 'Full Time',
    location: 'Pune, Maharashtra',
    experience: '3-6 Years',
  },
]

const perks = [
  { label: 'Engineering-first work culture', icon: Hammer },
  { label: 'Structured learning and mentoring', icon: GraduationCap },
  { label: 'Safe and process-driven environment', icon: ShieldCheck },
  { label: 'Collaborative teams and ownership', icon: Users },
]

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-indigo-300 font-600 mb-4">
              <Briefcase size={14} />
              Careers at SEPL
            </span>
            <h1 className="font-display font-700 text-[2rem] sm:text-[3rem] leading-[1.1] tracking-tight mb-4 max-w-3xl">
              Build Industrial Systems That Matter
            </h1>
            <p className="text-indigo-100 text-[14px] sm:text-[16px] max-w-2xl leading-relaxed mb-8">
              Join a team focused on engineering, manufacturing and quality-driven execution in fluid handling solutions.
            </p>
            <Link href="/contact" className="btn-pill btn-primary inline-flex">
              Share Your Profile
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {perks.map((perk) => {
                const Icon = perk.icon
                return (
                  <div key={perk.label} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
                    <Icon size={18} className="text-indigo-600 mb-2.5" />
                    <p className="text-[12px] sm:text-[14px] text-slate-700 leading-relaxed">{perk.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex items-center gap-2 mb-5">
              <HeartHandshake size={18} className="text-indigo-600" />
              <h2 className="font-display font-700 text-[1.5rem] sm:text-[2rem] text-navy-900">Current Openings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {openings.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-200 hover:shadow-[0_10px_30px_rgba(67,56,202,0.08)] transition-all"
                >
                  <h3 className="font-display font-700 text-[17px] text-navy-900 mb-2">{role.title}</h3>
                  <div className="space-y-1.5 text-[13px] text-slate-600 mb-5">
                    <div><span className="font-600 text-slate-700">Type:</span> {role.type}</div>
                    <div><span className="font-600 text-slate-700">Location:</span> {role.location}</div>
                    <div><span className="font-600 text-slate-700">Experience:</span> {role.experience}</div>
                  </div>
                  <Link href="/contact" className="btn-pill btn-outline w-full justify-center text-[12.5px]">
                    Apply Now
                  </Link>
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
