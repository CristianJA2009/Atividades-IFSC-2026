function saudacao() {
    console.log("Olá, mundo!")
}

function soma(a, b) {
    return a + b;
}

function divisao(a, b) {
    return a / b;
}

function resultado1() {
    let resultado = soma(5, 2);
    document.writeln(resultado);
}
function resultado2() {
    let resultado2 = divisao(10, 2);
    document.writeln(resultado2);
}

let idade = prompt("Digite sua idade:");
if (idade >= 18) {
alert("Maior de idade");
document.writeln("Idade : " + idade)
}
else if (idade < 18) {
alert("Menor de idade")
document.writeln("Idade : " + idade)
}
else {
alert("Não reconhecido");
let idade = prompt("Digite sua idade:");
 }