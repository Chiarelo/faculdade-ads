package br.edu.fatecfranca.exe02;
import java.util.ArrayList;
import java.util.List;

public class Disciplina {
    //instanciando objeto
    private int id;
    private String name, sigla;
    private Professor professor;
    List<Aluno> alunos = new ArrayList<>();

    //construtor sem parâmetro
    public Disciplina() {
    }

    //Construtor sem array
    public Disciplina(int id, String name, String sigla, Professor professor) {
        setId(id);
        setName(name);
        setSigla(sigla);
        setProfessor(professor);
    }

    //Construtor com array
    public Disciplina(int id, String name, String sigla, Professor professor, List<Aluno> alunos) {
        setId(id);
        setName(name);
        setSigla(sigla);
        setProfessor(professor);
        setAlunos(alunos);
    }

    //Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSigla() {
        return sigla;
    }


    public Professor getProfessor() {
        return professor;
    }

    public List<Aluno> getAlunos() {
        return alunos;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }


    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }

    //ToString


    @Override
    public String toString() {
        return "\nDisciplina{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sigla='" + sigla + '\'' +
                ", professor=" + professor +
                ", alunos=" + alunos +
                '}';
    }

    //métodos
    public void dadosDisciplina(){
        System.out.println(this.toString());
    }

    //adicionando valores ao array
    public void addAlunos(Aluno aluno) {
        this.alunos.add(aluno);
    }

}
