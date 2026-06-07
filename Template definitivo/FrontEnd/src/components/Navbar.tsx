import './Navbar.css'
import { useNavigate } from 'react-router'

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Partecipa', href: '#form' },
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
