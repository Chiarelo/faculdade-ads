package br.edu.fatecfranca.apibd.exe01.repository;

import br.edu.fatecfranca.apibd.exe01.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
