package culturalmerge.culturalmerge.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import culturalmerge.culturalmerge.model.Event;
import culturalmerge.culturalmerge.repository.EventRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventRepository eventRepo;

    public EventController(EventRepository eventRepo) {
        this.eventRepo = eventRepo;
    }

    /** GET /api/events → lista di tutti gli eventi */
    @GetMapping
    public List<Event> getAll() {
        return eventRepo.findAll();
    }

    /** GET /api/events/{id} → evento singolo */
    @GetMapping("/{id}")
    public ResponseEntity<Event> getById(@PathVariable Long id) {
        Optional<Event> ev = eventRepo.findById(id);
        return ev.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /** POST /api/events → crea un nuovo evento */
    @PostMapping
    public ResponseEntity<Event> create(@Valid @RequestBody Event event) {
        Event saved = eventRepo.save(event);
        return ResponseEntity.status(201).body(saved);
    }

    /** PUT /api/events/{id} → aggiorna l’evento */
    @PutMapping("/{id}")
    public ResponseEntity<Event> update(@PathVariable Long id,
            @Valid @RequestBody Event event) {
        return eventRepo.findById(id)
                .map(existing -> {
                    existing.setTitle(event.getTitle());
                    existing.setDescription(event.getDescription());
                    existing.setDate(event.getDate());
                    existing.setLocation(event.getLocation());
                    Event updated = eventRepo.save(existing);
                    return ResponseEntity.ok(updated);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /** DELETE /api/events/{id} → cancella l’evento */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return eventRepo.findById(id)
                .map(existing -> {
                    eventRepo.delete(existing);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}