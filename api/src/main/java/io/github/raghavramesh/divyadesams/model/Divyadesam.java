package io.github.raghavramesh.divyadesams.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Divyadesam {
    private @Id @GeneratedValue Long id;
    private String temple;
    private String perumal;

    Divyadesam() {}

    public Divyadesam(String temple, String perumal) {
        this.temple = temple;
        this.perumal = perumal;
    }
}
