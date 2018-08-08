package br.com.hoiama.angular1.controller;

import br.com.hoiama.angular1.Entity.Carona;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
@RequestMapping("/carona")
public class ControllerRest {

    @RequestMapping(value="", method= RequestMethod.GET)
    public ArrayList<Carona> getListCaronas(){
        Carona carona1 = new Carona();
        carona1.setDestinoCondutor("são leopoldo");
        carona1.setNoneCondutor("hoiama");

        Carona carona2 = new Carona();
        carona2.setDestinoCondutor("Novo hamburgo");
        carona2.setNoneCondutor("thiado");

        Carona carona3 = new Carona();
        carona3.setDestinoCondutor("Novo hamburgo");
        carona3.setNoneCondutor("thiado");

        Carona carona4 = new Carona();
        carona4.setDestinoCondutor("Novo hamburgo");
        carona4.setNoneCondutor("thiado");

        Carona carona5 = new Carona();
        carona5.setDestinoCondutor("Novo hamburgo");
        carona5.setNoneCondutor("thiado");

        ArrayList<Carona> listCaronas = new ArrayList<Carona>();
        listCaronas.add(carona1);
        listCaronas.add(carona2);
        listCaronas.add(carona3);
        listCaronas.add(carona4);
        listCaronas.add(carona5);
        return listCaronas;
    }


    @RequestMapping(value="", method = RequestMethod.POST)
    public void postCarona (){

    }

    @RequestMapping(value="", method = RequestMethod.PUT)
    public void putCarona (){

    }

    @RequestMapping(value="", method = RequestMethod.DELETE)
    public void deleteCarona (){

    }

}
