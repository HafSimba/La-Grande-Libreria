import './Navbar.css'
import { useNavigate } from 'react-router'

const navItems = [
    // CUSTOM ESAME:
    // aggiungi o rimuovi voci menu modificando questo array.
    // Ogni href deve puntare all'id della sezione, ad esempio "#dati-database".
    { label: 'Home', href: '#hero' },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Partecipa', href: '#form' },
    { label: 'Dati', href: '#dati-database' },
]

export function Navbar() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <header className="landing-navbar" id="home">
            <a className="landing-navbar__brand" href="#hero" aria-label="Vai alla Home">
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
                    <li>
                        <a className="landing-navbar__link" onClick={handleLogin}>
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
