package main.java.br.edu.fatecfranca.teste;
import br.edu.fatecfranca.exercicio02.Cliente;
public class TestaCliente {
    public static void main(String[] args) {
    Cliente fulano = new Cliente(123, 12, "Fulano", 1000);
    Cliente beltrano = new Cliente(456, 8, "Beltrano", 800);

    fulano.realizarDeposito(500);
    fulano.realizarSaque(6000);
    fulano.dadosCliente();

    beltrano.realizarDeposito(400);
    beltrano.realizarSaque(600);
    beltrano.dadosCliente();


    }
}
