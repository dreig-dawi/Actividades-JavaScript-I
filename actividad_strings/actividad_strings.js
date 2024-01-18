var palabra = prompt("Introduce una palabra: ");
var longitud = palabra.length;
var creacion1 = "";
var creacion2 = "";
document.write(palabra + "<br>");
for (let i = 0; i < longitud; i++)
{
    document.write(palabra[i] + "<br>");
    creacion1 += palabra[i];
}
document.write("<br>")
for (let j = longitud - 1; j >= 0; j--)
{
    document.write(palabra[j] + "<br>");
    creacion2 += palabra[j]
}
if (creacion1 == creacion2)
{
    document.write("Tu palabra es palindroma")
}
