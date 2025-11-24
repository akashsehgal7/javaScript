var a = 0;
var int = setInterval(()=>{
    a++;
    console.log(a);
},50)

setTimeout(()=>{
    clearInterval(int)
},5000)