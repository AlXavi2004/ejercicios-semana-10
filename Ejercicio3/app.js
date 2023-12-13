'use strict'

// Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”

let dia = "2023-12-05";

let localidad = dia.indexOf('-');

let mes = dia.substr(localidad+1,2);

alert(mes);
