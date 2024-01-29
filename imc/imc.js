//Fixing bug that showed empty video
document.getElementById("vertical").style.display = "none";        
document.getElementById("videos").style.display = "none"; 

if (localStorage.getItem("history_counter") == null)
{    
    localStorage.setItem("history_counter", 0);
}
function bmi()
{
    var history_counter = localStorage.getItem("history_counter");
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let number = false;

    //Pattern makes the input explicit to numbers 0-9, more than one can be introduced due to the '+'
    if (weight.match(/^[0-9]+$/) && height.match(/^[0-9]+$/))
    {
        number = true;
    }

    height /= 100;
    let bmi = weight / (height * height);
    let bmi_result;
    let worked = false;
    
    //Fixing bug where the picture border is shown even when there is no picture
    document.getElementById("bmi_img").style.display = "initial";
    document.getElementById("bmi_value").style.display = "initial";
    document.getElementById("result_info").style.display = "initial";
    
    //Showing bmi results
    if (bmi < 18.5 && number)
    {
        bmi_result = "Low bmi";
        document.getElementById("bmi_img").src = "./18.5.png";
        document.getElementById("bmi_value").style.backgroundColor = "rgba(255, 255, 1, 0.45)";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is low, which means gaining weight would be healthy for you.<br>You can gain weight by power exercising and eating more carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./gainweight.mp4";
        worked = true;
    }
    else if (bmi < 25 && number)
    {
        bmi_result = "Healthy bmi";
        document.getElementById("bmi_img").src = "./24.9.png";
        document.getElementById("bmi_value").style.backgroundColor = "green";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is perfect.<br>Exercise and feed yourself properly to stay healthy.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./keephealthyWeight.mp4";
        worked = true;
    }
    else if (bmi < 30 && number)
    {
        bmi_result = "Overweight bmi";
        document.getElementById("bmi_img").src = "./29.9.png";
        document.getElementById("bmi_value").style.backgroundColor = "rgba(255, 255, 1, 0.45)";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is over the normal bmi, which means loosing weight would be healthy for you.<br>You can loose weight by resistance exercising and eating less carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./looseWeight.mp4";
        worked = true;
    }
    else if (bmi < 35 && number)
    {
        bmi_result = "Obesity 1 bmi";
        document.getElementById("bmi_img").src = "./34.9.png";
        document.getElementById("bmi_value").style.backgroundColor = "orange";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is over the normal bmi, which means loosing weight would be healthy for you.<br>You can loose weight by resistance exercising and eating less carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./looseWeight.mp4";
        worked = true;
    }
    else if (bmi < 40 && number)
    {
        bmi_result = "Obesity 2 bmi";
        document.getElementById("bmi_img").src = "./39.9.png";
        document.getElementById("bmi_value").style.backgroundColor = "red";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is over the normal bmi, which means loosing weight would be healthy for you.<br>You can loose weight by resistance exercising and eating less carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./looseWeight.mp4";
        worked = true;
    }
    else if (bmi < 51 && number)
    {
        bmi_result = "Obesity 3 bmi";
        document.getElementById("bmi_img").src = "./49.9.png";
        document.getElementById("bmi_value").style.backgroundColor = "darkred";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is over the normal bmi, which means loosing weight would be healthy for you.<br>You can loose weight by resistance exercising and eating less carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./looseWeight.mp4";
        worked = true;
    }
    else if (bmi > 50 && number)
    {
        bmi_result = "Obesity 4 bmi";
        document.getElementById("bmi_img").src = "./50.png";
        document.getElementById("bmi_value").style.backgroundColor = "black";     
        document.getElementById("bmi_value").style.color = "white";
        document.getElementById("bmi_value").innerHTML = bmi_result;
        document.getElementById("result_info").innerHTML = "Your bmi is over the normal bmi, which means loosing weight would be healthy for you.<br>You can loose weight by resistance exercising and eating less carbohidrates.";
        document.getElementById("vertical").style.display = "initial";
        document.getElementById("videos").style.display = "initial";
        document.getElementById("video").src = "./looseWeight.mp4";
        worked = true;
    }
    else
    {
        document.getElementById("bmi_img").style.display = "none";
        document.getElementById("bmi_value").style.display = "none";
        document.getElementById("result_info").style.display = "none";        
        document.getElementById("vertical").style.display = "none";        
        document.getElementById("videos").style.display = "none";        
    }

    //Picture border bug
    document.getElementById("bmi_img").style.height = "240px";
    
    //Creating history
    if (worked)
    {
        let weight_obj_var = "weight_obj" + history_counter;
        let height_obj_var = "height_obj" + history_counter;
        let bmi_obj_var = "bmi_obj" + history_counter;
        let date_obj_var = "date_obj" + history_counter;
        let time_obj_var = "time_obj" + history_counter;
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        localStorage.setItem(weight_obj_var, weight);
        localStorage.setItem(height_obj_var, height);
        localStorage.setItem(bmi_obj_var, bmi_result);
        localStorage.setItem(date_obj_var, date);
        localStorage.setItem(time_obj_var, time);
        history_counter++;
        localStorage.setItem("history_counter", history_counter);

        document.getElementById("top").innerHTML = weight + "(kg)";
        document.getElementById("bottom").innerHTML = height + " x " + height + "(m)";
    }
}
var n;
function print_history()
{
    //Checking that print_history has not been called more than once
    let show_history = (n == localStorage.length) ? false : true;
    n = localStorage.length;
    if (show_history)
    {        
        for (let i = 0; i < localStorage.length; i++)
        {   
            if (localStorage.getItem("weight_obj" + i) != null && localStorage.getItem("height_obj" + i) != null)
            {   
                if (document.getElementById("h" + i) == null)
                {                    
                    let history_result = document.createElement('div');
                    history_result.style.width = "90%";
                    history_result.style.marginBottom = "10px"
                    history_result.id = "h" + i;
                    history_result.style.borderBottom = "3px solid #aaa";
                    document.getElementById("history").appendChild(history_result);
                }
                document.getElementById("h" + i).innerHTML = "Date: " + localStorage.getItem("date_obj" + i) + "&emsp;" + localStorage.getItem("time_obj" + i) + "<br>Weight: " + localStorage.getItem("weight_obj" + i) + "kg&emsp;&emsp;Height: " + localStorage.getItem("height_obj" + i) + "m&emsp;&emsp;bmi: " + localStorage.getItem("bmi_obj" + i);
            }
        }
    }   
}