var sairLoop, valor01, valor02;

function acaoBotao() {
    do {
        valor01 = prompt("Digite o primeiro valor: ");
        valor02 = prompt("Digite o segundo valor: ");
        document.getElementById("paragrafo").innerText = "Resutaldo: " + (parseInt(valor01) + parseInt(valor02));
        sairLoop = prompt("Deseja sair? S/N");
    } while (sairLoop == "N");

}

document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"