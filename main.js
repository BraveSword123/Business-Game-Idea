const line0 = "Welcome to the team, new employee! It's so nice to meet you."; 
const line1 = "I’ll be your supervisor."; 
const line2 = "So, what's your name?"; 
const line3 = "That's wonderful!"; 
const line4 = "I'm not sure you will be capable of fulfilling this role..."; 
const line5 = "But I'll give you a change"; 
const line6 = "Welcome to the business, {Your Name}!"; // Figure this out

function text1(){
if(document.getElementById("d1").innerHTML == line0){
  document.getElementById("d1").innerHTML = line1;
}
else if(document.getElementById("d1").innerHTML == line1){
  document.getElementById("d1").innerHTML = line2;
}
else if(document.getElementById("d1").innerHTML == line2){
    document.getElementById("d1").innerHTML = line3;
}
else if(document.getElementById("d1").innerHTML == line3){
  document.getElementById("d1").innerHTML = line4;
}
else if(document.getElementById("d1").innerHTML == line4){
  document.getElementById("d1").innerHTML = line5;
}
else if(document.getElementById("d1").innerHTML == line5){
  document.getElementById("d1").innerHTML = line6;
}
/* else if(document.getElementById("d1").innerHTML == line6){
  document.getElementById("d1").innerHTML = line0;
} */
}


function text0(){
      if(document.getElementById("d1").innerHTML == line1){
        document.getElementById("d1").innerHTML = line0;
      }
      else if(document.getElementById("d1").innerHTML == line2){
        document.getElementById("d1").innerHTML = line1;
      }
      else if(document.getElementById("d1").innerHTML == line3){
        document.getElementById("d1").innerHTML = line2;
      }
      else if(document.getElementById("d1").innerHTML == line4){
        document.getElementById("d1").innerHTML = line3;
      }
      else if(document.getElementById("d1").innerHTML == line5){
        document.getElementById("d1").innerHTML = line4;
      }
      else if(document.getElementById("d1").innerHTML == line6){
        document.getElementById("d1").innerHTML = line5;
      }
}


// I'm not sure you will be capable of fulfilling this role.

