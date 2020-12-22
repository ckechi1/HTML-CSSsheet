const askWeather = document.getElementById("ask-weather");
const weatherResult = document.getElementById("weather-result"); 
weatherResult.style.display="block";
weatherResult.style.color="red"; 
weatherResult.style.margin="auto";


var request = new XMLHttpRequest(); 
     request.onreadystatechange = (function(){ 
           if(this.readyState == XMLHttpRequest.DONE && this.status == 200){ 
               var res = JSON.parse(this.responseText); 
                
               let currentweather = res.current_condition.condition;  
               console.log(currentweather); 

               weatherResult.textContent=currentweather; 
            
           } 
     });  

askWeather.addEventListener("click" , ()=>{ 
  
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris"); 
    request.send();
});


 

