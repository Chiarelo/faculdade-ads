package br.edu.fatecfranca.exe01.classe;

import br.edu.fatecfranca.exe01.interface.*;

public class Cidade {
    public String nome;

    public Cidade(String nome){
        this.nome = nome;
    }

    public Cidade(){};

    public void contrata(Professor p){
        System.out.println("A prefeitura de " + this.nome + " contratou um novo professor.");
        p.ensina();
        p.trabalha();
        System.out.println("\n");
    }

    public void contrata(Empregado e){
        System.out.println("A prefeitura de " + this.nome + " contratou um novo funcionário.");
        e.trabalha();
        System.out.println("\n");
    }

    public void cobraDe(Contribuinte c){
        System.out.println("O leão da receita mordeu o bumbum do contribuinte!");
        c.pagarIR();
        System.out.println("\n");
    }

    public void registra(Cidadao c){
        System.out.println("Há um novo cidadão na cidade de " + this.nome);
        c.getRG();
        System.out.println("\n");
    }

    public void alimenta(Animal a){
        System.out.println("A prefeitura de " + this.nome + " pagou o salário dos funcionários.");
        a.come();
    }
}
