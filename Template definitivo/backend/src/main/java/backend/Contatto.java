package backend;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contatto {

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

	private LocalDateTime dataInvio;

	public Contatto(String nome, String email, String telefono, String messaggio) {
		this.nome = nome;
		this.email = email;
		this.telefono = telefono;
		this.messaggio = messaggio;
	}

	@PrePersist
	void onCreate() {
		if (dataInvio == null) {
			dataInvio = LocalDateTime.now();
		}
	}
}
