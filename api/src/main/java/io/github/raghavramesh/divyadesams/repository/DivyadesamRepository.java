package io.github.raghavramesh.divyadesams.repository;

import io.github.raghavramesh.divyadesams.model.Divyadesam;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DivyadesamRepository extends MongoRepository<Divyadesam, Long> {
    List<Divyadesam> findAll();
}
