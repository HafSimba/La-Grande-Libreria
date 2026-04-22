package backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContattoService {

	@Autowired
	private ContattoRepository contattoRepository;

	public Contatto salvaContatto(String nome, String email, String telefono, String messaggio) {
		Contatto contatto = new Contatto(nome, email, telefono, messaggio);
		return contattoRepository.save(contatto);
	}

	public List<Contatto> trovaTutti() {
		return contattoRepository.findAll();
	}
}
