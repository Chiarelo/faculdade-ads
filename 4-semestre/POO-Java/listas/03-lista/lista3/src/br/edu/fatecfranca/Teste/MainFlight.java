package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe03.*;
import java.util.Date;

public class MainFlight {
    public static void main(String[] args) {
        Passenger p1 = new Passenger(4, "Arthur", "000.000.000-00");
        Passenger p2 = new Passenger(30, "Ivan", "999.999.999-99");


        Flight flight1 = new Flight(2023, "Las Vegas", "Flórida");
        Flight flight2 = new Flight(2018, "Rio de Janeiro/RJ", "Franca/SP");

        Reservation r1 = new Reservation(10, new Date(), p1, flight1);
        Reservation r2 = new Reservation();


        flight1.addReservation(r1);
        flight1.addReservation(r2);

        flight2.addReservation(r1);

        System.out.println(flight1);
        System.out.println(flight2);
    }
}