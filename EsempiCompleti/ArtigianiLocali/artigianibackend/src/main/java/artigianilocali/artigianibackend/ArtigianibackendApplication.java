package artigianilocali.artigianibackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Entry point Spring Boot.
// Se la traccia richiede profili separati (dev/test/prod), la gestione parte da qui e da application-*.properties.
@SpringBootApplication
public class ArtigianibackendApplication {

	// Avvio container Spring: registra bean, config e component scan.
	public static void main(String[] args) {
		SpringApplication.run(ArtigianibackendApplication.class, args);
	}

}