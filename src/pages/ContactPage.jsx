import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Clock3, Mail, MapPin, PhoneCall } from 'lucide-react'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[72px] bg-slate-50/60 min-h-screen">
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
            <h1 className="font-display font-700 text-[2rem] sm:text-[2.8rem] text-navy-900 tracking-tight mb-3">Contact Us</h1>
            <p className="text-slate-600 text-[14px] sm:text-[16px] max-w-2xl">
              Share your requirement and our team will get back with the right engineering support and product guidance.
            </p>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-navy-900 to-indigo-900 text-white p-5 sm:p-6">
                <h2 className="font-display font-700 text-[1.3rem] mb-4">Direct Contact</h2>
                <div className="space-y-3.5 text-[13px] sm:text-[14px]">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="mt-0.5 text-indigo-300" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <PhoneCall size={16} className="mt-0.5 text-indigo-300" />
                    <span>+91 00000 00000</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={16} className="mt-0.5 text-indigo-300" />
                    <span>info@steelfabengineering.com</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock3 size={16} className="mt-0.5 text-indigo-300" />
                    <span>Mon - Sat | 9:30 AM - 6:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="font-display font-700 text-[1.2rem] text-navy-900 mb-4">Send a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Full Name" />
                  <input className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Company Name" />
                  <input className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Email Address" />
                  <input className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Phone Number" />
                  <input className="sm:col-span-2 rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Subject" />
                  <textarea rows={5} className="sm:col-span-2 rounded-xl border border-slate-300 px-3.5 py-2.5 text-[14px] outline-none focus:border-indigo-400" placeholder="Tell us your requirement..." />
                </div>
                <Link href="/enquiry" className="btn-pill btn-primary mt-4 inline-flex">
                  Submit Enquiry
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
