function calcularArea() {
let B = parseFloat(document.getElementById("baseMayor").value);
let b = parseFloat(document.getElementById("baseMenor").value);
let h = parseFloat(document.getElementById("altura").value);
let area = ((B + b) * h) / 2;
document.getElementById("resultado").innerText = "Área: " + area.toFixed(2) + " m²";
}
