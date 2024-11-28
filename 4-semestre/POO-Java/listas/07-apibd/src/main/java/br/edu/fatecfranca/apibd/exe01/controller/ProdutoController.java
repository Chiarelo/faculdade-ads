package br.edu.fatecfranca.apibd.exe01.controller;



import br.edu.fatecfranca.apibd.exe01.dto.ProdutoDTO;
import br.edu.fatecfranca.apibd.exe01.model.Produto;
import br.edu.fatecfranca.apibd.exe01.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")  //rest e request são obrigatorios!
@RequiredArgsConstructor
public class ProdutoController {
    private final ProdutoService produtoService; //Jeito organizado de fazer as injeções

    @GetMapping
    private ResponseEntity<List<Produto>> findAll() {
        return new ResponseEntity<>(produtoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Produto> produto = produtoService.findById(id);
        return (produto.isPresent()) ?
                new ResponseEntity<>(produto.get(), HttpStatus.OK):
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    private ResponseEntity<?> save(@RequestBody Produto produto) { //Interrogação quando voce não sabe o tipo do dado retornado
        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setName(produto.getName());
        produtoDTO.setDescription(produto.getDescription());
        produtoDTO.setPrice(produto.getPrice());
        produtoService.save(produtoDTO);
        return new ResponseEntity<>(produtoDTO, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    private ResponseEntity<?> update(@PathVariable long id, @RequestBody Produto produto) {
        try {
            ProdutoDTO produtoDTO = new ProdutoDTO();
            produtoDTO.setName(produto.getName());
            produtoDTO.setDescription(produto.getDescription());
            produtoDTO.setPrice(produto.getPrice());
            produtoService.update(id, produtoDTO);
            return new ResponseEntity<>(produtoDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> delete(@PathVariable long id) {
        try {
            produtoService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}