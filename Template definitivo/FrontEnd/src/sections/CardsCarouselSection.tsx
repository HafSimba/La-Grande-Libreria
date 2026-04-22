import './CardsCarouselSection.css'

type CarouselCard = {
    title: string
    description: string
    actionLabel: string
}

// COME PERSONALIZZARE IL CAROSELLO:
// - Modifica/aggiungi/rimuovi elementi in questo array per cambiare le card visualizzate.
// - Per collegare ogni card a una pagina/sezione:
//   1) sostituisci il button con <a href="/pagina"> o <a href="#sezione">,
//   2) oppure usa <Link to="/pagina"> se stai usando React Router.
const cards: CarouselCard[] = [
    {
        title: 'cambia questo testo',
        description: 'cambia questo testo',
        actionLabel: 'Scopri di piu',
    },
    {
        title: 'cambia questo testo',
        description: 'cambia questo testo',
        actionLabel: 'Scopri di piu',
    },
    {
        title: 'cambia questo testo',
        description: 'cambia questo testo',
        actionLabel: 'Scopri di piu',
    },
    {
        title: 'cambia questo testo',
        description: 'cambia questo testo',
        actionLabel: 'Scopri di piu',
    },
]

export function CardsCarouselSection() {
    return (
        <section className="cards-carousel" id="servizi" aria-label="Carosello di card">
            <div className="cards-carousel__track">
                {cards.map((card, index) => (
                    <article className="cards-carousel__card" key={`${card.title}-${index}`}>
                        <h3 className="cards-carousel__title">{card.title}</h3>
                        <p className="cards-carousel__description">{card.description}</p>
                        <button type="button" className="cards-carousel__button">
                            {card.actionLabel}
                        </button>
                    </article>
                ))}
            </div>
        </section>
    )
}