package br.edu.fatecfranca.exe00;

public class Diretor extends Funcionario {
    private float acoesEmpresa;
    public Diretor() {
        super(); //Inicializa os atributos da classe "Pai"
        this.acoesEmpresa = 0;
    }
    public Diretor(String nome, String endereco, String cpf, float salario,
                   float acoesEmpresa){
        super(nome, endereco, cpf, salario);//Chama o construtor da classe pai com os parâmetros
        this.acoesEmpresa = acoesEmpresa;
    }
    public float getAcoesEmpresa() {
        return acoesEmpresa;
    }
    public void setAcoesEmpresa(float acoesEmpresa) {
        this.acoesEmpresa = acoesEmpresa;
    }

    //ToString comum, chama o método toString da classe pai

    @Override
    public String toString() {
        return super.toString() + " acoesEmpresa=" + acoesEmpresa ; //Super.toString() reaproveita o toString da classe pai e junta com o proprio toString
    }
    @Override
    public float calculaSalario() {
        return this.salario + ((this.acoesEmpresa * 2)/12);
    }
}
