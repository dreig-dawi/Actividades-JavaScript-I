let random = Math.floor(Math.random() * (100 - 1) + 1);
let respuesta = prompt("Introduce un numero");
while (respuesta % 1 != 0)
{
    respuesta = prompt("No me times");
}
for (i = 0; random != respuesta; i++)
{
    if(i == 4)
    {
        document.write("Has perdido");
        break;
    }
    if(random > respuesta)
    {
        respuesta = Number(prompt("El numero es menor"));
    }
    else
    {
        respuesta = Number(prompt("El numero es mayor"));
    }
}
if (i != 4)
{
    document.write("Has acertado");
}
