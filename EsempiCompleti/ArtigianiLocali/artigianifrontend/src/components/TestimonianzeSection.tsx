// Dataset statico: sostituibile con chiamata API se la traccia richiede persistenza testimonianze.
const testimonianze = [
    {
        autore: "Elena, ceramista",
        testo:
            "Grazie alla vetrina ho raggiunto clienti interessati alla produzione locale e ho raccontato meglio il mio lavoro.",
    },
    {
        autore: "Marco, falegname",
        testo:
            "Il marketplace e semplice da usare: in pochi minuti pubblico il prodotto e ricevo contatti qualificati.",
    },
    {
        autore: "Sara, laboratorio tessile",
        testo:
            "La rete ArtigianiLocali mi aiuta a promuovere materiali naturali e processi produttivi responsabili.",
    },
];

export function TestimonianzeSection() {
    return (
        <section className="section-card" id="testimonianze">
            <h2>Testimonianze</h2>
            <div className="cards-grid testimonial-grid">
                {testimonianze.map((item) => (
                    // Autore come key: va bene se univoco; in caso contrario aggiungi un id.
                    <article className="testimonial-card" key={item.autore}>
                        <p>"{item.testo}"</p>
                        <h3>{item.autore}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
