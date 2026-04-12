package artigianilocali.artigianibackend.backend;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Entity JPA principale del dominio.
// Se la traccia cambia (es. eventi, servizi, annunci), rinomina campi e tabella mantenendo la stessa struttura base.
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "prodotti_artigianali")
public class ProdottoArtigianale {

    // Chiave primaria tecnica generata dal DB.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Nome dell'artigiano o impresa proponente.
    @Column(nullable = false)
    private String nomeArtigianoImpresa;

    // Categoria usata anche per filtri lato frontend.
    @Column(nullable = false)
    private String categoriaProdotto;

    // Titolo sintetico visualizzato nelle card.
    @Column(nullable = false)
    private String titoloProdotto;

    // Lunghezza ampia per descrizioni estese.
    @Column(nullable = false, length = 12000)
    private String descrizioneProdotto;

    // Prezzo con 2 decimali; adatta precision/scale in base alla traccia.
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal prezzo;

    // URL immagine principale.
    @Column(nullable = false, length = 1500)
    private String immaginiLink;

    // Referente commerciale/operativo.
    @Column(nullable = false)
    private String contattoReferenteNome;

    // Email contatto da mostrare in catalogo.
    @Column(nullable = false)
    private String contattoReferenteEmail;

    // Timestamp creazione record, non modificabile in update.
    @Column(nullable = false, updatable = false)
    private LocalDateTime creatoIl;

    // Hook JPA automatico prima dell'insert.
    @PrePersist
    void onCreate() {
        creatoIl = LocalDateTime.now();
    }
}