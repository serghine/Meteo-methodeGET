"use strict";
let buton=document.getElementById("ask-weather");
let result=document.getElementById("result-weather");



var request=new XMLHttpRequest();
request.onreadystatechange=function (){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
        let response=JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
        result.textContent=response.current_condition.condition;
    };
}


buton.addEventListener("click",askweathrParis);

function askweathrParis(){
    request.open('GET','https://www.prevision-meteo.ch/services/json/paris');
    request.send();
}
