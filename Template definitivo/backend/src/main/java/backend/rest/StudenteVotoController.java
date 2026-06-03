package backend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.StudenteVoto;
import backend.StudenteVotoService;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/studenti-voti")
public class StudenteVotoController {

	// CUSTOM ESAME:
	// questo controller e separato da ContattoController. Se la traccia non richiede
	// lista + filtro, puoi cancellare tutti i file StudenteVoto*.
	// Se cambi "/studenti-voti", aggiorna gli URL in useStudentiVoti.ts.
	@Autowired
	private StudenteVotoService studenteVotoService;

	// CUSTOM ESAME:
	// endpoint POST del form. Ogni @RequestParam deve avere lo stesso nome
	// della chiave URLSearchParams in useStudentiVoti.ts.
	@PostMapping("/inserisci")
	public StudenteVoto inserisci(
			@RequestParam @Size(max = 120, message = "Max 120 caratteri") String nomeStudente,
			@RequestParam @Size(max = 80, message = "Max 80 caratteri") String materia,
			@RequestParam @Min(value = 1, message = "Voto minimo 1") @Max(value = 10, message = "Voto massimo 10") Integer voto,
			@RequestParam @Size(max = 40, message = "Max 40 caratteri") String classe) {
		return studenteVotoService.inserisciStudenteVoto(nomeStudente, materia, voto, classe);
	}

	// CUSTOM ESAME:
	// endpoint GET per mostrare tutti gli elementi inseriti nel DB.
	@GetMapping("/tutti")
	public List<StudenteVoto> mostraTutti() {
		return studenteVotoService.mostraTutti();
	}

	// CUSTOM ESAME:
	// endpoint GET per filtrare. I nomi materia/classe devono combaciare
	// con le chiavi query create in handleFiltra nel frontend.
	@GetMapping("/filtra")
	public List<StudenteVoto> filtra(
			@RequestParam(required = false) String materia,
			@RequestParam(required = false) String classe) {
		return studenteVotoService.filtra(materia, classe);
	}
}
