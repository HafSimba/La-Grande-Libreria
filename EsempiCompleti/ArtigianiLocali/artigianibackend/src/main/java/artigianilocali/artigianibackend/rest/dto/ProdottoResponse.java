package artigianilocali.artigianibackend.rest.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

// DTO risposta verso frontend.
// Mantieni qui solo i campi che vuoi esporre pubblicamente.
public record ProdottoResponse(Long id, String nomeArtigianoImpresa, String categoriaProdotto, String titoloProdotto,
        String descrizioneProdotto, BigDecimal prezzo, String immaginiLink, String contattoReferenteNome,
        String contattoReferenteEmail, LocalDateTime creatoIl) {
}