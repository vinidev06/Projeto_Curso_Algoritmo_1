/*
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 1 do aluno: ")
leia(nota1)
escreval("Digite a nota 2 do aluno: ")
leia(nota2)
media := (nota1 + nota2) / 2

se media >= 6 entao
   escreval(nome, " Aprovado")
senao
     escreval(nome, " Reprovado")
fimse
*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a nota 1 do aluno: ");
nota2 = prompt("Digite a nota 2 do aluno: ");

media = (parseInt (nota1) + parseInt (nota2)) / 2;

if(media >= 6) {
    alert(nome + " Aprovado!")
}
else
    alert(nome + " Reprovado!")
