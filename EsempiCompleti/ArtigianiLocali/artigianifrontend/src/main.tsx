import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Entry point React: utile da toccare se vuoi aggiungere Router, provider globali o i18n.
createRoot(document.getElementById('root')!).render(
  // StrictMode aiuta a individuare effetti collaterali durante lo sviluppo.
  // Se in una demo d'esame vuoi output piu lineare, puoi temporaneamente rimuoverlo.
  <StrictMode>
    <App />
  </StrictMode>,
)
