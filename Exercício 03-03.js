var x = 10;
var y = 5;

document.writeln("X : " + x + "<br>");
document.writeln("Y : " + y + "<br><br>");

function soma(x, y) {
    return x + y;
}

document.writeln(x + " + " + y + " = " + soma(x,y) + "<br>");

function sub(x, y) {
    return x - y;
}

document.writeln(x + " - " + y + " = " + sub(x,y) + "<br>");

function mult(x, y) {
    return x * y;
}

document.writeln(x + " . " + y + " = " + mult(x,y) + "<br>");

function div(x, y) {
    return x / y;
}

document.writeln(x + " / " + y + " = " + div(x,y) + "<br>");

function quad(x) {
    return x * x;
}

document.writeln(x + "² = " + quad(x) + "<br><br>");

function maior() {
    if (x > 0) {
        document.writeln(x , " é maior que 0")
    }
    else if (x < 0) {
        document.writeln(x , " é menor que 0")
    }
    else {
        document.writeln(x , " é igual a 0")
    };
}

maior();

var idade1 = 16
var idade2 = 67

document.writeln("<br><br>Fulano tem " , idade1 , " anos de idade");
document.writeln("<br>Ciclano tem " , idade2 , " anos de idade");

function resultado6() {
    if (idade1 >= 18) {
        document.writeln("maior de Idade")
    }
    else {
        document.writeln("menor de Idade")
    }
}

document.writeln("<br><br>Fulano é ");
resultado6();

function resultado7() {
    if (idade1 > idade2) {
        document.writeln("Fulano com " + idade1 + " anos de idade é mais velha que o Ciclano com " + idade2 + " anos de idade.")
    }
    else if (idade1 == idade2) {
        document.writeln("Fulano de idade " + idade1 + " e o ciclano com " + idade2 + " anos de idade tem a mesma idade.")
    }
    else {
        document.writeln("Fulano com " + idade2 + " anos de idade é mais velha que a Ciclano com " + idade1 + " anos de idade.")
    }
};

document.writeln("<br><br>");
resultado7()

var z = 11;

document.writeln("<br><br>Z : " , z);

function resultado8() {
    if (z % 2 == 0) {
        document.writeln("é par")
    }
    else {
        document.writeln("é impar")
    }
}

document.writeln("<br>" , z);
resultado8();

function resultado9() {
    if (z % 5 == 0) {
        document.writeln("é multiplo de 5")
    }
    else {
        document.writeln("não é multiplo de 5")
    }
}

document.writeln("<br>" , z );
resultado9();

var a = 6;
var b = 7;
var c = 9;

document.writeln("<br><br>A : " , a);
document.writeln("<br>B : " , b);
document.writeln("<br>C : " , c);

function resultado10() {
    if (a > b && a > c) {
        document.writeln(a)
    }
    else if (b > a && b > c) {
        document.writeln(b)
    }
    else {
        document.writeln(c)
    }
}

document.writeln("<br><br> O Número maior é ");
resultado10();

document.writeln("<br><br>Repetições : <br><br>");

function for1() {
    for (i = 0; i <= 10; i++) {
        document.writeln(i)
    }
}

for1()
document.writeln("<br>");

function for2() {
    for (i = 10; i >= 0; i--) {
        document.writeln(i)
    }
}

for2()
document.writeln("<br>");

function for3() {
    for (i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            document.writeln(i)
        }
    }
}

for3()
document.writeln("<br>");

function for4() {
    j = 0;
    for (i = 0; i <= 100; i++) {
        j += i;
    }
    document.writeln(j);
}

for4()
document.writeln("<br><br>");

function dava1() {
    document.writeln("Mas ele não tem gosto de Monster galera... 🫤");
}

function dava2() {
    document.writeln("*saboreando* 👅🍴");
}

function dava3() {
    document.writeln("No finalzinhoooo🤨...... Tem um negocinho👌");
}

// Aluno : Cristian Joaquim Anselmo, 24/02/2026 14:54 

dava1()
document.writeln("<br>");
dava2()
document.writeln("<br>");
dava3()
document.writeln("<br>");