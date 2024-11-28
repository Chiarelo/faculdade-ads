function selectionSort(array) {
  let menor;
  for (i = 0; i < array.length - 1; i++) {
    menor = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[menor]) {
        menor = j;
      }
    }
    if (i != menor) {
      [array[i], array[menor]] = [array[menor], array[i]];
    }
  }
  return array;
}

let array = [5, 4, 1, 3, 8, 6];
selectionSort(array);
console.log(array);

//SelectionSort Reverso

function reverso(array) {
  let maior;
  for (i = 0; i < array.length - 1; i++) {
    maior = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] > array[maior]) {
        maior = j; //Pega somente o indice do array
      }
    }
    if (i !== maior) {
      //Compara se os indices são diferentes, se sim significa que 'maior' possui um novo elemento maior que o indice 'i'
      [array[i], array[maior]] = [array[maior], array[i]]; //efetua as trocas
    }
  }
  console.log(array);
}

reverso(array);
