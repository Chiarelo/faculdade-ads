programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		cadeia resposta
		escreva("PENSE EM UM DOS SEGUINTES ANIMAIS:\n")
		escreva("----------------------------------\n")
		escreva("1. Leão\t\t2. Cavalo\n")
		escreva("3. Homem\t4. Macaco\n")
		escreva("5. Pinguim\t6. Pato\n")
		escreva("7. Águia\t8. Cobra\n")
		escreva("9. Baleia\t10. Morcego\n")
		escreva("11. Avestruz\n")
		escreva("12. Tartaruga\n")
		escreva("13. Crocodilo\n")
		escreva("----------------------------------\n")
		escreva("Agora responda as perguntas de acordo com o animal escolhido...\n")
		
		escreva("O animal é mamífero? [S/N]: ")
		leia(resposta)
		resposta = txt.caixa_alta(resposta)
		se(resposta == "S"){
			escreva("O animal é quadrúpede? [S/N]: ")
			leia(resposta)
			resposta = txt.caixa_alta(resposta)
			se(resposta == "S"){
				escreva("O animal é carnivoro? [S/N]: ")
				leia(resposta)
				resposta = txt.caixa_alta(resposta)
				se(resposta == "S"){
					escreva("É um leão!")
				}
				senao
				se(resposta == "N"){
					escreva("O animal é herbivoro? [S/N]: ")
				leia(resposta)
				resposta = txt.caixa_alta(resposta)
				se(resposta == "S"){
					escreva("É um cavalo!!")
				}senao
					escreva("Opção INEXISTENTE!!")
			} senao {
				escreva("Opção INVALIDA!!")
			}
			}senao se(resposta == "N"){
				escreva("O animal é bipede? [S/N]: ")
				leia(resposta)
				resposta = txt.caixa_alta(resposta)
				se(resposta == "S"){
					escreva("O animal é onivoro? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É um homem!!")
					}
					senao
					se(resposta == "N"){
						escreva("O animal é frutívoros? [S/N]: ")
						leia(resposta)
						resposta = txt.caixa_alta(resposta)
						se(resposta == "S"){
							escreva("É um macaco!!")
						}senao{
							escreva("opção INEXISTENTE!!")
						}
						
					}
					senao{
						escreva("Opção INVALIDA!!")
					}
				}senao se(resposta == "N"){
					escreva("O animal é voador? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É um morcego!!")
					}
					senao se(resposta == "N"){
					escreva("O animal é aquatico? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É uma baleia!!")
					}
					senao{
						escreva("Opção INVALIDA!!")
					}
				}
				
				}senao {
					escreva("Opção INVALIDA!!")
				}
			}
		}senao se(resposta == "N"){
			escreva("O animal é uma ave? [S/N]: ")
			leia(resposta)
			resposta = txt.caixa_alta(resposta)
			se(resposta == "S"){
				escreva("O animal é uma ave não voadora? [S/N]: ")
				leia(resposta)
				resposta = txt.caixa_alta(resposta)
				se(resposta == "S"){
					escreva("O animal é uma ave tropical? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É um avestruz!!")
					}senao se(resposta == "N"){
						escreva("É uma ave polar? [S/N]: ")
						leia(resposta)
						resposta = txt.caixa_alta(resposta)
						se(resposta == "S"){
							escreva("É um pinguim!!")
						}
						senao{
							escreva("Opção INEXISTENTE")
						}
					}
				}senao se(resposta == "N"){
					escreva("O animal é uma ave nadadora? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É um pato!!")
					}
					senao se(resposta == "N"){
						escreva("O animal é uma ave de rapina? [S/N]: ")
						leia(resposta)
						resposta = txt.caixa_alta(resposta)
						se(resposta == "S"){
							escreva("É uma aguia!!")
						}
						senao{
							escreva("Opção INVALIDA!!")
						}
					}
				}
			} senao se(resposta == "N"){
				escreva("O animal é um réptil? [S/N]: ")
				leia(resposta)
				resposta = txt.caixa_alta(resposta)
				se(resposta == "S"){
					escreva("É um reptil com casco? [S/N]: ")
					leia(resposta)
					resposta = txt.caixa_alta(resposta)
					se(resposta == "S"){
						escreva("É uma tartaruga!!")
					}
					senao se(resposta == "N"){
						escreva("É um réptil carnivoro? [S/N]: ")
						leia(resposta)
						resposta = txt.caixa_alta(resposta)
						se(resposta == "S"){
							escreva("É um crocodilo!!")
						}
						senao se(resposta == "N"){
							escreva("É um réptil sem patas [S/N]: ")
							leia(resposta)
							resposta = txt.caixa_alta(resposta)
							se(resposta == "S"){
								escreva("É uma cobra!!")
							}
							senao{
								escreva("Opção INEXISTENTE!!")
							}
							
						}senao {
							escreva("Opção INVALIDA!!")
						}
					}senao{
						escreva("Opção INVALIDA!!")
					}
				}senao{
					escreva("Opção INEXISTENTE!!")
				}
			}senao{
				escreva("Opção INVALIDA!!")
			}
				
		}
		
	}
}



/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 4760; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */