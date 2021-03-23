function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var d = parseInt(document.querySelector("#value2").value);
    var gs = parseInt(document.querySelector("#value3").value);
    var op = document.querySelector("#select").value;
    var calculate;
    var first;
    var second;
    var third;
    var fpm;
    if (op == "HeadWind"){
        first  = a - d;
        second = first / 1000;
        third = second * 3 + 10;
        fpm = gs*5;
    } else if (op == "TailWind"){
        first = a -d;
        second = first / 1000;
        third = second * 3;}
        fpm = gs*5;
        calculate = "TOD in: " + third +  " nm " + "with a decent rate of: " + fpm + "fpm";

        

    


    
    
    document.querySelector("#result").innerHTML = calculate;
    
}

// function reset(){
//     document.querySelector('#hej').reset;
    
// }
    