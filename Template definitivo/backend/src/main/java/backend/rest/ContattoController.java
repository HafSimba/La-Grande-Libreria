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

	@Autowired
	private ContattoService contattoService;

	// COME PERSONALIZZARE CONTRATTO API:
	// - Se aggiungi un campo nel form frontend, aggiungi qui un nuovo @RequestParam
	// con lo stesso nome usato nel payload form-urlencoded.
	@PostMapping("/invia")
	public Contatto inviaContatto(
			@RequestParam @Size(max = 120, message = "Max 120 caratteri") String nome,
			@RequestParam @Size(max = 150, message = "Max 150 caratteri") String email,
			@RequestParam @Size(max = 40, message = "Max 40 caratteri") String telefono,
			@RequestParam @Size(max = 3000, message = "Max 3000 caratteri") String messaggio) {
		return contattoService.salvaContatto(nome, email, telefono, messaggio);
	}

	@GetMapping("/tutti")
	public List<Contatto> mostraTutti() {
		return contattoService.trovaTutti();
	}
}
