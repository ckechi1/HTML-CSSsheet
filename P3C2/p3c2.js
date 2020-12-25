   
  async function getNumber1() {
    return 10;
  }
  
  async function getNumber2() {
    return 4;
  }
   
  async function compute(){  
  
    const num1 = await getNumber1(); 

    const num2 = await getNumber2(); 
     
   // console.log(num1 + num2);  
         return num1 + num2;  
   }   
   
  const result = document.getElementById("result"); 
  
   compute().then(data => { 
     console.log(data);   
    return result.innerHTML=data 
   })
   .catch(err => { 
    
    return err; 
   })
 
