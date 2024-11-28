//Laura Andrade de Oliveira & Vinícius Chiarelo Gomes 
function iniciaVetor(vetor, n){
    for(let i = 1; i <= n; i++){
        vetor.push(i);
    }
}

function resolucao(vetor, m){
    let currentPosition = 0;
    while(vetor.length > 1){
        currentPosition = (currentPosition + m - 1) % vetor.length;
        vetor.splice(currentPosition, 1);
    }
    return vetor[0];
}

let vetor = [];
let n = 24, m = 5;
iniciaVetor(vetor, n);
let result = resolucao(vetor, m);
console.log("Número que sobrou: " + result);
