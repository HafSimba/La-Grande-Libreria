package ttf.greentech.backend;

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
public class Registrazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nomeScuola, provincia, classe, nomeDocente, email, nomeProgetto;
	private Integer grado;
	@Column(length = 3000)
	private String descrizione;

	public Registrazione(String nomeScuola, Integer grado, String provincia, String classe, String nomeDocente,
			String email, String nomeProgetto, String descrizione) {
		this.nomeScuola = nomeScuola;
		this.grado = grado;
		this.provincia = provincia;
		this.classe = classe;
		this.nomeDocente = nomeDocente;
		this.email = email;
		this.nomeProgetto = nomeProgetto;
		this.descrizione = descrizione;
	}

}
