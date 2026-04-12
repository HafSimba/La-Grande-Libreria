package artigianilocali.artigianibackend.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import artigianilocali.artigianibackend.backend.ProdottoArtigianaleService;
import artigianilocali.artigianibackend.rest.dto.ProdottoRequest;
import artigianilocali.artigianibackend.rest.dto.ProdottoResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

// Controller REST esposto al frontend.
// Se la traccia richiede nuovi endpoint (update/delete/filtro), estendili qui mantenendo il service come unico punto business.
@Validated
@RestController
@RequiredArgsConstructor
// CORS locale per frontend Vite; in deploy usa origin da variabile/profilo.
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/prodotti")
public class RegistrazioneController {

    private final ProdottoArtigianaleService prodottoService;

    // POST creazione prodotto.
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProdottoResponse creaProdotto(@Valid @RequestBody ProdottoRequest request) {
        return prodottoService.creaProdotto(request);
    }

    // GET catalogo completo.
    @GetMapping
    public List<ProdottoResponse> elencoCatalogo() {
        return prodottoService.elencoCatalogo();
    }

    // GET categorie distinte per supportare filtri rapidi in UI.
    @GetMapping("/categorie")
    public List<String> elencoCategorie() {
        return prodottoService.elencoCategorie();
    }
}
