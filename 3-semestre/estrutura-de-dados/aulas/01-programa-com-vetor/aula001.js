let vetor = [];
let maximo = 50;

function principal() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "Digite \n1. Inserir \n2. Remover valor \n3. Remover posição \n4. Somar elementos \n5. Mostrar vetor \n6. Somar Indices \n7. Fechar Programa"
      )
    );
    switch (opcao) {
      case 1:
        inserir(vetor);
        break;
      case 2:
        removeValor(vetor);
        break;
      case 3:
        RemoverPosição(vetor);
        break;
      case 4:
        SomarElementos(vetor);
        break;
      case 5:
        alert(vetor);
        break;
      case 6:
        Somarindices(vetor);
        break;
      case 7:
        alert("Fim do programa");
        break;
      default:
        alert("Opção inválida");
    }
  } while (opcao != 7);
}

function inserir(vetor) {
  let opcao;
  do {
    if (vetor.length >= maximo) {
      opcao = Number(
        prompt(
          `Número máximo de elementos atingido (${maximo}). Deseja encerrar a inserção? \n1. Sim \n2. Não`
        )
      );
      if (opcao == 1) {
        break;
      }
    }
    vetor.push(Number(prompt(`Digite o valor ${vetor.length + 1}`)));
    opcao = Number(prompt("Deseja adicionar mais um valor? \n1. Sim \n2. Não"));
  } while (opcao !== 1);
}

function removeValor() {
  let valor = Number(prompt("Digite o valor a ser removido:"));
  let posicao = vetor.indexOf(valor);
  if (posicao == -1) {
    alert("Valor não encontrado");
  } else {
    alert(`Valor : ${vetor.splice(posicao, 1)}  removido do vetor`);
  }
}

function RemoverPosição() {
  let posicao = Number(prompt("Digite a posição a ser removida:"));
  if (posicao < 0 || posicao >= vetor.length) {
    alert("Posição inválida");
  } else {
    alert(`Posição ${vetor.splice(posicao, 1)} removida do vetor`);
  }
}

function SomarElementos(vetor) {
  let somaPar = 0;
  let somaImpar = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      somaPar += vetor[i];
    } else {
      somaImpar += vetor[i];
    }
  }
  alert(`Soma dos pares: ${somaPar} \nSoma dos ímpares: ${somaImpar}`);
}

function Somarindices(vetor) {
  let primeiro_indice = Number(prompt("Digite a 1º posição a ser somada"));
  let segundo_indice = Number(prompt("Digite a segunda posição a ser somada"));

  let numero = vetor[primeiro_indice];
  let numero2 = vetor[segundo_indice];

  let Soma = numero + numero2;

  console.log(`A soma de ${numero} e ${numero2} é ${Soma}`);
}

console.log(principal());
