package backend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class UtenteServiceTests {

	@Autowired
	private ApplicationContext applicationContext;

	@Test
	void registraUtenteEAutenticaCredenzialiCorrette() throws Exception {
		Class<?> serviceClass = Class.forName("backend.UtenteService");
		Object utenteService = applicationContext.getBean(serviceClass);

		serviceClass
				.getMethod("registraUtente", String.class, String.class, String.class)
				.invoke(utenteService, "Admin", "admin@test.it", "password123");

		Object utente = serviceClass
				.getMethod("login", String.class, String.class)
				.invoke(utenteService, "admin@test.it", "password123");

		assertThat(utente).isNotNull();
		assertThat(utente.getClass().getMethod("getNome").invoke(utente)).isEqualTo("Admin");
		assertThat(utente.getClass().getMethod("getEmail").invoke(utente)).isEqualTo("admin@test.it");
	}

	@Test
	void nonAutenticaCredenzialiErrate() throws Exception {
		Class<?> serviceClass = Class.forName("backend.UtenteService");
		Object utenteService = applicationContext.getBean(serviceClass);

		serviceClass
				.getMethod("registraUtente", String.class, String.class, String.class)
				.invoke(utenteService, "Admin Due", "admin2@test.it", "password123");

		Object utente = serviceClass
				.getMethod("login", String.class, String.class)
				.invoke(utenteService, "admin2@test.it", "sbagliata");

		assertThat(utente).isNull();
	}
}
