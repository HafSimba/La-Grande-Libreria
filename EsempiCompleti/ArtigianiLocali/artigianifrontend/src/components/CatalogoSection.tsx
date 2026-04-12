import type { Prodotto } from "../types/prodotto";

// Stato minimo necessario per rendere il catalogo e i suoi stati di rete.
type CatalogoSectionProps = {
    prodotti: Prodotto[];
    loading: boolean;
    errore: string | null;
};

// Formatter condiviso per coerenza di visualizzazione monetaria.
const prezzoFormatter = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" });

// Utility UI: limita il testo in card per mantenere altezza uniforme.
// Se preferisci mostrare tutto, elimina questo helper e usa il valore originale.
function shortText(value: string, maxLength = 180) {
    if (value.length <= maxLength) {
        return value;
    }
    return `${value.slice(0, maxLength)}...`;
}

export function CatalogoSection({ prodotti, loading, errore }: CatalogoSectionProps) {
    return (
        <section className="section-card" id="catalogo">
            <h2>Catalogo</h2>
            <p className="section-intro">
                Ogni scheda mostra titolo, descrizione breve, prezzo e contatto venditore come richiesto dalla consegna.
            </p>

            {/* Stati di rendering espliciti: facilitano debugging e demo durante l'orale. */}
            {loading && <p>Caricamento catalogo in corso...</p>}
            {errore && <p className="error-text">{errore}</p>}

            {/* Empty state guidato: suggerisce subito la prossima azione all'utente. */}
            {!loading && !errore && prodotti.length === 0 && (
                <p>Nessun prodotto ancora pubblicato. Inserisci la prima proposta dal modulo qui sopra.</p>
            )}

            {!loading && !errore && prodotti.length > 0 && (
                <div className="cards-grid">
                    {prodotti.map((prodotto) => (
                        // Chiave su id backend, ideale per liste dinamiche.
                        <article className="product-card" key={prodotto.id}>
                            <img src={prodotto.immaginiLink} alt={prodotto.titoloProdotto} className="product-image" />
                            <div className="product-body">
                                <span className="tag">{prodotto.categoriaProdotto}</span>
                                <h3>{prodotto.titoloProdotto}</h3>
                                <p>{shortText(prodotto.descrizioneProdotto)}</p>
                                <p className="price-line">{prezzoFormatter.format(prodotto.prezzo)}</p>
                                <p className="contact-line">
                                    Venditore: {prodotto.contattoReferenteNome} ({prodotto.contattoReferenteEmail})
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
