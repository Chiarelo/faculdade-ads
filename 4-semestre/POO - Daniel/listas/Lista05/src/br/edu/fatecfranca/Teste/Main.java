package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe00.Classes.Triatleta;
import br.edu.fatecfranca.exe00.Interface.JogadorBasquete;
import br.edu.fatecfranca.exe00.Interface.JogadorVolei;
import br.edu.fatecfranca.exe00.Interface.JogadorFutebol;

public class Main {
    public static void main(String[] args) {
        JogadorFutebol futebolista;

        // Triatleta executando todos os métodos das interfaces
        Triatleta triatleta = new Triatleta("Vinicius");
        triatleta.manchete();
        triatleta.cobrarEscanteio();
        triatleta.darToco();

        // Quando a sobrescrição ocorrer em cima de uma variável tipada com a interface, como é o caso do futebolista,
        // a classe só poderá executar os métodos da interface que foi tipada, e mais nenhuma outra.
        futebolista = (JogadorFutebol) new Triatleta("Guilherme");
        futebolista.baterPenalti();
        futebolista.cobrarEscanteio();
        // futebolista.manchete(); <== Isso aqui não vai dar certo!

    }
}
