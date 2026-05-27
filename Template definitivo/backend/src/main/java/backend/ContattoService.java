package backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContattoService {

	@Autowired
	private ContattoRepository contattoRepository;

	// CUSTOM ESAME:
	// questo metodo riceve i dati dal controller, crea l'entity e la salva.
	// Se aggiungi campi, aggiungili nella firma del metodo e nel new Contatto(...).
	public Contatto contatto(String nome, String email, String telefono, String messaggio) {
		Contatto contatto = new Contatto(nome, email, telefono, messaggio);
		return contattoRepository.save(contatto);
	}

	// CUSTOM ESAME:
	// questo metodo alimenta la pagina lista del frontend.
	// Per l'esame basta spesso findAll(); aggiungi query custom solo se la traccia lo richiede.
	public List<Contatto> mostraTutti() {
		return contattoRepository.findAll();
	}
}
