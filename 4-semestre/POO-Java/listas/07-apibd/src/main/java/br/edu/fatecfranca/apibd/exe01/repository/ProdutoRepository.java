package br.edu.fatecfranca.apibd.exe01.repository;

import br.edu.fatecfranca.apibd.exe01.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    }

