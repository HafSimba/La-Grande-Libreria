// Props minimali della hero: in caso di nuove metriche puoi estenderle (es. numero artigiani, ordini, recensioni).
type HeroSectionProps = {
    totaleProdotti: number;
};

export function HeroSection({ totaleProdotti }: HeroSectionProps) {
    return (
        // ID usato dalle ancore interne: se rinomini, aggiorna anche href negli altri componenti.
        <section className="section-card hero-section" id="hero-introduttiva">
            <div className="hero-grid">
                <div>
                    {/* Etichetta sintetica: adattala al dominio della traccia (es. "Portale culturale"). */}
                    <p className="eyebrow">Marketplace sostenibile</p>

                    {/* Brand o titolo progetto: punto principale da personalizzare in esame. */}
                    <h1>ArtigianiLocali</h1>

                    {/* Value proposition: mantieni una frase chiara e orientata all'utente finale. */}
                    <p className="section-intro">
                        La vetrina digitale degli artigiani del territorio che realizzano prodotti a basso impatto ambientale.
                    </p>

                    {/* CTA primarie: puoi collegarle a route React Router invece di ancore hash. */}
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#inserimento-prodotto">
                            Proponi un prodotto
                        </a>
                        <a className="btn btn-outline" href="#catalogo">
                            Esplora il catalogo
                        </a>
                    </div>

                    {/* KPI rapidi: mantieni indicatori coerenti con la traccia assegnata. */}
                    <div className="hero-stats">
                        <span className="stat-pill">Prodotti pubblicati: {totaleProdotti}</span>
                        <span className="stat-pill">Focus: filiera corta e materiali green</span>
                    </div>
                </div>
                <div className="hero-media">
                    {/* Immagine hero: sostituisci con asset locale in /public per demo offline. */}
                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                        alt="Artigiani al lavoro"
                    />
                </div>
            </div>
        </section>
    );
}
