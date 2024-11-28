package br.edu.fatecfranca.crudcliente.controller;

import br.edu.fatecfranca.crudcliente.domain.Cliente;
import br.edu.fatecfranca.crudcliente.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    // GET /clientes - Listar todos os clientes
    @GetMapping
    public ResponseEntity<List<Cliente>> listarTodos() {
        return new ResponseEntity<>(clienteService.findAll(), HttpStatus.OK);
    }

    // GET /clientes/{id} - Buscar cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteService.findById(id);
        return cliente.isPresent() ?
                new ResponseEntity<>(cliente.get(), HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // POST /clientes - Adicionar novo cliente
    @PostMapping
    public ResponseEntity<Cliente> add(@RequestBody Cliente cliente) {
        return new ResponseEntity<>(clienteService.add(cliente), HttpStatus.CREATED);
    }

    // PUT /clientes/{id} - Atualizar dados de um cliente existente
    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        return clienteService.update(id, clienteAtualizado)
                .map(cliente -> ResponseEntity.ok("Cliente atualizado com sucesso."))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado"));
    }

    // DELETE /clientes/{id} - Remover cliente por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable Long id) {
        if (clienteService.deleteById(id)) {
            return ResponseEntity.ok("Cliente removido com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado");
        }
    }
}
