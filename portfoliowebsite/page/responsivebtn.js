const bar = document.querySelector("#menu-bars");
const equis = document.querySelector("#exit-bars");
const port = document.querySelector("#port");
const skill = document.querySelector("#skill");
const chatme = document.querySelector("#chat");
const btn = document.querySelector("#user");
const who = document.querySelector("#who")
var largura = window.screen.width;


  bar.onclick = function(a){
    a.preventDefault();
    bar.setAttribute("style","display:none");
    who.setAttribute("style","display:block");
    skill.setAttribute("style","display:block");
    port.setAttribute("style","display:block");
    chatme.setAttribute("style","display:block");
    btn.setAttribute("style","display:block");
    equis.setAttribute("style","display:block");
    console.log("bar click");
  }

  equis.onclick = function(b){
    b.preventDefault();
    bar.setAttribute("style","display:block");
    equis.setAttribute("style","display:none");
    who.setAttribute("style","display:none");
    skill.setAttribute("style","display:none");
    port.setAttribute("style","display:none");
    chatme.setAttribute("style","display:none");
    btn.setAttribute("style","display:none");
    console.log("xis click");
  }


