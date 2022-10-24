let a=1;
var btn=function(){
    let opt= document.getElementById("options");
    if(a%2==1){
    opt.style.display="flex";
    a=0;
}
    else{
    opt.style.display="none";
    a=1;}
}
var number=()=>{
   let name= prompt("Enter name of the Friend");
   let contact= document.getElementById("contat");
   let str='<div class="contact-info"><img src="contact-image.jpg" width="50px" height="50px" style="border-radius: 50%;"><div class="contact-number"><h2 style="margin-top: 1px;">'+name+'</h2> </div></div>';
   var elementcreated= document.createElement("div");
   elementcreated.innerHTML=str;
   if(name!=null){
   contact.append(elementcreated);
   }
}
// var b=1;
// var c=true;
// var newgroup=document.getElementById("new");
// var newgroup= function(){
//     let new1=document.getElementById("newgroup");
//     let opt= document.getElementById("options");
//     let back= document.getElementById("back");
//     let increase=document.getElementById("element1");
//     let idname="ele"+b;
//     increase.style.animation="increasewidth 1s 1";
//     opt.style.display="none";
//     back.style.display="flex";
//     new1.style.width="30vw";
//     a=1;
//     b++;
// }
// var backMove=function(){
//     let new1=document.getElementById("newgroup");
//     new1.style.width="1px";
//     let back= document.getElementById("back");
//     new1.style.animation="decreasewidth 1s 1";
//     back.style.display="none";
//     b++;
// }
