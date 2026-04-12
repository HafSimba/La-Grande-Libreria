export function ChiSiamoSection() {
    return (
        <section className="section-card" id="chi-siamo">
            {/* Sezione descrittiva: ottima per dimostrare comprensione dominio nel colloquio d'esame. */}
            <h2>Chi siamo</h2>
            <p className="section-intro">
                ArtigianiLocali e una rete che valorizza le imprese artigiane impegnate in processi produttivi sostenibili,
                trasparenti e radicati nel territorio.
            </p>

            {/* Le 3 card sono facilmente estendibili a 4/6 elementi con lo stesso pattern. */}
            <div className="mini-grid">
                <article className="mini-card">
                    <h3>Missione</h3>
                    <p>Mettere in contatto artigiani e cittadini con una piattaforma semplice e accessibile.</p>
                </article>
                <article className="mini-card">
                    <h3>Visione</h3>
                    <p>Diffondere un modello di consumo locale, consapevole e orientato alla qualita.</p>
                </article>
                <article className="mini-card">
                    <h3>Impatto</h3>
                    <p>Ridurre sprechi e distanza tra produzione e acquisto promuovendo la filiera corta.</p>
                </article>
            </div>
        </section>
    );
}
