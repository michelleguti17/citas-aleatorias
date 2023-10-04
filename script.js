let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

 function generarEntero(min,max){
    return Math.floor((Math.random() * (max - min)) + min);
 }

function cambiarCita(){
    let indiceAleatorio = generarEntero(0,citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;

}

cambiarCita();
botonElem.addEventListener('click',cambiarCita);

