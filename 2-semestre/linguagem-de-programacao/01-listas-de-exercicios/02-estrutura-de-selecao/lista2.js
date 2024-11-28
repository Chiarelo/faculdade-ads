function ex5() {
  let escolha = Number(document.getElementById("opcao").value);
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado;

  if (num1 != "" && num2 != "") {
    switch (escolha) {
      case 1:
        resultado = (num1 + num2) / 2;
        break;

      case 2:
        if (num1 > num2) {
          resultado = num1 - num2;
        } else {
          resultado = num2 - num1;
        }
        break;

      case 3:
        resultado = num1 * num2;
        break;

      case 4:
        if (num2 != 0) {
          resultado = num1 / num2;
        } else {
          alert("Não pode ser efetuada uma divisão por zero");
          resultado = `NÃO existe divisão por 0!!!`;
        }
        break;

      default:
        document.getElementById("areaResposta").innerHTML = `Opção Inválida`;
    }
  } else {
    document.getElementById("areaResposta").innerHTML = `Informe os valores!!!`;
  }

  if (resultado != null) {
    document.getElementById("areaResposta").innerHTML = resultado;
  }
}
function ex15(){
  let Valor = Number(window.document.getElementById("Valor").value)
  let Descricao = Number(window.document.getElementById("Descricao").value)
  let valorCorrigido = null
    switch(Descricao){
      case 1:
        valorCorrigido = Valor + (Valor * (3/100))
        break
      case 2:
        valorCorrigido = Valor + (Valor *(4/100))
    }
    window.document.getElementById("Resultado").innerHTML = (`O valor corrigido após um mês de investimento é de R$ ${valorCorrigido}`)
}

function ex16(){
  let preco = Number(window.document.getElementById("Preco").value)
  let Desconto = null
  let novoPreco = null

  if (preco != ""){
    if(preco < 0){
      window.document.getElementById("Resultado").innerHTML = ("VALOR INVÁLIDO!!!")
    } else if(preco < 30){
      Desconto = 0
      novoPreco = preco
    } else if (preco >= 30 && preco <= 100){
      Desconto = (preco * 10/100)
      novoPreco =   preco - Desconto
    }else {
      Desconto = (preco * 15/100)
      novoPreco = preco - Desconto
    }
    window.document.getElementById("Resultado").innerHTML = (`O desconto do produto é de R$${Desconto} e o novo preço do produto é de R$${novoPreco}`)
  } else {
    window.document.getElementById("Resultado").innerHTML = (`Insira valores válidos!`)
  }
  
}

function ex17(){
  let senha = Number(window.document.getElementById("senha").value)

  if (senha != ""){
    if (senha != 4531){
      window.document.getElementById("Resultado").innerHTML = ("SENHA INVÁLIDA")
    } else {
      window.document.getElementById("Resultado").innerHTML = ("Senha correta")
    }
  } else {
    window.document.getElementById("Resultado").innerHTML = ("Insira um valor válido")
  }
}

function ex18(){
  let idade = Number(window.document.getElementById("Idade").value)

  if (idade != ""){
    if(idade >= 18){
      window.document.getElementById("Resultado").innerHTML = (`Você é de maioridade`)
    }else{
      window.document.getElementById("Resultado").innerHTML = (`Você não é de maioridade`)
    }
  } else {
    window.document.getElementById("Resultado").innerHTML = ("Insira dados válidos!")
  }
}

function ex19(){
  let altura = Number(window.document.getElementById("altura").value)
  let sexo = Number(window.document.getElementById("sexo").value)
  let pesoIdeal = null
  if (altura != ""){
    switch(sexo){
      case 1:
        pesoIdeal = (62.1 * altura) - 44.7
        break

        case 2 : 
        pesoIdeal = (72.7 * altura) - 58
        break
      }

      window.document.getElementById("Resultado").innerHTML = (`Seu peso ideal é de: ${pesoIdeal}`)

  }else {
    window.document.getElementById("Resultado").innerHTML = (`Insira dados válidos!!!`)
  }
}

function ex20(){
  let idade = Number(window.document.getElementById("idade").value)
  let categoria = null
  if(idade != ""){
    if (idade < 5 && idade >= 0){
      categoria = ("Idade muito abaixo!")
    } else if (idade >= 5 && idade <= 7){
      categoria = (`Infantil`) 
    } else if (idade >= 8 && idade <= 10){
      categoria = (`Juvenil`)
    } else if (idade >= 11 && idade <= 15){
      categoria = (`Adolescente`)
    } else if (idade >= 16 && idade <= 30){
      categoria = (`Adulto`)
    } else if (idade > 30){
      categoria = (`Sénior`)
    } else{
      categoria = (`Insira uma idade válida`)
    }
  
    window.document.getElementById("Resultado").innerHTML = (`${categoria}`)
  
  }else {
    window.document.getElementById("Resultado").innerHTML = ("Insira dados válidos!!")
  }
}

function ex21(){
  let preco = Number(window.document.getElementById("preco").value)
  let codigo = Number(window.document.getElementById("codigo").value)
  let procedencia = null
  
  if (preco != "" && codigo != ""){
    if(codigo == 1){
      procedencia = 'Sul'
    } else if (codigo == 2){
      procedencia = 'Norte'
    } else if (codigo == 3){
      procedencia = 'Leste'
    } else if (codigo == 4){
      procedencia = 'Oeste'
    } else if (codigo >= 5 && codigo <= 6){
      procedencia = 'Nordeste'
    } else if (codigo  >= 7 && codigo <=9 ){
      procedencia = 'Sudeste'
    } else if (codigo >= 10 && codigo <= 20){
      procedencia = 'Centro-Oeste'
    } else if (codigo >= 21 && codigo <= 30){
      procedencia = 'Nordeste'
    } else {
    procedencia = 'Codigo Inválido/Inexistente'
    }

    window.document.getElementById("Resultado").innerHTML = (`${procedencia}`)
  } else {
    window.document.getElementById("Resultado").innerHTML = ("Insira dados!")
  }



}



function ex22() {
  let idade = Number(document.getElementById("Idade").value);
  let peso = Number(document.getElementById("Peso").value);
  let classificacao;
  if (idade != "" && peso != "") {
    if (idade >= 0 && idade < 20) {
      if (peso >= 0 && peso < 60) {
        classificacao = "Grupo de Risco = 9";
      } else if (peso >= 60 && peso <= 90) {
        classificacao = "Grupo de Risco = 8";
      } else if (peso > 90) {
        classificacao = "Grupo de Risco = 7";
      } else {
        document.getElementById("classificacao").innerHTML = "Peso negativo";
      }
    } else if (idade >= 20 && idade < 50) {
      if (peso < 60) {
        classificacao = "Grupo de Risco = 6";
      } else if (peso >= 60 && peso <= 90) {
        classificacao = "Grupo de Risco = 5";
      } else if (peso > 90) {
        classificacao = "Grupo de Risco = 4";
      }
    } else if (idade > 50) {
      if (peso < 60) {
        classificacao = "Grupo de Risco = 3";
      } else if (peso >= 60 && peso <= 90) {
        classificacao = "Grupo de Risco = 2";
      } else if (peso > 90) {
        classificacao = "Grupo de Risco = 1";
      }
    } else {
      document.getElementById("classificacao").innerHTML = "Idade negativa";
    }
  } else {
    document.getElementById("areaResposta").innerHTML = `Informe os valores!!!`;
  }

  if (classificacao != null) {
    document.getElementById("areaResposta").innerHTML = classificacao;
  }
}
function ex23(){
  //recuperar os dados do HTML
  let Codigo = Number(window.document.getElementById("Codigo").value)
  let qntd = Number(window.document.getElementById("qntd").value)
  //Calcula preço únitario

  let precoUnitario = null
  if (Codigo >= 1 && Codigo <=10){
    precoUnitario = 10
  }
  else if (Codigo >= 11 && Codigo <=20){
    precoUnitario = 15
  }
  else if (Codigo >= 21 && Codigo <=30){
    precoUnitario = 20
  }
  else if (Codigo >= 31 && Codigo <=40){
    precoUnitario = 30
  }
  else {
    window.document.getElementById("Resultado").innerHTML = ("CODIGO INVÀLIDO")
  }
  //calcula preço total
  let precoTotal 
  if (precoUnitario!= null && qntd >=0 ){
    precoTotal = qntd * precoUnitario
    //Calcula desconto
    let desconto 
    if (precoTotal < 250){
      desconto = precoTotal*5/100
    }
    else if (precoTotal >= 250 && precoTotal < 500){
      desconto = precoTotal*10/100
    }
    else {
      desconto = precoTotal*15/100
    }

    //Calculo preço final 
    let precoFinal = precoTotal - desconto
    document.getElementById("Resultado").innerHTML = (`Preço únitario : ${precoUnitario}.<br> Desconto ${desconto}.<br>Preço total${precoTotal}.<br> Preço Final ${precoFinal}`)
  }
  else{
    document.getElementById("Resultado").innerHTML = "Código ou qntd inválido(s)"
  }



}
function ex24(){
  let preco = Number(window.document.getElementById("Preco").value)
  let categoria = Number(window.document.getElementById("Categoria").value)
  let situacao = Number(window.document.getElementById("Situacao").value)

  if (preco < 0){
    document.getElementById("Resultado").innerHTML = ("Preço inválido!!")
  } else{
    let aumento 
    switch(categoria){
      case 1 :
        if (preco < 25){
          aumento = preco * 5/100
        } else{
          aumento = preco * 12/100
        }
        break
        
      case 2: if (preco <= 25){
        aumento = preco * 8/100
      } else{
        aumento = preco * 15/100
      }
      break
      case 3: if (preco <=25){
        aumento = preco * 10/100
      } else {
        aumento = preco * 18/100
      }
      break
    }
      //Calcula imposto
      let imposto
      if(categoria == 2 || situacao == 'R'){
        imposto = preco * 5/100
      } else {
        imposto = preco * 8/100
      }
      //Calcula Novo preço
      let novoPreco = preco + aumento - imposto
      //Calcula classificação 
      let classificacao 
      if (novoPreco < 50){
        classificacao = "Barato"
      } else if(novoPreco >=50 && novoPreco < 120) {
        classificacao = "Normal"
      }
      else{
        classificacao = "Caro"
      }
      document.getElementById("Resultado").innerHTML = `Aumento ${aumento.toFixed(2)}<br>Imposto ${imposto.toFixed(2)}<br>Novo preço ${novoPreco.toFixed(2)}<br>Classificação ${classificacao}`
    }    
  }

  function ex25(){
    let horaExtra = parseInt(window.document.getElementById("horaExtra").value)
    let horaFaltadas = parseInt(window.document.getElementById("horasFaltadas").value)
    
    //Calculos dos valores
    let H = horaExtra - (2/3 * horaFaltadas)

      
      //Começo do codigo
      let Premio = null
      if(H >= 2400 ){
        Premio = 500
      } else if (H >= 1800 && H < 2400){
        Premio = 400
      } else if (H >= 1200 && H <1800){
        Premio = 300
      } else if (H >= 600 && H < 1200){
        Premio = 200
      } else{
        Premio = 100
      }
      window.document.getElementById("Resultado").innerHTML = `O seu premio é de R$${Premio}`
      


  }

