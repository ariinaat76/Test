var result = ["Холерик", "Сангвиник", "Флегматик", "Меланхолик"]

var сholeric = 0;
var sanguine = 0;
var phlegmatic  = 0;
var melancholic = 0;


var colors = []


var q1Vars = document.getElementsByClassName("q1-var")
var q2Vars = document.getElementsByClassName("q2-var")
var q3Vars = document.getElementsByClassName("q3-var")
var q4Vars = document.getElementsByClassName("q4-var")
var q5Vars = document.getElementsByClassName("q5-var")
var q6Vars = document.getElementsByClassName("q6-var")
var q7Vars = document.getElementsByClassName("q7-var")
var q8Vars = document.getElementsByClassName("q8-var")
var q9Vars = document.getElementsByClassName("q9-var")
var q10Vars = document.getElementsByClassName("q10-var")
var q11Vars = document.getElementsByClassName("q11-var")
var q12Vars = document.getElementsByClassName("q12-var")
var q13Vars = document.getElementsByClassName("q13-var")
var q14Vars = document.getElementsByClassName("q14-var")
var q15Vars = document.getElementsByClassName("q15-var")
var q16Vars = document.getElementsByClassName("q16-var")
var q17Vars = document.getElementsByClassName("q17-var")
var q18Vars = document.getElementsByClassName("q18-var")
var q19Vars = document.getElementsByClassName("q19-var")
var q20Vars = document.getElementsByClassName("q20-var")






   

function showResult(){ 

    //Реализовано для первого вопроса и только одноразово, нужно пофиксить:)
    if(q1Vars[0].checked){
        сholeric += 1;
    }

    if(q2Vars[0].checked){
        сholeric += 1;
    }
    
    if(q3Vars[0].checked){
        сholeric += 1;
    }

    if(q4Vars[0].checked){
        сholeric += 1;
    }

    if(q5Vars[0].checked){
        сholeric += 1;
    }



    if(q6Vars[0].checked){
        sanguine += 1;
    }
   
    if(q7Vars[0].checked){
        sanguine += 1;
    }

    if(q8Vars[0].checked){
        sanguine += 1;
    }

    if(q9Vars[0].checked){
        sanguine += 1;
    }
 
    if(q10Vars[0].checked){
        sanguine += 1;
    }



    if(q11Vars[0].checked){
        phlegmatic += 1;
    }

    if(q12Vars[0].checked){
        phlegmatic += 1;
    }

    if(q13Vars[0].checked){
        phlegmatic += 1;
    }

    if(q14Vars[0].checked){
        phlegmatic += 1;
    }

    if(q15Vars[0].checked){
        phlegmatic += 1;
    }



    if(q16Vars[0].checked){
        melancholic += 1;
    }

    if(q17Vars[0].checked){
        melancholic += 1;
    }

    if(q18Vars[0].checked){
        melancholic += 1;
    }

    if(q19Vars[0].checked){
        melancholic += 1;
    }

    if(q20Vars[0].checked){
        melancholic += 1;
    }
    
    colors.push(сholeric)
    colors.push(sanguine)
    colors.push(phlegmatic)
    colors.push(melancholic)
   

    var maxColor = result[0];
    var maxPoint = colors[0];

    for(var i = 0; i < colors.length; i++){
        if(colors[i] > maxPoint){
            maxColor = result[i]
        }
    }

   

if(maxColor == "Холерик"){
    location.href="1.html"
}
if(maxColor == "Сангвиник"){
    location.href="sanguine.html"
}
if(maxColor == "Флегматик"){
    location.href="phlegmatic.html"
}
if(maxColor == "Меланхолик"){
    location.href="melancholic.html"
}


    alert("Ваш тип темперамента: " + maxColor)
}
