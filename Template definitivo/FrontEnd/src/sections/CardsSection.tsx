import { Cards } from '../components/Cards'

export const CardsSection = () => {
  return (
    <section className="page-section" id="servizi">
      {/* CUSTOM ESAME:
          questa sezione mostra card informative. Per cambiare contenuti modifica Cards.tsx.
          Per rimuovere la sezione togli <CardsSection /> da HomePage.tsx. */}
      <div className="container">
        <h2 className="page-section__title">cambia questo testo</h2>
        <Cards />
      </div>
    </section>
  )
}
