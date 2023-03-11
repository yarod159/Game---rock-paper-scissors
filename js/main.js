let puntosUsuario = 0;
let puntosPc = 0;
let instricciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuarios = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contendorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let botonesArmas = document.querySelectorAll(".arma");

botonesArmas.forEach((boton) => {
  boton.addEventListener("click", inciarTurno);
});

function inciarTurno(e) {
  let eleccionPC = Math.floor(Math.random() * 3);
  let eleccionUsusario = e.currentTarget.id;
  console.log(eleccionUsusario);

  if (eleccionPC === 0) {
    eleccionPC = "piedra🌍";
  } else if (eleccionPC === 1) {
    eleccionPC = "papel📋";
  } else if(eleccionPC===2) {
    eleccionPC = "tijera✂";
  }
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
  
}

function ganaPC(){
  puntosPc++;
  contenedorPuntosPC.innerText=puntosPc;
  contendorGanaPunto.innerText="la computadora gano un punto";
  console.log(contendorGanaPunto);
}

function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuarios.innerText=puntosUsuario;
    contendorGanaPunto.innertext="ganaste un punto ";
    console.log(contendorGanaPunto);
   
}

function empate(){
    contendorGanaPunto.innertext="empate";
}