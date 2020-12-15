 
let blogPost = { 
   title : "Trump perds face a biden", 
   body : " Trump a perdu contre biden mais refuse de ladmettre", 
   author : "cheickAt", 
   comments : [{ author : "mosa ", 
                body : "wow inbelivable"}], 
   isLive : true              
};  
   
    function ShowDEtail(blogPost){ 
         for ( key in blogPost ){ 
              console.log(key ,  blogPost[key]);
         }  
    }
 
    ShowDEtail(blogPost);
     
     
       
        
/*  
const Adress1 = new Adress('a' , 'b' , 'c'); 
const Adress2 = new Adress('a' , 'b' , 'c');   

function Adress(city , zipcode , street ){ 
      
     this.city=city; 
     this.street=street; 
     this.zipcode=zipcode; 

} 
 
function AreEquals (Adress1 , Adress2 ){ 
   
     if (Adress1 === Adress2 ) return true ; 
      
} 
 
function AreTheSame (Adress1 , Adress2){ 
      
     if ( Adress1 == Adress2) return true ; 
}
 
 let value1 = AreEquals(Adress1.city , Adress2.city); 
 let value2 = AreTheSame(Adress1.zipcode , Adress2.zipcode);  
  
 console.log(`la valeur de AreEquals : ${value1} 
   
               la valeur de AretheSame : ${value2}`); */