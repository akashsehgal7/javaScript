var btn = document.querySelector('.btn')
var main = document.querySelector('main')
var arr = ['hey! i am Akash Sehgal', 'Keep parcticing guys...','JS is love','Hello dosto !','Hor tum kase ho !']
btn.addEventListener("click", function(){
    var h1 = document.createElement('h1')

    var x = Math.random()*100;
    var y = Math.random()*100;
    var r = Math.random()*365;
    var scl = Math.random()*3
    var a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

   
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = r + 'deg'
    main.appendChild(h1)
    
    
})



