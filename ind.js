// document.getElementById("html1").addEventListener('load',()=>{
    // alert("<h1>NOT SUPPORTED FOR DEVICES HAVING WIDTH LESS THAN 1000PXS</h1>");
    // console.log(window.innerHeight);
    if(window.innerWidth<820){
        document.getElementById("html1").style.display="none";
        alert("application is not supported to mobile devices");
       
    }
// })
let a1= document.getElementsByClassName("container");
let a2= document.getElementsByClassName("loadpage");
let a3= document.getElementById("iconwhatsapp");
a1[0].style.display="none";
var timeout= setTimeout(()=>{
    a1[0].style.display="block";
    a2[0].style.display="none";
    // let c1=document.getElementById("background");
    // c1.style.backgroundColor="rgba(0, 100, 0, 0.922)"
    // a3.src="";
},5000)
// a2.remove();
