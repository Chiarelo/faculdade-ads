programa
{
    funcao inicio()
    {
        inteiro horasTrabalhadas, horasSemanais, qntd_Extras
        real salarioHora, acrescimo, salario, valorExtra, salarioExtra, salarioFinal

        escreva("Informe a quantidade de horas trabalhadas no mês: ")
        leia(horasTrabalhadas)
        escreva("Informe o salario por hora trabalhada: ")
        leia(salarioHora)

        horasSemanais = 40 * 4
        salario = horasTrabalhadas * salarioHora
        acrescimo = (50 / 100.0) * salarioHora
        qntd_Extras = 0
        valorExtra = 0.0
        
        se(horasTrabalhadas > horasSemanais){
            qntd_Extras = horasTrabalhadas - horasSemanais
            valorExtra = salarioHora + acrescimo
        }
        
        salarioExtra = valorExtra * qntd_Extras
        salarioFinal = salarioExtra + salario

        escreva("Número de horas trabalhadas em um mês: ", horasTrabalhadas, "\n")
        escreva("Valor da hora: ", salarioHora, "\n")
        escreva("Valor das horas extras: ", valorExtra, "\n")
        escreva("Quantidade de horas extras: ", qntd_Extras, "\n")
        escreva("Total a pagar de horas extras = ", salarioExtra, "\n")
        escreva("Valor do salário = ", salario, "\n")
        escreva("Valor do salário + horas extras: ", salarioFinal, "\n")
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1297; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */