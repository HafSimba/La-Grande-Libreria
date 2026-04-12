package ttf.greentech.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.constraints.Size;
import ttf.greentech.backend.RegistrazioneService;
import ttf.greentech.backend.Registrazione;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/registrazione")
public class RegistrazioneController {

	@Autowired
	private RegistrazioneService rs;

	@PostMapping("/registra")
	public Registrazione registra(@RequestParam String nomeScuola, @RequestParam Integer grado,
			@RequestParam String provincia, @RequestParam String classe, @RequestParam String nomeDocente,
			@RequestParam String email, @RequestParam String nomeProgetto,
			@RequestParam @Size(max = 3000, message = "Limite di 3000 caratteri") String descrizione) {
		return rs.registrazione(nomeScuola, grado, provincia, classe, nomeDocente, email, nomeProgetto, descrizione);
	}

	@GetMapping("/mostratutti")
	public List<Registrazione> mostratutti() {
		return rs.mostraTutti();
	}

}
