package io.github.raghavramesh.divyadesams.exception;

public class DivyadesamNotFoundException extends RuntimeException {
    public DivyadesamNotFoundException(Long id) {
        super("Cound not find divyadesam " + id);
    }
}
