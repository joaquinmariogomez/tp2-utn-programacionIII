function calcularIMC() {
let peso = parseFloat(document.getElementById("peso").value);
let altura = parseFloat(document.getElementById("altura").value);
let imc = peso / (altura * altura);
alert("Tu IMC es: " + imc.toFixed(2));
}

aca iria la validacion