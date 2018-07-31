package br.com.hoiama.angular1.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Data
public class Carona {


    private String noneCondutor;
    private String Destino;



}
