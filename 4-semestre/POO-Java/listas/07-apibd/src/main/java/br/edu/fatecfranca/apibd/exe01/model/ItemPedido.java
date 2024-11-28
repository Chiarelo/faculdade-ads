package br.edu.fatecfranca.apibd.exe01.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="tb_item_pedido")
public class ItemPedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private float preco;
    private int quantidade;

    @ManyToOne
    @JoinColumn(name = "id_pedido")
    private Pedido pedido;

    @ManyToOne //Muitos para um
    @JoinColumn(name = "id_produto") //Join column é a chave estrangeira
    private Produto produto;
}
