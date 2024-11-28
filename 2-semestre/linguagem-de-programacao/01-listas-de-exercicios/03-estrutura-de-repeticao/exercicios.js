function ex1() {
    let contador2 = 1;
    while (contador2 <= 5) {
      let a = Number(prompt("informe a"));
      let b = Number(prompt("informe b"));
      let c = Number(prompt("informe c"));
      let d = Number(prompt("informe d"));
      let contador = 1;
  
      while (contador <= 4) {
        if (a > b) {
          let aux = a;
          a = b;
          b = aux;
        }
        if (b > c) {
          let aux = b;
          b = c;
          c = aux;
        }
        if (c > d) {
          let aux = c;
          c = d;
          d = aux;
        }
        contador++;
      }
  
      console.log(`Ordem crescente  ${a}, ${b}, ${c}, ${d}`);
      console.log(`Ordem decrescente ${d}, ${c}, ${b}, ${a}`);
      contador2++;
    }
  }
  function ex02() {
    let qntd = 120;
    const custo = 200;
    let corpo = "";
    for (let preco = 5; preco >= 1; preco = preco - 0.5) {
      let lucro = preco * qntd - custo;
      corpo =
        corpo +
        `<tr> <td> ${preco.toFixed(
          2
        )}</td> <td> ${qntd} </td> <td> ${custo.toFixed(
          2
        )} </td> <td> ${lucro.toFixed(2)} </td> </tr>`;
      qntd = qntd + 26;
    }
    document.getElementById("corpo").innerHTML = corpo;
  }
  
  function ex03() {
    let idade = 0;
    let f1 = 0;
    let f2 = 0;
    let f3 = 0;
    let f4 = 0;
    let f5 = 0;
    let corpo = "";
    for (let i = 0; i < 8; i++) {
      idade = Number(prompt("Informe a idade"));
      if (idade > 0 && idade <= 15) {
        f1++;
      } else if (idade >= 16 && idade <= 30) {
        f2++;
      } else if (idade >= 31 && idade <= 45) {
        f3++;
      } else if (idade >= 46 && idade <= 60) {
        f4++;
      } else if (idade > 60) {
        f5++;
      } else {
        alert("idade invalida");
      }
    }
    alert(`F1 ${f1}. F2 ${f2}. F3 ${f3}. F4 ${f4}. F5 ${f5}`);
    alert(`F1 ${f1 / ( 8 * 100)} %F5 ${f5/ (8 * 100)}`);
  }
  
  function ex04() {
    let numero = window.document.getElementById("Numero").value;
    let corpo = "";
    let resultado = 0;
    for (let aux = 0; aux <= 10; aux++) {
      resultado = numero * aux;
      corpo += `
      <tr> 
      <td> ${numero} </td>
      <td> ${aux} </td>
      <td> ${resultado} </td>
      </tr>
      `;
    }
    document.getElementById("Corpo").innerHTML = corpo;
  }
  
  function ex05() {
    let contador = 0;
    let corpo = "";
    for (let numero = 1; numero <= 10; numero++) {
      corpo =
        corpo +
        `
        <tr>
        <td> Tabuada </td>
        <td> do </td>
        <td> ${numero} </td>
        </tr>`;
      for (let aux = 1; aux <= 10; aux++) {
        corpo =
          corpo +
          `
        <tr>
        <td> ${numero} </td>
        <td> ${aux} </td>
        <td> ${numero * aux} </td>
        </tr>`;
      }
    }
    document.getElementById("corpo").innerHTML = corpo;
  }
  
  function ex06() {
    let valorAVista = 0;
    let valorAPrazo = 0;
    let valorTotal = 0;
    let primeiraPrestacao = 0;
    let corpoAVista = "";
    let corpoAPrazo = "";
  
    for (let i = 1; i <= 3; i++) {
      let codigo = prompt(
        `Digite o código da transação ${i} (V para à vista, P para a prazo):`
      );
      let valor = parseFloat(prompt(`Digite o valor da transação ${i}:`));
  
      if (codigo.toUpperCase() === "V") {
        valorAVista += valor;
        corpoAVista += `
          <tr>
            <td>${i}</td>
            <td>${codigo}</td>
            <td>R$ ${valor.toFixed(2)}</td>
            <td>-</td> <!-- Coluna em branco para prestação em valores à vista -->
          </tr>
        `;
      } else if (codigo.toUpperCase() === "P") {
        valorAPrazo += valor;
        let prestacao = (valor / 3).toFixed(2); // Calcula a prestação (3 parcelas)
        corpoAPrazo += `
          <tr>
            <td>${i}</td>
            <td>${codigo}</td>
            <td>R$ ${valor.toFixed(2)}</td>
            <td>R$ ${prestacao}</td> <!-- Coluna para prestação em valores a prazo -->
          </tr>
        `;
      }
  
      valorTotal += valor;
    }
  
    primeiraPrestacao = valorAPrazo / 3;
  
    let resultados = {
      valorAVista: valorAVista.toFixed(2),
      valorAPrazo: valorAPrazo.toFixed(2),
      valorTotal: valorTotal.toFixed(2),
      primeiraPrestacao: primeiraPrestacao.toFixed(2),
    };
  
    // Atualiza a tabela com os resultados separados
    let tabelaResultado = document.getElementById("Resultado");
    tabelaResultado.innerHTML = `
      <tr>
        <td>R$ ${resultados.valorAVista}</td>
        <td>R$ ${resultados.valorAPrazo}</td>
        <td>R$ ${resultados.valorTotal}</td>
        <td>R$ ${resultados.primeiraPrestacao}</td>
      </tr>
      <tr>
        <td colspan="4"><strong>Valores à Vista</strong></td>
      </tr>
      ${corpoAVista}
      <tr>
        <td colspan="4"><strong>Valores a Prazo</strong></td>
      </tr>
      ${corpoAPrazo}
    `;
  }
  
  function ex07() {
    let cont1 = 0;
    let SomaAltura = 0;
    let contPeso = 0;
    let contAltura = 0;
    let corpo = "";
  
    for (let i = 1; i <= 3; i++) {
      let idade = prompt(`Informe a idade da ${i}ª pessoa`);
      let altura = parseFloat(prompt(`Informe a altura da ${i}ª pessoa (em metros)`));
      let peso = parseFloat(prompt(`Informe o peso da ${i}ª pessoa (em quilogramas)`)    );
  
      if (idade !== "" && !isNaN(altura) && !isNaN(peso)) {
        if (idade > 50) {
          cont1 += 1;
        } else if (idade >= 10 && idade <= 20) {
          contAltura += 1;
          SomaAltura += altura;
        } else if (peso < 40) {
          contPeso += 1;
        }
        corpo += `<tr> 
      <td> ${idade} </td>
      <td> ${altura} </td>
      <td> ${peso} </td>
    </tr>`;
      } else {
        alert("Valores inválidos. Informe valores numéricos para altura e peso.");
        return;
      }
    }
  
    let mediaAltura = SomaAltura / contAltura;
    let percentual = (contPeso / 3) * 100;
  
    window.document.getElementById("RESPOSTA").innerHTML = corpo;
  
    let resultado = "";
    resultado += `Quantidade de pessoas com idade superior a 50: ${cont1} <br>`;
    resultado += `A média das alturas das pessoas entre 10 e 20 anos: ${mediaAltura.toFixed(
      2
    )} metros <br>`;
    resultado += `A porcentagem de pessoas com peso inferior a 40: ${percentual.toFixed(
      2
    )}%`;
  
    document.getElementById("Resultado").innerHTML = resultado;
  }
  
  function ex08() {
    let cont1 = 0;
    let SomaIdade = 0;
    let contMedia = 0;
    let cont_Azul = 0;
    let cont_Ruivo = 0;
    let corpo = "";
  
    for (let i = 1; i <= 6; i++) {
      let idade = parseInt(prompt(`Informe a Idade da ${i}º pessoa`));
      let altura = parseFloat(
        prompt(`Informe a altura da ${i}º pessoa  (EM METROS)`)
      );
      let peso = parseFloat(prompt(`Informe o peso da ${i}º pessoa  (EM KG)`));
      let Olhos_Cor = prompt(
        `Digite a primeira letra da cor dos olhos da ${i}º pessoa (A - Azul, P - Preto, V - Verde, C - Castanho)`
      ).toUpperCase();
      let Cor_Cabelo = prompt(
        `Digite a primeira letra da cor de cabelo da ${i}º pessoa (P - Preto, L - Loiro - R - Ruivo)`
      ).toUpperCase();
      if (idade > 50 && peso < 60) {
        cont1 += 1;
      } else if (altura < 1.5) {
        SomaIdade += idade;
        contMedia++;
      }
  
      if (Olhos_Cor.toUpperCase() === "A") {
        cont_Azul += 1;
      } else if (
        Cor_Cabelo.toUpperCase() === "R" &&
        Olhos_Cor.toUpperCase() != "A"
      ) {
        cont_Ruivo += 1;
      }
  
      corpo += `
      <tr> <td> ${idade} </td> <td> ${peso} </td> <td> ${altura} </td> <td> ${Olhos_Cor} </td> <td> ${Cor_Cabelo} </td> </tr>
      
      `;
    }
  
    window.document.getElementById("Resultado").innerHTML = corpo;
  
    let MediaIdade = SomaIdade / contMedia;
    const porcentagemOlhosAzuis = (cont_Azul / 6) * 100; // Use o número correto de pessoas
    alert(
      `Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg: ${cont1}`
    );
    alert(
      `A média de idade de pessoas com altura inferior a 1.50 metros é de: ${MediaIdade}`
    );
    alert(
      `A porcentagem de pessoas com olhos azuis dentre todas as pessoas analisadas é de: ${porcentagemOlhosAzuis.toFixed(
        2
      )}%`
    );
    alert(
      `A quantidade de pessoasque possuem cabelo ruivo e que nao tem olhos azuis ${cont_Ruivo}`
    );
  }
  
  function ex09() {
    let somaIdades = 0;
    let contador = 0;
    let totalPessoas = 0;
    let pessoasComCondição = 0;
    let corpo = "";
  
    for (let i = 1; i <= 2; i++) {
      let idade = parseInt(prompt(`Insira a idade da ${i}ª pessoa `));
      let peso = parseFloat(prompt(`Insira o peso da ${i}ª pessoa (KG)`));
      let altura = parseFloat(
        prompt(`Insira a altura da ${i}ª pessoa. EM metros (EX: 1.50)`)
      );
  
      totalPessoas++;
  
      // a)
      somaIdades = somaIdades + idade;
  
      // b)
      if (peso > 90 && altura < 1.5) {
        contador += 1;
      }
      // c)
      if (idade >= 10 && idade <= 30 && altura > 1.9) {
        pessoasComCondição++;
      }
  
      corpo += `
      <tr> <td> ${idade} </td> <td> ${peso} </td> <td> ${altura} </td>   </tr>
      `;
    }
  
    // Calcula a porcentagem de pessoas que atendem às condições após o loop
    const porcentagem = (pessoasComCondição / totalPessoas) * 100;
  
    window.document.getElementById("Resultado").innerHTML = corpo;
  
    alert(`Soma das idades: ${somaIdades}`);
    alert(`Pessoas com peso > 90 kg e altura < 1.50 m: ${contador}`);
    alert(
      `Porcentagem de pessoas com idade entre 10 e 30 anos e altura > 1.90 m: ${porcentagem.toFixed(
        2
      )}%`
    );
  }
  
  function ex10() {
    let somaPares = 0;
    let somaImpares = 0;
    let corpo = "";
  
    for (let i = 0; i < 10; i++) {
      let numeros = Number(prompt(`insira o ${i + 1}º numero`));
  
      if (numeros % 2 === 0) {
        somaPares = somaPares + numeros;
        corpo += `<tr> <td> ${numeros} </td> <td> </td> </tr>`;
      } else {
        somaImpares = somaImpares + numeros;
        corpo += `<tr> <td> </td> <td> ${numeros} </td> </tr>`;
      }
    }
  
    document.getElementById("Resultado").innerHTML = corpo;
    alert(
      `A soma dos numeros pares é ${somaPares}\nA soma dos impares é: ${somaImpares}`
    );
  }