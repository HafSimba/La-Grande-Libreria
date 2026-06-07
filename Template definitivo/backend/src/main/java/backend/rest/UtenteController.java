package backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.Utente;
import backend.UtenteService;
import jakarta.validation.constraints.Size;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/utenti")
public class UtenteController {

	@Autowired
	private UtenteService utenteService;

	// CUSTOM ESAME:
	// registra un utente. Le chiavi URLSearchParams in useLogin.ts devono chiamarsi
	// nome, email e password come questi @RequestParam.
	@PostMapping("/registra")
	public Utente registra(
			@RequestParam @Size(max = 120, message = "Max 120 caratteri") String nome,
			@RequestParam @Size(max = 150, message = "Max 150 caratteri") String email,
			@RequestParam @Size(max = 120, message = "Max 120 caratteri") String password) {
		return utenteService.registraUtente(nome, email, password);
	}

	// CUSTOM ESAME:
	// autentica solo se email e password sono gia salvate nel database.
	// Non usa token/sessioni per mantenere il template semplice da esame.
	@PostMapping("/login")
	public Utente login(
			@RequestParam String email,
			@RequestParam String password) {
		return utenteService.login(email, password);
	}
}
