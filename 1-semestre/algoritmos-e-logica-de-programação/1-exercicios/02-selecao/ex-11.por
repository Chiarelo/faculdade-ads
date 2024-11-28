programa
{
	
	funcao inicio()
	{
		cadeia sexo
		real altura, pesoIdeal
		escreva("Utilize letras MAIÚSCULAS para interagir com o programa!!")
		escreva("Informe o sexo do usúario: (F para feminino e M para masculino) ")
		leia(sexo)
		escreva("Informe a altura do usúario: ")
		leia(altura)

		se(sexo == "M"){
			pesoIdeal = (72.7 * altura) - 58
			escreva(pesoIdeal)
		}senao
		se(sexo == "F"){
			pesoIdeal = (62.1 * altura) - 44.7
			escreva(pesoIdeal)
		}
		senao {
			escreva("DADOS INVÁLIDOS!!\nUtilize F para feminino ou M para masculino")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 546; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */