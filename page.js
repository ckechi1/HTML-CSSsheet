let Movie = [ 
     { title : "a" , year:2018 , rating: 4.5 }, 
     { title : "b" , year:2018 , rating: 4.7 }, 
     { title : "c" , year:2018 , rating: 3 }, 
     { title : "d" , year:2018 , rating: 4.5 }, 
]; 
 

 let  all2K18Movies = Movie.filter(m => m.year===2018 && m.rating >=4); 
 console.log(all2K18Movies); 
  
 let sortmoviebyrate = all2K18Movies.sort((a , b ) => a.rating - b.rating) 
                                     .reverse(); 

 console.log(sortmoviebyrate.map(m=>m.title)); 
