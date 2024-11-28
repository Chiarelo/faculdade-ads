package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe03.classe.SuperHeroi;
import br.edu.fatecfranca.exe03.classe.SuperVilao;

public class MainHeroi {
    public static void main(String[] args) {
        SuperHeroi batman = new SuperHeroi("Bruce Wayne", "Batman");
        SuperVilao coringa = new SuperVilao("Coringa");

        coringa.ameacarInocentes();
        coringa.roubarBanco();
        coringa.correr();

        batman.transformar();
        batman.correr();

        batman.lutar();
        coringa.lutar();
        batman.derrotarVilao(coringa); // POLIMORFISMO: coringa será lido como Humano
        batman.salvarODia();
    }
}
