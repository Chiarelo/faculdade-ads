package br.edu.fatecfranca.teste;
import br.edu.fatecfranca.exe03.*;

public class MainControle {
    public static <TV> void main(String[] args) {
        // Criando um objeto Radio
        Radio radio = new Radio(12345, 20, "94.9", "FM");

        // Testando o produto
        testarProduto(radio);

        // Alterando os valores do produto
        radio.setVolume(30);
        radio.trocaEstacao("102.7");
        System.out.println(radio);

        // Criando um objeto TV
        Tv canal = new Tv(12345, 20, "94.9");

        // Testando o produto
        testarProduto(canal);

        // Alterando os valores do produto
        canal.setVolume(25);
        canal.trocaCanal("102.7");
        System.out.println(canal);
    }

    public static void testarProduto(Produto produto) {
        produto.testaUnidade();
        System.out.println(produto);
    }
}
