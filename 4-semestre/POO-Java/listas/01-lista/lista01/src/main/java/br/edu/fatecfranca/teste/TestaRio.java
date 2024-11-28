package main.java.br.edu.fatecfranca.teste;
import br.edu.fatecfranca.exercicio04.Rio;

public class TestaRio {
    public static void main(String[] args) {
        Rio rio1 = new Rio("Rio negro", 10, false);
        Rio rio2 = new Rio("Solimões", 20, true);

        rio1.chover(20);
        rio1.ensolarar(5);
        rio1.limpar();
        rio1.mostrar();

        rio2.chover(-1);
        rio2.ensolarar(21);
        rio2.sujar();
        rio2.mostrar();

    }
}
