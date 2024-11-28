package br.edu.fatecfranca.exe03;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Reservation {
    private int id;
    private Date date;
    private Passenger passenger;
    private Flight flight;

    //Construtor sem parametros
    public Reservation() {
    }


    //Construtor
    public Reservation(int id, Date date, Passenger passenger, Flight flight) {
        setId(id);
        setDate(date);
        setPassenger(passenger);
        setFlight(flight);
    }

    //Getters
    public int getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public Flight getFlight() {
        return flight;
    }

    //Setter
    public void setId(int id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    //ToString

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", date=" + date +
                ", passenger=" + passenger +
                ", flight=" + flight +
                '}';
    }

    public void dadosReservation(){
        System.out.println(this.toString());
    }


}
