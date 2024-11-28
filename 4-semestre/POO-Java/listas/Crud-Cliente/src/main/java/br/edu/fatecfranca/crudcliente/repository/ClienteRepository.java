package br.edu.fatecfranca.crudcliente.repository;

import br.edu.fatecfranca.crudcliente.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long > {
    //Esta interface tera asoperações de crud com a entidade cliente.
}
