function buscaBinariaRecursiva(arr, valor, inicio = 0, fim = arr.length - 1) {
    if (inicio > fim) {
        return -1; // Valor não encontrado
    }

    const meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === valor) {
        return meio; // Valor encontrado
    } else if (arr[meio] < valor) {
        return buscaBinariaRecursiva(arr, valor, meio + 1, fim); // Busca na metade superior
    } else {
        return buscaBinariaRecursiva(arr, valor, inicio, meio - 1); // Busca na metade inferior
    }
}

// Exemplo de uso
const vetor = [1, 3, 5, 7, 9, 11, 13, 15];
const valorBuscado = 7;

const indiceEncontrado = buscaBinariaRecursiva(vetor, valorBuscado);

if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorBuscado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
    console.log(`O valor ${valorBuscado} não foi encontrado no vetor.`);
}