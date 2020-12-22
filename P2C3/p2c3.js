const code = document.getElementById("code"); 
const codeValidation = document.getElementById("code-validation"); 
let  emailInput = document.getElementsByTagName("label");  
console.log(value = emailInput[1].innerHTML=`Email : <input type="email" name="email" required>`); 
  

const buttonSub = document.getElementById("submit-btn");
   

code.addEventListener("change" , event=>{      

   let value = /^CODE/.test(event.target.value); 

   if(value){ 
       codeValidation.innerHTML= " Code valide ";    
        console.log(buttonSub.setAttribute("disabled","true")); 
        console.log(buttonSub); 

    }else {    

        console.log(buttonSub.removeAttribute("disabled", ""));
        codeValidation.innerHTML= " Code invalide ";   
        console.log(buttonSub);
    } 
    

}); 
 
