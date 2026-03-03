var x = 10;
var y = 5;

function soma(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function quad(x) {
    return x * x;
}

function resultado() {
    let resultado = soma(x, y);
    document.writeln(resultado);
}

function resultado1() {
    let resultado1 = sub(x, y);
    document.writeln(resultado1);
}

function resultado2() {
    let resultado2 = mult(x, y);
    document.writeln(resultado2);
}

function resultado3() {
    let resultado3 = div(x, y);
    document.writeln(resultado3);
}

function resultado4() {
    let resultado4 = quad(x);
    document.writeln(resultado4);
};

function resultado5() {
    if (x > 0) {
        document.writeln("Maior que 0")
    }
    else if (x < 0) {
        document.writeln("Menor que 0")
    }
    else {
        document.writeln("Igual a 0")
    };
}

var idade1 = 16
var idade2 = 67

function resultado6() {
    if (idade1 >= 18) {
        document.writeln("Maior de Idade")
    }
    else {
        document.writeln("Menor de Idade")
    }
}

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

var z = 11;

function resultado8() {
    if (z % 2 == 0) {
        document.writeln("É par")
    }
    else {
        document.writeln("É impar")
    }
}

function resultado9() {
    if (z % 5 == 0) {
        document.writeln("True")
    }
    else {
        document.writeln("False")
    }
}

var a = 6;
var b = 7;
var c = 9;

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

function for1() {
    for (i = 0; i <= 10; i++) {
        document.writeln(i)
    }
}

function for2() {
    for (i = 10; i >= 0; i--) {
        document.writeln(i)
    }
}

function for3() {
    for (i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            document.writeln(i)
        }
    }
}

function for4() {
    j = 0;
    for (i = 0; i <= 100; i++) {
        j += i;
    }
    document.writeln(j);
}

function dava1() {
    document.writeln("Mas ele não tem gosto de Monster galera...");
}

function dava2() {
    document.writeln("*saboreando*");
}

function dava3() {
    document.writeln("No finalzinhoooo...... Tem um negocinho");
}

// Aluno : Cristian Joaquim Anselmo, 24/02/2026 14:54 