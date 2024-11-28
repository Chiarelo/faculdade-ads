package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe02.Aluno;

public class TesteAluno {
    public static void main(String[] args) {
        // Criar um aluno usando o construtor com parâmetros
        Aluno aluno1 = new Aluno(123456, "Maria Oliveira", 21, 8.5f, 7.5f);

        // Chamar métodos
        aluno1.dadosAluno();
        aluno1.notaFinal();

        // Criar um aluno usando o construtor padrão
        Aluno aluno2 = new Aluno();

        // Chamar métodos
        aluno2.dadosAluno();
        aluno2.notaFinal();

        // Modificar valores usando setters
        aluno2.setNumeroAluno(654321);
        aluno2.setNome("Pedro Silva");
        aluno2.setIdade(22);
        aluno2.setP1(9.0f);
        aluno2.setP2(8.5f);

        // Chamar métodos após a modificação
        aluno2.dadosAluno();
        aluno2.notaFinal();
    }
}

