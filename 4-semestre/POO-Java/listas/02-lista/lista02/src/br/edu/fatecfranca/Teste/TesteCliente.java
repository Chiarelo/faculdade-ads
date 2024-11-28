package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe01.Cliente;

public class TesteCliente {
    public static void main(String[] args) {
        // Criar um cliente usando o construtor com parâmetros
        Cliente fulano = new Cliente("12345678", "1234-5", "Fulano da Silva", 1000.0f);

        // Imprimir dados iniciais
        fulano.imprimirDados();

        // Realizar depósito
        fulano.realizarDeposito(500.0f);
        System.out.println("Após depósito:");
        fulano.imprimirDados();

        // Realizar saque
        fulano.realizarSaque(300.0f);
        System.out.println("Após saque:");
        fulano.imprimirDados();

        // Tentar realizar saque com valor maior que o saldo
        fulano.realizarSaque(1500.0f);
        System.out.println("Após tentativa de saque acima do saldo:");
        fulano.imprimirDados();
    }
}
