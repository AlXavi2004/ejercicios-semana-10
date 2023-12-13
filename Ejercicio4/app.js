'use strict'

/*Escribir un programa que obtenga las iniciales de un jugador de futbol, sabiendo que se usa iniciales 
y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25 */

let dorsal = 'CR-7';

let localidad = dorsal.indexOf('-');

let iniciales = dorsal.slice (0,localidad);

alert(iniciales);