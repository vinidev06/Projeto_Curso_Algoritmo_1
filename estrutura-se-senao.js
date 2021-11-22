/*
Var
// Seção de Declarações das variáveis 
   valor01, valor02, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Calculo basico")
   escreva("Digite o valor01: ")
   leia(valor01)
   escreva("Digite a operação, Ex: +, -, *, /: ")
   leia(operacao)
   escreva("Digite o valor02: ")
   leia(valor02)
   
   se operacao = "+" entao
      resultado := valor01 + valor02
   senao
      se operacao = "-" entao
         resultado := valor01 - valor02
      senao
         se operacao = "*" entao
            resultado := valor01 * valor02
         senao
            se operacao = "/" entao
               resultado := valor01 / valor02
            fimse
         fimse
      fimse
   fimse
   escreva("Resultado do calculo é: ", resultado)

   
Fimalgoritmo
*/

var valor01, valor02, resultado, operacao;

function acaoBotao() {
    valor01 = prompt("Digite o valor01: ");
    operacao = prompt("Digite a operação, Ex: +, -, *, /: ");
    valor02 = prompt("Digite o valor02: ");
    
    if(operacao == "+") {
        resultado = parseInt(valor01) + parseInt(valor02)
    } else if(operacao == "-") {
        resultado = parseInt(valor01) - parseInt(valor02)
    } else if(operacao == "*") {
        resultado = parseInt(valor01) * parseInt(valor02)
    } else if(operacao == "/") {
        resultado = parseInt(valor01) / parseInt(valor02)
    }
    
    document.getElementById("paragrafo").innerText = resultado
}



