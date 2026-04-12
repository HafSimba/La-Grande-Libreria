// Props con categorie provenienti dal backend.
type CategorieSectionProps = {
    categorie: string[];
};

// Categorie di default per mantenere la UI completa anche a database vuoto.
const fallbackCategorie = ["Arredo", "Moda", "Casa", "Gioielli", "Food Artigianale"];

export function CategorieSection({ categorie }: CategorieSectionProps) {
    // Priorita ai dati reali; fallback utile in fase demo o seed iniziale.
    const valori = categorie.length > 0 ? categorie : fallbackCategorie;

    return (
        <section className="section-card" id="categorie">
            <h2>Categorie</h2>
            <p className="section-intro">
                Usa le categorie per esplorare il catalogo in base a tecnica, tipologia prodotto o settore artigianale.
            </p>
            <div className="chip-list">
                {valori.map((categoria) => (
                    // In questa versione il click porta al catalogo; puoi aggiungere filtro attivo con stato locale.
                    <a className="chip" href="#catalogo" key={categoria}>
                        {categoria}
                    </a>
                ))}
            </div>
        </section>
    );
}
