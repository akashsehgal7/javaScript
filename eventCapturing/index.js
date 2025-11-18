let a = document.querySelector(".A");
let b = document.querySelector(".B");
let c = document.querySelector(".C");
let button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log("button clicked");
})
c.addEventListener("click",function(){
    console.log("C clicked");
},true)
b.addEventListener("click",function(){
    console.log("B clicked");
})
a.addEventListener("click",function(){
    console.log("A clicked");
},true)