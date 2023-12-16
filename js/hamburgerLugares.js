const hamburger = document.querySelector('.hamburgerLugares');
const menu = document.querySelector('.menu');
const boton = document.querySelector('.hamburgerLugares div img');

let estado = 'up';

hamburger.addEventListener('click', ()=>{
    
    menu.classList.toggle('show');
    if( estado == 'up' ){
        boton.src = 'img/desplegable2.png';
        estado = 'down';
    }
    else{
        boton.src = 'img/desplegable1.png';
        estado = 'up';
    }
    
});