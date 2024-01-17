function pene(cuadrados)
{
    for (var i = 0; i < cuadrados; i++)
    {        
        let x = Math.random() * 100-1;
        let y = Math.random() * 100-1;
    
        let r = Math.floor((Math.random() * 1000) % 256);
        let g = Math.floor((Math.random() * 1000) % 256);
        let b = Math.floor((Math.random() * 1000) % 256);
    
        document.write("<div style='top:" + y + "vh; left:" + x +"vw; background-color:rgb(" + r + "," + g + "," + b + "); position: absolute; height: 50px; width: 50px'></div>"); 
    }
}

let veces = Number(prompt("Pon las veces"));
setInterval(function() {pene(veces)}, 1000);


