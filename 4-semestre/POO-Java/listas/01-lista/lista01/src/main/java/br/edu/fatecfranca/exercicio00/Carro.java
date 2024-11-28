package main.java.br.edu.fatecfranca.exercicio00;

public class Carro {

    // variáveis
    public String marca, modelo, cor;
    public int ano;
    public double velAtual;

    // construtor
    public Carro(String marca, String modelo, String cor, int ano, double velAtual) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velAtual = velAtual;
    }

    // métodos
    public void acelerar(double x){
        this.velAtual += x;
    }

    public void frear(double x){
        if (this.velAtual - x >= 0){
            this.velAtual -= x;
        } else{
            System.out.println("Velocidade NÃO pode ser negativa!!");
        }
    }

    public String toString(){
        return "Marca" + this.marca + " Modelo " + this.modelo + " Cor " + this.cor + " Ano " + this.ano + " Velocidade: " + velAtual;
    }
}