import { useEffect, useState } from 'react'
import type { Contatto } from '../types/Contatto'

// CUSTOM ESAME:
// usa questo hook per leggere liste dal backend, ad esempio catalogo, eventi, offerte o proposte.
// Il tipo Contatto va rinominato/aggiornato in src/types quando cambi dominio del progetto.
export const useApi = (url: string) => {
  const [data, setData] = useState<Contatto[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
        })
        if (!response.ok) throw new Error(`Errore: ${response.status}`)
        const result = await response.json()
        setData(result)
      } catch (err) {
        console.error('Errore nel fetch:', err)
      }
    }
    fetchData()
  }, [url])

  return data
}
