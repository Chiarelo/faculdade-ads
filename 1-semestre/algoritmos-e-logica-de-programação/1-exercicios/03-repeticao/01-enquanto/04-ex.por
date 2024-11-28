programa
{
	
	funcao inicio()
	{	
		real media, acumulador, mediaTurma
		inteiro i
		escreva("Informe a média do 1º aluno(digite -1 para encerrar): ")
		leia(media)
		acumulador = 0.0
		mediaTurma = 0.0
		
		i = 0
		enquanto(media != -1){
			acumulador = acumulador + media
			i++
			
			escreva("Informe a média do ", i+1, "º aluno(digite -1 para encerrar): ")
			leia(media)
			limpa()
		}

		mediaTurma = acumulador / i

		se(i == 0){
			escreva("Não houve inserções de alunos!!")
		}
		senao{
			escreva("Quantidade de alunos da turma: ", i, "\n")
			escreva("Média da turma: ", mediaTurma)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 286; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */