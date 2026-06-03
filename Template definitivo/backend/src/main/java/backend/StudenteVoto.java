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
public class StudenteVoto {

	// CUSTOM ESAME:
	// questo file e un modulo opzionale separato da Contatto.
	// Puoi rinominarlo in base alla traccia, per esempio Evento, Prodotto o Donazione.
	// Ogni campo qui deve corrispondere a un input frontend e a un @RequestParam del controller.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 120, nullable = false)
	private String nomeStudente;

	@Column(length = 80, nullable = false)
	private String materia;

	@Column(nullable = false)
	private Integer voto;

	@Column(length = 40, nullable = false)
	private String classe;

	// CUSTOM ESAME:
	// aggiorna questo costruttore quando aggiungi o rimuovi campi.
	// Non inserire id: viene creato automaticamente dal database.
	public StudenteVoto(String nomeStudente, String materia, Integer voto, String classe) {
		this.nomeStudente = nomeStudente;
		this.materia = materia;
		this.voto = voto;
		this.classe = classe;
	}
}
