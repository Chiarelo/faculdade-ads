programa
{	
	
	funcao inicio()
	{	
		cadeia combustivel
		inteiro litros
		real precoGasolina, precoAlcool, desconto, valorCombustivel, valorFinal
		escreva("Informe o tipo de combustivel: (A-álcool, G-gasolina) ")
		leia(combustivel)
		escreva("Informe a quantidade em litros de combustivel que deseja: ")
		leia(litros)

		precoGasolina = 3.30
		precoAlcool = 2.10
		desconto = 0.0
		valorCombustivel = 0.0
		valorFinal = 0.0

		se(combustivel == "A"){
			se(litros <= 20){
				desconto = (3/100.0) * precoAlcool
				valorCombustivel = precoAlcool - desconto
				valorFinal = valorCombustivel * litros
				escreva(valorFinal)
			}senao
			se(litros > 20){
				desconto = (5/100.0) * precoAlcool
				valorCombustivel = precoAlcool - desconto
				valorFinal = valorCombustivel * litros
				escreva(valorFinal)
			}
		}senao
		se(combustivel == "G"){
			se(litros <= 20){
				desconto = (4/100.0) * precoGasolina
				valorCombustivel = precoGasolina - desconto
				valorFinal = valorCombustivel * litros
				escreva(valorFinal)
			}
			senao se(litros > 20){
				desconto = (6/100.0) * precoGasolina
				valorCombustivel = precoGasolina - desconto
				valorFinal = valorCombustivel * litros
				escreva(valorFinal)
			}
		}
		senao {
			escreva("DADOS INVALIDOS!!")
		}

		escreva("\nTipo de combustível: ", combustivel)
		escreva("\nQuantidade em litros vendidos: ", litros)
		escreva("\nDesconto: ", desconto)
		escreva("\nValor com desconto: ", valorCombustivel)
		escreva("\nValor final a pagar: ", valorFinal)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1478; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */