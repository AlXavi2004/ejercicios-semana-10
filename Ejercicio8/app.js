'use strict';

/*Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un 
laboratorio. Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica 
la fila A del laboratorio 2 */

let lab = 'LAB2#B';

let posicion = lab.slice(-1);

let codigo = posicion.codePointAt(0);
codigo += 1;

codigo = codigo.toString();

alert(codigo);