package backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtenteService {

	@Autowired
	private UtenteRepository utenteRepository;

	// CUSTOM ESAME:
	// registra un utente admin nel database. Se l'email esiste gia, ritorna l'utente
	// esistente per evitare errori durante le prove ripetute.
	public Utente registraUtente(String nome, String email, String password) {
		Utente utenteEsistente = utenteRepository.findByEmail(email);

		if (utenteEsistente != null) {
			return utenteEsistente;
		}

		Utente utente = new Utente(nome, email, password);
		return utenteRepository.save(utente);
	}

	// CUSTOM ESAME:
	// login volutamente semplice: se email e password combaciano con una riga DB,
	// ritorna l'utente; altrimenti ritorna null.
	public Utente login(String email, String password) {
		return utenteRepository.findByEmailAndPassword(email, password);
	}
}
