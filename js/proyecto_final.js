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

const botonAporte = document.querySelector('.boton-central');
const botonDona = document.querySelector('.dona');
const botonCompra = document.querySelector('.compra');



botonAporte.addEventListener('click', () => {});
botonDona.addEventListener('click', () => {
console.log('funciona el boton')});
botonCompra.addEventListener('click', () => {console.log('funciona el boton')});

// Formulario

document.addEventListener('DOMContentLoaded', function() {
    // Llamamos a mostrarPregunta al cargar la página para establecer el estado inicial
    mostrarPregunta(2);
    mostrarPregunta(4);
});

function mostrarPregunta(numero) {
    var pregunta = document.getElementById("pregunta" + numero);
    var respuesta = document.getElementById("respuesta" + numero);

    var radioSi = document.getElementById("pregunta" + (numero - 1) + "Si");

    if (radioSi.checked) {
        pregunta.classList.remove("hidden");
    } else {
        pregunta.classList.add("hidden");
        // Limpiamos la respuesta cuando se oculta la pregunta
        respuesta.value = "";
    }
}