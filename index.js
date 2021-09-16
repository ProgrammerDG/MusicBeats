var songs =  document.getElementsByClassName("musicImg");
for(var i of songs){
    i.addEventListener("click",play);
}

function play(){
    var clas = this.classList;
    document.getElementById("playing").setAttribute("src","music/"+clas[1]+".mp3");
    document.getElementById("wheelImg").setAttribute("src","images/"+clas[1]+"img.jpg");
    document.getElementById("wheel").style.animation="wheelAni 5s linear infinite";
    for(var i of songs){
        i.style.opacity="1";
    }
    this.style.opacity="0.5";
}

var playing = document.getElementById("playing");
playing.addEventListener("pause",function(){
    document.getElementById("wheel").style.animation="none";
})
playing.addEventListener("play",function(){
    document.getElementById("wheel").style.animation="wheelAni 5s linear infinite";
})


var hearts = document.getElementsByClassName("mh");
for(var i of hearts){
    i.addEventListener("click",addFav);
}
var favLi = [];
function addFav(){
    var id = this.getAttribute("id");
    var flag = true;
    for(var i=0;i<favLi.length;i++){
        if(favLi[i]==id){
            flag=false;
            favLi.splice(i,1);
            this.style.color="pink";
            document.getElementById(id+"fav").remove();
            break;
        }
    }
    if(flag){
        favLi.push(id);
        this.style.color="red";
        var a = document.getElementById("rightDiv");
        var b = document.createElement("div");
        b.setAttribute("class","musicCont");
        b.setAttribute("id",id+"fav");
        var d = document.createElement("i");
        d.classList.add("fa","fa-minus","fa-2x","mm");
        d.setAttribute("id","m"+id);
        d.addEventListener("click",removeFav);
        b.appendChild(d);
        var c = document.createElement("img");
        c.classList.add("musicImg",id);
        c.setAttribute("src","images/"+id+"img.jpg");
        c.addEventListener("click",play);
        b.appendChild(c);
        a.appendChild(b);
    }
}

function removeFav(){
   var a = this.getAttribute("id");
   var result="";
   for(var i=1;i<a.length;i++){
       var ele = a[i];
        result+=ele;
   }
   var index = favLi.indexOf(result);
   favLi.splice(index,1);
   document.getElementById(result+"fav").remove();
   var heart = document.getElementById(result);
   heart.style.color="pink";
}

var mood = document.getElementById("mood");
mood.addEventListener("keyup",()=>{
    var input = document.getElementById("mood");
    var result = input.value.toUpperCase();
    input.value=result;
})
mood.addEventListener("focus",()=>{
    var input = document.getElementById("mood");
    input.value="";
    input.style.color="black";
})

var moodBtn = document.getElementById("moodBtn");
moodBtn.addEventListener("click",()=>{
    var input = document.getElementById("mood");
    if(input.value=="HAPPY"){
        document.getElementById("playing").setAttribute("src","music/m6.mp3");
            document.getElementById("wheelImg").setAttribute("src","images/musicLogo.jpg");
    }else if(input.value=="SAD"){
        document.getElementById("playing").setAttribute("src","music/m4.mp3");
            document.getElementById("wheelImg").setAttribute("src","images/musicLogo.jpg");
    }else if(input.value=="EXCITED"){
        document.getElementById("playing").setAttribute("src","music/m7.mp3");
            document.getElementById("wheelImg").setAttribute("src","images/musicLogo.jpg");
    }else if(input.value=="ROMANTIC"){
        document.getElementById("playing").setAttribute("src","music/m1.mp3");
            document.getElementById("wheelImg").setAttribute("src","images/musicLogo.jpg");
    }else if(input.value=="LONELY"){
        document.getElementById("playing").setAttribute("src","music/m11.mp3");
            document.getElementById("wheelImg").setAttribute("src","images/musicLogo.jpg");
    }else{
        input.value="NO MUSIC FOUND!";
        input.style.color="red";
    }
})