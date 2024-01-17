let tamano = prompt("Introduce una dimension");
while (tamano % 1 != 0 || tamano < 1)
{
    tamano = prompt("Introduce un numero");
}
for (i = tamano; i > 0; i--)
{
    for (j = i; j <= tamano; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}