'use strict'

//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

let correo = 'juanito@magbdigital.net';

let posicion = correo.indexOf('@');

let usuario = correo.slice(0,posicion);

alert (usuario);
