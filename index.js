let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

const jump = ()=>{
    mario.classList.add('jump'); 
    
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)    
} 
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 71){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    }
    
},10)

document.addEventListener('keydown', jump);