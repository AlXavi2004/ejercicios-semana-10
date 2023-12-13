"use strict"

// Escribir un programa de extraiga las parte numérica de una placa de un auto.

let placa = "ABC-7810";
let cantidad = placa.indexOf("-");

let number = placa.slice(cantidad+1);

alert(number);

