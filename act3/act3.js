let nombre = prompt("Introduce tu nombre");
let salario = Number(prompt("Introduce tu salario"));
let edad = Number(prompt("Introduce tu edad"));
if (salario >= 1000 && salario <= 2000)
{
    if (edad > 45)
    {
        salario *= 1.03;
    }
    else
    {
        salario *= 1.1;
    }
}
else if (salario < 1000)
{
    if (edad < 30)
    {
        salario = 1100;
    }
    else if (edad > 45)
    {
        salario *= 1.15;
    }
    else
    {
        salario *= 1.03;
    }
}
document.write("Nombre: " + nombre + "<br>Edad: " + edad + "<br>Salario: " + salario);