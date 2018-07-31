package br.com.hoiama.angular1.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Data
public class Carona {


    private String noneCondutor;
    private String destinoCondutor;


    public String getNoneCondutor() {
        return noneCondutor;
    }

    public void setNoneCondutor(String noneCondutor) {
        this.noneCondutor = noneCondutor;
    }

    public String getDestinoCondutor() {
        return destinoCondutor;
    }

    public void setDestinoCondutor(String destinoCondutor) {
        this.destinoCondutor = destinoCondutor;
    }
}
