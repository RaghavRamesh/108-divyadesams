//package io.github.raghavramesh.divyadesams;
//
//import io.github.raghavramesh.divyadesams.model.Divyadesam;
//import io.github.raghavramesh.divyadesams.repository.DivyadesamRepository;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//@Slf4j
//public class LoadDatabase {
//    @Bean
//    CommandLineRunner initDatabase(DivyadesamRepository repository) {
//        return args -> {
//            log.info("Preloading " + repository.save(new Divyadesam("Vaikundam", "Sri Vaikunthanatha Perumal")));
//            log.info("Preloading " + repository.save(new Divyadesam("Thiruppaarkadal", "Vishnu")));
//        };
//    }
//
//}
