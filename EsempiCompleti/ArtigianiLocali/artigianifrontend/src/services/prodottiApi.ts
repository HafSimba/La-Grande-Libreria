import type { Prodotto, ProdottoPayload } from "../types/prodotto";

// URL base API: in produzione usa variabile ambiente VITE_API_URL.
// In locale resta il fallback su backend Spring in porta 8080.
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

// Endpoint REST principale; cambialo se la traccia richiede naming differente (es. /api/annunci).
const PRODOTTI_ENDPOINT = `${BASE_URL}/api/prodotti`;

// Utility condivisa per centralizzare gestione errori HTTP e parsing JSON.
async function readJson<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const fallback = `Errore API (${response.status})`;
        try {
            const maybeText = await response.text();
            throw new Error(maybeText || fallback);
        } catch {
            throw new Error(fallback);
        }
    }
    return (await response.json()) as T;
}

// GET catalogo completo.
export async function caricaCatalogo(): Promise<Prodotto[]> {
    const response = await fetch(PRODOTTI_ENDPOINT);
    return readJson<Prodotto[]>(response);
}

// GET categorie distinte, utile per chip/filtro lato UI.
export async function caricaCategorie(): Promise<string[]> {
    const response = await fetch(`${PRODOTTI_ENDPOINT}/categorie`);
    return readJson<string[]>(response);
}

// POST nuovo prodotto dal form.
// Se servono autenticazione o token, aggiungi headers qui.
export async function inserisciProdotto(payload: ProdottoPayload): Promise<Prodotto> {
    const response = await fetch(PRODOTTI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    return readJson<Prodotto>(response);
}
