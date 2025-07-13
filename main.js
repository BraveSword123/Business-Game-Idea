let firstName; 
const line0 = "Welcome to the team, new employee! It's so nice to meet you."; 
const line1 = "I’ll be your supervisor."; 
const line2 = "So, what's your first name?"; 
const line3 = "That's wonderful!"; 
const line4 = "I'm not sure you will be capable of fulfilling this role..."; 
const line5 = "But I'll give you a chance"; 
function line6() {
  return "Welcome to the business, " + firstName + "!";
}

function inputName(){
  firstName = document.getElementById("nameText").value;
  console.log(firstName);
  if(firstName == ""){
   /* const nameError = document.createElement("div"); 
    nameError.innerHTML = "Please Enter your First Name!";
    nameError.id = "nameError";
    document.body.appendChild(nameError); 
    var button = document.createElement("button");
    button.innerHTML = "OK";
    button.id = "okButton";
    document.body.appendChild(button); */
    document.getElementById("errorDiv").style.display = 'block';
    document.getElementById("d1").innerHTML = line2;
    document.getElementById("bossCont").src = "two.png";
  }
else{
  document.getElementById("d1").innerHTML = line3;
  document.getElementById("bossCont").src = "fun.png";
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
  document.getElementById("errorDiv").style.display = 'none';
}
}

function text1(){
if(document.getElementById("d1").innerHTML == line0){
  document.getElementById("d1").innerHTML = line1;
  document.getElementById("bossCont").src = "two.png";
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
}
else if(document.getElementById("d1").innerHTML == line1){
  document.getElementById("d1").innerHTML = line2;
  document.getElementById("bossCont").src = "two.png";
  document.getElementById("nameText").style.display = 'block';
  document.getElementById("enterName").style.display = 'block';
}
/*else if(document.getElementById("d1").innerHTML == line2){
    document.getElementById("d1").innerHTML = line3;
    document.getElementById("bossCont").src = "fun.png";
} */ 
else if(document.getElementById("d1").innerHTML == line3){
  document.getElementById("d1").innerHTML = line4;
  document.getElementById("bossCont").src = "two.png";
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
}
else if(document.getElementById("d1").innerHTML == line4){
  document.getElementById("d1").innerHTML = line5;
  document.getElementById("bossCont").src = "fun.png"; 
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
  
}
else if(document.getElementById("d1").innerHTML == line5){
  document.getElementById("d1").innerHTML = line6();
  document.getElementById("bossCont").src = "fun.png";
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
}
/* else if(document.getElementById("d1").innerHTML == line6){
  document.getElementById("d1").innerHTML = line0;
} */
}


function text0(){
      if(document.getElementById("d1").innerHTML == line1){
        document.getElementById("d1").innerHTML = line0;
        document.getElementById("bossCont").src = "two.png";
        document.getElementById("nameText").style.display = 'none';
        document.getElementById("enterName").style.display = 'none';
      }
      else if(document.getElementById("d1").innerHTML == line2){
        document.getElementById("d1").innerHTML = line1;
        document.getElementById("bossCont").src = "two.png";
        document.getElementById("nameText").style.display = 'none';
        document.getElementById("enterName").style.display = 'none';
      }
      else if(document.getElementById("d1").innerHTML == line3){
        document.getElementById("d1").innerHTML = line2;
        document.getElementById("bossCont").src = "two.png";
        document.getElementById("nameText").style.display = 'block';
        document.getElementById("enterName").style.display = 'block';
      }
      else if(document.getElementById("d1").innerHTML == line4){
        document.getElementById("d1").innerHTML = line3;
        document.getElementById("bossCont").src = "fun.png";
        document.getElementById("nameText").style.display = 'none';
        document.getElementById("enterName").style.display = 'none';
      }
      else if(document.getElementById("d1").innerHTML == line5){
        document.getElementById("d1").innerHTML = line4;
        document.getElementById("bossCont").src = "two.png";
        document.getElementById("nameText").style.display = 'none';
        document.getElementById("enterName").style.display = 'none';
      }
      else if(document.getElementById("d1").innerHTML == line6()){
        document.getElementById("d1").innerHTML = line5;
        document.getElementById("bossCont").src = "fun.png";
        document.getElementById("nameText").style.display = 'none';
        document.getElementById("enterName").style.display = 'none';
      }
}

function errorOK(){
  document.getElementById("errorDiv").style.display = 'none';
}

/* function inputName(){
  firstName = document.getElementById("nameText").value;
  console.log(firstName);
  document.getElementById("d1").innerHTML = line3;
  document.getElementById("bossCont").src = "fun.png";
  document.getElementById("nameText").style.display = 'none';
  document.getElementById("enterName").style.display = 'none';
} */ 

// I'm not sure you will be capable of fulfilling this role.

