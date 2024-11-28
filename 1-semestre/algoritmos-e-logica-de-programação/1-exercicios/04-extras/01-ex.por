programa
{
	
	funcao inicio()
	{
	
		inteiro codigo, i
		cadeia nome
		real salario, novoSal, porc, acrescimo, acumulador, media
		escreva("O Programa só ira parar quando a entrada de nome não receber nada")
		acumulador = 0.0
		i = 0

		escreva("\nInforme o nome do funcionario: ")
		leia(nome)
		enquanto(nome != ""){
			escreva("Informe o salario do funcionario: ")
			leia(salario)
			escreva("Informe o codigo do funcionario: ")
			leia(codigo)
			limpa()

			se(codigo == 310){
				porc = 5/100.0
				acrescimo = salario * porc
				novoSal = acrescimo + salario
				acumulador = acumulador + novoSal
			}
			senao se(codigo == 456){
				porc = (7.5/100.0)
				acrescimo = salario * porc
				novoSal = acrescimo + salario
				acumulador = acumulador + novoSal
			}
			senao se(codigo == 885){
				porc = (10/100.0)
				acrescimo = salario * porc
				novoSal = acrescimo + salario
				acumulador = acumulador + novoSal
			}
			senao{
				porc = (15/100.0)
				acrescimo = salario * porc
				novoSal = acrescimo + salario
				acumulador = acumulador + novoSal
			}
			i++
			limpa()
			escreva("Nome: ", nome)
			escreva("\nSalário antigo: ", salario)
			escreva("\nNovo Salário: ", novoSal)
			escreva("\nDiferença: ", acrescimo)

			
			escreva("\nInforme o nome do funcionario: ")
			leia(nome)
			
		} 

		se(i != 0){
			limpa()
			media = acumulador / i
			escreva("Total de salário em R$: ", acumulador)
	          escreva("\nQuantidade de pessoas que receberam aumento: ", i)
	          escreva("\nA média geral de salário é: R$ ", media)
		}
		senao{
			escreva("Programa finalizado!!")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1607; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */