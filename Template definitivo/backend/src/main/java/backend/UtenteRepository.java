package backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UtenteRepository extends JpaRepository<Utente, Long> {

	// CUSTOM ESAME:
	// usato dal login per cercare email e password nel database.
	// Mantieni i nomi uguali ai campi di Utente.java.
	Utente findByEmailAndPassword(String email, String password);

	Utente findByEmail(String email);
}
