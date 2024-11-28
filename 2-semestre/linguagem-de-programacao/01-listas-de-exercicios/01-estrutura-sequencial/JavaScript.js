function ex1() {


    var n1 = document.getElementById("N1").value
    var n2 = document.getElementById("N2").value
    var subtracao = n1 - n2
    alert(subtracao)
    document.getElementById("areaResposta").innerHTML = (`O resultado da subtração é : ${subtracao}`) 
    }
function Multiplicação(){

        var n1 = window.document.getElementById("num1").value
        var n2 = window.document.getElementById("num2").value
        resultado = n1 * n2
        alert(resultado)
        window.document.getElementById("areaResultado").innerHTML = (`O resultado entre ${n1} x ${n2} é = ${resultado}`)
}
function ex3(){
    var n1 = window.document.getElementById("n1").value
    var n2 = window.document.getElementById("n2").value
    var resultado = n1 / n2

    alert(`o resultado entre ${n1} / ${n2} é = ${resultado}`)
    window.document.getElementById("areaResposta").innerHTML = (`o resultado entre ${n1} / ${n2} é = ${resultado}`)

}
function ex4(){
    let nota1 = window.document.getElementById("nota1").value
    let nota2 = window.document.getElementById("nota2").value
    let MediaPond = (nota1* 2 + nota2*3) / (5)

    alert(`À media ponderada é de ${MediaPond}`)
    window.document.getElementById("areaResultado").innerHTML = (`A media ponderada de ${nota1} e  ${nota2} é ${MediaPond}`)
}
function ex5(){
    let Preço = parseFloat(window.document.getElementById("Produto").value)
    let desconto = Preço* 0.10
    let novoPreço = Preço - desconto

    window.alert(`O novo preço do produto é de R$ ${novoPreço.toFixed(2)}`)
    window.document.getElementById("areaResposta").innerHTML = (`O novo preço do produto é de R$ ${novoPreço.toFixed(2)}`)
}
function ex6(){
    let salario = parseFloat(window.document.getElementById("salario").value)
    let vendas = parseFloat(window.document.getElementById("vendas").value)
    let salarioFinal = salario + (vendas * 0.04)
    const options = { style: 'currency', currency: 'BRL' };

    salarioFinal.toLocaleString('pt-BR', options)
    window.alert(`o salario final é de ${salarioFinal}`)
    window.document.getElementById("Resposta").innerHTML = (`o salario final é de ${salarioFinal}`)

    }

    function ex8(){
        let kilos = window.document.getElementById("peso").value
        let gramas = kilos * 1000

        window.alert(`${kilos} kilos transformado em gramas é de ${gramas} gramas`)
        window.document.getElementById("areaResposta").innerHTML = (`${kilos} kilos transformado em gramas é de ${gramas} gramas`)
    }
    function ex9() {
        // Obtenha os valores dos campos de entrada como números
        let AreaMaior = parseFloat(document.getElementById("BaseMaior").value);
        let AreaMenor = parseFloat(document.getElementById("BaseMenor").value);
        let Altura = parseFloat(document.getElementById("Altura").value);

        // Verifique se os valores são válidos
        if (isNaN(AreaMaior) || isNaN(AreaMenor) || isNaN(Altura)) {
            window.alert("Por favor, insira valores numéricos válidos.");
            return; // Encerra a função se algum valor não for válido.
        }

        // Realize o cálculo da área corretamente
        let Area = ((AreaMaior + AreaMenor) * Altura) / 2;

        // Exiba o resultado em um alerta
        window.alert(`A área do trapézio é de ${Area}`);

        // Exiba o resultado no elemento HTML com id "areaResultado"
        document.getElementById("areaResposta").innerHTML = `A área do trapézio é de ${Area}`;
    }

    function ex10(){
        let LadoQuadrado = window.document.getElementById("LadoQuadrado").value
        let AreaQuadrado = (LadoQuadrado * LadoQuadrado)

        window.alert(`A área total do quadrado é: ${AreaQuadrado}`)
        window.document.getElementById("areaResposta").innerHTML = (`A área total do quadrado é: ${AreaQuadrado}`)
    }
    function ex11(){
        let areaMaior = window.document.getElementById("AreaMaior").value
        let areaMenor = window.document.getElementById("AreaMenor").value
        let areaTotal = (areaMaior * areaMenor) / 2

        window.alert(`A area do losango é de ${areaTotal}`)

        window.document.getElementById("areaResposta").innerHTML = (`A area do losango é de ${areaTotal}`)
    }
    function ex12(){
        let SalarioMinimo = parseFloat(window.document.getElementById("SalarioMinimo").value)
        let SalarioFuncionario = parseFloat(window.document.getElementById("SalarioFuncionario").value)
        let CntdSalario = (SalarioFuncionario / SalarioMinimo)

        alert(`O funcionario recebe o equivalente a ${CntdSalario.toFixed(1)} salários mínimos `)
        window.document.getElementById("areaResposta").innerHTML = (`O funcionario recebe o equivalente a ${CntdSalario.toFixed(2)} salários mínimos `)
    }
    function ex13(){
        let num = window.document.getElementById("Numero").value
        let cont = 0
        let tabuada = ""

        while(cont <= 10){
            tabuada += `${num} x ${cont} = ${num * cont} <br>`;
            cont++

        }

        window.document.getElementById("areaResposta").innerHTML = (tabuada )
    }
    function ex14(){
        let Anos = parseInt(window.document.getElementById("nascimento").value)
        let idade = 2023 - Anos
        let idadeMeses = idade * 12
        let idadeDias = idade*365
        let idadeSemanas = parseFloat(idadeDias / 7)

        window.alert(`Sua idade em anos é de ${idade} anos. \nSua idade em meses é de ${idadeMeses} meses. \nSua idade em dias é de ${idadeDias} dias. \nSua idade em semanas é de ${idadeSemanas.toFixed(0)} semanas.`)
        window.document.getElementById("areaResposta").innerHTML = (`Sua idade em anos é de ${idade} anos. <br> Sua idade em meses é de ${idadeMeses} meses. <br> Sua idade em dias é de ${idadeDias} dias. <br> Sua idade em semanas é de ${idadeSemanas.toFixed(0)} semanas.`)
    }
    function ex15(){
        Salario = window.document.getElementById("Salario").value
        Multa1 = Salario * 0.02
        Multa2 = Salario * 0.02
        SomaDasMultas = Multa1 + Multa2
        RestanteSalario = Salario - SomaDasMultas

        window.alert(`O valor da primeira multa foi de R$${Multa1}. O valor da segunda multa foi de R$${Multa2}. \nE o valor descontado no salário foi R$${RestanteSalario}`)

        window.document.getElementById("areaResposta").innerHTML = (`O valor da primeira multa foi de R$${Multa1}.<br> O valor da segunda multa foi de R$${Multa2}. <br>E o valor descontado no salário foi R$${RestanteSalario}`)
    }
    function ex16(){
        let cateto1 = window.document.getElementById("Cateto1").value
        let cateto2 = window.document.getElementById("Cateto2").value
        let catetos = (cateto1**2) + (cateto2**2)
        let RaizQuadrada = parseFloat(Math.sqrt(catetos))

        alert(`O valor da hipotenusa é ${RaizQuadrada.toFixed(2)}`)
        window.document.getElementById("areaResposta").innerHTML = (`O valor da hipotenusa é ${RaizQuadrada.toFixed(2)}`)
    }
    function ex17(){
        let raio = window.document.getElementById("Raio").value
        let comprimento = parseFloat(2 * Math.PI * raio)
        let Area = parseFloat(4 * Math.PI * raio**2)
        let volume = parseFloat((4/3) * Math.PI * raio**3)

        window.alert(`Comprimento da esfera ${comprimento.toFixed(2)}. \nÀrea da esfera ${Area.toFixed(2)}.\nVolume da esfera ${volume.toFixed(2)}`)
        window.document.getElementById("areaResultado").innerHTML = (`Comprimento da esfera ${comprimento.toFixed(2)}. <br>Àrea da esfera ${Area.toFixed(2)}.<br>Volume da esfera ${volume.toFixed(2)}`)
    }
    function ex18(){
        let celsius = parseFloat(window.document.getElementById("Celsius").value)
        let fahrenheit = ((celsius + 32) * 9/5) / 100;

        window.alert(`temperatura ${celsius}º Celsius. \ntemperatura ${fahrenheit}º fahrenheit`)
        window.document.getElementById("areaResultado").innerHTML = (`temperatura ${celsius}º Celsius. <br>temperatura ${fahrenheit.toFixed(0)}º fahrenheit`)
    }
    function ex19(){
        let Dimensao1 = window.document.getElementById("Dimensao1").value
        let Dimensao2 = window.document.getElementById("Dimensao2").value
        let area = (Dimensao1 * Dimensao2)
        let Potenciailuminação =parseFloat((area/18))

        window.alert(`A área do cômodo é de ${area}(M²).\nA potência de iluminação necessária é de ${Potenciailuminação.toFixed(0)}(W)`)
        window.document.getElementById("areaResposta").innerHTML = (`A área do cômodo é de ${area}(M²).<br>A potência de iluminação necessária é de ${Potenciailuminação.toFixed(0)}(W)`)
    }
    function ex21(){
        let salarioMinimo = window.document.getElementById("SalarioMinimo").value
        let HoraT = window.document.getElementById("HorasT").value
        let HoraExtra = window.document.getElementById("HorasExtras").value

        let ValorHoraT = (salarioMinimo * 1/8)
        let ValorHoraExtra = (salarioMinimo * 1/4)
        let SalarioReceber = parseFloat((HoraT *ValorHoraT ) + (HoraExtra * ValorHoraExtra))

        alert(`O salário a receber é de R$${SalarioReceber.toFixed(2)}`)

    }
    function ex22(){
        let LadosPoligono = window.document.getElementById("ladosPoligono").value
        let DiagonaisPoligono = (LadosPoligono * (LadosPoligono - 3))/2

        window.alert(`O número de diagonias desse poligono é ${DiagonaisPoligono}`)
        window.document.getElementById("areaResposta").innerHTML = (`O número de diagonias desse poligono é ${DiagonaisPoligono}`)
    }
    function ex23(){
        let Angulo1 = parseFloat(window.document.getElementById("Angulo1").value)
        let Angulo2 = parseFloat(window.document.getElementById("Angulo2").value)
        let TerceiroAngulo = 180 - (Angulo1 + Angulo2)

        window.document.getElementById("areaResposta").innerHTML = (`A medida do terceiro angulo é ${TerceiroAngulo}º`)

    }
    function ex24(){
        let Reais = parseFloat(window.document.getElementById("Valor").value)
        let dolar = 1.80;
        let marcoAlemao = 2.00;
        let libraEsterlina = 3.57;

        //Realizando conversões
        let ValorDolar = Reais / dolar
        let valorMarco = Reais / marcoAlemao
        let valorLibra = Reais / libraEsterlina

        window.document.getElementById("areaResposta").innerHTML = (`O valor em dolar é de $${ValorDolar.toFixed(2)}. <br>O valor em marcos alemães é de ${valorMarco.toFixed(2)} DM.<br>O valor em libra é de £${valorLibra.toFixed(2)}`)

    }
    function ex25() {
    let InputTempo = document.getElementById("Relogio").value;

    // InputTempo já é uma string no formato "HH:MM", então não é necessário usar parseInt
    var partes = InputTempo.split(":");
    var hora = parseInt(partes[0], 10); // Converter para número inteiro
    var minutos = parseInt(partes[1], 10); // Converter para número inteiro

    let hora_minutos = hora * 60;
    let total_minutos = minutos + hora_minutos;
    let minutos_segundos = total_minutos * 60;

    document.getElementById("areaResposta").innerHTML = (`A hora digitada convertida em minutos: ${hora_minutos} minutos.<br>O total dos minutos, os digitados + os convertidos: ${total_minutos} minutos.<br>O total dos minutos convertidos em segundos: ${minutos_segundos} segundos.`);
}