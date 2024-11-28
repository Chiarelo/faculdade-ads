programa
{
	inclua biblioteca Util --> u
	
	
	funcao inicio()
	{
		inteiro vetor[11], i
		para(i=1;i<=10;i++){
			escreva("Digite o ", i, "º número: ")
			vetor[i] = u.sorteia(1, 30) //sorteando pra facilitar o teste
		}
		limpa()

		escreva("Impressão dos números digitados sem multiplicar por 3: \n")
		para(i=1;i<=10;i++){
			escreva(vetor[i], ", ")
		}

		escreva("\n\n--------------------------------------------------------\n\n")

		escreva("Impressão dos números digitados multiplicados por 3: \n")
		para(i=1;i<=10;i++){
			escreva(vetor[i] * 3, ", ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 436; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */