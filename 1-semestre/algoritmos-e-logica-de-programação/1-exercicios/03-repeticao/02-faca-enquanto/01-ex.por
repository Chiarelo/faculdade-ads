programa
{
	
	funcao inicio()
	{	
		inteiro i 
		real media, acumulador, mediaA

		i = 1
		acumulador = 0.0
		
		faca{
			escreva("Informe a média do ", i, "º aluno: ")
			leia(media)
			acumulador = acumulador + media
			limpa()
			i++
		} enquanto(i<=50)

		mediaA = acumulador / i
		escreva("A média da turma é ", mediaA)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 260; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */