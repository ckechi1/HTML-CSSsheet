
 const value = document.getElementById("value");
 const form = document.getElementById("form");
 const result = document.getElementById("result");


 form.addEventListener("click" , (event) =>{

    event.preventDefault();
    event.stopPropagation();

     let data = {
      "value" : value.value
     }

     console.log(value.value);

 var request = new XMLHttpRequest();
 request.withCredentials = true;
 request.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
   let response = JSON.parse(this.responseText);

     console.log(result.innerHTML=response.postData.text);

  }});

request.open("POST", "https://mockbin.com/request");
 request.setRequestHeader("Content-Type", "application/json");
 request.send(JSON.stringify(data));

 })



