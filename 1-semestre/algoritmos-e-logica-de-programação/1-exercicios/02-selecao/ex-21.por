programa
{
	inclua biblioteca Matematica --> m
	
	funcao inicio()
	{	
		inteiro opcao, numero, quadrado
		escreva("1. Calcular o quadrado de um número\n")
		escreva("2. Descobrir se o número é par ou ímpar\n")
		escreva("3. Escrever a palavra “SONHO”\n")
		escreva("4. Calcular salário do vendedor de carros\n")
		escreva("5. Sair do programa\n")
		leia(opcao)
		limpa()
		
		escolha(opcao){
			caso 1:
			escreva("Informe um número: ")
			leia(numero)
			quadrado = m.potencia(numero, 2)
			escreva("O quadrado do número ", numero, " é ", quadrado )
			pare
			caso 2: 
			escreva("Informe um número: ")
			leia(numero)
			se(numero % 2 == 0){
				escreva("O número ", numero, " é par")
			}senao{
				escreva("O número ", numero, " é ímpar")
			}
			pare
			caso 3:
			escreva("SONHO\n")
			pare
			caso 4:
			real salario, valorVendas, valorFinal, comissaoFinal
			inteiro comissao

			escreva("Qual o valor do salario do vendedor ?")
			leia(salario)
			escreva("Qual o valor total de vendas ?")
			leia(valorVendas)
			escreva("Qual é a porcentagem de comissão? (*Obs: informe um valor inteiro*\nEx: 5 (5 = 5% de comissão)): ")
			leia(comissao)
			limpa()

			comissaoFinal = valorVendas * (comissao/100.0)
			valorFinal = salario + comissaoFinal

			
			escreva("Valor do salário: R$", salario, "\n")
			escreva("Valor total das vendas: R$", valorVendas, "\n")
			escreva("Porcentagem da comissão: ", comissao, "%\n")
			escreva("Valor total da comissão: R$", comissaoFinal, "\n")
			escreva("Salário final: R$", valorFinal, "\n")
			pare
			caso 5:
			escreva("Programa ENCERRADO!!")
			pare
			caso contrario:
			escreva("Opção INVÁLIDA!!!\n")
			pare
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1071; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */