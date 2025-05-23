package br.edu.fatecfranca.exe00;

public class Assistente extends Funcionario {
    private float horaExtra;
    public Assistente(){
        super(); // chama o construtor da superclasse
        this.horaExtra = 0;
    }

    public Assistente(String nome, String endereco, String cpf, float salario, float horaExtra) {
        super(nome, endereco, cpf, salario);  // Chama o construtor da classe pai
        this.horaExtra = horaExtra;  // Inicializa o atributo específico de Assistente
    }


    public float getHoraExtra() {
        return horaExtra;
    }

    public void setHoraExtra(float horaExtra) {
        this.horaExtra = horaExtra;
    }

    @Override // anula o método da classe pai
    public String toString(){
        return super.toString() + "\nHoraExtra: " + horaExtra;
    }


    public float calculaSalario(){
        return this.salario + (horaExtra * 40);
    }
}