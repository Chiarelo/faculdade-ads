package br.edu.fatecfranca.crudCliente.controller;

import br.edu.fatecfranca.crudCliente.domain.Cliente;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    private static final Map<Long, Cliente> clientes = new HashMap<>();

    static {
        clientes.put(1L, new Cliente(1L, "Pedro", "16999999999", "Pedro@gmail.com"));
    }

    @GetMapping
    public Map<Long, Cliente> getClientes() { return clientes; }
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
        Cliente cliente = clientes.get(id);
        if (cliente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente) {
        clientes.put(cliente.getId(), cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(cliente); // Retorna o cliente adicionado
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        if (!clientes.containsKey(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Retorna 404 se não encontrado
        }
        cliente.setId(id); // Garantir que o ID do cliente seja o mesmo
        clientes.put(id, cliente);
        return ResponseEntity.ok(cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable Long id) {
        Cliente cliente = clientes.remove(id);
        if (cliente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado"); // Retorna 404 se não encontrado
        }
        return ResponseEntity.ok("Cliente removido com sucesso");
    }
}
