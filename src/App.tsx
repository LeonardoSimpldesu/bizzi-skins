import AboutSection from "./components/AboutSection"
import CTASection from "./components/CTASection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { Menu } from "./components/Menu"
import { SkinsGallerySection } from "./components/SkinGallerySection"
import { TestimonialsSection } from "./components/TestimonialSection"

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Menu />
      <HeroSection />

      <AboutSection />
      <HowItWorksSection />
      <SkinsGallerySection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
