var posicionbolita = Math.floor(Math.random() * (3 - 1)) + 1;
var intento = false;
function ganador(indice)
{
    if (intento)
    {
        document.getElementById("resultado").innerHTML = "No puedes intentarlo 2 veces LUDOPATA! <br> Refresca la pagina mejor";
    }
    else if (indice == posicionbolita)
    {
        document.getElementById("img" + indice).src = "./bolita.jpg";
        document.getElementById("resultado").innerHTML = "CORRECTO!";
        document.getElementById("resultado").style.color = "green";
    }
    else
    {
        document.getElementById("img" + indice).src = "./error.png";
        document.getElementById("resultado").innerHTML = "TE HAS EQUIVOCADO!";
        document.getElementById("resultado").style.color = "red";
    }
    intento = true;
}