let computadores = [];
let classificacao = [];
let qntdEstoque = [];
const numcomputadores = 1;
let numCompras = 3; 
function isUpperCase(str) {
  return str === str.toUpperCase();
}
for (let i = 0; i < numcomputadores
; i++) {
  let nomeProduto = prompt(
    `ENTRADA DE DADOS\n\nInforme o nome do produto ${i + 1}:`
  );

  if (nomeProduto === null) {
    alert("Programa encerrado pelo usuário."); 
    break;
  }
  nomeProduto = nomeProduto.toUpperCase(); 
  while (computadores
  .includes(nomeProduto)) {
    nomeProduto = prompt(
      `ENTRADA DE DADOS\n\nProduto "${nomeProduto}" já inserido. Forneça um nome de produto diferente:`
    );
    if (nomeProduto === null) {
      alert("Programa encerrado pelo usuário."); 
      break;
    }
  }
  if (nomeProduto === null) {
    break;
  }
  let inputclas = Number(
    prompt(
      `ENTRADA DE DADOS\n\nInforme a classificação para "${nomeProduto}": \n 1 - Gamer \n 2 - Notebook \n 3 - Desktop`
    )
  );
  while (
    inputclas < 1 ||
    inputclas > 3 ||
    isNaN(inputclas) ||
    inputclas === ""
  ) {
    inputclas = Number(
      prompt(
        `ENTRADA DE DADOS\n\nCódigo INVÁLIDO!!! (Forneça um código entre 1 e 3)\nInforme a classificação para "${nomeProduto}": \n 1 - Gamer \n 2 - Notebook \n 3 - Desktop`
      )
    );
  }
  let quantidade = Number(
    prompt(
      `ENTRADA DE DADOS\n\nInforme a quantidade em qntdEstoque para "${nomeProduto}":`
    )
  );

  if (quantidade === null) {
    alert("Programa encerrado pelo usuário."); // Caso o usuário clique em cancelar
    break;
  }

 
  while (
    isNaN(quantidade) ||
    quantidade <= 0 ||
    quantidade === "" ||
    quantidade === null
  ) {
    quantidade = Number(
      prompt(
        `ENTRADA DE DADOS\n\nQuantidade INVÁLIDA!!! (Forneça um VALOR para a quantidade e que NÃO seja negativo ou nulo)`
      )
    );
    if (quantidade === null) {
      alert("Programa encerrado."); 
      break;
    }
  }
  if (quantidade === null) {
    break;
  }
  computadores
.push(nomeProduto);
  classificacao.push(inputclas);
  qntdEstoque.push(quantidade);
  numCompras++;
}
console.log(`ENTRADA DE DADOS:\n`);
for (let i = 0; i < computadores
.length; i++) {
  console.log(
    `Produto: ${computadores
    [i]}, Classificação: ${classificacao[i]}, qntdEstoque: ${qntdEstoque[i]}`
  );
}
for (let i = 0; i < numCompras; i++) {
  let modeloCompra = prompt(
    `REALIZAÇÃO DE COMPRAS\n\nInforme o modelo do computador para a compra ${
      i + 1
    }:`
  );
  if (modeloCompra === null) {
    alert("Programa encerrado pelo usuário."); 
    break;
  }
  modeloCompra = modeloCompra.toUpperCase(); 
  let indexModelo = computadores
.indexOf(modeloCompra);
  if (indexModelo === -1) {
    alert(`COMPRA CANCELADA!!!\n\nO MODELO "${modeloCompra}" NÃO existe.`);
    continue; 
  }
  let classificacaoCompra = Number(
    prompt(
      `REALIZAÇÃO DE COMPRAS\n\nInforme a classificação para o modelo "${modeloCompra}": \n 1 - Gamer \n 2 - Notebook \n 3 - Desktop`
    )
  );
  if (
    isNaN(classificacaoCompra) ||
    classificacaoCompra < 1 ||
    classificacaoCompra > 3
  ) {
    alert(`COMPRA CANCELADA!!!\n\nA CLASSIFICAÇÃO informada não é válida.`);
    continue; 
  }
  let quantidadeCompra = Number(
    prompt(
      `REALIZAÇÃO DE COMPRAS\n\nInforme a quantidade desejada para o modelo "${modeloCompra}":`
    )
  );
  if (quantidadeCompra === null) {
    alert("Programa encerrado pelo usuário.");
    break;
  }
  if (classificacaoCompra !== classificacao[indexModelo]) {
    alert(
      `COMPRA CANCELADA!!!\n\nO modelo "${modeloCompra}" NÃO CORRESPONDE à CLASSIFICAÇÃO informada.`
    );
    continue; 
  }
  if (quantidadeCompra > qntdEstoque[indexModelo]) {
    alert(
      `COMPRA CANCELADA!!!\n\nqntdEstoque INSUFICIENTE para o modelo "${modeloCompra}".`
    );
    continue; 
  }

  alert(`Compra REALIZADA com SUCESSO para o modelo "${modeloCompra}"!!!`);
  qntdEstoque[indexModelo] -= quantidadeCompra; 
}
let modelosNotebook = [];
let qntdEstoqueNotebook = [];
console.log(`\n\nSAÍDA DE DADOS:\n`);
for (let i = 0; i < computadores
.length; i++) {
  if (classificacao[i] === 2) {
    
    modelosNotebook.push(computadores
    [i]);
    qntdEstoqueNotebook.push(qntdEstoque[i]);
  }
}

if (modelosNotebook.length > 0) {
  let maiorqntdEstoque = qntdEstoqueNotebook[0];
  let menorqntdEstoque = qntdEstoqueNotebook[0];
  let modeloMaiorqntdEstoque = modelosNotebook[0];
  let modeloMenorqntdEstoque = modelosNotebook[0];

  for (let i = 1; i < modelosNotebook.length; i++) {
    if (qntdEstoqueNotebook[i] > maiorqntdEstoque) {
      maiorqntdEstoque = qntdEstoqueNotebook[i];
      modeloMaiorqntdEstoque = modelosNotebook[i];
    }

    if (qntdEstoqueNotebook[i] < menorqntdEstoque) {
      menorqntdEstoque = qntdEstoqueNotebook[i];
      modeloMenorqntdEstoque = modelosNotebook[i];
    }
  }

  alert(
    `Modelo de Notebook com maior qntdEstoque: ${modeloMaiorqntdEstoque}, qntdEstoque: ${maiorqntdEstoque}`
  );
  alert(
    `Modelo de Notebook com menor qntdEstoque: ${modeloMenorqntdEstoque}, qntdEstoque: ${menorqntdEstoque}`
  );

  alert(
    `Modelo de Notebook com maior qntdEstoque: ${modeloMaiorqntdEstoque}, qntdEstoque: ${maiorqntdEstoque}`
  );
  alert(
    `Modelo de Notebook com menor qntdEstoque: ${modeloMenorqntdEstoque}, qntdEstoque: ${menorqntdEstoque}`
  );
} else {
  alert("NÃO HÁ modelos de NOTEBOOK registrados!!!");

}
