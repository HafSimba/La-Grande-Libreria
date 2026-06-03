import { Cards } from '../components/Cards'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { StudentiVotiSection } from '../components/StudentiVotiSection'

export const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* CUSTOM ESAME:
          questa pagina e la landing principale.
          Cambia titoli, testi e id delle sezioni in base alle sezioni richieste dalla traccia.
          Mantieni il Form nella sezione finale o dove la consegna chiede l'invio dati. */}
      <section className="page-section page-section--hero" id="hero">
        <Hero imgSrc="/src/assets/hero.png" />
      </section>

      <section className="page-section" id="chi-siamo">
        <div className="container">
          <h2 className="page-section__title">cambia questo testo</h2>
          <p className="lead">
            cambia questo testo. Usa questa sezione per descrivere il progetto,
            gli obiettivi e il valore principale richiesto dalla traccia.
          </p>
        </div>
      </section>

      <section className="page-section" id="servizi">
        <div className="container">
          <h2 className="page-section__title">cambia questo testo</h2>
          <Cards />
        </div>
      </section>

      <section className="page-section" id="form">
        <div className="container">
          <h2 className="page-section__title">Modulo contatti</h2>
          <Form />
        </div>
      </section>

      {/* CUSTOM ESAME:
          se la traccia richiede solo una landing con form semplice, elimina questa riga e l'import.
          Se richiede inserimento dati + lista + filtro, customizza StudentiVotiSection. */}
      <StudentiVotiSection />

      <Footer />
    </>
  )
}
