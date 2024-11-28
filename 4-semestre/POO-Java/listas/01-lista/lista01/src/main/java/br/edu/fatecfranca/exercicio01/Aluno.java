package main.java.br.edu.fatecfranca.exercicio01;

public class Aluno {
    public int numeroAluno;
    public String nome;
    public int idade;
    public double p1;
    public double p2;

    public Aluno(int numeroAluno, String nome, int idade, double p1, double p2) {
        this.numeroAluno = numeroAluno;
        this.nome = nome;
        this.idade = idade;
        this.p1 = p1;
        this.p2 = p2;
    }

    public Aluno(){
        this.nome   = "";
    }

    public double notaFinal(){
        return  (this.p1 + this.p2) / 2;
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "numeroAluno=" + numeroAluno +
                ", nome='" + nome + '\'' +
                ", idade=" + idade +
                ", p1=" + p1 +
                ", p2=" + p2 +
                '}';
    }

    public void dadosAluno(){
        System.out.println("Número aluno " + this.numeroAluno + "\nNome: " + this.nome + "\nIdade: " + this.idade);
    }


}
