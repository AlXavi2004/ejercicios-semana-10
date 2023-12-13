'use strict'

//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

let url = 'facebook.com/juan'

let posicion = url.indexOf('/');

let usuario = url.slice (posicion+1);

alert(usuario);
