import br.edu.fatecfranca.exe02.*;

import java.util.ArrayList;
import java.util.List;
//public static void calculaFolhaSalarial(ArrayList<Funcionario> funcionarios) {
public static void mostrar(ArrayList<CartaoWeb> cartoes) {
    for (CartaoWeb cartao : cartoes) {
        cartao.showMessage(); // Polimorfismo acontece aqui
    }
}

public static void main(String[] args) {
    // Criando as instâncias de cartões
    Aniversario aniversario = new Aniversario("Laura");
    DiaDosNamorados diaDosNamorados = new DiaDosNamorados("Júlia");
    Natal natal = new Natal("Guilherme");

    // Criando a lista de cartões
    ArrayList<CartaoWeb> lista = new ArrayList<>();
    lista.add(aniversario);
    lista.add(diaDosNamorados);
    lista.add(natal);

    // Chamando o método mostrar para exibir as mensagens dos cartões
    mostrar(lista);
}

