const carros = [];
 
const notas = Array.from({ length: 4 }, () => Array(5).fill(0));
 
// Cadastro dos carros
function cadastrarCarro() {
  const carro = {};
  carro.marca = prompt("Digite a marca do carro:");
  carro.modelo = prompt("Digite o modelo do carro:");
  carro.ano = prompt("Digite o ano do carro:");
  carro.valor = prompt("Digite o valor do carro:");
 
  for (let i = 0; i < 5; i++) {
    notas[carros.length][i] = parseInt(prompt(`Digite a nota ${i + 1} do carro:`));
  }
  carros.push(carro);
}
 
// Media das notas dos carros
function calcularMediaNotas() {
  for (let i = 0; i < carros.length; i++) {
    let somaNotas = 0;
    for (let j = 0; j < 5; j++) {
      somaNotas += notas[i][j];
    }
    const media = somaNotas / 5;
    alert(`Carro: ${carros[i].marca} ${carros[i].modelo}, Média de Notas: ${media}`);
  }
}
 
// modelo do carro com menor nota
function modeloMenorNota() {
  for (let i = 0; i < 5; i++) {
    let menorNota = Infinity;
    let modeloMenorNota = "";
    for (let j = 0; j < carros.length; j++) {
      if (notas[j][i] < menorNota) {
        menorNota = notas[j][i];
        modeloMenorNota = carros[j].modelo;
      }
    }
    alert(`Avaliação ${i + 1}: Modelo com menor nota: ${modeloMenorNota}`);
  }
}
 
// Avaliação com menor nota
function avaliacaoMenorMedia() {
    let menorMedia = Infinity; // initialize minimum media
    let avaliacaoMenorMedia = -1; // initialize minimum media avaliacao
   
    for (let i = 0; i < 5; i++) { // loop through 5 avaliacoes
       let somaNotas = 0; // initialize sum of notas
   
       for (let j = 0; j < carros.length; j++) { // loop through each carro
         somaNotas += notas[j][i]; // add nota to sum
       }
   
       const media = somaNotas / carros.length; // calculate media
   
       if (media < menorMedia) { // check if media is smaller than minimum media
         menorMedia = media; // update minimum media
         avaliacaoMenorMedia = i + 1; // update minimum media avaliacao
       }
    }
   
    alert(`Avaliação com menor média: ${avaliacaoMenorMedia}`); // display avaliacao with smallest media
   }






function principal(){
    let opcao = 0;
    while(opcao != 5){
        opcao = Number(prompt(`Informe uma opção: \n1. Cadastrar carro \n2. Calcular e mostrar a média de notas de cada carro \n3. Calcular e mostrar o modelo do carro com menor nota em cada avaliação \n4. Calcular e mostrar qual das cinco avaliações teve menor média \n5. Sair`));
        switch(opcao){
            case 1: cadastrarCarro();
                    break;
            case 2: ;calcularMediaNotas()
                    break;
            case 3: modeloMenorNota()
                    break;
            case 4: avaliacaoMenorMedia()
                    break;
            case 5: alert(`O programa será encerrado`);
                    break;
            default: alert(`Opção inválida`);
        }
    }

}