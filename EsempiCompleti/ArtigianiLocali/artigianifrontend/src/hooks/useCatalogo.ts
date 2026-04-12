import { useCallback, useEffect, useState } from "react";
import { caricaCatalogo, caricaCategorie, inserisciProdotto } from "../services/prodottiApi";
import type { Prodotto, ProdottoPayload } from "../types/prodotto";

// Hook custom che incapsula tutta la logica dati del catalogo.
// In tracce future puoi riusarlo cambiando solo service e tipi.
export function useCatalogo() {
    const [catalogo, setCatalogo] = useState<Prodotto[]>([]);
    const [categorie, setCategorie] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [errore, setErrore] = useState<string | null>(null);

    // Ricarica iniziale e manuale: mantiene sincronizzati prodotti + categorie.
    const ricarica = useCallback(async () => {
        setLoading(true);
        setErrore(null);
        try {
            const [prodotti, categorieDalBackend] = await Promise.all([caricaCatalogo(), caricaCategorie()]);
            setCatalogo(prodotti);
            setCategorie(categorieDalBackend);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Errore durante il caricamento del catalogo";
            setErrore(message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Avvio caricamento al mount del componente root.
    useEffect(() => {
        void ricarica();
    }, [ricarica]);

    // Aggiorna lo stato localmente per offrire feedback immediato all'utente.
    // Se preferisci consistenza forte col backend, puoi chiamare ricarica() dopo il POST.
    const aggiungiProdotto = useCallback(async (payload: ProdottoPayload) => {
        const nuovo = await inserisciProdotto(payload);
        setCatalogo((prev) => [nuovo, ...prev]);
        setCategorie((prev) => {
            if (prev.includes(nuovo.categoriaProdotto)) {
                return prev;
            }
            return [...prev, nuovo.categoriaProdotto].sort((a, b) => a.localeCompare(b));
        });
    }, []);

    return { catalogo, categorie, loading, errore, ricarica, aggiungiProdotto };
}
