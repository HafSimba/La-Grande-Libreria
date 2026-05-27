import { useNavigate } from 'react-router'

export const NavbarAlt = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  return (
    <nav className="navbar">
      <a className="navbar__brand" onClick={handleHome}>
        Logo
      </a>
      <button className="navbar__button" type="button" onClick={handleHome}>
        Home
      </button>
    </nav>
  )
}
