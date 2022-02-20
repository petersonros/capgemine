# Questão 01

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
Exemplo:
Entrada:
n = 6
Saída:
     *
    **
   ***
  ****
 *****
******

## Desenvolvendo a solução ##

n = nCaracter (um número qualquer)
nCaracter = "espaço" + "*"
nLinhas = n

Escreve primeira linha com "n" caracteres. Sendo "n" a soma de "espaço" e o último caracter um "*".
(na primeira linha descontar "espaço" que será ocupado por "*".)

Escreve segunda linha incrementando um "*" no fim e subtraindo um de "espaços" mantendo "n"
( "n" sempre será a soma de "espaço" e "*" )

Escreve número de linhas igual ao número de caracter nas linhas.

function escreveEspaco
	escreve "n" espaços menos 1
function escreveAsterisco
	escreve asterico 
funciton pulaLinha
	pula linha até "n" = 0


# Solução final