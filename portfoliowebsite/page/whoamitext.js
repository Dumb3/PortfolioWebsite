const text = document.querySelector("#mytxt");
const more = document.querySelector("#more");
const less = document.querySelector("#less");
const whoami = document.querySelector(".text-who");
const s = document.querySelector(".skills");
var largura = window.screen.width;

more.onclick = function(a){
  a.preventDefault();
  console.log("clicou no more");
  text.setAttribute("style","overflow:visible","color:white");
  whoami.setAttribute("style","height:850px");
  less.setAttribute("style","display:block");
  more.setAttribute("style","display:none");
  s.setAttribute("style","margin-top:700px");
}
less.onclick = function(b){
  b.preventDefault();
  console.log("clicou no less");
  text.setAttribute("style","overflow:hidden");
  whoami.setAttribute("style","height:150px");
  more.setAttribute("style","display:block");
  less.setAttribute("style","display:none");
  s.setAttribute("style","margin-top:0");
}

if(largura < 457){
  more.onclick = function(c){
    c.preventDefault();
    console.log("clicou no more");
    text.setAttribute("style","overflow:visible","color:white");
    whoami.setAttribute("style","height:900px");
    less.setAttribute("style","display:block");
    more.setAttribute("style","display:none");
    s.setAttribute("style","margin-top:1250px");
  }
  less.onclick = function(d){
    d.preventDefault();
    console.log("clicou no less");
    text.setAttribute("style","overflow:hidden");
    whoami.setAttribute("style","height:150px");
    more.setAttribute("style","display:block");
    less.setAttribute("style","display:none");
    s.setAttribute("style","margin-top:400px");
  }
}