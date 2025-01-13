var fname = document.getElementById('firname')
var lname = document.getElementById('lasname')
var sid = document.getElementById('sdid')
var school = document.getElementById('schol')
var emia = document.getElementById('emai')
var conf = document.getElementById('cf')
var el = document.getElementById('nxt')
var fnw = document.getElementById('fn')
var lnw = document.getElementById('ln')
var scw = document.getElementById('sc')
var sdw = document.getElementById('sd')
var enw = document.getElementById('en')
var c1 = false
var c2 = false
var c3 = false
var c4 = false
var c5 = false
var valid = false
var bu = document.getElementById('er')
var nd = document.getElementById('cf')
var rg = document.getElementById('rf')
var vb = document.getElementById('bx')
el.onclick = function () {  
    if(c1&&c2&&c3&&c4&&c5){
        var result = countFromChar(emia.value);
        
        console.log(result)
        if(result ==='@students.puyallupsd.org'){
            nd.style.visibility = 'visible'
            nd.style.pointerEvents = 'auto';
            vb.style.visibility = 'visible'
            rg.style.visibility = 'hidden'
            valid = true
        }else{
            valid = false
            bu.style.visibility = 'visible'
            vb.style.visibility = 'visible'

        }
        }


    if (fname.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(fname.value.trim() === ""){
        fname.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        fnw.textContent = "Field Needs To Be Filled"
    }else{
        fname.style.boxShadow = "none";        
        fnw.textContent = ""
    }


    if (lname.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(lname.value.trim() === ""){
        lname.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        lnw.textContent = "Field Needs To Be Filled"
    }else{

        lname.style.boxShadow = "none";
        
        lnw.textContent = ""

    }

    if (sid.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(sid.value.trim() === ""){
        sid.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        sdw.textContent = "Field Needs To Be Filled"
    }else{

        sid.style.boxShadow = "none";
        
        sdw.textContent = ""

    }

    if (school.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(school.value.trim() === ""){
        school.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        scw.textContent = "Field Needs To Be Filled"
    }else{

        school.style.boxShadow = "none";
        
        scw.textContent = ""

    }

    if (emia.value.trim() === "") {
        console.log("The input is empty.");
    } else {
        console.log("The input has a value.");
    }
    if(emia.value.trim() === ""){
        emia.style.boxShadow = "0px 0px 10px #FF0000";
        console.log("empty username")
        enw.textContent = "Field Needs To Be Filled"
    }else{

        emia.style.boxShadow = "none";
        
        enw.textContent = ""

    }

  }

  var textbox = fname;
  var textbo = lname;
  var tc = school;
  var tid = sid;
  var tbo = emia;

    textbox.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        fname.style.boxShadow = "none";
        fnw.textContent = ""
        c1 = true
        
    });
    
    textbox.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(fname.value.trim() === ""){
            fname.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            fnw.textContent = "Field Needs To Be Filled"
        c1 = false
        }
    });

    textbo.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        lname.style.boxShadow = "none";
        lnw.textContent = ""
        c2 = true
    });
    
    textbo.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(lname.value.trim() === ""){
            lname.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            lnw.textContent = "Field Needs To Be Filled"
        c2 = false
        }
    });

    tc.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        school.style.boxShadow = "none";
        scw.textContent = ""
        c3 = true
    });
    
    tc.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(school.value.trim() === ""){
            school.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            scw.textContent = "Field Needs To Be Filled"
        c3 = false
        }
    });

    tid.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        sid.style.boxShadow = "none";
        sdw.textContent = ""
        c4 = true
    });
    
    tid.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(sid.value.trim() === ""){
            sid.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            sdw.textContent = "Field Needs To Be Filled"
        c4 = false
        }
    });

    tbo.addEventListener("focus", () => {
        console.log("The textbox is active (focused).");
        emia.style.boxShadow = "none";
        enw.textContent = ""
        c5 = true
    });
    
    tbo.addEventListener("blur", () => {
        console.log("The textbox is no longer active.");
        if(emia.value.trim() === ""){
            emia.style.boxShadow = "0px 0px 10px #FF0000";
            console.log("empty username")
            enw.textContent = "Field Needs To Be Filled"
        c5 = false
        }
    });
  







// Function to find a character and count how many characters appear from there
function countFromChar(str) {
    // Find the index of the specific character
    const index = str.indexOf('@');
    
    // Check if the character exists in the string
    if (index === -1) {
        return 0; // Return 0 if character is not found
    }

    // Get the substring starting from the index of the found character
    const substring = str.substring(index);  // or str.slice(index)

    // Return the length of the substring
    return substring;
}

// Example usage
 // Output: 7 (Including 'w' and all characters after it)
