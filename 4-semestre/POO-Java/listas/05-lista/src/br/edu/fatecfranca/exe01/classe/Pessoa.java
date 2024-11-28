package br.edu.fatecfranca.exe01.classe;

import br.edu.fatecfranca.exe01.classe.Animal;
import br.edu.fatecfranca.exe01.interfaces.Cidadao;
import br.edu.fatecfranca.exe01.interfaces.Contribuinte;
import br.edu.fatecfranca.exe01.interfaces.Professor;

public class Pessoa extends Animal implements Cidadao, Professor, Contribuinte {
    public String nome;
    public String rg;
    public String cpf;

    public Pessoa() {
        super();
    }
    public Pessoa(int idade, String nome, String rg, String cpf) {
        super(idade);
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
    }

    @Override
    public void vota() {
        System.out.println(this.nome + " votou.");
    }

    @Override
    public void getRG() {
        System.out.println("O número de RG de " + this.nome + " é: " + this.rg);
    }

    @Override
    public void getCPF() {
        System.out.println("O número do CPF de " + this.nome + " é: " + this.cpf);
    }

    @Override
    public void ensina() {
        System.out.println(this.nome + " ensina.");
    }

    @Override
    public void trabalha() {
        System.out.println(this.nome + " trabalha.");
    }

    @Override
    public void pagarIR() {
        System.out.println(this.nome + " paga o Imposto de Renda.");
    }
}