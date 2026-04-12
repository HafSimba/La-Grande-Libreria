package artigianilocali.artigianibackend.rest.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

// DTO input da frontend a backend.
// Se la traccia cambia campi obbligatori o naming, aggiorna prima questo record e poi service/entity.
public record ProdottoRequest(
        // Nome artigiano o impresa.
        @NotBlank(message = "Il nome artigiano o impresa e obbligatorio") String nomeArtigianoImpresa,
        // Categoria merceologica usata anche in filtro frontend.
        @NotBlank(message = "La categoria prodotto e obbligatoria") String categoriaProdotto,
        // Titolo breve del prodotto.
        @NotBlank(message = "Il titolo prodotto e obbligatorio") String titoloProdotto,
        // Descrizione testuale; limite parole gestito nel service.
        @NotBlank(message = "La descrizione prodotto e obbligatoria") String descrizioneProdotto,
        // Prezzo minimo > 0 per evitare valori non validi.
        @NotNull(message = "Il prezzo e obbligatorio") @DecimalMin(value = "0.01", message = "Il prezzo deve essere maggiore di zero") BigDecimal prezzo,
        // URL immagine prodotto.
        @NotBlank(message = "Il link immagine e obbligatorio") String immaginiLink,
        // Nome referente per contatti.
        @NotBlank(message = "Il nome referente e obbligatorio") String contattoReferenteNome,
        // Email referente validata da Bean Validation.
        @NotBlank(message = "La email referente e obbligatoria") @Email(message = "La email referente non e valida") String contattoReferenteEmail) {
}