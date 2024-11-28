package br.edu.fatecfranca.exe02;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Curso {
    //Instanciando objeto
    private int id;
    private String name, area;
    List<Disciplina> disciplinas = new ArrayList<>();

    //Criando construtor sem parâmetro
    public Curso() {
    }

    //Construtor sem array
    public Curso(int id, String name, String area) {
        this.id = id;
        this.name = name;
        this.area = area;
    }

    //Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getArea() {
        return area;
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setDisciplinas(List<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }

    //ToString

    @Override
    public String toString() {
        return "\nCurso{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", area='" + area + '\'' +
                ", disciplinas=" + disciplinas +
                '}';
    }

    //Métodos
    public void dadosCurso(){
        System.out.println(this.toString());
    }

    //adicionando valores ao array
    public void addDisciplina(int id, String name, String sigla, Professor professor){
        this.disciplinas.add(new Disciplina(id, name, sigla, professor));
    }

    //Método que encontra a disciplina
    public void addAlunoDisciplina(int idDisciplina, Aluno aluno){
        boolean achou = false;
        for(Disciplina disciplina : disciplinas){
            if(disciplina.getId() == idDisciplina){
                disciplina.addAlunos(aluno);
                achou = true;
                return ;
            }
        }
        System.out.println("Disciplina não existe");
    }
    }

}
