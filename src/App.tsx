import AboutSection from "./components/AboutSection"
import CTASection from "./components/CTASection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { TestimonialsSection } from "./components/TestimonialSection"

function App() {
  return (

    <div className="relative min-h-screen bg-black text-white">
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_40%_0%,#000_100%,transparent_120%)] animate-grid-slide pointer-events-none" /> */}

      <HeroSection />

      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
