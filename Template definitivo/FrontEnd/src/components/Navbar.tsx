import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Contatti', href: '#contatti' },
]

export function Navbar() {
  return (
    <header className="landing-navbar" id="home">
      <a className="landing-navbar__brand" href="#home" aria-label="Vai alla Home">
        <span className="landing-navbar__logo" aria-hidden="true" />
        <span className="landing-navbar__brandText">Logo</span>
      </a>

      <nav aria-label="Navigazione principale">
        <ul className="landing-navbar__menu">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="landing-navbar__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
