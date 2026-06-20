import './Cards.css'

type Card = {
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

const cards: Card[] = [
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
    imagePath: '/vite.svg',
    imageAlt: 'cambia descrizione immagine',
  },
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
    imagePath: '/vite.svg',
    imageAlt: 'cambia descrizione immagine',
  },
  {
    title: 'cambia questo testo',
    description: 'cambia questo testo',
    imagePath: '/vite.svg',
    imageAlt: 'cambia descrizione immagine',
  },
]

export const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <article className="cards__item" key={card.title}>
          {/* CUSTOM ESAME:
              immagine della singola card.
              Per cambiarla inserisci il path in imagePath nell'array cards qui sopra.
              Consiglio: metti le immagini nella cartella public e usa path tipo "/foto.jpg"
              oppure "/images/foto.jpg" se crei public/images.
              Per rimuovere le immagini elimina questo blocco, imagePath/imageAlt dal type Card,
              i campi imagePath/imageAlt dall'array e le classi .cards__imageWrapper/.cards__image in Cards.css. */}
          <div className="cards__imageWrapper">
            <img className="cards__image" src={card.imagePath} alt={card.imageAlt} />
          </div>

          <div className="cards__body">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
