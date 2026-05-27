type Card = {
  title: string
  description: string
}

const cards: Card[] = [
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
  },
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
  },
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
  },
]

export const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <article className="cards__item" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </article>
      ))}
    </div>
  )
}
