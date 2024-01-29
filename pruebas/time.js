setInterval(function(){time();}, 1000);

function time()
{
    let date = new Date();
    let hour10 = date.getHours() / 10;
    let hour1 = date.getHours();
    let min10 = date.getMinutes() / 10;
    let min1 = date.getMinutes();
    let sec10 = date.getSeconds() / 10;
    let sec1 = date.getSeconds();

    document.getElementById("h10").src = './' + calculations(hour10) + '.png';
    document.getElementById("h1").src = './' + calculations(hour1) + '.png';
    document.getElementById("m10").src = './' + calculations(min10) + '.png';
    document.getElementById("m1").src = './' + calculations(min1) + '.png';
    document.getElementById("s10").src = './' + calculations(sec10) + '.png';
    document.getElementById("s1").src = './' + calculations(sec1) + '.png';
}

function calculations(time)
{
    return Math.floor(time % 10);
}