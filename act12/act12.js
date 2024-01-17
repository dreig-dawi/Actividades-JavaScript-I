let numero = [0, 0, 0, 0, 0, 0];
for (var i = 0; i < 1000; i++)
{
    for (var j = 0; j < 6; j++)
    {
        numero[j] = Math.floor(Math.random() * 50);
        if (j == 5)
        {
            if (numero[0] == numero[1] || numero[0] == numero[2] || numero[0] == numero[3] || numero[0] == numero[4] || numero[0] == numero [5] || numero[1] == numero[2] || numero[1] == numero[3] || numero[1] == numero[4] || numero[1] == numero[5] || numero[2] == numero[3] || numero[2] == numero[4] || numero[2] == numero[5] || numero[3] == numero[4] || numero[3] == numero[5] || numero [4] == numero[5])
            {
                j = 0;
            }
        }
    }
    document.write(numero);
    document.write("<br>")
}