/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite seu nome: ")
   leia(nome)
   escreval("Digite um numero: ")
   leia(numero)
   
   escreval(nome, " : ", numero)

Fimalgoritmo

 "+" é usado para concatenação em javaScript
*/

var nome, numero;

nome = prompt("Digite seu nome: ");
numero = prompt("Digite um numero: ");

document.getElementById("paragrafo").innerText = nome + " : " + numero