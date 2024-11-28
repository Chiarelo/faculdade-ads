function fatorial(num){
    if (num === 0){
        return 1
    }
    else {
        return (num * fatorial(num - 1))
    }
}

var resultado = fatorial(5)
console.log(resultado)

//escrever uma função recursiva Fib(N) que receba o inteiro N e devolva o N-ésimo número da sequência
// de Fibonacci recursivamente por Fib(1) = 1 Fib(2) = 1.
function fib(n){
    if (n === 1 || n === 2){
        return 1
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}

var resultado = fib(7)
console.log(resultado)

function pot(base, expoente){
    if (expoente == 0){
        return 1
    } else {
        return (base * pot(base, expoente - 1))
    }
}

var resultado = pot(5, 2)
console.log(resultado)

