export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'SEPL Introduction', href: '/about/introduction' },
      { label: 'Factory Overlook', href: '/about/factory' },
      { label: 'Manufacturing Facility', href: '/about/manufacturing' },
      { label: 'Quality Assurance', href: '/about/quality' },
      { label: 'Certificates', href: '/about/certificates' },
      { label: 'Certificate Of Vendor', href: '/about/vendor-certificate' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Loading Arms', href: '/products/loading-arms' },
      { label: 'Unloading Arms Systems', href: '/products/unloading-arms' },
      { label: 'Floating Suction Assemblies', href: '/products/floating-suction' },
      { label: 'Prover Tanks', href: '/products/prover-tanks' },
      { label: 'Swivel Joints', href: '/products/swivel-joints' },
      { label: 'Test Aiders', href: '/products/test-aiders' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Global Presence', href: '/global' },
  { label: 'Clients', href: '/clients' },
  { label: 'Download', href: '/download' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Enquiry', href: '/enquiry', highlight: true },
]

export const PRODUCTS = [
  {
    id: 'loading-arms',
    title: 'Loading Arms',
    description: 'Precision-engineered top loading arms for safe and efficient fluid transfer operations in petrochemical industries.',
    href: '/products/loading-arms',
    icon: '⚙️',
    tag: 'Most Popular',
  },
  {
    id: 'unloading-arms',
    title: 'Unloading Arms Systems',
    description: 'High-performance bottom unloading systems designed for tanker trucks, rail cars, and marine vessels.',
    href: '/products/unloading-arms',
    icon: '🔧',
    tag: null,
  },
  {
    id: 'floating-suction',
    title: 'Floating Suction Assemblies',
    description: 'Advanced floating suction systems that draw product from the cleanest level in storage tanks.',
    href: '/products/floating-suction',
    icon: '🌊',
    tag: null,
  },
  {
    id: 'prover-tanks',
    title: 'Prover Tanks',
    description: 'ISO-certified prover tanks for accurate calibration of flow meters in custody transfer applications.',
    href: '/products/prover-tanks',
    icon: '🏭',
    tag: null,
  },
  {
    id: 'swivel-joints',
    title: 'Swivel Joints',
    description: 'Multi-plane swivel joints enabling full articulation of loading arms with zero leakage at all pressures.',
    href: '/products/swivel-joints',
    icon: '🔩',
    tag: null,
  },
  {
    id: 'test-aiders',
    title: 'Test Aiders',
    description: 'Specialized testing equipment and aids for quality assurance and performance verification of fluid systems.',
    href: '/products/test-aiders',
    icon: '📐',
    tag: null,
  },
]

export const HERO_SLIDES = [
  {
    id: 1,
    headline: 'Precision Fluid Handling Systems',
    subline: 'Engineering excellence in every joint, arm, and assembly — trusted by industry leaders across 3 continents.',
    tag: 'ISO 9001:2008 Certified',
    image: '/steel1.jpg',
    stat1: { value: '29+', label: 'Years of Excellence' },
    stat2: { value: '500+', label: 'Projects Delivered' },
  },
  {
    id: 2,
    headline: 'World-Class Manufacturing Facility',
    subline: 'Over 3,128 sq. meter state-of-the-art facility in Pune, producing the finest loading arm systems in India.',
    tag: 'Pune, Maharashtra',
    image: '/steel2.jpg',
    stat1: { value: '3128', label: 'Sq. Meter Facility' },
    stat2: { value: 'DNV', label: 'ISO Certified By' },
  },
  {
    id: 3,
    headline: 'Trusted Globally, Built in India',
    subline: 'Exporting precision-engineered fluid handling equipment to Saudi Arabia and across the globe since 1995.',
    tag: 'Global Exports',
    image: '/steel3.jpg',
    stat1: { value: '₹10Cr+', label: 'Annual Sales Volume' },
    stat2: { value: '1995', label: 'Established Since' },
  },
  {
    id: 4,
    headline: 'Loading Arms Engineered to Perform',
    subline: 'From top-loading to marine arms, our product range covers every fluid transfer application with unmatched reliability.',
    tag: 'Full Product Range',
    image: '/steel5.jpg',
    stat1: { value: '6+', label: 'Product Lines' },
    stat2: { value: 'ISO/ASTM', label: 'Design Standards' },
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'ISO 9001:2008 Certified',
    description: 'Our quality management system is certified by DNV, ensuring every product meets the highest international standards.',
    icon: 'shield',
  },
  {
    title: '29+ Years of Expertise',
    description: 'Established in 1995, SEPL brings three decades of specialized knowledge in fluid handling system design and manufacturing.',
    icon: 'calendar',
  },
  {
    title: 'World-Class Facility',
    description: 'Two manufacturing units spanning 3,128 sq. meters equipped with advanced machinery and precision tooling.',
    icon: 'building',
  },
  {
    title: 'Global Standards Compliance',
    description: 'All products conform to ISO, ASTM, and BIS design standards — meeting requirements for export markets.',
    icon: 'globe',
  },
  {
    title: 'End-to-End Capability',
    description: 'From design and engineering to manufacturing and testing — complete in-house capability ensures quality at every step.',
    icon: 'settings',
  },
  {
    title: 'Export Ready',
    description: 'Trusted by clients in Saudi Arabia and international markets, with full export documentation and compliance support.',
    icon: 'truck',
  },
]
