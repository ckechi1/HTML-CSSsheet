
let childcounter = document.getElementById("child-count"); 
let parentCounter = document.getElementById("parent-count");
let childclik= document.getElementById("child"); 
let parentclick= document.getElementById("parent"); 
 
console.log(parentclick); 
 
parentclick.addEventListener("click", (event)=>{  
    parentCounter.textContent+=1;  
}); 

childclik.addEventListener("click", (event)=>{  
    event.preventDefault();  
    event.stopPropagation(); 
    parseInt(childcounter.textContent += 1);

  });
        
         
          
           
     
      
       
        
         
         
          
           
/* let newel = document.createElement("p"); 
newel.innerHTML=' bah ca change color <strong>ce ci est un changement js </strong>'; 
 newel.className="important";
console.log(newel);  


let elDiv = document.getElementsByTagName("div"); 

console.log(elDiv[0]); 

elDiv[0].appendChild(newel); 
elDiv[0].style.marginLeft="50px";
elDiv[0].style.color="green";   
elDiv[0].style.backgroundColor="red";

console.log(elDiv[0]); 
  */
