package io.github.raghavramesh.divyadesams.model;

import lombok.Data;
import lombok.Generated;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="divyadesams")
public class Divyadesam {
    @Id
    @Generated
    private String id;
    private String temple;
    private String moolavar;
    private String moolavarAlias;
    private String thaayaar;
    private String thaayaarAlias;
    private String video;
    private String district;
    private String state;
    private String country;
    private String region;
    private int no;
    private Coordinates coordinates;
    private String[] speciality;
    private String notes;
    private String facing;
    private String[] alvars;
    private String vimaanam;
    private String kolam;

    public Divyadesam(String temple, String moolavar) {
        this.temple = temple;
        this.moolavar = moolavar;
    }
}
