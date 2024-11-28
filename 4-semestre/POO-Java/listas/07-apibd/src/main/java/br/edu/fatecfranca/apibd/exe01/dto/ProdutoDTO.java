package br.edu.fatecfranca.apibd.exe01.dto;

import lombok.Data;

@Data
public class ProdutoDTO {
    private Long id;
    private String name;
    private String description;
    private float price;

    //Os dtos são informacões vinculadas ao cliente e retomadas ao cliente
    //As do model são do banco de dados
}
