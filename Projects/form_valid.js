submit=document.getElementById("submit");

submit.addEventListener('click',myfunction);
function myfunction(){
  let first = document.getElementById("fname").value;
  let  x;
//   if(first==""){

// }
//   else
   if(first==""||typeof(first)==Number){
    x="invalid";
    document.getElementById("demo").innerText=x;
    document.getElementById("demo").style.color="red";
    document.getElementById("fname").style.border="2px solid red";

  }
 
  else  {
    x="valid";
    document.getElementById("demo").innerText=x;
    document.getElementById("demo").style.color="green";
    document.getElementById("fname").style.border="2px solid green";
  }


let email=document.getElementById("email").value;
let mail;
if(email==""){
    mail="invalid";
    
    document.getElementById("demo2").innerText=mail;
    document.getElementById("demo2").style.color="red";
    document.getElementById("email").style.border="2px solid red"
}
else{
    mail="valid";
    
    document.getElementById("demo2").innerText=mail;
    document.getElementById("demo2").style.color="green";
    document.getElementById("demo2").style.fontSize="20px";
    
    document.getElementById("email").style.border="4px solid green";
}
}



