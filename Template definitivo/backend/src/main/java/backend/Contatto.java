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
public class Contatto {

	// CUSTOM ESAME:
	// rinomina questa entity in base alla traccia, per esempio Evento, Prodotto, Donazione o Proposta.
	// Ogni campo del form frontend deve avere un campo corrispondente qui.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 120, nullable = false)
	private String nome;

	@Column(length = 150, nullable = false)
	private String email;

	@Column(length = 40, nullable = false)
	private String telefono;

	@Column(length = 3000, nullable = false)
	private String messaggio;

	// CUSTOM ESAME:
	// aggiorna questo costruttore ogni volta che aggiungi o rimuovi campi dal form.
	// Non inserire id nel costruttore: viene generato dal database.
	public Contatto(String nome, String email, String telefono, String messaggio) {
		this.nome = nome;
		this.email = email;
		this.telefono = telefono;
		this.messaggio = messaggio;
	}

}
