package br.edu.fatecfranca.exe02;

public class Aluno {
    private int numeroAluno;
    private String nome;
    private int idade;
    private double p1;
    private double p2;

    public Aluno(){

    }

    public Aluno(int numeroAluno, String nome, int idade, double p1, double p2){
        this.numeroAluno = numeroAluno;
        this.nome = nome;
        this.idade = idade;
        this.p1 = p1;
        this.p2 = p2;
    }

    public void setIdade(int idade) {
        if(idade >= 0){
            this.idade = idade;
        }
        else {
            System.out.println("Erro: idade invalida");
        }
    }

    public void setNome(String nome) {
        if (nome.length() <= 30) {
            this.nome = nome;
        } else {
            System.out.println("Erro: O nome do aluno não pode ultrapassar 30 caracteres.");
        }
    }

    public void setNumeroAluno(int numeroAluno) {
        if (String.valueOf(numeroAluno).length() == 6) {
            this.numeroAluno = numeroAluno;
        } else {
            System.out.println("Erro: O número do aluno deve ter exatamente 6 dígitos.");
        }
    }

    public void setP1(double p1) {
        if(p1 >= 0){
            this.p1 = p1;
        }
        else {
            System.out.println("Erro: p1 invalida");
        }
    }
    public void setP2(double p2) {
        if(p2 >= 0){
            this.p2 = p2;
        }
        else {
            System.out.println("Erro: p2 invalida");
        }
    }

    public int getNumeroAluno() { return this.numeroAluno; }
    public String getNome() { return this.nome; }
    public int getIdade() { return this.idade; }
    public double getP1() { return this.p1; }
    public double getP2() { return this.p2; }

    public void notaFinal() {
        double media = (p1 + p2) / 2;
        System.out.println("Média final do aluno: " + media);
    }

    // Método para imprimir dados do aluno
    public void dadosAluno() {
        System.out.println("Número do Aluno: " + numeroAluno);
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }


    @Override
    public String toString() {
        return "Aluno{" +
                "numeroAluno=" + this.numeroAluno +
                ", nome='" + this.nome + '\'' +
                ", idade=" + this.idade +
                ", p1=" + this.p1 +
                ", p2=" + this.p2 +
                '}';
    }
}




