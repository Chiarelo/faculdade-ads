programa
{
	
	funcao inicio()
	{	
		inteiro valor, contPar, i
		real acumulador, mediaA

		escreva("Para FINALIZAR o programa digite 0!!!\n")
		escreva("Digite o 1º número: ")
		leia(valor)

		i = 1
		contPar = 0
		acumulador = 0.0
		
		enquanto(valor != 0){
			se(valor % 2 == 0){
				acumulador = acumulador + valor
				contPar = contPar + 1
			}
			escreva("Digite o ", i + 1, "º número: ")
			leia(valor)
			i++
		}

		se(contPar == 0){
			escreva("Nenhum número par foi inserido!!")
		}
		senao{
		mediaA = acumulador / contPar
		
		escreva("\nQuantidade de números inseridos: ", i)
		escreva("\nNúmeros pares digitados: ", contPar)
		escreva("\nMédia aritmética dos numeros pares: ", mediaA)
		
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 709; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */