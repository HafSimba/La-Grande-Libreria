package artigianilocali.artigianibackend.backend;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import artigianilocali.artigianibackend.rest.dto.ProdottoRequest;
import artigianilocali.artigianibackend.rest.dto.ProdottoResponse;
import lombok.RequiredArgsConstructor;

// Service applicativo: contiene regole business e mapping DTO <-> Entity.
@Service
@RequiredArgsConstructor
public class ProdottoArtigianaleService {

    // Vincolo da traccia: descrizione max 3000 parole.
    // Se la consegna cambia, aggiorna questo valore centrale.
    private static final int MAX_PAROLE_DESCRIZIONE = 3000;

    private final ProdottoArtigianaleRepository repository;

    // Crea un nuovo prodotto validando regole applicative e normalizzando input.
    public ProdottoResponse creaProdotto(ProdottoRequest request) {
        validaDescrizione(request.descrizioneProdotto());

        // Mapping esplicito: facile da adattare quando aggiungi/rimuovi campi dalla
        // traccia.
        ProdottoArtigianale entity = new ProdottoArtigianale();
        entity.setNomeArtigianoImpresa(request.nomeArtigianoImpresa().trim());
        entity.setCategoriaProdotto(request.categoriaProdotto().trim());
        entity.setTitoloProdotto(request.titoloProdotto().trim());
        entity.setDescrizioneProdotto(request.descrizioneProdotto().trim());
        entity.setPrezzo(request.prezzo());
        entity.setImmaginiLink(request.immaginiLink().trim());
        entity.setContattoReferenteNome(request.contattoReferenteNome().trim());
        entity.setContattoReferenteEmail(request.contattoReferenteEmail().trim());

        ProdottoArtigianale salvato = repository.save(entity);
        return toResponse(salvato);
    }

    // Restituisce catalogo completo ordinato per data di creazione.
    public List<ProdottoResponse> elencoCatalogo() {
        return repository.findAllByOrderByCreatoIlDesc().stream().map(this::toResponse).toList();
    }

    // Restituisce set categorie per filtri/chip lato frontend.
    public List<String> elencoCategorie() {
        return repository.findCategorieDistinte();
    }

    // Validazione business supplementare oltre a Bean Validation del DTO.
    private void validaDescrizione(String descrizione) {
        long parole = Arrays.stream(descrizione.trim().split("\\s+")).filter(token -> !token.isBlank()).count();
        if (parole > MAX_PAROLE_DESCRIZIONE) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "La descrizione supera il limite massimo di 3000 parole.");
        }
    }

    // Mapping entity -> response centralizzato per evitare duplicazioni.
    private ProdottoResponse toResponse(ProdottoArtigianale entity) {
        return new ProdottoResponse(entity.getId(), entity.getNomeArtigianoImpresa(), entity.getCategoriaProdotto(),
                entity.getTitoloProdotto(), entity.getDescrizioneProdotto(), entity.getPrezzo(),
                entity.getImmaginiLink(),
                entity.getContattoReferenteNome(), entity.getContattoReferenteEmail(), entity.getCreatoIl());
    }
}