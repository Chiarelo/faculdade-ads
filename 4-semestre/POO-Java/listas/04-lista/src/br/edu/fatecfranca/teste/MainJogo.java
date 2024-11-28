package br.edu.fatecfranca.teste;

import br.edu.fatecfranca.exe04.Coisa;
import br.edu.fatecfranca.exe04.Papel;
import br.edu.fatecfranca.exe04.Pedra;
import br.edu.fatecfranca.exe04.Tesoura;

import java.util.Scanner;

public class MainJogo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean continuar = true;

        while (continuar) {
            System.out.println("Escolha   sua jogada (pedra, papel ou tesoura): ");
            String escolhaJogador = scanner.nextLine().toLowerCase();

            Coisa jogador1 = obterCoisaPorNome(escolhaJogador);
            Coisa jogador2 = gerarCoisaAleatoria();

            System.out.println("Você escolheu: " + jogador1.nome);
            System.out.println("O computador escolheu: " + jogador2.nome);

            if (jogador1.ganhaDe(jogador2)) {
                System.out.println("Você venceu!");
            } else if (jogador2.ganhaDe(jogador1)) {
                System.out.println("O computador venceu!");
            } else {
                System.out.println("Empate!");
            }

            System.out.print("Deseja continuar jogando? (s/n): ");
            continuar = scanner.next().equalsIgnoreCase("s");
        }
    }

    private static Coisa obterCoisaPorNome(String nome) {
        switch (nome) {
            case "pedra":
                return new Pedra();
            case "papel":
                return new Papel();
            case "tesoura":
                return new Tesoura();
            default:
                System.out.println("Opção inválida. Tente novamente.");
                // Reutilize o Scanner existente
                Scanner scanner = new Scanner(System.in);
                return obterCoisaPorNome(scanner.nextLine().toLowerCase());
        }
    }

    private static Coisa gerarCoisaAleatoria() {
        int escolha = (int) (Math.random() * 3);
        switch (escolha) {
            case 0:
                return new Pedra();
            case 1:
                return new Papel();
            default:
                return new Tesoura();
        }
    }
}