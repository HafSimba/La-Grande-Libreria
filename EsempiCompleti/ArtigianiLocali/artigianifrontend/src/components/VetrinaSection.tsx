import type { Prodotto } from "../types/prodotto";

// Props: riceve il catalogo completo, poi decide localmente cosa mostrare in vetrina.
type VetrinaSectionProps = {
    prodotti: Prodotto[];
};

// Fallback statico usato quando il backend non ha ancora dati.
// In una traccia diversa puoi inserire esempi coerenti con il nuovo dominio.
const fallbackVetrina = [
    {
        id: 0,
        titoloProdotto: "Borsa in fibra riciclata",
        categoriaProdotto: "Accessori",
        prezzo: 45,
        immaginiLink: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 1,
        titoloProdotto: "Lampada in legno recuperato",
        categoriaProdotto: "Arredo",
        prezzo: 89,
        immaginiLink: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        titoloProdotto: "Set ceramica artigianale",
        categoriaProdotto: "Casa",
        prezzo: 62,
        immaginiLink: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
    },
];

// Formatter valuta separato: centralizza presentazione prezzi e facilita localizzazione.
const prezzoFormatter = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" });

export function VetrinaSection({ prodotti }: VetrinaSectionProps) {
    // Mostra i primi 3 prodotti. Per "top prodotti" sostituisci con sort/ranking dedicato.
    const vetrina = prodotti.length > 0 ? prodotti.slice(0, 3) : fallbackVetrina;

    return (
        <section className="section-card" id="vetrina-prodotti">
            <div className="section-header-row">
                <h2>Vetrina prodotti</h2>
                {/* Ancora al catalogo completo: in SPA multi-pagina valuta una route dedicata. */}
                <a className="link-inline" href="#catalogo">
                    Vai al catalogo completo
                </a>
            </div>
            <div className="cards-grid">
                {vetrina.map((prodotto) => (
                    // Key composita utile anche sui fallback statici privi di id reali univoci.
                    <article className="product-card" key={`${prodotto.id}-${prodotto.titoloProdotto}`}>
                        <img src={prodotto.immaginiLink} alt={prodotto.titoloProdotto} className="product-image" />
                        <div className="product-body">
                            <span className="tag">{prodotto.categoriaProdotto}</span>
                            <h3>{prodotto.titoloProdotto}</h3>
                            <p>{prezzoFormatter.format(Number(prodotto.prezzo))}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
