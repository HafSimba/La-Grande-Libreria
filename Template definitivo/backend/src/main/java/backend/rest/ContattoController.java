package backend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.Contatto;
import backend.ContattoService;
import jakarta.validation.constraints.Size;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/contatti")
public class ContattoController {

	// CUSTOM ESAME:
	// se cambi dominio del progetto, puoi cambiare "/contatti" in "/eventi", "/prodotti" o simile.
	// Dopo averlo cambiato, aggiorna anche gli URL fetch nel frontend.
	@Autowired
	private ContattoService contattoService;

	// CUSTOM ESAME:
	// ogni @RequestParam deve avere lo stesso nome della chiave in URLSearchParams dentro useForm.ts.
	// Questo endpoint riceve application/x-www-form-urlencoded, non JSON.
	@PostMapping("/invia")
	public Contatto inviaContatto(
			@RequestParam @Size(max = 120, message = "Max 120 caratteri") String nome,
			@RequestParam @Size(max = 150, message = "Max 150 caratteri") String email,
			@RequestParam @Size(max = 40, message = "Max 40 caratteri") String telefono,
			@RequestParam @Size(max = 3000, message = "Max 3000 caratteri") String messaggio) {
		return contattoService.contatto(nome, email, telefono, messaggio);
	}

	// CUSTOM ESAME:
	// questo GET viene usato dalla pagina lista tramite useApi.
	// Se cambi path, aggiorna l'URL nella pagina React.
	@GetMapping("/tutti")
	public List<Contatto> mostraTutti() {
		return contattoService.mostraTutti();
	}
}
