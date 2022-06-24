/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a 
quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

-1 cachorro quente R$4.00
-2 XSALADA         R$4.50
-3 XBACON          R$5.00
-4 TORRADA SIMPLES R$2.00
-5 REFRIGERANTE    R$1.50

-Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à 
quantidade de um item conforme tabela acima.

-Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser 
pago, com 2 casas após o ponto decimal.

Exemplo de Entrada	Exemplo de Saída
3 2
Exemplo de Saída
Total: R$ 10.00
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//OBS:  No javascript a casa decimal é definida por ponto. Exemplo: 1.50

var price = 0;

    if (X ==  1) {
      price  =  Y *   4.00    ;
    }
    else if (X == 2) {
      price  =  Y * 4.50       ;
    }
    else if (X ==   3  ) {
      price  =  Y *   5.00       ;
    }
    else if (X ==   4 ) {
      price  = Y * 2.00        ;
    }
    else if (X == 5    ) {
      price  =   Y *    1.50       ;
    }
    print( "Total: R$ "  + price.toFixed(2));
