package main.java.br.edu.fatecfranca.teste;
import br.edu.fatecfranca.exercicio03.Produto;

public class TestaProduto {
    public static void main(String[] args) {
        Produto p1 = new Produto(10, "Café", 12, 5);

        p1.comprar(2);
        p1.vender(7);
        p1.subir(2);
        p1.descer(4);
        p1.mostra();


        Produto p2 = new Produto(14, "Arroz", 20, 10);

        p2.comprar(5);
        p2.vender(26);
        p2.subir(-1);
        p2.descer(11);
        p2.mostra();



    }
}
