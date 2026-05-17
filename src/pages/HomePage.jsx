import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import AboutSection from '@/components/sections/AboutSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'
import StatsSection from '@/components/sections/StatsSection'
import CtaSection from '@/components/sections/CtaSection'
import UpcomingProjectsSection from '@/components/sections/UpcomingProjectsSection'
import ProductGalleryBento from '@/components/sections/ProductGalleryBento'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection previewCount={4} />
      <StatsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <UpcomingProjectsSection />
      <FeaturedProductsSection />
      <CtaSection />
      <ProductGalleryBento />
      <Footer />
    </main>
  )
}
