package main.java.br.edu.fatecfranca.teste;
import main.java.br.edu.fatecfranca.exercicio01.Aluno;


public class TestaAluno {
    public static void main(String[] args) {
        Aluno aluno = new Aluno(5, "João", 18, 7, 9.5);

        aluno.notaFinal();
        aluno.dadosAluno();

        System.out.println(aluno);

        if (passou(aluno)){
            System.out.println("Passou");
        }
        else {
            System.out.println("Não Passou!");
        }

    }

    public static boolean passou(Aluno aluno){
        return aluno.notaFinal() >= 6;
        //return aluno.notaFinal() >= 6 ? "Aprovado" : "reprovado";

    }
}
