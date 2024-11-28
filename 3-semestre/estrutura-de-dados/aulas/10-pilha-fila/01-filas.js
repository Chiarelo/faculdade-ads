let fila = [];
let x, y;

// x = parseInt(prompt("Informe um número: "));
x = 7;
fila.push(x);
fila.push(1);
fila.push(2);

console.log("Fila:", fila);

x = fila.shift();
console.log("Remover elemento:", x);
console.log("Fila após remoção do elemento", x, ":", fila);

console.log("Fila com adição de mais um elemento:");
fila.push(10);
console.log(fila);

limpar(fila);

function limpar(fila) {
  while (fila.length != 0) {
    fila.shift();
  }
  console.log("Fila limpa: ", fila);
}
