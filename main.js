const count = document.getElementById('count')
const message=document.querySelector('.message')
let x = 10

let interval = setInterval(() => {
    if (x == 0) {
    clearInterval(interval)
     message.style.opacity="0"
 } 
    count.innerHTML = ('0' + x).slice(-2)   
    x--
}, 1000)
    

