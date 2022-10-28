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
var d=5;
var number=()=>{
   let name= prompt("Enter name of the Friend");
   let contact= document.getElementById("contat");
   let str='<div class="contact-info"><img src="contact-image.jpg" width="50px" height="50px" style="border-radius: 50%;"><div class="contact-number" onclick="chatting(this.id)" id="heading'+d+'"><h2 style="margin-top: 1px;">'+name+'</h2> </div></div>';
   var elementcreated= document.createElement("div");
   elementcreated.innerHTML=str;
   if(name!=null && name!=""){
   contact.append(elementcreated);
   }
   d++;
}
var chatting=(ide)=>{
    document.getElementsByClassName("center-initial-image")[0].style.display="none";
    document.getElementById("chatting-top-bar").style.display="flex";
    document.getElementById("heading20").innerHTML=document.getElementById(ide).innerHTML;
    document.getElementById("chatting-bottom-bar").style.display="flex";
}
var k=0;
var chatoptionsdot=()=>{
    let optionchatscreen=document.getElementById("options-chat-screen");
    if(k==0){
    optionchatscreen.style.display="flex";k=1;}
    else{
        optionchatscreen.style.display="none";k=0;
    }
}
var b=1;
var c=true;
// var newgroup=document.getElementById("new");
var newgroup= function(text){
    let new1=document.getElementsByClassName("kamchor")[0];
    let opt= document.getElementById("options");
    let back= document.getElementById("back");
    let increase=document.getElementById("header1");
    new1.style.display="block";
    let idname="ele"+b;
    new1.id=idname;
    let new2=document.getElementById(idname);
    new2.style.borderRight="2px solid black"
    new2.style.animation="increasewidth 1s 1";
    opt.style.display="none";
    back.style.display="block";
    new1.style.width="30px";
    increase.innerHTML="<h1>"+document.getElementById(text).innerText+"</h1>";
    console.log(increase.innerHTML);
    a=1;
    b++;
    if(text=="new"){
        let element=document.createElement("div");
        element.innerHTML="<input type='text' width='80%' height='60px' placeholder='ENTER THE NAME OF THE GROUP'/>";
        element.style.marginTop="10px";
        element.style.display="flex";
        element.style.justifyContent="center";
        new1.appendChild(element);
    }

}
var backMove=function(){
    let new3=document.getElementsByClassName("kamchor")[0];
    new3=document.getElementById(new3.id);
    let back= document.getElementById("back");
    let increase=document.getElementById("header1");
    increase.innerHTML="";
    // console.log(increase.)
    // new1.style.animation="decreasewidth 1s 1";
    // console.log(new3);
    // new3.style.display="block";
    new3.style.borderRight="0px solid white";
    new3.style.animation="decreasewidth 1s 1";
    // new3.style.display="none";
    back.style.display="none";
    new3.style.width="1px";
    b++;
}
