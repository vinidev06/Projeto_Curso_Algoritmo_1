var numero, fatorial;

function acaoBotao() {
    numero = prompt("Digite o numero para calcular o fatorial: ");
    fatorial = 1;

    for(var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;
    }
    
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}