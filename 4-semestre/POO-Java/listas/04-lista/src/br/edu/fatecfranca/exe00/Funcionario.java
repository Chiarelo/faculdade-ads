package br.edu.fatecfranca.exe00;

public abstract class Funcionario {
    protected String nome, endereco, cpf;
    protected float  salario;

    //Construtor vázio
    public Funcionario() {
        this.nome = "";
        this.endereco = "";
        this.cpf = "";
        this.salario = 0;
    }
    //Construtor com parâmetros
    public Funcionario(String nome, String endereco, String cpf, float salario) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.salario = salario;
    }
    //Getters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    //Setters
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public float getSalario() {
        return calculaSalario();
    }

    public void setSalario(float salario) {
        this.salario = salario;
    }

    //ToString
    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", endereco='" + endereco + '\'' +
                ", cpf='" + cpf + '\'' +
                ", salario=" + this.calculaSalario() +
                '}';
    }

    //Métodos
    // subclasse precisará implementar o método calculaSalario(), definindo como o salário será calculado para aquele tipo de funcionário.
    public abstract float calculaSalario();

}
