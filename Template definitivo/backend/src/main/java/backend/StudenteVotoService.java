package backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudenteVotoService {

	@Autowired
	private StudenteVotoRepository studenteVotoRepository;

	// CUSTOM ESAME:
	// riceve i dati dal controller, crea l'entity e salva su database.
	// Se aggiungi un campo, aggiungilo qui e nel costruttore di StudenteVoto.
	public StudenteVoto inserisciStudenteVoto(String nomeStudente, String materia, Integer voto, String classe) {
		StudenteVoto studenteVoto = new StudenteVoto(nomeStudente, materia, voto, classe);
		return studenteVotoRepository.save(studenteVoto);
	}

	// CUSTOM ESAME:
	// usato dalla sezione frontend per mostrare tutti gli elementi inseriti.
	public List<StudenteVoto> mostraTutti() {
		return studenteVotoRepository.findAll();
	}

	// CUSTOM ESAME:
	// logica filtro semplice. Se la traccia chiede filtri diversi,
	// cambia materia/classe con i campi richiesti e aggiorna repository + controller + frontend.
	public List<StudenteVoto> filtra(String materia, String classe) {
		boolean materiaVuota = materia == null || materia.isBlank();
		boolean classeVuota = classe == null || classe.isBlank();

		if (materiaVuota && classeVuota) {
			return studenteVotoRepository.findAll();
		}

		if (classeVuota) {
			return studenteVotoRepository.findByMateriaContainingIgnoreCase(materia);
		}

		if (materiaVuota) {
			return studenteVotoRepository.findByClasseContainingIgnoreCase(classe);
		}

		return studenteVotoRepository.findByMateriaContainingIgnoreCaseAndClasseContainingIgnoreCase(materia, classe);
	}
}
