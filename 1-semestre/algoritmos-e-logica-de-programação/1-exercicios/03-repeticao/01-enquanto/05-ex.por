programa
{
	
	funcao inicio()
	{	
		inteiro i, numero, acumulador, contPar
		real media
		i = 1
		acumulador = 0
		contPar = 0
		enquanto(i <= 10){
			escreva("Informe o ", i, "º número: ")
			leia(numero)
			se(numero % 2 == 0){
				acumulador = acumulador + numero
				contPar = contPar + 1
			}
			i++
			
		}
		limpa()

		se(contPar == 0){
			escreva("Nenhum número PAR foi inserido!")
		}
		senao{	
			media = acumulador / contPar
			escreva("Quantidade de números PARES fornecidos: ", contPar, "\n")
			escreva("Média dos números PARES fornecidos: ", media)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 412; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */