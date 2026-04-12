// Modale semplice e riusabile: puo diventare un componente generico di progetto.
type FeedbackModalProps = {
    open: boolean;
    message: string;
    onClose: () => void;
};

export function FeedbackModal({ open, message, onClose }: FeedbackModalProps) {
    // Ritorno nullo per evitare rendering quando la modale non e attiva.
    if (!open) {
        return null;
    }

    return (
        // Chiusura al click esterno: UX immediata per conferme non bloccanti.
        <div className="modal-overlay" role="presentation" onClick={onClose}>
            <div className="modal-card" role="dialog" aria-modal="true" aria-label="Messaggio invio" onClick={(event) => event.stopPropagation()}>
                <h3>Operazione completata</h3>
                <p>{message}</p>
                <button type="button" className="btn btn-primary" onClick={onClose}>
                    Chiudi
                </button>
            </div>
        </div>
    );
}
