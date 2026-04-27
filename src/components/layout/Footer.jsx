'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Loading Arms', href: '/products/loading-arms' },
    { label: 'Unloading Arms Systems', href: '/products/unloading-arms' },
    { label: 'Floating Suction Assemblies', href: '/products/floating-suction' },
    { label: 'Prover Tanks', href: '/products/prover-tanks' },
    { label: 'Swivel Joints', href: '/products/swivel-joints' },
    { label: 'Test Aiders', href: '/products/test-aiders' },
  ],
  Company: [
    { label: 'About SEPL', href: '/about' },
    { label: 'Manufacturing Facility', href: '/about/manufacturing' },
    { label: 'Quality Assurance', href: '/about/quality' },
    { label: 'Certificates', href: '/about/certificates' },
    { label: 'Global Presence', href: '/global' },
    { label: 'Clients', href: '/clients' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Send Enquiry', href: '/enquiry' },
    { label: 'Download Brochure', href: '/download' },
    { label: 'Careers', href: '/careers' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-700 text-2xl md:text-3xl text-white mb-2">
                Ready to discuss your project?
              </h3>
              <p className="text-slate-400 text-[15px]">
                Get a customized quote for your fluid handling requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
              <Link href="/enquiry" className="btn-pill btn-primary whitespace-nowrap w-full sm:w-auto">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn-pill btn-ghost-white whitespace-nowrap w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="SEPL logo" className="w-11 h-11 object-contain" />
              <div>
                <div className="font-display font-700 text-[15px] leading-none text-white">Steelfab Engineering Pvt. Ltd.</div>
                <div className="text-[10px] text-slate-400 tracking-wide mt-0.5">AN ISO 9001:2015 Certified Company</div>
              </div>
            </Link>
            <p className="text-slate-400 text-[14px] leading-relaxed mb-6 max-w-xs">
              Leading manufacturer of fluid handling systems since 1995. ISO 9001:2008 certified, trusted by industries across India and the Middle East.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-[13px] text-slate-400">
                <MapPin size={15} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-slate-400">
                <Phone size={15} className="text-indigo-400 flex-shrink-0" />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-slate-400">
                <Mail size={15} className="text-indigo-400 flex-shrink-0" />
                <span>info@steelfabengineering.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[12px] font-600 tracking-widest uppercase text-slate-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-slate-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center justify-center gap-3 text-center">
          <div className="text-center">
            <p className="text-[12.5px] text-slate-500">
              © {new Date().getFullYear()} Steelfab Engineering Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-[12px] text-slate-600 mt-1">
              Designed and developed by - TheSocialKollab
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap justify-center">
            <span className="text-[12px] text-slate-600">ISO 9001:2008</span>
            <span className="text-slate-700 mx-2">·</span>
            <span className="text-[12px] text-slate-600">DNV Certified</span>
            <span className="text-slate-700 mx-2">·</span>
            <span className="text-[12px] text-slate-600">Est. 1995</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
