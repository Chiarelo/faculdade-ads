programa
{
	
	funcao inicio()
	{	
		inteiro cont
		real nota1, nota2, nota3, nota4, media, mediaGeral, acumulador
		acumulador = 0.0
	
		cont = 1
		enquanto(cont <= 50){
			escreva(cont, "º aluno!\n")
			escreva("Informe a 1º nota: ")
			leia(nota1)
			escreva("Informe a 2º nota: ")
			leia(nota2)
			escreva("Informe a 3º nota: ")
			leia(nota3)
			escreva("Informe a 4º nota: ")
			leia(nota4)
			

			media = (nota1 + nota2 + nota3 + nota4) / 4
			acumulador = acumulador + media
		
			escreva("Média: ", media)
			se(media >= 7){
				escreva("O aluno foi APROVADO!\n")
			}
			senao{
				escreva("O aluno foi REPROVADO\n")
			}
			cont += 1
			
		}
		mediaGeral = acumulador / 50
		escreva("\nMédia geral da turma: ", mediaGeral)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 684; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */