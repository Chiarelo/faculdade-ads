programa
{
	
	funcao inicio()
	{	
		real mediaAluno, mediaTurma, acumulador
		inteiro i

		acumulador = 0.0
		
		para(i = 1; i<=50;i++){
			escreva("Informe a média do ", i, "º aluno: ")
			leia(mediaAluno)
			acumulador = acumulador + mediaAluno	
			limpa()
		}

			mediaTurma = acumulador / i
			escreva("Média da turma: ", mediaTurma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 264; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */