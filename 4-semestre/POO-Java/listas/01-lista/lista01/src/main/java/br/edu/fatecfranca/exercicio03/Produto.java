package br.edu.fatecfranca.exercicio03;

public class Produto {
    public int Id;
    public String descricao;
    public int qntd;
    public double preco;

    public Produto(int id, String descricao, int qntd, double preco) {
        Id = id;
        this.descricao = descricao;
        this.qntd = qntd;
        this.preco = preco;
    }

    public Produto() {
        this.descricao = " ";
    }

    public void comprar(int x){
        //Aumentar a quantidade em estoque
        System.out.println("Quantidade inicial: " + this.qntd);
        if (x > 0){
            this.qntd += x;
            System.out.println("Quantidade adicionada: " + x);
        }
        else{
            System.out.println("Quantidade de compra INVALIDA!");
        }
    }

    public void vender(int x){
        //diminuir a quantidade em estoque
        if (x > 0 && x <= this.qntd) {
            this.qntd -= x;
            System.out.println("Quantidade reduzida: " + x);
        }
        else{
            System.out.println("Quantidade de vender INVALIDA!");
        }
    }

    public void subir(float x){
        //aumentar preço do produto
        System.out.println("Preço Inicial: " + this.preco);
        if(x > 0) {
            this.preco += x;
            System.out.println("Valor do aumento: " + x);
        }
        else{
            System.out.println("Aumento INVALIDO!");
        }
    }

    public void descer(float x){
        //diminuir preço do produto
        if(x > 0 && x < this.preco){
            this.preco -= x;
            System.out.println("valor da redução: " + x);
        }
        else{
            System.out.println("redução INVALIDO!");
        }
    }

    public void mostra(){
        System.out.println("Id: " + this.Id);
        System.out.println("String: " + this.descricao);
        System.out.println("Quantidade: " + this.qntd);
        System.out.println("Preço: " + this.preco + "\n");
    }


}
