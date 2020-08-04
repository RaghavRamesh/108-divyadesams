package io.github.raghavramesh.divyadesams.service;

import io.github.raghavramesh.divyadesams.model.Divyadesam;
import io.github.raghavramesh.divyadesams.repository.DivyadesamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DivyadesamService {
    @Autowired
    private DivyadesamRepository divyadesamRepository;

    public List<Divyadesam> findAll() {
        return divyadesamRepository.findAll();
    }

    public void saveOrUpdate(Divyadesam divyadesam) {
        divyadesamRepository.save(divyadesam);
    }
}
