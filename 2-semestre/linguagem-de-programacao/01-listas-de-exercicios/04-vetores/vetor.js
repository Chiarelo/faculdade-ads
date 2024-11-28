
let vetor = [];
let somaVet = 0;

for (let i = 0; i <= 4; i++) {
  vetor.push(Number(prompt(`Informe nota ${i + 1}`)));
}
//FAZER UM FOR PARA *CADA* CALCULOO!!!!!!!!!!!
//Calcule a media
let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += vetor[i];
}
alert(`A média é ${soma / vetor.length}`);

//For para encontrar a maior nota
let maior = vetor[0]; //Maior nota é a primeira
for (let i = 0; i < 5; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
alert(`A maior nota é ${maior}`);

function maiornome() {
  let notas = [];
  let nomes = [];

  for (let i = 0; i <= 2; i++) {
    nomes.push(prompt(`Informe o ${i}º nome`));
    notas.push(Number(prompt(`Informe o ${i}º Notas`)));
  }

  //Calculo
  let soma = 0;
  for (let i = 0; i <= 2; i++) {
    soma = soma + notas[i];
  }
  alert(`A média é ${soma / notas.length}`);

  // for para encontrar a maior e menor nota
  let maior = notas[0]; // maior nota é a primeira
  let menor = notas[0]; // menor nota é a primeira
  for (let i = 1; i <= 2; i++) {
    if (notas[i] > maior) {
      maior = notas[i];
    }

    if (notas[i] < menor) {
      menor = notas[i];
    }
  }
  alert(`A maior nota foi do ${nomes[notas.indexOf(maior)]}`);
  alert(`A menor nota foi do ${nomes[notas.indexOf(menor)]}`);
}

function ex01() {
  let numeros = [];
  let pares = [];
  let impares = [];

  for (let i = 0; i < 6; i++) {
    numeros.push(Number(prompt(`Informe o ${i + 1}º Número`)));
  }

  // Verificar e separar números pares e ímpares
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    } else {
      impares.push(numeros[i]);
    }
  }

  // Mostrar números pares
  let paresMsg = `A quantidade de números pares são: ${
    pares.length
  } e os numeros pares são: ${pares.join(", ")}`;

  // Mostrar números ímpares
  let imparesMsg = `A quantidade de números ímpares são: ${
    impares.length
  } e os numeros ímpares são: ${impares.join(", ")}`;

  alert(paresMsg);
  alert(imparesMsg);
}

function ex02() {
  let numeros = [];
  let multiplos2 = [];
  let multiplos3 = [];
  let multiplos = [];
  for (let i = 0; i < 7; i++) {
    numeros.push(parseFloat(prompt(`Insira o ${i}º elemento do vetor`)));
  }

  //Calculo descobrir os múltiplos de 2
  for (let i = 0; i < 7; i++) {
    if (numeros[i] % 2 == 0) {
      multiplos2.push(numeros[i]);
    }
  }

  //Múltiplos de 3
  for (let i = 0; i < 7; i++) {
    if (numeros[i] % 3 == 0) {
      multiplos3.push(numeros[i]);
    }
  }

  for (let i = 0; i < 7; i++) {
    if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0) {
      multiplos.push(numeros[i]);
    }
  }

  alert(
    `Os numeros digitados que são multiplos de 2 são: ${multiplos2.join(", ")}`
  );
  alert(
    `Os numeros digitados que são multiplos de 3 são: ${multiplos3.join(", ")}`
  );
  alert(
    `Os numeros digitados que são multiplos de 2 e 3 são: ${multiplos.join(
      ", "
    )}`
  );
}

function exe3(){
  let codigos = []
  let estoque = []
  // etrada de dados
  for(let i=0;i<10;i++){
      codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
      estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
  }
  // compra por um cliente
  let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
  do {
      let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
      let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
      // verificando se o produto existe e se tem estoque
      let achou = false // produto não foi encontrado
      for(let i=0;i<10;i++){
          if (codigos[i] == produto){ // encontrou o produto
              achou = true // achou o produto
              if (estoque[i] >= qtde){ // tem estoque
                  alert(`Venda realizada com sucesso`)
                  estoque[i] = estoque[i] - qtde // atualiza estoque
              }
              else {
                  alert(`Não tem estoque suficiente`)
              }
          }
      }
      if (!achou){ // não encontrou o produto
          alert(`Produto não encontrado`)
      }
      cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))
  }
  while(cliente != 0)
  // mostra o resultado
  for(let i=0;i<10;i++){
      console.log(`Produto ${codigos[i]} tem ${estoque[i]} unidades em estoque`)
  }
}

function ex04() {
  let num = [];
  let pos = []
  for (let i = 0; i < 4; i++) {
    num.push(parseInt(prompt(`Insira o ${i}º número`)));
  }

  for (let i = 0; i < 4; i++) {
    if(num[i] == 30){
      pos.push(i) //Armazena a posição do número 30 no array
    }
  }
  if(pos.length > 0){
    alert(`O número 30 foi encontrado nas posições ${pos.join(", ")} dos vetores`)
  } else{
    alert(`O número 30 não foi inserido no programa`)
  }

}

 function ex05(){
   let logica = []
   let linguagemProgramacao = []
   let valoresIguais = []
   
// Loop para a disciplina "lógica"
for (let i = 0; i < 5; i++) {
  logica.push(parseInt(prompt(`Insira o número da ${i + 1}º da disciplina lógica`)))
}

// Loop para a disciplina "linguagem de programação"
for (let i = 0; i < 4; i++) {
  linguagemProgramacao.push(parseInt(prompt(`Insira o número da ${i + 1}º da disciplina linguagem de programação`)))
}

// Verificar valores iguais entre as duas disciplinas
for (let i = 0; i < logica.length; i++) {
  for (let j = 0; j < linguagemProgramacao.length; j++) {
    if (logica[i] === linguagemProgramacao[j]) {
      valoresIguais.push(logica[i])
      break
    }
  }
}

alert(`Os alunos que estão matriculados nas duas disciplinas são os números ${valoresIguais.join(", ")}`)
}


function exe6(){
  let vendas = []
  let percentuais = []
  let nomes = []
  // entrada de dados
  for(let i=0;i<10;i++){
      nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
      vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
      percentuais.push(Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}`)))
  }
  // quanto vai receber de comissão
  let comissoes = []
  for(let i=0;i<10;i++){
      comissoes.push(vendas[i] * percentuais[i]/100)
      console.log(`${nomes[i]} vai receber ${comissoes[i]}`)
  }
  // total de vendas de todos os vendedores
  let total = 0
  for(let i=0;i<10;i++){
      total = total + vendas[i]
  }
  console.log(`Total de vendas ${total}`)
  // maior e menor valor a receber, e os nomes dos vendedores
  let maior = comissoes[0]
  let menor = comissoes[0]
  for(let i=1;i<10;i++){
      if (comissoes[i] > maior){
          maior = comissoes[i]
      }
      if (comissoes[i] < menor){
          menor = comissoes[i]
      }
  }
  console.log(`Maior comissão ${maior} do ${nomes[comissoes.indexOf(maior)]}`)
  console.log(`Menor comissão ${menor} do ${nomes[comissoes.indexOf(menor)]}`)
} 

function ex7(){
  let numeros = []
  let soma = 0
  let contNeg = 0
  for(let i = 0; i<10; i++){
    numeros.push(Number(parseFloat(prompt(`Insira o ${i+1}º numero`))))
  }
  for(let i = 0; i<10; i++){
    if(numeros[i] <0){
      contNeg += 1
    } else{
      soma += numeros[i]
    }
  }

  alert(`A quantidade de numeros negativos é : ${contNeg}`)
  alert(`A soma dos números positivos é de ${soma}`)
}

function ex8(){
  let nomes = []
  let mediaFinal = []
  for(let i = 0; i < 4; i++){
    nomes.push(prompt(`Insira o nome do ${i+1}º aluno`))
    mediaFinal.push(parseFloat(prompt(`Insira a media final do ${i+1}º aluno`)))
  }
  let maiorNota = mediaFinal[0]
  for(let i = 0; i < 4; i++){
    if(maiorNota < mediaFinal[i]){
      maiorNota = mediaFinal[i]
    }
  }    
  // Cálculo de quanto cada aluno precisa tirar no exame final
  const notaNecessariaParaAprovacao = 7; // Média necessária para aprovação
  for (let i = 0; i < 4; i++) {
    if(mediaFinal[i] < 7){
      let notaNoExameFinal = notaNecessariaParaAprovacao - mediaFinal[i]; // Cálculo da nota no exame final
      alert(`${nomes[i]} precisa tirar ${notaNoExameFinal.toFixed(2)} no exame final para alcançar a média 7.`);
    }
  }
  alert(`O nome do aluno com a maior média é: ${nomes[mediaFinal.indexOf(maiorNota)]}`);
}
function ex9(){
  let nomeProdutos = []
let codigoProdutos = []
let precoProdutos = []
let novopreco = []

for (let i = 0; i < 4; i++) {
  nomeProdutos.push(prompt(`Insira o nome do ${i + 1}º Produto`))
  codigoProdutos.push(parseInt(prompt(`Insira o código do ${i + 1}º Produto`)))
  precoProdutos.push(parseFloat(prompt(`Insira o preço do ${i + 1}º Produto`)))
}

for (let i = 0; i < 4; i++) {
  let desconto = 0;

  if (codigoProdutos[i] % 2 === 0 && precoProdutos[i] > 1000) {
    desconto = precoProdutos[i] * 0.2 // 20% de desconto
  } else if (codigoProdutos[i] % 2 === 0) {
    desconto = precoProdutos[i] * 0.15 // 15% de desconto
  } else if (precoProdutos[i] > 1000) {
    desconto = precoProdutos[i] * 0.1 // 10% de desconto
  }

  novopreco.push(precoProdutos[i] - desconto); // Armazena o novo preço no vetor novopreco
}

let relatorio = "Relatório de Produtos:\n\n"

for (let i = 0; i < 4; i++) {
  relatorio += `Produto ${i + 1}:\n`
  relatorio += `Nome: ${nomeProdutos[i]}\n`
  relatorio += `Código: ${codigoProdutos[i]}\n`
  relatorio += `Preço: R$ ${precoProdutos[i].toFixed(2)}\n`
  relatorio += `Novo Preço: R$ ${novopreco[i].toFixed(2)}\n\n`
}

alert(relatorio)

}