var rojo = Math.floor(Math.random() * 255);
var verde = Math.floor(Math.random() * 255);
var azul = Math.floor(Math.random() * 255);

//Convertimos a hexadecimal
rojo = rojo.toString(16);
verde = verde.toString(16);
azul = azul.toString(16);

//Creamos la variable de color completo
var color = "#" + rojo + verde + azul;

//Enviamos la variable a CSS
document.documentElement.style.setProperty('--color', color);