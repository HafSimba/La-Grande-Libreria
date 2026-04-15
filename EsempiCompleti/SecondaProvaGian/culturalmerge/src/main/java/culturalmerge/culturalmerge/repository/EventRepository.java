package culturalmerge.culturalmerge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import culturalmerge.culturalmerge.model.Event;

/**
 * Repository for {@link Event} entities.
 *
 * <p>
 * Extends {@link JpaRepository} so you automatically get CRUD methods such as
 * {@code findById}, {@code findAll}, {@code save} and {@code deleteById}.
 * </p>
 */
@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}