package br.edu.fatecfranca.exercicio04;

public class Rio {
    public String nome;
    public double nivel;
    public boolean poluido;

    public Rio(String nome, double nivel, boolean poluido) {
        this.nome = nome;
        this.nivel = nivel;
        this.poluido = poluido;
    }

    public void chover(double x){
        System.out.println("Nível inicial do rio: " + this.nivel);
        if(x > 0){
            this.nivel += x;
            System.out.println("Quantidade aumentada: " + x);
        }
        else {
            System.out.println("Nível do rio não foi aumentado!");
        }
    }
    public void ensolarar(double x){
        if(x > 0 && x <= this.nivel){
            this.nivel -= x;
            System.out.println("Quantidade diminuida do rio: "  + x);
        }
        else{
            System.out.println("Nível do rio não foi diminuído!");
        }
    }

    public void limpar(){
        this.poluido = false;

    }

    public void sujar(){
        this.poluido = true;
    }

    public void mostrar(){
        System.out.println("Nome do rio: " + this.nome);
        System.out.println("Nivel do rio: " + this.nivel);
        System.out.println("Poluído:" + (this.poluido ? "Sim" : "Não") + "\n");
    }

}
