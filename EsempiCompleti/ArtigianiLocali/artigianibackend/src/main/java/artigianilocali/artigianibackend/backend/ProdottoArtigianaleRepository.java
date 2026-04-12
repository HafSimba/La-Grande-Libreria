package artigianilocali.artigianibackend.backend;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

// Repository JPA: estende CRUD base e aggiunge query specifiche del dominio.
public interface ProdottoArtigianaleRepository extends JpaRepository<ProdottoArtigianale, Long> {

    // Catalogo ordinato dal piu recente al piu vecchio.
    List<ProdottoArtigianale> findAllByOrderByCreatoIlDesc();

    // Elenco categorie senza duplicati, gia ordinato alfabeticamente.
    @Query("select distinct p.categoriaProdotto from ProdottoArtigianale p order by p.categoriaProdotto")
    List<String> findCategorieDistinte();
}