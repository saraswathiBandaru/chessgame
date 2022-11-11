let button1=document.getElementById("button1");
let button2=document.getElementById("button2")
let next=document.getElementById("next");
let form=document.getElementById('form');
let form2=document.getElementById('form2');
let email=document.getElementById('email');
let submit=document.getElementById("submit");
let msg=document.getElementById('message');
submit.addEventListener('click',next_button);
function form1(){
    button1.style.backgroundColor="red";
    button2.style.backgroundColor="white"
    // button2.classList.add('white');
    // button2.classList.remove('green');
    form2.style.display="none";
    form.style.display="block";
}
function form3(){
     button2.style.backgroundColor="red";
     button1.style.backgroundColor="white";
     button1.classList.add('white')
     form2.style.display="block";
    form.style.display="none";
   
    
}

let  first=document.getElementById('first').value;
let second=document.getElementById('second').value;


// console.log(first);



function next_button(){
    first.trim();  
    second.trim();

if(typeof first==Number|| first==" ")
{
    //  console.log("hai");
    // alert("hai");
    first.style.border="6px solid red";
        msg.innerText="Please fill  this feild";
       
}
else if(length(first)<3){
    msg.innerText="Please fill  this feild";
}
else{
    msg.innerText="success";
    msg.style.color="green";
    console.log("done");
    return true;
}
    

if(typeof(second)==Number|| second==" ")
{
     console.log("hai");
    alert("hai");
    first.style.border="6px solid red";
        msg.innerText="Please fill  this feild";
       
}
else if(first.length<3){
    msg.innerText="Please fill  this valid feild";
}
else{
    msg.innerText="success";
    msg.style.color="green";
    // console.log("done");

}
    



}
