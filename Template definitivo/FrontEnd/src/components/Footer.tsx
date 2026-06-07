import './Footer.css'

export const Footer = () => {
  // CUSTOM ESAME: modifica questi link con le pagine richieste dalla traccia.
  // Se un link non serve, elimina semplicemente l'oggetto dall'array.
  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Contatti', href: '#' },
    { label: 'Servizi', href: '#' },
    { label: 'Area riservata', href: '#' },
  ]

  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <h2 className="footer__title">Nome progetto</h2>
          <p className="footer__text">
            Breve descrizione del progetto da personalizzare in base alla traccia.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Link footer">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
