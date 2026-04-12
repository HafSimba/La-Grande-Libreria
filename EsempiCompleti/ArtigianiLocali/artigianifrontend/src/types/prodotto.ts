// Payload inviato dal form al backend.
// Per nuove tracce: aggiungi/rimuovi campi qui e allinea form + backend DTO.
export type ProdottoPayload = {
    // Nome espositore o azienda.
    nomeArtigianoImpresa: string;
    // Categoria usata per filtri/chip in UI.
    categoriaProdotto: string;
    // Titolo breve della scheda.
    titoloProdotto: string;
    // Testo lungo: in backend e presente il vincolo max parole.
    descrizioneProdotto: string;
    // Prezzo in EUR; se la traccia non lo richiede puoi renderlo opzionale.
    prezzo: number;
    // URL immagine principale del prodotto.
    immaginiLink: string;
    // Referente commerciale o autore.
    contattoReferenteNome: string;
    // Email di contatto mostrata in catalogo.
    contattoReferenteEmail: string;
};

// Modello completo restituito dal backend (payload + metadati persistiti).
export type Prodotto = ProdottoPayload & {
    // ID tecnico per key React e riferimenti futuri (detail page, modifica, delete).
    id: number;
    // Timestamp di creazione, utile per ordinamenti e badge "nuovo".
    creatoIl: string;
};
