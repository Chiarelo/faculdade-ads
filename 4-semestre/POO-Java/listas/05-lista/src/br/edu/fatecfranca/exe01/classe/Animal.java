package br.edu.fatecfranca.exe01.classe;

public class Animal {
    public int idade;

    public Animal(){}

    public Animal(int idade){
        this.idade = idade;
    }

    public void come(){
        System.out.println("Estou comendo...");
    }

    public void respira(){
        System.out.println("Estou respirando...");
    }
}
