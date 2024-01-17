let dato1 = Number(prompt("Intorduce un numero"));
let dato2;
let fallo = false;
while (dato1 % 1 != 0 || dato2 % 1 != 0)
{
    if (!fallo)
    {
        dato2 = Number(prompt("Introduce otro numero"));
        continue;
    }
    dato1 = Number(prompt("No me times! Introduce un NUMERO"));
    dato2 = Number(prompt("Introduce otro NUMERO"));
    fallo = true;
}
let mayor;
if (dato1 > dato2)
{
    mayor = dato1;
}
else if (dato1 < dato2)
{
    mayor = dato2;
}
else
{
    document.write("Tus numeros son iguales");
    System.exit(0);
}
document.write("El numero mayor es " + mayor);