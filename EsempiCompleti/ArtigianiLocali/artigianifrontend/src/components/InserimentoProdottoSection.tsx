import { useState } from "react";
import type { ProdottoPayload } from "../types/prodotto";

// Il parent fornisce il submit asincrono: puo puntare a backend reale o mock durante la prova.
type InserimentoProdottoSectionProps = {
    onSubmit: (payload: ProdottoPayload) => Promise<void>;
};

// Stato iniziale del form: fonte unica dei campi visualizzati e inviati.
// Per nuove consegne aggiungi qui il campo e poi relativo input nel markup.
const initialForm: ProdottoPayload = {
    nomeArtigianoImpresa: "",
    categoriaProdotto: "",
    titoloProdotto: "",
    descrizioneProdotto: "",
    prezzo: 0,
    immaginiLink: "",
    contattoReferenteNome: "",
    contattoReferenteEmail: "",
};

export function InserimentoProdottoSection({ onSubmit }: InserimentoProdottoSectionProps) {
    // Stato controllato del form: garantisce coerenza UI e payload inviato.
    const [form, setForm] = useState<ProdottoPayload>(initialForm);
    const [isSending, setIsSending] = useState(false);
    const [errore, setErrore] = useState<string | null>(null);

    // Handler centralizzato: aggiungere un nuovo campo richiede solo aggiornare initialForm e markup.
    // Se vuoi validazioni live (es. regex email), inseriscile qui prima del setForm.
    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = event.target;
        if (name === "prezzo") {
            setForm((prev) => ({ ...prev, prezzo: Number(value) }));
            return;
        }
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Submit unico: gestisce loading, errore e reset.
    // Se la traccia richiede redirect o evento analytics, agganciali dopo onSubmit(form).
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrore(null);
        setIsSending(true);
        try {
            await onSubmit(form);
            setForm(initialForm);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Errore durante l'invio del prodotto";
            setErrore(message);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section className="section-card" id="inserimento-prodotto">
            <h2>Modulo di inserimento prodotto</h2>
            <p className="section-intro">
                Compila tutti i campi obbligatori per proporre il tuo prodotto nella vetrina ArtigianiLocali.
            </p>

            {/* Ogni label contiene un campo controllato; pattern riutilizzabile per qualsiasi entita. */}
            <form className="inserimento-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <label>
                        Nome artigiano/impresa
                        <input
                            required
                            name="nomeArtigianoImpresa"
                            value={form.nomeArtigianoImpresa}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Categoria prodotto
                        <input required name="categoriaProdotto" value={form.categoriaProdotto} onChange={handleChange} />
                    </label>

                    <label>
                        {/* Se la traccia richiede SKU/codice prodotto, puoi aggiungere un campo dedicato qui. */}
                        Titolo prodotto
                        <input required name="titoloProdotto" value={form.titoloProdotto} onChange={handleChange} />
                    </label>

                    <label>
                        Prezzo (EUR)
                        <input
                            required
                            type="number"
                            min="0.01"
                            step="0.01"
                            name="prezzo"
                            value={form.prezzo || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        {/* Input URL: per upload file locale serve endpoint dedicato nel backend/storage. */}
                        Link immagine
                        <input required type="url" name="immaginiLink" value={form.immaginiLink} onChange={handleChange} />
                    </label>

                    <label>
                        Nome referente
                        <input
                            required
                            name="contattoReferenteNome"
                            value={form.contattoReferenteNome}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Email referente
                        <input
                            required
                            type="email"
                            name="contattoReferenteEmail"
                            value={form.contattoReferenteEmail}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <label>
                    {/* Backend limita a 3000 parole: puoi aggiungere anche un contatore lato frontend. */}
                    Descrizione prodotto
                    <textarea
                        required
                        name="descrizioneProdotto"
                        rows={5}
                        value={form.descrizioneProdotto}
                        onChange={handleChange}
                        placeholder="Racconta materiali, tecnica, origine e valore sostenibile del prodotto"
                    />
                </label>

                {/* Mostra errore applicativo (rete, validazione backend, ecc.). */}
                {errore && <p className="error-text">{errore}</p>}

                {/* Pulsante bloccato durante invio per evitare doppie submit. */}
                <button className="btn btn-primary" type="submit" disabled={isSending}>
                    {isSending ? "Invio in corso..." : "Invia proposta"}
                </button>
            </form>
        </section>
    );
}
