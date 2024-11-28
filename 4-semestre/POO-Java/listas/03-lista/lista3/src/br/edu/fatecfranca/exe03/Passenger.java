package br.edu.fatecfranca.exe03;

public class Passenger {
    private int id;
    private String name, cpf;

    //Criando construtor vazio
    public Passenger() {
    }

    //Criando construtor com parâmetros
    public Passenger(int id, String name, String cpf) {
        setId(id);
        setName(name);
        setCpf(cpf);
    }

    //Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCpf() {
        return cpf;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCpf(String cpf) {
        if(cpf.length() != 14){
            System.out.println("Erro: CPF invalido");
        }
        this.cpf = cpf;
    }

    //ToString
    @Override
    public String toString() {
        return "\nPassenger{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cpf='" + cpf + '\'' +
                '}';
    }

    //métodos
    public void dadosPassenger(){
        System.out.println(this.toString());
    }
}
