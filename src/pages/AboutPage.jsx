import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Globe2,
  Settings2,
  ShieldCheck,
  Users2,
  Wrench,
} from 'lucide-react'

const capabilityCards = [
  {
    title: 'Design & Engineering',
    description:
      'Application-focused engineering for loading, unloading and fluid transfer systems aligned to operating conditions.',
    icon: Settings2,
  },
  {
    title: 'Manufacturing Excellence',
    description:
      'Process-driven fabrication and quality checkpoints across every stage of production for consistent performance.',
    icon: Factory,
  },
  {
    title: 'Quality & Compliance',
    description:
      'Strong quality systems with standards-oriented manufacturing practices for dependable and traceable output.',
    icon: ShieldCheck,
  },
  {
    title: 'After-Sales Support',
    description:
      'Responsive support for installation guidance, maintenance workflows, upgrades and long-term operational reliability.',
    icon: Wrench,
  },
]

const milestones = [
  { year: '1995', title: 'Company Founded', detail: 'Established in Pune with a clear focus on engineered fluid handling systems.' },
  { year: '2004', title: 'Facility Expansion', detail: 'Scaled manufacturing capacity to support larger industrial projects.' },
  { year: '2012', title: 'Standards Maturity', detail: 'Strengthened quality frameworks and process consistency across product lines.' },
  { year: '2020+', title: 'Pan-Industry Delivery', detail: 'Serving oil, chemical, terminal and process industries with customized solutions.' },
]

const values = [
  'Engineering-led decision making',
  'Safety-first design principles',
  'Long-life, maintainable products',
  'Transparent customer communication',
  'Continuous process improvement',
  'Reliable project delivery',
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(129,140,248,0.18)_0%,rgba(129,140,248,0)_44%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
            <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-indigo-300 font-600 mb-4">
              <BadgeCheck size={14} />
              About SEPL
            </span>
            <h1 className="font-display font-700 text-[2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.08] tracking-tight max-w-4xl mb-5">
              Engineering Reliable Fluid Handling Systems Since 1995
            </h1>
            <p className="text-indigo-100 text-[14px] sm:text-[17px] leading-relaxed max-w-3xl mb-8">
              Steelfab Engineering Pvt. Ltd. is a Pune-based manufacturer specializing in loading arms, unloading arms,
              swivel joints, floating suction assemblies, prover tanks and allied engineered systems for industrial fluid transfer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/enquiry" className="btn-pill btn-primary">
                Discuss Your Requirement
                <ArrowRight size={15} />
              </Link>
              <Link href="/products" className="btn-pill btn-ghost-white">
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">Established</div>
                <div className="font-display font-700 text-[1.3rem] sm:text-[1.8rem] text-navy-900">1995</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">Core Focus</div>
                <div className="font-display font-700 text-[1rem] sm:text-[1.2rem] text-navy-900">Fluid Handling Systems</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">Location</div>
                <div className="font-display font-700 text-[1rem] sm:text-[1.2rem] text-navy-900">Pune, Maharashtra</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">Approach</div>
                <div className="font-display font-700 text-[1rem] sm:text-[1.2rem] text-navy-900">Quality + Reliability</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-3xl mb-8">
              <h2 className="font-display font-700 text-[1.7rem] sm:text-[2.3rem] text-navy-900 tracking-tight mb-3">
                Who We Are
              </h2>
              <p className="text-slate-600 text-[14px] sm:text-[15.5px] leading-relaxed">
                We combine practical field understanding with engineering depth to deliver systems that are easy to operate,
                safer in daily use, and built for long service life. Our solutions are designed to reduce downtime,
                improve productivity and support compliance-focused operations.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {capabilityCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 hover:border-indigo-200 hover:shadow-[0_12px_28px_rgba(67,56,202,0.09)] transition-all duration-250"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon size={18} className="text-indigo-600" />
                    </div>
                    <h3 className="font-display font-700 text-[14px] sm:text-[17px] text-navy-900 mb-2">{card.title}</h3>
                    <p className="text-[12px] sm:text-[14px] text-slate-600 leading-relaxed">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Users2 size={18} className="text-indigo-600" />
                  <h3 className="font-display font-700 text-[1.2rem] sm:text-[1.5rem] text-navy-900">Our Core Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {values.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] sm:text-[13.5px] text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 size={18} className="text-indigo-600" />
                  <h3 className="font-display font-700 text-[1.2rem] sm:text-[1.5rem] text-navy-900">Industry Coverage</h3>
                </div>
                <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed mb-4">
                  Our systems serve petroleum, chemical, terminal and process sectors with a strong focus on safety, handling efficiency
                  and long-term operational stability in critical fluid transfer applications.
                </p>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 px-4 py-3">
                  <div className="text-[12px] sm:text-[13.5px] text-indigo-800 leading-relaxed">
                    We work closely with operations and project teams to align configuration, material compatibility and performance
                    requirements to actual site conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="font-display font-700 text-[1.7rem] sm:text-[2.3rem] text-navy-900 tracking-tight mb-6">
              Journey & Growth
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 hover:border-indigo-200 transition-colors"
                >
                  <div className="font-display text-[1.1rem] sm:text-[1.4rem] font-700 text-indigo-700 mb-1">{item.year}</div>
                  <div className="text-[13px] sm:text-[15px] font-600 text-navy-900 mb-2">{item.title}</div>
                  <p className="text-[12px] sm:text-[13.5px] text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
            <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-indigo-900 text-white p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <h3 className="font-display font-700 text-[1.3rem] sm:text-[1.8rem] mb-2">
                  Looking for the right fluid handling solution?
                </h3>
                <p className="text-indigo-100 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl">
                  Share your process details with us and our engineering team will recommend a practical and reliable configuration.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link href="/enquiry" className="btn-pill btn-primary w-full sm:w-auto justify-center">
                  Start an Enquiry
                </Link>
                <Link href="/products" className="btn-pill btn-ghost-white w-full sm:w-auto justify-center">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
