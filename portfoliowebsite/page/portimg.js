const portfolio = document.querySelector(".portfolio-box")
const secportf = document.querySelector("#second-portf-cont");
const rose1 = document.querySelector(".rose-img1");
const rose2 = document.querySelector(".rose-img2");
const website = document.querySelector("img-website");

portfolio.onmouseover = function(a){
  a.preventDefault();
  rose1.setAttribute("style","filter:grayscale(0)");
}
secportf.onmouseover = function(b){
  b.preventDefault();
  rose2.setAttribute("style","filter:grayscale(0)");

}
portfolio.onmouseout = function(c){
  c.preventDefault();
  rose1.setAttribute("style","filter:grayscale(100)");
}
secportf.onmouseout = function(d){
  d.preventDefault();
  rose2.setAttribute("style","filter:grayscale(100)");
}
