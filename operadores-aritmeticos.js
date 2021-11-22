/*
   valor1 := 10
   valor2 := 10
   valor3 := 10
//   resultado := (valor1 + valor2) * valor3
//   resultado := (valor1 - valor2) / valor3
   resultado := ((valor1 + valor2 + valor2) / valor3) % 2
   escreval("Resultado é: ", resultado)

   + = adição
   - = subtração
   * = multiplicação
   ^ = exponenciação
   / = divisão
   % = Módulo/resto da divisão
*/

var resultado, valor1, valor2, valor3;

valor1 = 2;
valor2 = 6;
valor3 = 10;

resultado = ((valor1 ^ valor2) % valor3);

alert("Resultado: " + resultado);