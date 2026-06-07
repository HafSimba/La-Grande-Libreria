import './Hero.css'

type HeroProps = {
  imgSrc: string
}

export const Hero = ({ imgSrc }: HeroProps) => {
  return (
    <div className="hero">
      <img className="hero__image" src={imgSrc} alt="" />
      <div className="hero__content">
        <h1 className="hero__title">cambia questo testo</h1>
        <p className="hero__subtitle">cambia questo testo</p>
        <a className="button" href="#form">
          Partecipa
        </a>
      </div>
    </div>
  )
}
