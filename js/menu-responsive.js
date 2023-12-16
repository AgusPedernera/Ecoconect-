
/*hamburguer de dona y compra */

const boton = document.querySelector('header img[alt="menu"]');
const nav = document.querySelector('header nav');

let estado = 'up';
boton.addEventListener(
    'click',
    function (){
        nav.classList.toggle('desplegado');
        if( estado == 'up' ){
            boton.src = 'img/cruz.png';
            estado = 'down';
        }
        else{
            boton.src = 'img/hambu.png';
            estado = 'up';
        }
    }
);