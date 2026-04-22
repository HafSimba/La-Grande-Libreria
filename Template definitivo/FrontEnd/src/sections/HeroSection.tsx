import './HeroSection.css'

export function HeroSection() {
    return (
        <section className="landing-hero" id="chi-siamo" role="banner">
            <div className="landing-hero__overlay" />

            <div className="landing-hero__content">
                {/*
          COME PERSONALIZZARE SFONDO:
          sostituisci il file public/immagini/hero-landing-bg.png con la tua foto
          mantenendo lo stesso nome, oppure cambia il percorso nel CSS HeroSection.css.
        */}
                <h1 className="landing-hero__title">cambia questo testo</h1>
                <p className="landing-hero__subtitle">cambia questo testo</p>

                {/*
          COME FAR FUNZIONARE I BOTTONI:
          1) Collegamento a pagina: usa <a href="/contatti"> oppure <Link to="/contatti"> con React Router.
          2) Collegamento a sezione: usa href="#contatti" e assicurati che la sezione target abbia id="contatti".
        */}
                <div className="landing-hero__actions">
                    <button type="button" className="landing-hero__button landing-hero__button--primary">
                        Pulsante Primario
                    </button>
                    <button type="button" className="landing-hero__button landing-hero__button--secondary">
                        Pulsante Secondario
                    </button>
                </div>
            </div>
        </section>
    )
}