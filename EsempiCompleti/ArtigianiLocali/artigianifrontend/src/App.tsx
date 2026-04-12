import { useState } from "react";
import "./App.css";
import { CategorieSection } from "./components/CategorieSection";
import { CatalogoSection } from "./components/CatalogoSection";
import { ChiSiamoSection } from "./components/ChiSiamoSection";
import { FeedbackModal } from "./components/FeedbackModal";
import { HeroSection } from "./components/HeroSection";
import { InserimentoProdottoSection } from "./components/InserimentoProdottoSection";
import { TestimonianzeSection } from "./components/TestimonianzeSection";
import { VetrinaSection } from "./components/VetrinaSection";
import { useCatalogo } from "./hooks/useCatalogo";
import type { ProdottoPayload } from "./types/prodotto";

// Componente radice della pagina: qui decidi quali sezioni mostrare e in quale ordine.
// Per adattare la traccia d'esame, inizia quasi sempre da questo file.
function App() {
  // Hook centrale per stato catalogo, categorie e operazioni CRUD lato client.
  const { catalogo, categorie, loading, errore, aggiungiProdotto } = useCatalogo();

  // Stato della modale di conferma: puoi sostituirla con toast, snackbar o redirect.
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Callback passata al form: se la traccia richiede altri workflow (es. approvazione admin), modifica qui.
  async function handleInserimento(payload: ProdottoPayload) {
    await aggiungiProdotto(payload);
    // Testo facilmente personalizzabile per tono istituzionale, commerciale o didattico.
    setModalMessage("La proposta e stata inviata correttamente ed e ora visibile in catalogo.");
    setModalOpen(true);
  }

  return (
    <div className="app-shell">
      <main>
        {/* Hero: aggiorna claim e CTA se la traccia cambia dominio (food, turismo, cultura, ecc.). */}
        <HeroSection totaleProdotti={catalogo.length} />

        {/* Sezione storytelling: missione/visione/valori. */}
        <ChiSiamoSection />

        {/* Vetrina rapida: tipicamente primi N prodotti o prodotti in evidenza. */}
        <VetrinaSection prodotti={catalogo} />

        {/* Tassonomia di dominio: categorie, tag, aree tematiche. */}
        <CategorieSection categorie={categorie} />

        {/* Social proof: puoi collegarla a recensioni reali o dataset statico da backend. */}
        <TestimonianzeSection />

        {/* Form di inserimento dati richiesti dalla traccia. */}
        <InserimentoProdottoSection onSubmit={handleInserimento} />

        {/* Catalogo finale: visualizzazione completa con stati loading/errore/vuoto. */}
        <CatalogoSection prodotti={catalogo} loading={loading} errore={errore} />
      </main>

      <footer className="main-footer">
        {/* Footer minimo: sostituisci con riferimenti legali, contatti o link social se richiesto. */}
        <p>ArtigianiLocali - marketplace per artigiani sostenibili</p>
      </footer>

      {/* Modale riusabile: puoi mantenerla globale o spostarla dentro la sezione form. */}
      <FeedbackModal open={modalOpen} message={modalMessage} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
