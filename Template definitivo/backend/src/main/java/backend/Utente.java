package backend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Utente {

	// CUSTOM ESAME:
	// entity semplice per login/admin. Se vuoi aggiungere ruolo, cognome o username,
	// aggiungi qui il campo e poi aggiorna costruttore, service, controller e useLogin.ts.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 120, nullable = false)
	private String nome;

	@Column(length = 150, nullable = false, unique = true)
	private String email;

	@Column(length = 120, nullable = false)
	private String password;

	public Utente(String nome, String email, String password) {
		this.nome = nome;
		this.email = email;
		this.password = password;
	}
}
