package backend;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudenteVotoRepository extends JpaRepository<StudenteVoto, Long> {

	// CUSTOM ESAME:
	// questi metodi creano filtri automatici con Spring Data JPA.
	// Se vuoi filtrare per un altro campo, crea un metodo simile:
	// findByNomeCampoContainingIgnoreCase(String nomeCampo).
	List<StudenteVoto> findByMateriaContainingIgnoreCase(String materia);

	List<StudenteVoto> findByClasseContainingIgnoreCase(String classe);

	List<StudenteVoto> findByMateriaContainingIgnoreCaseAndClasseContainingIgnoreCase(String materia, String classe);
}
