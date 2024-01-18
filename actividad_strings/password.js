var password = document.getElementById("psswrd_block").value;
var length = password.length
var result = "It will take<br>";

function security()
{
    let seconds = Math.pow(password, length);
    seconds /= dificulty();
    let years = parseInt((((seconds / 3600) / 24) / 365));
    seconds -= (years * 365 * 24 * 3600); 
    check_0(years);
    let days = parseInt((((seconds / 3600) / 24) % 365));
    seconds -= (days * 24 * 3600); 
    check_0(days);
    let hours = parseInt(((seconds / 3600) % 24));
    seconds -= (hours * 3600); 
    check_0(hours);
    let mins = parseInt(((seconds / 60) % 60));
    seconds -= (mins * 60); 
    check_0(mins);
    check_0(seconds);
    document.getElementById("output").innerHTML = result;
}

function dificulty()
{
    let dificulty = document.getElementById("hacker").value;
    return dificulty;
}

var date = 0;
function check_0(n)
{
    if (n != 0)
    {
        switch (date)
        {
            case 0:
                result += "Years: ";
                break;
            case 1:
                result += "Days: ";
                break;
            case 2:
                result += "Hours: ";
                break;
            case 3:
                result += "Minutes: "
                break;
            case 4:
                result += "Seconds: ";
                break;
        }
        result += n + "<br>";
    }
    date++;
    if (date == 6)
    {
        result += "To crack your password."
    }
}