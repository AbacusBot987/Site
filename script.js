var bu = document.getElementById("pl")
var el = document.getElementById('lop')
var pi = document.getElementById('passwer')
var username = document.getElementById('username').value
var userna = document.getElementById('username')
var warnUser = document.getElementById("det")
var warnUsere = document.getElementById("def")

var password = document.getElementById('password').value
var passwa = document.getElementById('password')
var firstClo = false;
var ps = false
var us = false

el.onclick = function () {
  console.log('Click just happened')
  bu.style.visibility = 'visible';
  bu.style.pointerEvents = 'auto';
}

pi.onclick = function () {
    if(ps&&us){
        pi.href = 'sign.html'
    }
    if (userna.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(userna.value.trim() === ""){
        userna.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        warnUser.textContent = "Username or Email can't be empty"
    }else{

        userna.style.boxShadow = "none";
        
        warnUser.textContent = ""

    }


    if (passwa.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(passwa.value.trim() === ""){
        passwa.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        warnUsere.textContent = "Password can't be empty"
    }else{

        passwa.style.boxShadow = "none";
        
        warnUsere.textContent = ""

    }
    firstClo = true;
    console.log(firstClo)

  }

  var textbox = userna;
  var textbo = passwa;

    textbox.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        userna.style.boxShadow = "none";
        warnUser.textContent = ""
        us = true
        
    });
    
    textbox.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(userna.value.trim() === ""){
            userna.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            warnUser.textContent = "Username or Email can't be empty"
            us = false;
        }
    });

    textbo.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        passwa.style.boxShadow = "none";
        warnUsere.textContent = ""
        ps = true
    });
    
    textbo.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(passwa.value.trim() === ""){
            passwa.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            warnUsere.textContent = "Password can't be empty"
            ps = false
        }
    });
  







