let title=document.querySelector('input');
let save=document.querySelector('button');
let msg=document.querySelector('textarea');
let span=document.querySelector('header span');
let allNotes=[];
span.innerHTML=new Date().toDateString();
let section=document.querySelector('section');



save.addEventListener('click',()=>{

    if(title.value!='' && msg.value!=''){
        allNotes.push({title:title.value,msg:msg.value})
    } 
    let temp=allNotes.map((e,i)=>{
                return `<article> <h4>${e.title}</h4>
                <p> ${e.msg}</p>  </article>`
        
            })
            section.innerHtml=temp.join('');
        let article=document.querySelectorAll('article')});

    toHtml();
    let article=document.querySelectorAll('article');

    article.forEach((e,i)=>{
        e.addEventListener('click',()=>{
            allNotes=allNotes.filter((head,i)=>head.title!=)
        })
    }
//     let temp=allNotes.map((e,i)=>{
//         return `<article> <h4>${e.title}</h4>
//         <p> ${e.msg}</p> </article>`

//     })
//     section.innerHtml=temp.join('');
// let article=document.querySelectorAll('article')});


