package io.github.raghavramesh.divyadesams.controller;

import io.github.raghavramesh.divyadesams.exception.DivyadesamNotFoundException;
import io.github.raghavramesh.divyadesams.model.Divyadesam;
import io.github.raghavramesh.divyadesams.repository.DivyadesamRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DivyadesamController {

    private final DivyadesamRepository repository;
    DivyadesamController(DivyadesamRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/divyadesams")
    List<Divyadesam> all() {
        return repository.findAll();
    }

    @PostMapping("/divyadesams")
    Divyadesam newDivyadesam(@RequestBody Divyadesam newDivyadesam) {
        return repository.save(newDivyadesam);
    }

    @GetMapping("/divyadesams/{id}")
    Divyadesam one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new DivyadesamNotFoundException(id));
    }

    @PutMapping("/divyadesams/{id}")
    Divyadesam replaceDivyadesam(@RequestBody Divyadesam newDivyadesam, @PathVariable Long id) {
        return repository.findById(id)
                .map(divyadesam -> {
                    divyadesam.setPerumal(newDivyadesam.getPerumal());
                    divyadesam.setTemple(newDivyadesam.getTemple());
                    return repository.save(divyadesam);
                })
                .orElseGet(() -> {
                    newDivyadesam.setId(id);
                    return repository.save(newDivyadesam);
                });
    }

    @DeleteMapping("/divyadesams/{id}")
    void deleteDivyadesam(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
