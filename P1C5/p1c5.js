const inputName = document.getElementById("name"); 
const resName = document.getElementById("res-name"); 
 
const genderSelect=document.getElementById("gender"); 
const resGender = document.getElementById("res-gender"); 

const resultArea = document.getElementById("result"); 
const mouseX = document.getElementById("mouse-x"); 
const mouseY = document.getElementById("mouse-y"); 


inputName.addEventListener("change" , event=>{ 
   resName.innerHTML=event.target.value;
     
}) 
  
genderSelect.addEventListener("change" , event2 => {  
   // event2.preventDefault(); 
   // event2.stopPropagation(); 
   resGender.innerHTML=event2.target.value; 

}) 
 
resultArea.addEventListener("mousemove" , event3 =>{ 
  let X =  mouseX.innerHTML = event3.offsetX;   
  let Y =  mouseY.innerHTML=event3.offsetY;

    if (X.toExponential() === Y.toExponential() ){ 
              alert (X + " est egale a " + Y )

    }  

})