import { DatabaseCards } from '../components/DatabaseCards'

export const DatabaseCardsSection = () => {
  return (
    <section className="page-section" id="dati-database">
      {/* CUSTOM ESAME:
          questa sezione mostra in card i dati inseriti nel database tramite il form.
          Per rimuoverla elimina <DatabaseCardsSection /> da HomePage.tsx.
          Per cambiare endpoint o campi modifica DatabaseCards.tsx e i file Contatto nel backend. */}
      <div className="container">
        <h2 className="page-section__title">Dati inseriti</h2>
        <DatabaseCards />
      </div>
    </section>
  )
}
