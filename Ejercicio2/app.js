'use strict'

/* Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el 
formato de numeración de lasoficinas  es: “01.24” lo que significa piso 1 oficina 24.*/

let codigo = '02.27';

let final = codigo.indexOf('.');

let piso = codigo.slice(0,final);

alert(piso);
