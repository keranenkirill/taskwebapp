function showTime(){
    // creating variable for time
    var clock = document.getElementById("clock");
    clock.textContent = new Date().toString();

    setInterval(showTime, 1000);        
}

