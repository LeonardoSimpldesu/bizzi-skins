import AboutSection from "./components/AboutSection"
import CTASection from "./components/CTASection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { Menu } from "./components/Menu"
import { SkinsGallerySection } from "./components/SkinGallerySection"
import { SteamStatsSection } from "./components/SteamSection"
import { TestimonialsSection } from "./components/TestimonialSection"

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Menu />
      <HeroSection />

      <AboutSection />
      <SteamStatsSection />
      <SkinsGallerySection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
