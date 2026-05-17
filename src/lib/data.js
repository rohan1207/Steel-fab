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
  { label: 'Global Exports', href: '/global' },
  { label: 'Clients', href: '/clients' },
  { label: 'CSR', href: '/csr' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Download', href: '/download' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Enquiry', href: '/enquiry', highlight: true },
]

/** Top bar — 6 primary links (About & Products include desktop dropdowns) */
export const PRIMARY_NAV_LABELS = ['Home', 'About Us', 'Products', 'Clients', 'Gallery', 'Blog', 'Contact Us']

export function getPrimaryNavItems() {
  return NAV_ITEMS.filter((item) => PRIMARY_NAV_LABELS.includes(item.label))
}

export const PRODUCTS = [
  {
    id: 'loading-arms',
    title: 'Loading Arms',
    description: 'Precision-engineered top loading arms for safe and efficient fluid transfer operations in petrochemical industries.',
    href: '/products/loading-arms',
    image: '/steel1.jpg',
    icon: '⚙️',
    tag: 'Most Popular',
  },
  {
    id: 'unloading-arms',
    title: 'Unloading Arms Systems',
    description: 'High-performance bottom unloading systems designed for tanker trucks, rail cars, and marine vessels.',
    href: '/products/unloading-arms',
    image: '/steel2.jpg',
    icon: '🔧',
    tag: null,
  },
  {
    id: 'floating-suction',
    title: 'Floating Suction Assemblies',
    description: 'Advanced floating suction systems that draw product from the cleanest level in storage tanks.',
    href: '/products/floating-suction',
    image: '/steel3.jpg',
    icon: '🌊',
    tag: null,
  },
  {
    id: 'prover-tanks',
    title: 'Prover Tanks',
    description: 'ISO-certified prover tanks for accurate calibration of flow meters in custody transfer applications.',
    href: '/products/prover-tanks',
    image: '/steel5.jpg',
    icon: '🏭',
    tag: null,
  },
  {
    id: 'swivel-joints',
    title: 'Swivel Joints',
    description: 'Multi-plane swivel joints enabling full articulation of loading arms with zero leakage at all pressures.',
    href: '/products/swivel-joints',
    image: '/steel2.jpg',
    icon: '🔩',
    tag: null,
  },
  {
    id: 'test-aiders',
    title: 'Test Aiders',
    description: 'Specialized testing equipment and aids for quality assurance and performance verification of fluid systems.',
    href: '/products/test-aiders',
    image: '/steel1.jpg',
    icon: '📐',
    tag: null,
  },
]

export const HERO_SLIDES = [
  {
    id: 'floating-suction',
    headline: 'Floating Suction Assemblies',
    subline:
      'Used in aviation fuelling storage tanks for suction of product without sediments. Custom fabricated to your tank dimensions and operating conditions.',
    tag: 'Aviation Fuelling',
    image: '/steel3.jpg',
    href: '/products/floating-suction',
    ctaLabel: 'View Product',
    stat1: { value: 'Up to 24″', label: 'Diameter Range' },
    stat2: { value: 'Custom', label: 'Built to Spec' },
  },
  {
    id: 'prover-tank',
    headline: 'Prover Tanks',
    subline:
      'Prover tanks in portable or stationary configuration — precision proving measures for correct volumetric checks at petroleum terminals.',
    tag: 'Legal Metrology',
    // Add your image as public/hero-prover-tank.jpg (falls back to steel5.jpg until then)
    image: '/hero-prover-tank.jpg',
    imageFallback: '/steel5.jpg',
    href: '/products/prover-tanks',
    ctaLabel: 'View Product',
    stat1: { value: 'Up to 5 KL', label: 'Capacity' },
    stat2: { value: 'Mobile / Fixed', label: 'Configurations' },
  },
  {
    id: 'loading-arms',
    headline: 'Engineered Loading Arm Systems',
    subline:
      "Steelfab's system eliminates the expensive, bulky, clumsy use of hose pipe — with reduced labour cost and user-friendly operation for safer transfers.",
    tag: 'Flagship Systems',
    image: '/steel1.jpg',
    href: '/products/loading-arms',
    ctaLabel: 'View Product',
    stat1: { value: '1″ – 12″', label: 'Size Range' },
    stat2: { value: 'Top & Bottom', label: 'Loading Types' },
  },
  {
    id: 'storage-tank',
    headline: 'Storage Tanks',
    subline:
      'Field-repairable tanks in vertical and horizontal designs — aboveground and underground configurations for industrial storage applications.',
    tag: 'Custom Fabrication',
    // Add your image as public/hero-storage-tank.jpg (falls back to steel2.jpg until then)
    image: '/hero-storage-tank.jpg',
    imageFallback: '/steel2.jpg',
    href: '/enquiry',
    ctaLabel: 'Request Quote',
    stat1: { value: 'Up to 90 KL', label: 'Capacity' },
    stat2: { value: 'Vertical / Horizontal', label: 'Design Options' },
  },
  {
    id: 'swivel-joints',
    headline: 'Swivel Joints',
    subline:
      'Smooth, torque-free rotation that avoids operational fatigue — trusted on loading arms, floating roof tanks, and demanding rotary service.',
    tag: 'Precision Rotation',
    image: '/steel5.jpg',
    href: '/products/swivel-joints',
    ctaLabel: 'View Product',
    stat1: { value: '3/4″ – 24″', label: 'Size Range' },
    stat2: { value: 'Torque-Free', label: 'Operation' },
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
