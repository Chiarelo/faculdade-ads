//Codigo feito por Laura Andrade de Oliveira e Vinícius Chiarelo Gomes
  // Função para ordenar um vetor usando o algoritmo Bubble Sort 
function bubbleSort(vetor) {
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < vetor.length - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let aux = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = aux;
        swapped = true;
      }
    }
  } while (swapped);
  return vetor;
}

// Função para ordenar um vetor usando o algoritmo Seleção Direta
function selecaoDireta(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    var menor = vetor[i];
    var posicao = i;

    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < menor) {
        menor = vetor[j];
        posicao = j;
      }
    }
    var aux = vetor[i];
    vetor[i] = vetor[posicao];
    vetor[posicao] = aux;
  }
  return vetor;
}

// Função para ordenar um vetor usando o algoritmo Inserção Direta
function insercaoDireta(vetor) {
  for (var i = 1; i < vetor.length; i++) {
    for (var j = 0; j < i; j++) {
      if (vetor[i] < vetor[j]) {
        var aux = vetor[i];
        for (var k = i; k > j; k--) {
          vetor[k] = vetor[k - 1];
        }
        vetor[j] = aux;
      }
    }
  }
  return vetor;
}

// Vetor ordenado
let ordenado = [];
for (let i = 0; i < 1000; i++) {
  ordenado.push(i);
}

// Vetor invertido
let invertido = [];
for (let i = 0; i < 1000; i++) {
  invertido.push(i);
}
invertido.reverse();

// Vetor aleatório
let aleatorio = [];
for (let i = 0; i < 1000; i++) {
  aleatorio.push(Math.floor(Math.random() * 1000));
}

// Função para testar um algoritmo de ordenação em diferentes tipos de vetores
function testarAlgoritmo(algoritmo, vetor, tipo) {
  //function testarAlgoritmo(algoritmo, vetor, tipo) {: Declaração da função testarAlgoritmo com três parâmetros: o algoritmo de ordenação, o vetor a ser ordenado e o tipo de teste.
  let vetorCopia = vetor.slice(); //cria uma copia do vetor para não modificar o original
  console.log(`${algoritmo.name} ${tipo}:`, algoritmo(vetorCopia)); // Imprime o nome do algoritmo e o tipo de teste, juntamente com o vetor ordenado pelo algoritmo.
  console.time(`${tipo}...`);
  algoritmo(vetorCopia);
  console.timeEnd(`${tipo}...`);
  console.log("\n");
}

// Função principal que realiza testes com os algoritmos de ordenação
function main() {
  let testes = [
    //vetor com objetos que contem os algoritmos de ordenação
    { algoritmo: bubbleSort, nome: "Bubble Sort" },
    { algoritmo: selecaoDireta, nome: "Seleção Direta" },
    { algoritmo: insercaoDireta, nome: "Inserção Direta" },
  ];

  let tipos = ["Ordenado", "Invertido", "Aleatório"];

  // Loop para executar os testes para cada algoritmo e tipo de vetor
  testes.forEach((teste) => {
    //o codigo so sabe que é um parametro por conta do testes.foreach, esta é uma função callback teste, já que existem 3 objetos dentro de testes
    //a função sera executada 3 vezes para cada objeto
    tipos.forEach((tipo) => {
      let vetorTeste = ordenado.slice();
      if (tipo === "Invertido") {
        vetorTeste = invertido.slice();
      } else if (tipo === "aleatorio") {
        vetorTeste = aleatorio.slice();
      }
      //ele executa 3 vezes para cada objeto, por conta dos if's

      testarAlgoritmo(teste.algoritmo, vetorTeste, `${teste.nome} ${tipo}`); //o Algoritmo vem de quando eu chamo a função dele nesta parte do codigo
    });
  });
}

// Executar a função principal
main();
