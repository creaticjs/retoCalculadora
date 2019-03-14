var numeros = [];
var operaciones = [];
var a = '';
function escribirValor(value) {
    a = a + '' + value;
    colocarValor(a);
}

function darResultado() {
    numeros.push(a);
    var resultado = numeros[0];
    var i;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i + 1]) {
            resultado = validarOperacion(resultado, numeros[i + 1], operaciones[i]);
        }
    }
    limpiarNumerosYOperaciones();
    a = resultado;
    colocarValor(resultado);
}

function validarOperacion(num1, num2, operacion) {
    var res = num1;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operacion) {
        case 1:
            res = num1 + num2;
            break;
        case 2:
            res = num1 - num2;
            break;
        case 3:
            res = num1 * num2;
            break;
        case 4:
            res = num1 / num2;
            break;
    }
    return res;
}

function operar(operacion) {
    numeros.push(a);
    a = '';
    colocarValor(a);
    operaciones.push(operacion);
}

function limpiarNumerosYOperaciones() {
    a = '';
    b = '';
    numeros = [];
    operaciones = [];
}

function limpiar() {
    limpiarNumerosYOperaciones();
    colocarValor('');
}

function colocarValor(valor) {
    document.getElementById('resultado').value = valor;
}