import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { CardsCarouselSection } from './sections/CardsCarouselSection'
import { ContactFormSection } from './sections/ContactFormSection'

function App() {
  return (
    <div className="landing-shell">
      <Navbar />
      <HeroSection />
      <CardsCarouselSection />
      <ContactFormSection />
    </div>
  )
}

export default App
