package br.edu.fatecfranca.apimemoria.controller;

import br.edu.fatecfranca.apimemoria.domain.Produto;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    private static final Map<Long, Produto> produtos = new HashMap<>();
    static {
        produtos.put(1L, new Produto(1l, "Mouse Optico", "Sem fio", 120.0));
        produtos.put(2L, new Produto(2l, "Teclado", "mecanico", 220.0));
        produtos.put(3L, new Produto(3l, "Head Phone", "sem fio", 320.0));
    }

    @GetMapping
    public Map<Long, Produto> getProdutos() {
        return produtos;
    }

    @PostMapping
    public Produto addProduto(@RequestBody Produto produto) {
        produtos.put(produto.getId(), produto);
        return produto;
    }

    @DeleteMapping("/{id}")
    public Produto deleteProduto(@PathVariable Long id) {
        return produtos.remove(id);
    }

    @PatchMapping("/{id}")
    public Produto updateProduto(@PathVariable Long id, @RequestBody Produto produto) {
        produto.setId(id); //Pegando o id e repassando
        return produtos.put(id, produto);
    }

}
