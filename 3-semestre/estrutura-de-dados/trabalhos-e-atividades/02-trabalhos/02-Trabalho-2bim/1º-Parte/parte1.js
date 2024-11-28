// Trabalho feito por Laura Andrade e Vinícius Chiarelo
 
var expressao = "{(2+1)*8[1-5]}"; // colocar o valor da expressaoressão para fazer o teste
var vetor = [];
var pilha = [];
var i;
var erro = 0;
 
vetor = expressao.split("");
 
for (i = 0; i < vetor.length; i++) {
  if (vetor[i] == "(" || vetor[i] == "[" || vetor[i] == "{") {
    pilha.push(vetor[i]);
  } else if (vetor[i] == ")" && pilha.pop() != "(") {
    erro = -1;
  } else if (vetor[i] == "]" && pilha.pop() != "[") {
    erro = -1;
  } else if (vetor[i] == "}" && pilha.pop() != "{") {
    erro = -1;
  }
}
 
if (pilha.length != 0) {
  erro = -1;
}
 
if (erro == -1) {
  console.log("expressão com dados INCORRETAMENTE utilizados");
} else {
  console.log("expressão com dados CORRETAMENTE utilizados");
}