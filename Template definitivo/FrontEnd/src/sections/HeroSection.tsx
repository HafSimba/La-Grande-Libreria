import { Hero } from '../components/Hero'

export const HeroSection = () => {
  return (
    <section className="page-section page-section--hero" id="hero">
      {/* CUSTOM ESAME:
          cambia immagine, titolo e CTA nel componente Hero.tsx.
          Questa sezione resta separata cosi puoi rimuoverla o spostarla dalla HomePage. */}
      <Hero imgSrc="/src/assets/hero.png" />
    </section>
  )
}
