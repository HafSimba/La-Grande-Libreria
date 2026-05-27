import { createBrowserRouter } from 'react-router'

import { ContattiPage } from './pages/ContattiPage'
import { HomePage } from './pages/HomePage'

// CUSTOM ESAME:
// aggiungi qui eventuali pagine richieste dalla traccia.
// Esempio: se la traccia chiede una pagina catalogo, crea CatalogoPage e aggiungi path "/catalogo".
const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contatti',
    element: <ContattiPage />,
  },
]

export const router = createBrowserRouter(routes)
