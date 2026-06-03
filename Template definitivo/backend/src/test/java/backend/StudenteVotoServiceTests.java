package backend;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class StudenteVotoServiceTests {

	@Autowired
	private ApplicationContext applicationContext;

	@Test
	void salvaStudenteVotoELoFiltraPerMateriaEClasse() throws Exception {
		Class<?> serviceClass = Class.forName("backend.StudenteVotoService");
		Object studenteVotoService = applicationContext.getBean(serviceClass);

		Object voto = serviceClass
				.getMethod("inserisciStudenteVoto", String.class, String.class, Integer.class, String.class)
				.invoke(studenteVotoService, "Mario Rossi", "Matematica", 8, "5A");

		List<?> filtrati = (List<?>) serviceClass
				.getMethod("filtra", String.class, String.class)
				.invoke(studenteVotoService, "Matematica", "5A");

		assertThat(voto.getClass().getMethod("getId").invoke(voto)).isNotNull();
		assertThat(filtrati).anySatisfy((elemento) -> {
			try {
				assertThat(elemento.getClass().getMethod("getNomeStudente").invoke(elemento)).isEqualTo("Mario Rossi");
				assertThat(elemento.getClass().getMethod("getMateria").invoke(elemento)).isEqualTo("Matematica");
				assertThat(elemento.getClass().getMethod("getVoto").invoke(elemento)).isEqualTo(8);
				assertThat(elemento.getClass().getMethod("getClasse").invoke(elemento)).isEqualTo("5A");
			} catch (ReflectiveOperationException e) {
				throw new AssertionError(e);
			}
		});
	}
}
