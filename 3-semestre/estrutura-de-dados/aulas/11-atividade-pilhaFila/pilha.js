function inverterPalavras(texto) {
    const palavras = texto.split(" ");
    const resultado = [];

    for (let palavra of palavras) {
        const pilha = [];
        for (let letra of palavra) {
            pilha.push(letra);
        }

        let palavraInvertida = "";
        while (pilha.length > 0) {
            palavraInvertida += pilha.pop();
        }

        resultado.push(palavraInvertida);
    }

    return resultado.join(" ");
}

const texto = "OI";
const textoInvertido = inverterPalavras(texto);
console.log(textoInvertido);