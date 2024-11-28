package br.edu.fatecfranca.exerciciodaniel.controller;

import br.edu.fatecfranca.exerciciodaniel.domain.Cliente; // Certifique-se de que a classe Cliente está definida
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
        clientes.put(1L, new Cliente(1L, "João Silva", "joao@gmail.com", "123456789"));
        clientes.put(2L, new Cliente(2L, "Maria Oliveira", "maria@gmail.com", "987654321"));
        clientes.put(3L, new Cliente(3L, "Carlos Souza", "carlos@gmail.com", "456123789"));
    }

    @GetMapping
    public Map<Long, Cliente> getClientes() {
        return clientes;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getClienteById(@PathVariable Long id) {
        Cliente cliente = clientes.get(id);
        if (cliente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado");
        }
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public Cliente addCliente(@RequestBody Cliente cliente) {
        clientes.put(cliente.getId(), cliente);
        return cliente;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        if (!clientes.containsKey(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado");
        }
        cliente.setId(id); // Atualizando o id do cliente
        clientes.put(id, cliente);
        return ResponseEntity.ok(cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCliente(@PathVariable Long id) {
        if (!clientes.containsKey(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado");
        }
        clientes.remove(id);
        return ResponseEntity.ok("Cliente removido com sucesso");
    }
}
