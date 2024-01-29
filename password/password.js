var date = 0;

function security()
{
    let password = document.getElementById("psswrd_block").value;
    var length = password.length;
    if (check_common(password))
    {
        document.getElementById("output").innerHTML = "Your password is one of the top 5 most common passwords of the last 5 years... Do not use that password";       
    }
    else
    {        
        var secs = Math.pow(64, length);
        secs /= dificulty();
        var years = Math.round((((secs / 3600) / 24) / 365));
        secs -= (years * 365 * 24 * 3600); 
        years = check_0(years);
        var days = Math.round((((secs / 3600) / 24) % 365));
        secs -= (days * 24 * 3600); 
        days = check_0(days);
        var hours = Math.round(((secs / 3600) % 24));
        secs -= (hours * 3600); 
        hours = check_0(hours);
        var mins = Math.round(((secs / 60) % 60));
        secs -= (mins * 60);
        secs = Math.round(secs);
        mins = check_0(mins);
        secs = check_0(secs);
        if (!check_instantly(years, days, hours, mins, secs))
        {
            document.getElementById("output").innerHTML = "It will take<br>Years: " + years + "<br>Days: " + days + "<br>Hours: " + hours + "<br>Minutes: " + mins + "<br>and Seconds: " + secs + " to crack your password";
        }
        else
        {
            document.getElementById("output").innerHTML = "Your password would be crack instantly";
        }
    }
    document.getElementById("output").style.backgroundColor = "lightblue";
    if (years > 0)
    {
        document.getElementById("output").style.color = "green";
    }
    else if (days > 0)
    {
        document.getElementById("output").style.color = "yellow";
    }
    else
    {        
        document.getElementById("output").style.color = "red";
    }
}

function dificulty()
{
    let dificulty = document.getElementById("hacker").value;
    return dificulty;
}

function check_0(n)
{
    return (n < 0) ? 0 : n;
}

function check_instantly(y, d, h, m, s)
{
    return (y + d + h + m + s == 0) ? true : false;
}

function check_common(password)
{
    if (password == "password" || password == "123456" || password == "123456789" || password == "12345678" || password == "12345" || password == "qwerty" || password == "abc123" || password == "football" || password == "1234567")
    {
        return true;
    }
    return false;
}