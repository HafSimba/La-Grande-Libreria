package ttf.greentech.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrazioneService {

	@Autowired
	private RegistrazioneRepository rp;

	public Registrazione registrazione(String nomeScuola, Integer grado, String provincia, String classe,
			String nomeDocente, String email, String nomeProgetto, String descrizione) {
		Registrazione r = new Registrazione(nomeScuola, grado, provincia, classe, nomeDocente, email, nomeProgetto,
				descrizione);
		return rp.save(r);
	}
	
	public List<Registrazione> mostraTutti() {
		return rp.findAll();
	}

}
