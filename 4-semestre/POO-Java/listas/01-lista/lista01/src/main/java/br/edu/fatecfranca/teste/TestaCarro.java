package main.java.br.edu.fatecfranca.teste;
import main.java.br.edu.fatecfranca.exercicio00.Carro;

import javax.swing.*;

public class TestaCarro {
    public static void main(String[] args) {
        Carro meuCarro = new Carro("Fiat","Uno","Prata",2009, 0);
        Carro carroTop = new Carro("Toyota","Corolla","Cinza",2013, 0);

        //Pede pro usuario a entrada de dados
        String x = JOptionPane.showInputDialog("Acelerar de quanto?");

        meuCarro.acelerar(Float.parseFloat(x));
        meuCarro.frear(50);

        carroTop.acelerar(80);
        carroTop.frear(60);

        JOptionPane.showMessageDialog(null, meuCarro.toString());
        System.out.println(meuCarro.toString());
    }
    //Converte o objeto para um string


}