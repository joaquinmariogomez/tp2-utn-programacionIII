function calcularArea() {
let A = parseFloat(document.getElementById("alturaTotal").value);
let B = parseFloat(document.getElementById("base").value);
let C = parseFloat(document.getElementById("alturaRect").value);

if (C > A) {
document.getElementById("resultado").innerText = "Error: C no puede ser mayor que A.";
return;
}

let areaRect = B * C;
let areaTriang = (B * (A - C)) / 2;
let areaTotal = areaRect + areaTriang;

document.getElementById("resultado").innerText = "Área total: " + areaTotal.toFixed(2) + " m²";
}
