var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },
    {
        team: 'SRH',
        primary: 'oringe',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver'
        }
]

const h1 = document.querySelector('h1')
const btn = document.querySelector('.btn')
const main = document.querySelector('main')

btn.addEventListener("click",function(){
    var num = Math.floor(Math.random()*arr.length)
    console.log(arr[num].team);

    h1.innerText = arr[num].team
    h1.style.backgroundColor = arr[num].secondary
    main.style.backgroundColor = arr[num].primary
    
})