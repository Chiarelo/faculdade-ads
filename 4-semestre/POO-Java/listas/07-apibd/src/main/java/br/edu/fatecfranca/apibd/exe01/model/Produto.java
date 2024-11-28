package br.edu.fatecfranca.apibd.exe01.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="tb_produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // identidade em Serié (1,2, 3, 4, 5, 6...)
    private Long id;
    private String name;
    private String description;
    private float price;
}
