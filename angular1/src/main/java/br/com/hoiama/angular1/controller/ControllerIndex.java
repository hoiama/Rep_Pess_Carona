package br.com.hoiama.angular1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ControllerIndex {

    @RequestMapping(value="/", method= RequestMethod.GET)
    public String getIndex(){

        return "templates/index.html";
    }
}
