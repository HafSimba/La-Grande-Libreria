import { createBrowserRouter } from 'react-router'

import { AdminPage } from './pages/AdminPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

// CUSTOM ESAME:
// aggiungi qui eventuali pagine richieste dalla traccia.
// Esempio: se la traccia chiede una pagina catalogo, crea CatalogoPage e aggiungi path "/catalogo".
const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]

export const router = createBrowserRouter(routes)
