let pilha = [];
let x;

// x = parseInt(prompt("Informe um número: "))
x = 7;
pilha.push(x);
pilha.push(1);
pilha.push(2);

console.log("Pilha: ", pilha);
x = pilha.pop();

console.log("Remover o elemento: ", x);
console.log("Pilha após remoção do último elemento: ", pilha);

x = top(pilha);

function top(pilha) {
  x = -1;
  if (pilha.length != 0) {
    x = pilha.pop();
    pilha.push(x);
  }
  return x;
}

function clear(pilha) {
  while (pilha.length != 0) {
    pilha.pop();
  }
}
