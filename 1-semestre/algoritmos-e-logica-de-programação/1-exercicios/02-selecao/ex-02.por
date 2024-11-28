programa
{
	
	funcao inicio()
	{
		inteiro nota1, nota2, nota3, nota4
		real media
		escreva("Insira a primeira nota: ")
		leia(nota1)
		escreva("Insira a segunda nota: ")
		leia(nota2)
		escreva("Insira a terceira nota: ")
		leia(nota3)
		escreva("Insira a quarta nota: ")
		leia(nota4)
		limpa()

		media = (nota1 + nota2 + nota3 + nota4) / 4
		se(media >= 7){
			escreva("MEDIA: ", media, "\nALUNO APROVADO, PARABÉNS!")
		}
		senao {
			escreva("MEDIA: ", media, "\nALUNO REPROVADO, ESTUDE MAIS!!	")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 500; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */