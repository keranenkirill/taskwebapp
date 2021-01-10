function showTime(){
    // creating variable for time
    var clock = document.getElementById("clock");
    var nowdate = new Date();
    clock.textContent = nowdate.toLocaleDateString("eu") + "  " + nowdate.getHours() + ":" + nowdate.getMinutes() + ":" + nowdate.getSeconds();

    setInterval(showTime,1000);    
}

