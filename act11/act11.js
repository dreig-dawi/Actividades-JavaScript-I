var rojo = 0;
var verde = 0;
var azul = 0;
var lugar_b = 0;
var lugar_t = 0;
var lugar_r = 0;
var lugar_l = 0;
for (var i = 0; i < 2000; i++)
{
    rojo = Math.floor(Math.random() * 255);
    verde = Math.floor(Math.random() * 255);
    azul = Math.floor(Math.random() * 255);
    lugar_t = Math.floor(Math.random() * 700);
    lugar_l = Math.floor(Math.random() * 1500);
    //Convertimos a hexadecimal
    rojo = rojo.toString(16);
    verde = verde.toString(16);
    azul = azul.toString(16);

    //Creamos la variable de color completo
    var color = "#" + rojo + verde + azul;
    var posicion_top = lugar_t + "px";
    var posicion_left = lugar_l + "px";

    //Enviamos la variable a CSS
    var cuadrado = document.createElement('div');
    cuadrado.style.backgroundColor = color; 
    cuadrado.style.top = posicion_top;
    cuadrado.style.left = posicion_left;
    document.body.appendChild(cuadrado)
}