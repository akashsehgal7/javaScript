var h1 = document.querySelector('h1')
var btn = document.querySelector('button')
var inner = document.querySelector('.inner')

var grow = 0;

btn.addEventListener("click", ()=> {
    var num = 50 + Math.floor(Math.random()*50)
    
     btn.style.pointerEvents = 'none'
   var int = setInterval(()=> {
        grow++;
        h1.innerHTML = grow + '%'
        inner.style.width = grow + '%'
        
    },num)
    
    setTimeout(()=> {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
       console.log("Download in",num/10,"second");
    },num*100)
    
    
})