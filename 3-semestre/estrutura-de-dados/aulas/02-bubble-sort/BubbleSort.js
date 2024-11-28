function Bubblesort(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}







function BubblesortDowhile(array) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

console.log(BubblesortDowhile(array));


let array = [5, 4, 1, 3, 8, 6];


//Resumo do código

/* Definimos o codigo da seguinte maneira. Começamos primeiro com o loop, i=0; i<tamanho do vetor -1, o tamanho do vetor menos 1 é 
pq precisamos chegar ate a penultima posição do vetor, pois o maior número ja terminara no fim. Depois disso criamos um If para fazer a validação
se o numero da posição atual é maior que o numero proxima posição, se sim dentro da condicional fazemos a troca uzando uma variavel adicional,
se nao o vetor segue adiante fazendo a validação e se nao encontrar nada, o vetor ja esta ordenado.


*/
//Número de iterações do Bubble Sort

function NumInteracoesBubbleSort(array) {
  let quantidadeiteração = 0;
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
        quantidadeiteração += 1;
        swapped = true;
      }
    }
  } while (swapped);

  console.log(
    `Vetor Ordenado: ${array} \n quantidade de iterações feitas pelo programa : ${quantidadeiteração}`
  );
}

NumInteracoesBubbleSort(array); //Mesmo passando o parametro da função, ainda tem que passar o parametro quando se chama a função

let strings = ['Z', 'J', 'B', 'A', 'y', 'W', 'S', 'M'];

function arrayStrings(strings) {
  do {
    swapped = false;
    for (i = 0; i < strings.length - 1; i++) {
      if (strings[i].charCodeAt(0) > strings[i+1].charCodeAt(0)) {
        let aux = strings[i + 1];
        strings[i + 1] = strings[i];
        strings[i] = aux;
        swapped = true;
      }
    }
  } while (swapped);
  return strings;
}
console.log(arrayStrings(strings));
