var tabla = document.getElementById("tablero");
var random;
var minas = 0;
var intento = false;
var ganador = 0;

//Creamos el array de las celdas
var columnas = 20;
var filas = 20;
var lista = [];
for (var h = 0; h < columnas; h++)
{
    lista[h] = new Array(filas);
}

//Introducimos filas
for (let i = 0; i < 7; i++)
{
    //Introducimos columnas
    for (let j = 0; j < 7; j++)
    {
        
        //Se crea la celda
        var celda = document.createElement('div');
        celda.style.width = "98px";
        celda.style.height = "98px";
        celda.style.marginLeft = "1px";
        celda.style.marginRight = "1px";
        celda.style.marginBottom = "1px";
        celda.style.marginLeft = "1px";
        celda.style.backgroundColor = "red";       
        tabla.appendChild(celda);
        
        //Se introduce imagen de la celda
        var blanco = document.createElement('img');
        blanco.src = './celda_blanco.png';        
        blanco.style.width = "100%";
        blanco.style.height = "100%";
        blanco.id = "blanco" + i + "a" + j;
        blanco.onclick = function() {safe(i, j)}
        
        //Generamos las minas
        random = Math.random() * (7 - 1) + 1;
        if (random < 2 && minas < 14)
        {
            blanco.id = "mina" + i + "a" + j;
            blanco.onclick = function() {boom(i, j);};
            minas++;
        }          

        celda.appendChild(blanco);
    }
}


//Info tablero
var _info = document.getElementById("info");
var info_minas = document.createElement('div')
info_minas.id = "info_minas";
info_minas.style.backgroundColor = "white";
_info.appendChild(info_minas);
document.getElementById("info_minas").innerHTML = 'Numero de minas: ' + minas;

function boom(columna, fila)
{
    if (!intento)
    {
        document.getElementById("mina" + columna + "a" + fila).src = './mina.png';
        var perdido = document.createElement('div');
        perdido.id = "perdido";
        perdido.style.backgroundColor = "white";
        perdido.style.color = "red";
        _info.appendChild(perdido);
        document.getElementById("perdido").innerHTML = 'Has perdido';
    }
    intento = true;
}
function safe(columna, fila)
{
    if (ganador == 49 - minas)
    {
        var ganado = document.createElement('div');
        ganado.id = "ganado";
        ganado.style.backgroundColor = "white";
        ganado.style.color = "green";
        _info.appendChild(ganado);
        document.getElementById("ganado").innerHTML = 'Has ganado';    
    }
    if (!intento)
    {
        document.getElementById("blanco" + columna + "a" + fila).src = './safe.png';
        document.getElementById("blanco" + columna + "a" + fila).style.backgroundColor = "green";
        ganador++;
    }
}