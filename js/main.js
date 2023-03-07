let puntoUsuario = 0;
let puntoPc = 0;
let instricciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuarios = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contendorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");
let elegiTuArma=document.querySelector("#elegi-tu-arma");
let botonesArmas=document.querySelectorAll('.arma');
botonesArmas.forEach(boton=>{
    boton.addEventListener('click', inciarTurno);
})
mensaje.classList.add("disabled")

function inciarTurno(e){
    contenedorPuntosUsuarios.innerHTML=3;
}