
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
a2.remove();