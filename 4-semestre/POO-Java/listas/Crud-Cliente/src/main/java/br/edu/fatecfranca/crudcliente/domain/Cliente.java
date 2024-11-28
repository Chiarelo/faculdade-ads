package br.edu.fatecfranca.crudcliente.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="tb_cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String telefone;
    private String nome;

}
