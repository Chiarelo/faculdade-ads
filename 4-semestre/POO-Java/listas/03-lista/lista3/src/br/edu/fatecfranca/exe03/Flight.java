package br.edu.fatecfranca.exe03;

public class Flight {
    private int id;
    private String origim, destination;

    //Construtor sem paramentros
    public Flight() {
    }

    //Construtor com parâmetros
    public Flight(int id, String origim, String destination) {
        this.id = id;
        this.origim = origim;
        this.destination = destination;
    }

    //Getters
    public int getId() {
        return id;
    }

    public String getOrigim() {
        return origim;
    }

    public String getDestination() {
        return destination;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setOrigim(String origim) {
        this.origim = origim;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    //ToString

    @Override
    public String toString() {
        return "\nFlight{" +
                "id=" + id +
                ", origim='" + origim + '\'' +
                ", destination='" + destination + '\'' +
                '}';
    }

    public void dadosFlight(){
        System.out.println(this.toString());
    }

    public void addReservation(Reservation r1) {
    }
}
