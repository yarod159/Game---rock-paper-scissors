let puntosUsuario = 0;
let puntosPC = 0;
let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuarios = document.querySelector("#puntos-usuario");
let contenedorPuntosPC= document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let botonesArmas = document.querySelectorAll(".arma");
let reniciar=document.querySelector("#reiniciar");
botonesArmas.forEach((boton) => {
  boton.addEventListener("click", inciarTurno);
});

function inciarTurno(e) {
  let eleccionPC = Math.floor(Math.random() * 3);
  let eleccionUsusario = e.currentTarget.id;
  console.log(eleccionUsusario);

  contenedorEleccionUsuario.innerText=eleccionUsusario;

  if (eleccionPC === 0) {
    eleccionPC = "piedra🌍";
  } else if (eleccionPC === 1) {
    eleccionPC = "papel📋";
  } else if(eleccionPC===2) {
    eleccionPC = "tijera✂";
  }

  contenedorEleccionPc.innerText=eleccionPC;

  console.log(eleccionPC);

  if (
    (eleccionUsusario === "piedra🌍" && eleccionPC === "tijera✂") ||
    (eleccionUsusario === "papel📋" && eleccionPC === "piedra🌍") ||
    (eleccionUsusario === "tijera✂" && eleccionPC === "papel📋")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPC === "piedra🌍" && eleccionUsusario === "tijera✂") ||
    (eleccionPC === "papel📋" && eleccionUsusario === "piedra🌍") ||
    (eleccionPC === "tijera✂" && eleccionUsusario === "papel📋")
  ) {
    ganaPC();
  } else {
    empate();
  }
  mensaje.classList.remove('disabled');
  

  if(puntosUsuario===5 || puntosPC===5){
    if(puntosUsuario===5){
      instrucciones.innerText="Ganaste"
      
    }else if(puntosPC===5){
      instrucciones.innerText="Perdiste"
    }
    elegiTuArma.classList.add("disabled");
    reniciar.classList.remove("disabled");
    reniciar.addEventListener("click",reniciarJuego);
  }

}

function ganaUsuario() {
  puntosUsuario++;
  contenedorPuntosUsuarios.innerText = puntosUsuario;
  contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
  puntosPC++;
  contenedorPuntosPC.innerText = puntosPC;
  contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
}

function empate() {
  contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reniciarJuego(){
  puntosPC=0;
  puntosUsuario=0;
  contenedorPuntosPC.innerText=puntosPC;
  contenedorPuntosUsuarios.innerText=puntosUsuario;
  instrucciones.innerText="El primero en llegar a 5 puntos gana..";
  reniciar.classList.add("disabled");
  elegiTuArma.classList.remove("disabled");
  mensaje.classList.add("disabled");
 
 
}