package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe01.classe.Cidade;
import br.edu.fatecfranca.exe01.classe.Pessoa;

public class MainCidade {
    public static void main(String[] args) {
        Pessoa p1 = new Pessoa(46,"Daniel", "12.234.456-7", "123.456.789-00");
        Cidade c1 = new Cidade("Franca");

        c1.contrata(p1);
        c1.contrata((Empregado) p1); // Casting

        c1.cobraDe(p1); // Polimorfismo: Aqui p1 é lido como Contribuinte

        c1.registra(p1); // Aqui p1 é lido como Cidadão

        c1.alimenta(p1);
    }
}
