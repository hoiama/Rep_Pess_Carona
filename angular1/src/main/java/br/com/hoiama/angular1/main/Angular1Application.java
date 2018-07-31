package br.com.hoiama.angular1.main;

import br.com.hoiama.angular1.controller.ControllerIndex;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = ControllerIndex.class)
public class Angular1Application {

	public static void main(String[] args) {
		SpringApplication.run(Angular1Application.class, args);
	}
}
