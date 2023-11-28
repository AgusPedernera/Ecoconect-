// const botonAporte = document.querySelector('.boton-central');
// const botonDona = document.querySelector('.dona');
// const botonCompra = document.querySelector('.compra');



// botonAporte.addEventListener('click', () => {});
// botonDona.addEventListener('click', () => {
// console.log('funciona el boton')});
// botonCompra.addEventListener('click', () => {console.log('funciona el boton')});


const categoria = document.querySelector('.cartas');
const boton = document.querySelector('img[alt="menu"]');


const nav = document.querySelector('header nav');

let estado = 'up';
boton.addEventListener('click', 
    function (){
        categoria.classList.toggle('desplegado');
        if( estado == 'up' ){
            boton.src = 'img/cruz.png';
            estado = 'down';
        }
        else{
            boton.src = 'img/hamburg 1.png';
            estado = 'up';
        }
    }
); 