package io.github.raghavramesh.divyadesams.controller;

import io.github.raghavramesh.divyadesams.model.Divyadesam;
import io.github.raghavramesh.divyadesams.service.DivyadesamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DivyadesamController {

    @Autowired
    DivyadesamService service;

    DivyadesamController(DivyadesamService service) {
        this.service = service;
    }

    @GetMapping("/divyadesams")
    List<Divyadesam> all() {
        return service.findAll();
    }

    @PostMapping("/divyadesams")
    void newDivyadesam(@RequestBody Divyadesam newDivyadesam) {
        service.saveOrUpdate(newDivyadesam);
    }

//    @GetMapping("/divyadesams/{id}")
//    Divyadesam one(@PathVariable Long id) {
//        return service.findById(id).orElseThrow(() -> new DivyadesamNotFoundException(id));
//    }
//
//    @PutMapping("/divyadesams/{id}")
//    Divyadesam replaceDivyadesam(@RequestBody Divyadesam newDivyadesam, @PathVariable Long id) {
//        service.findById(id)
//                .map(divyadesam -> {
//                    divyadesam.setPerumal(newDivyadesam.getPerumal());
//                    divyadesam.setTemple(newDivyadesam.getTemple());
//                    return service.saveOrUpdate(divyadesam);
//                })
//                .orElseGet(() -> {
//                    newDivyadesam.setId(id);
//                    return service.saveOrUpdate(newDivyadesam);
//                });
//    }
//
//    @DeleteMapping("/divyadesams/{id}")
//    void deleteDivyadesam(@PathVariable Long id) {
//        service.deleteById(id);
//    }
}
