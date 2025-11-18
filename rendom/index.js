const block = document.querySelector('.block')
const btn = document.querySelector('.btn')

btn.addEventListener("click",function(){
    const c1 = Math.floor(Math.random() * 256)
    const c2 = Math.floor(Math.random() * 256)
    const c3 = Math.floor(Math.random() * 256)
    const color = `rgb(${c1},${c2},${c3})`
    block.style.backgroundColor = color
})


