'use client'

import { useMemo, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PRODUCTS } from '@/lib/data'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Droplets,
  Settings,
  Building2,
  Wrench,
  BadgeCheck,
} from 'lucide-react'

const productDetails = {
  'loading-arms': {
    title: 'Loading Arm Systems',
    subtitle:
      'We are leading Manufacturer, Supplier, Exporter of Loading Arm Systems for industrial applications from Pune, Maharashtra, India.',
    heroImage: '/steel1.jpg',
    gallery: ['/steel1.jpg', '/steel2.jpg', '/steel3.jpg', '/steel5.jpg'],
    intro: [
      "Steelfab's engineered loading arm systems are fast, easy, and reliable for transferring petroleum products, asphalt, LPG, ammonia, solvents, acids, alkalies, hazardous corrosive liquids, milk, and edible oils.",
      'The system eliminates expensive and clumsy hose pipe operations while reducing labor cost, improving operator safety, and delivering user-friendly handling.',
      'Every system is equipped with a fully adjustable balancing mechanism and smooth, torque-free 360-degree swiveling to avoid operational fatigue.',
    ],
    highlights: [
      { label: 'Operational Mode', value: 'Fast, Easy & Reliable' },
      { label: 'Rotation Capability', value: 'Smooth 360° Swiveling' },
      { label: 'Balancing Options', value: 'Spring Box / Counter Weight' },
      { label: 'Designed For', value: 'Hazardous + Critical Fluids' },
    ],
    features: [
      'Simple trouble-free operations',
      'Reduced labour cost',
      'No spillage, hence zero wastage',
      'Available in various materials and sizes',
      'Pantograph and cantilever style options',
      'Repairable in the field',
      'Safe handling of hazardous liquids',
      'Environment-friendly operations',
      'No recurring hose-pipe replacement cost',
    ],
    applications: [
      'Oil Terminals / Depots',
      'Tank Farms',
      'Petrochemical / Chemical Complexes',
      'Refineries',
      'Edible Oil Plants',
      'Fertilizer Plants',
      'Milk dairies and allied process plants',
    ],
    specifications: [
      'Materials of Construction: Carbon Steel, Aluminum, SS 316, SS 316L, SS 304 / SS304L, PTFE lined, or as per compatibility',
      'Elastomers: Nitrile, Neoprene, Viton, PTFE, EPDM, or as per compatibility',
      'Optional Accessories: Ball Valve, Drain Valve, Vacuum Breaker, Vapour Recovery System, Bellows Assembly, QRC, working position lock, overfill protection and sensing device',
      'Sizes: 1", 1.5", 2", 2.5", 3", 4", 6" and custom sizes as required',
      'Balancing: Spring Box or Counter Weight',
    ],
    clients: [
      'HPCL (Hindustan Petroleum Corporation Limited)',
      'BPCL (Bharat Petroleum Corporation Limited)',
      'IOCL (Indian Oil Corporation Limited)',
      'CPCL (Chennai Petroleum Corporation Limited)',
      'Technip Engineering and Services',
      'Rashtriya Chemicals & Fertilizers Ltd.',
      'Deepak Fertilizers & Petrochemicals Corporation Ltd.',
      'S. Mark Group',
      'Gulf Petrochem India Pvt Ltd',
      'Gilbarco Veeder Root Pvt Ltd',
      'Vermont Technologies Pvt Ltd',
      'Honeywell Automation India Ltd',
      'Mahathi Infra Services Pvt Ltd',
    ],
  },
  'unloading-arms': {
    title: 'Unloading Arm Systems',
    subtitle:
      'Engineered bottom unloading arm systems for safe, fast and controlled transfer operations at depots, terminals and process plants.',
    heroImage: '/steel2.jpg',
    gallery: ['/steel2.jpg', '/steel3.jpg', '/steel1.jpg', '/steel5.jpg'],
    intro: [
      'SEPL unloading arm systems are designed to reduce turnaround time while improving operator safety and environmental compliance.',
      'The system provides controlled, leak-resistant product transfer for petroleum, solvents, chemicals and other process fluids.',
      'Heavy-duty construction with smooth articulation helps reduce operator fatigue and enables long life under field conditions.',
    ],
    highlights: [
      { label: 'Flow Direction', value: 'Bottom / Controlled Unloading' },
      { label: 'Safety Focus', value: 'Reduced Spill & Vapour Exposure' },
      { label: 'Operation', value: 'Manual / Assisted Options' },
      { label: 'Industry Fit', value: 'Terminal & Depot Ready' },
    ],
    features: [
      'Quick and ergonomic tanker connection interface',
      'Smooth articulation with low operating torque',
      'Suitable for hazardous and corrosive service media',
      'Low maintenance design for continuous operations',
      'Available with dry-break and safety interlock options',
      'Reduced product loss and cleaner unloading operations',
      'Robust balancing mechanisms for easier handling',
    ],
    applications: [
      'Road tanker unloading stations',
      'Rail wagon unloading terminals',
      'Fuel and petrochemical depots',
      'Refineries and blending plants',
      'Chemical manufacturing facilities',
      'Bulk liquid handling terminals',
    ],
    specifications: [
      'Material options: CS, SS304, SS316, SS316L, Aluminum',
      'Seal compatibility: Nitrile, Viton, PTFE, EPDM, Neoprene',
      'Size range: 2" to 6" standard, custom sizes on request',
      'Accessories: QRC, vapour return, drain valve, locking systems',
      'Balancing: spring-cylinder / spring-box / counterweight',
    ],
    clients: [
      'Public and private oil marketing companies',
      'Terminal operators and logistics integrators',
      'Petrochemical and specialty chemical plants',
      'Large process industries with bulk fluid transfer needs',
    ],
  },
  'floating-suction': {
    title: 'Floating Suction Assemblies',
    subtitle:
      'High-reliability floating suction assemblies designed to draw cleaner top layers from storage tanks and improve transferred product quality.',
    heroImage: '/steel3.jpg',
    gallery: ['/steel3.jpg', '/steel1.jpg', '/steel2.jpg', '/steel5.jpg'],
    intro: [
      'SEPL floating suction systems are designed to pick product from the cleaner upper layers inside tanks, minimizing sediment carryover.',
      'The assembly supports stable operation in varied tank conditions and helps maintain downstream process quality.',
      'Each configuration is engineered for service media compatibility, operating conditions and installation constraints.',
    ],
    highlights: [
      { label: 'Output Quality', value: 'Cleaner Product Withdrawal' },
      { label: 'Tank Performance', value: 'Reduced Sediment Pickup' },
      { label: 'Design', value: 'Customized Float & Arm Geometry' },
      { label: 'Durability', value: 'Corrosion-Resistant Build' },
    ],
    features: [
      'Optimized floating geometry for stable suction level',
      'Designed for varying tank diameters and depths',
      'Media-compatible materials and sealing options',
      'Reduced contamination risk in downstream operations',
      'Reliable operation for petroleum and process liquids',
      'Field serviceable design with practical maintenance access',
    ],
    applications: [
      'Fuel and petroleum storage tanks',
      'Refinery intermediate storage systems',
      'Edible oil and process liquid tanks',
      'Chemical tank farms requiring top-layer draw',
      'Bulk liquid terminals and depots',
    ],
    specifications: [
      'Materials: Carbon Steel, SS304, SS316, SS316L',
      'Float and hose material selected per fluid compatibility',
      'Custom arm lengths and float sizes available',
      'Optional anti-vortex and guide arrangements',
      'Designed for long-duration storage service',
    ],
    clients: [
      'Oil and gas storage infrastructure operators',
      'Refineries and process plants',
      'Edible oil processing companies',
      'Chemical and specialty fluid handling industries',
    ],
  },
  'prover-tanks': {
    title: 'Prover Tanks',
    subtitle:
      'Precision prover tanks for calibration and verification of flow metering systems where measurement accuracy is business-critical.',
    heroImage: '/steel5.jpg',
    gallery: ['/steel5.jpg', '/steel2.jpg', '/steel1.jpg', '/steel3.jpg'],
    intro: [
      'SEPL prover tanks are built for high-accuracy calibration workflows in custody transfer and process metering applications.',
      'Design focus includes repeatable performance, robust fabrication and standards-aligned execution for long-term reliability.',
      'Solutions are configured for integration with field metering systems and operational workflows.',
    ],
    highlights: [
      { label: 'Core Purpose', value: 'Meter Calibration Accuracy' },
      { label: 'Use Case', value: 'Custody Transfer Validation' },
      { label: 'Engineering', value: 'Standards-Oriented Fabrication' },
      { label: 'Performance', value: 'Repeatable Measurement Support' },
    ],
    features: [
      'Designed for high repeatability in proving cycles',
      'Robust fabricated construction for field durability',
      'Easy integration with metering and test setups',
      'Optimized for operational safety and maintainability',
      'Suitable for periodic and routine validation workflows',
    ],
    applications: [
      'Custody transfer metering stations',
      'Fuel depots and terminal operations',
      'Pipeline and transfer metering systems',
      'Process industries requiring meter verification',
    ],
    specifications: [
      'Capacity and dimensions configurable per use case',
      'Material options: CS / SS grades as per service requirement',
      'Connections and nozzles defined to project standards',
      'Calibration and documentation support on request',
    ],
    clients: [
      'Oil marketing and distribution organizations',
      'Terminal automation and metering contractors',
      'Process plants with compliance-driven metering needs',
    ],
  },
  'swivel-joints': {
    title: 'Swivel Joints',
    subtitle:
      'Multi-plane swivel joints engineered for smooth articulation, leak-tight performance and long service life in demanding transfer systems.',
    heroImage: '/steel2.jpg',
    gallery: ['/steel2.jpg', '/steel1.jpg', '/steel5.jpg', '/steel3.jpg'],
    intro: [
      'SEPL swivel joints are a critical component in loading/unloading systems, enabling free movement without compromising sealing performance.',
      'The assemblies are designed to maintain smooth rotation and reliable performance across a wide range of pressures and service conditions.',
      'Manufacturing precision and material selection are optimized for endurance and safety in industrial operations.',
    ],
    highlights: [
      { label: 'Motion', value: 'Multi-Plane Articulation' },
      { label: 'Reliability', value: 'Leak-Tight Sealing' },
      { label: 'Service', value: 'Low-Torque Rotation' },
      { label: 'Integration', value: 'Loading Arm Ready' },
    ],
    features: [
      'Smooth rotation with minimized operating torque',
      'Leak-resistant sealing under demanding conditions',
      'Durable mechanical build for long operating life',
      'Compatible with multiple loading arm geometries',
      'Available for varied pressure and fluid service profiles',
      'Maintainable design for field servicing and overhauls',
    ],
    applications: [
      'Top and bottom loading arm systems',
      'Marine and terminal transfer systems',
      'Process fluid handling lines',
      'Petrochemical and hazardous liquid operations',
    ],
    specifications: [
      'Typical size range: 1" to 12" (project dependent)',
      'Material options by fluid and operating conditions',
      'Seal/elastomer options per media compatibility',
      'Pressure/vacuum configurations as required',
    ],
    clients: [
      'Loading arm OEMs and terminal operators',
      'Process and petrochemical plants',
      'Engineering procurement and turnkey contractors',
    ],
  },
  'test-aiders': {
    title: 'Test Aiders',
    subtitle:
      'Purpose-built test aiders and validation tools for quality assurance, functional verification and commissioning support.',
    heroImage: '/steel1.jpg',
    gallery: ['/steel1.jpg', '/steel3.jpg', '/steel5.jpg', '/steel2.jpg'],
    intro: [
      'SEPL test aiders are designed to support QA teams with practical, repeatable testing workflows across equipment and transfer systems.',
      'From pre-dispatch checks to site validation, these tools help verify performance and improve confidence before commissioning.',
      'Solutions are engineered for dependable operation in workshop and field environments.',
    ],
    highlights: [
      { label: 'Focus', value: 'QA & Validation Support' },
      { label: 'Workflow', value: 'Workshop + Site Testing' },
      { label: 'Benefit', value: 'Repeatable Verification' },
      { label: 'Deployment', value: 'Commissioning Friendly' },
    ],
    features: [
      'Supports pressure and leakage verification workflows',
      'Practical setup for workshop and field deployment',
      'Improves pre-dispatch and commissioning confidence',
      'Helps identify issues earlier in the delivery cycle',
      'Durable construction for repeated use',
    ],
    applications: [
      'Factory acceptance testing (FAT)',
      'Site acceptance and commissioning checks',
      'Maintenance and periodic inspection support',
      'Quality control and validation departments',
    ],
    specifications: [
      'Configurations based on equipment test requirements',
      'Material and connection options per application',
      'Portable and fixed setup options available',
      'Documentation support as per project scope',
    ],
    clients: [
      'QA and inspection teams in process industries',
      'Project commissioning contractors',
      'Operations and maintenance departments',
    ],
  },
}

const sectionMeta = {
  features: { title: 'Features', icon: Settings },
  applications: { title: 'Areas of Application', icon: Factory },
  specifications: { title: 'Specifications', icon: ShieldCheck },
  clients: { title: 'Trusted Clients', icon: Building2 },
}

function SectionGrid({ items, icon: Icon }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 hover:border-indigo-200 hover:shadow-[0_10px_24px_rgba(67,56,202,0.08)] transition-all duration-200"
        >
          <div className="flex items-start gap-2.5">
            <Icon size={15} className="text-indigo-600 mt-0.5 flex-shrink-0" />
            <p className="text-[12px] sm:text-[14px] text-slate-700 leading-relaxed">{item}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProductDetailPage({ params }) {
  const { slug } = params
  const product = PRODUCTS.find((p) => p.id === slug)
  const detail = productDetails[slug] || (product && {
    title: product.title,
    subtitle: product.description,
    heroImage: '/steel2.jpg',
    gallery: ['/steel2.jpg', '/steel3.jpg', '/steel5.jpg'],
    intro: [product.description],
    highlights: [
      { label: 'Designed For', value: 'Industrial Fluid Transfer' },
      { label: 'Manufacturing', value: 'Precision Engineered' },
      { label: 'Support', value: 'End-to-End Assistance' },
      { label: 'Customization', value: 'Available on Request' },
    ],
    features: ['High reliability', 'Low maintenance', 'Robust construction', 'Flexible configuration'],
    applications: ['Process industries', 'Terminals', 'Storage & handling'],
    specifications: ['Available in multiple sizes and materials'],
    clients: ['Shared on request'],
  })

  const tabs = useMemo(() => ['features', 'applications', 'specifications', 'clients'], [])
  const [activeTab, setActiveTab] = useState('features')

  if (!detail) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <Link href="/products" className="btn-pill btn-primary">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const activeItems = detail[activeTab]
  const ActiveIcon = sectionMeta[activeTab].icon

  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-indigo-900 text-white">
          <div className="absolute inset-0 opacity-25">
            <img src={detail.heroImage} alt={detail.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/65" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-indigo-300 text-[13px] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              All Products
            </Link>
            <div className="max-w-3xl">
              <h1 className="font-display font-700 text-[2rem] sm:text-[3.1rem] leading-[1.1] tracking-tight mb-4">
                {detail.title}
              </h1>
              <p className="text-indigo-100/95 text-[14px] sm:text-[17px] leading-relaxed mb-8">{detail.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="btn-pill btn-primary">
                  Request a Quote
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-pill btn-ghost-white">
                  Talk to an Engineer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {detail.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all"
                >
                  <div className="text-[11px] sm:text-[12px] font-600 uppercase tracking-wider text-slate-500 mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-[13px] sm:text-[15px] font-600 text-slate-800 leading-snug">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="lg:col-span-2 space-y-4">
                {detail.intro.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 text-[14px] sm:text-[15.5px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(67,56,202,0.08)]">
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck size={18} className="text-indigo-600" />
                  <h3 className="font-display font-700 text-[18px] text-navy-900">Quick Enquiry</h3>
                </div>
                <p className="text-[13.5px] text-slate-600 mb-5">
                  Tell us your flow medium, required size and operating conditions. We will suggest the right configuration quickly.
                </p>
                <div className="space-y-2.5">
                  <Link href="/enquiry" className="btn-pill btn-primary w-full justify-center">
                    Send Requirement
                  </Link>
                  <Link href="/contact" className="btn-pill btn-outline w-full justify-center">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-wrap gap-2.5 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-600 border transition-all ${
                    activeTab === tab
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_8px_20px_rgba(79,70,229,0.28)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-700'
                  }`}
                >
                  {sectionMeta[tab].title}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <ActiveIcon size={18} className="text-indigo-600" />
              <h2 className="font-display font-700 text-[1.4rem] sm:text-[1.8rem] text-navy-900">
                {sectionMeta[activeTab].title}
              </h2>
            </div>
            <SectionGrid items={activeItems} icon={activeTab === 'clients' ? Building2 : CheckCircle2} />
          </div>
        </section>

        <section className="bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex items-center gap-2 mb-5">
              <Droplets size={18} className="text-indigo-600" />
              <h2 className="font-display font-700 text-[1.4rem] sm:text-[1.8rem] text-navy-900">
                Product Gallery
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {detail.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 h-36 sm:h-44 lg:h-52"
                >
                  <img
                    src={image}
                    alt={`${detail.title} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-indigo-900 text-white p-6 sm:p-8 flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
              <div>
                <h3 className="font-display font-700 text-[1.4rem] sm:text-[1.8rem] leading-tight mb-2">
                  Need a customized Loading Arm configuration?
                </h3>
                <p className="text-indigo-100 text-[13.5px] sm:text-[15px]">
                  Share your fluid type, temperature, pressure, and tanker arrangement. Our team will recommend the right build.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link href="/enquiry" className="btn-pill btn-primary w-full sm:w-auto justify-center">
                  Get Custom Quote
                  <ArrowRight size={15} />
                </Link>
                <Link href="/download" className="btn-pill btn-ghost-white w-full sm:w-auto justify-center">
                  Download Brochure
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
