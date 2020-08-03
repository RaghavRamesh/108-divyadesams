package io.github.raghavramesh.divyadesams.controlleradvice;

import io.github.raghavramesh.divyadesams.exception.DivyadesamNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class DivyadesamNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(DivyadesamNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String divyadesamNotFoundHandler(DivyadesamNotFoundException ex) {
        return ex.getMessage();
    }
}
