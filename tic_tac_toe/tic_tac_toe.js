var tabla = document.getElementById("tablero");
var random;
var minas = 0;
var checked = false;
var click, casillita;
var tablero;
//Introducimos filas
for (let i = 0; i < 3; i++)
{
    //Introducimos columnas
    for (let j = 0; j < 3; j++)
    {
        
        //Se crea la casilla
        var casilla = document.createElement('div');
        casilla.style.width = "50px";
        casilla.style.height = "50px";
        casilla.style.backgroundColor = "white";
        casilla.id = "" + i + j;    
        tabla.appendChild(casilla);
        
        //Se introduce imagen de la casilla
        var casilla_img = document.createElement('img');
        casilla_img.src = './blank.jpg';        
        casilla_img.style.width = "100%";
        casilla_img.style.height = "100%";
        casilla_img.id = "casilla_img" + i  + j;
        casilla_img.addEventListener("click", function () {check(i, j)}, {once:true})
        casilla.appendChild(casilla_img);
    }
}

function check(i, j)
{
    click = "" + i + j;
    let clicked = click == casillita ? true : false;
    if (!checked && !clicked)
    {
        document.getElementById("casilla_img" + i + j).src = './cruz.png';
        checked = true;
        tablero[i][j] = "cruz";
    }
    else if (checked && !clicked)
    {
        document.getElementById("casilla_img" + i + j).src = './circulo.png';
        checked = false;
        tablero[i][j] = "circ";
    }
    casillita = "" + i + j;
    clicked = false;
    fin();
}

function fin()
{
    for (let k = 0; k < 3; k++)
    {
        if (tablero[k][0] == tablero[k][1] && tablero[k][1] == tablero[k][2])
        {
            acaba();
        } 
    }
    for (let l = 0; l < 3; l++)
    {
        if (tablero[0][l] == tablero[1][l] && tablero[1][l] == tablero[2][l])
        {
            acaba();
        }
    }
    if (tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2])
    {
        acaba();
    }
    if (tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][0])
    {
        acaba();
    }
}

function acaba()
{
    var fin = document.createElement('div');
        fin.src = './blank.jpg';        
        fin.style.width = "100%";
        fin.style.height = "100%";
        fin.id = "casilla_img" + i  + j;
        fin.addEventListener("click", function () {check(i, j)}, {once:true})
        casilla.appendChild(casilla_img);
}