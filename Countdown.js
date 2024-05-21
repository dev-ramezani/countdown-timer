var timer = 120;
var istimer,sec,min;

var Start = function() {
    istimer = setInterval(function(){
     timer--;
     if ( timer >= 60 ) {
       min = Math.floor(timer / 60);
       sec = timer % 60; 
       document.getElementsByClassName('Pause')[0].disabled = false;}
     else {
        min = 0;
        sec = timer; 
        document.getElementsByClassName('Pause')[0].disabled = false;}
     if ( timer == 0 ) {
        clearInterval(istimer); 
        document.getElementsByClassName('Pause')[0].disabled = true;}
     document.getElementById('timer').innerHTML = min+":"+sec ;
     document.getElementsByClassName('Start')[0].disabled = true;
     document.getElementsByClassName('Reset')[0].disabled = false;
     document.getElementsByClassName('Start')[0].innerHTML = "Continue" ;
    },1000)
}

var Pause = function() {
    clearInterval(istimer);
    document.getElementsByClassName('Start')[0].disabled = false;
    document.getElementsByClassName('Pause')[0].disabled = true;
    document.getElementsByClassName('Reset')[0].disabled = false;
}

var Reset = function() {
    timer = 120;
    min = timer / 60;
    sec = timer % 60;
    document.getElementById('timer').innerHTML = min+":"+sec ;
    clearInterval(istimer);
    document.getElementsByClassName('Start')[0].disabled = false;
    document.getElementsByClassName('Pause')[0].disabled = true;
    document.getElementsByClassName('Reset')[0].disabled = true;
    document.getElementsByClassName('Start')[0].innerHTML = "Start" ;
}