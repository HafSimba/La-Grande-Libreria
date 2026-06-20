import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { CardsSection } from '../sections/CardsSection'
import { ContactFormSection } from '../sections/ContactFormSection'
import { DatabaseCardsSection } from '../sections/DatabaseCardsSection'
import { HeroSection } from '../sections/HeroSection'
import { InfoSection } from '../sections/InfoSection'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* CUSTOM ESAME:
          questa pagina assembla soltanto le sezioni.
          Per rimuovere una sezione elimina import e tag corrispondente.
          Per aggiungerne una nuova crea un file in src/sections e importalo qui. */}
      <HeroSection />
      <InfoSection />
      <CardsSection />
      <ContactFormSection />
      <DatabaseCardsSection />
      <Footer />
    </>
  )
}
