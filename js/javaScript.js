
/* ------------------FORMULARIO------------------ */
function validar(){
	let primero = document.querySelector("form input");
    primero.focus();
    let correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

	let f_nombre = document.querySelector("#f_nombre");
	f_nombre.classList.remove("error");

	let f_apellido = document.querySelector("#f_apellido");
	f_apellido.classList.remove("error");

	let f_email = document.querySelector("#f_email");
	f_email.classList.remove("error");

	let lta_errores = document.querySelector("#errores");
	lta_errores.innerHTML="";
	lta_errores.style.display = "none";

	let lta_mensajes = document.querySelector("#mensajes");

	let hubo_error = false;

	if(f_nombre.value.trim() ==""){
		f_nombre.classList.add("error");
		let p = document.createElement("p");
		p.innerHTML = "Falta el nombre";
		lta_errores.appendChild(p);
		hubo_error = true;
	} else if(f_nombre.value.length > 20) {
        f_nombre.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Longitud máxima del nombre: 20";
        lta_errores.appendChild(p);
        hubo_error = true;

	}
	if(f_apellido.value.trim() ==""){
		f_apellido.classList.add("error");
		let p = document.createElement("p");
		p.innerHTML = "Falta el apellido";
		lta_errores.appendChild(p);
		hubo_error = true;
	}else if(f_apellido.value.length > 20) {
        f_apellido.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "Longitud máxima del apellido: 20";
        lta_errores.appendChild(p);
        hubo_error = true;

	}

	if(f_email.value.trim() !="" && !correo.test(f_email.value)){
		f_email.classList.add("error");
		let p = document.createElement("p");
		p.innerHTML = "Email invalido";
		lta_errores.appendChild(p);
		hubo_error = true;
	}

	if(hubo_error){
		lta_errores.style.display = "initial";
	} else {
        let p = document.createElement("p");
        if(f_email.value != "") {
        p.innerHTML =  
        "Nombre: " +
        f_nombre.value + " " +
        f_apellido.value + ". Mail: " +
        f_email.value + ".";
    } else {
        p.innerHTML =  
        "Nombre: " +
        f_nombre.value + " " +
        f_apellido.value + ".";
    }
        lta_mensajes.innerHTML="";
        lta_mensajes.appendChild(p);
        document.forms["f_contacto"].reset();
        let primero = document.querySelector("form input");
        primero.focus();
    }
	return false;
}

/* ------------------CARRUSEL------------------ */
document.addEventListener('DOMContentLoaded', () => {
	// Seleccionar elementos HTML relevantes
const grande = document.querySelector('.grande');
const botones = document.querySelectorAll('.boton');

let indice = 0;
const totalImagenes = 4;

//avanza al siguiente elemento
function avanzar() {
  indice++;
  if (indice >= totalImagenes) {
    indice = 0;
  }
  moverCarrusel();
}

//retrocede al elemento anterior
function retroceder() {
  indice--;
  if (indice < 0) {
    indice = totalImagenes - 1;
  }
  moverCarrusel();
}

//mueve el carrusel a la imagen actual
function moverCarrusel() {
  const operacion = indice * -25.4;
  grande.style.transform = `translateX(${operacion}%)`;
  
//saca el activo a todos los botones
  botones.forEach((boton) => {
    boton.classList.remove('activo');
  });
  
//pone el activo al boton seleccionado	
  botones[indice].classList.add('activo');
}

//pone el evento a los botones
botones.forEach((boton, i) => {
  boton.addEventListener('click', () => {
    indice = i;
    moverCarrusel();
  });
});

//pone eventos a los botones de avanzar y retroceder
document.querySelector('#btn-avanzar').addEventListener('click', avanzar);
document.querySelector('#btn-retroceder').addEventListener('click', retroceder);

});

