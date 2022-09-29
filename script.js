const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function setCookie(name, value){
    document.cookie = name + "=" + value;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
	let c = ca[i];
	while (c.charAt(0) == ' ') {
	    c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	    return c.substring(name.length, c.length);
	}
    }
    return "";
}
/*
  function resize_botones(){
  if(window.innerWidth < 576){
  $("#grupo_botones").addClass("btn-group-vertical");
  $("#grupo_botones").removeClass("btn-group");
  }
  else{
  $("#grupo_botones").removeClass("btn-group-vertical");
  $("#grupo_botones").addClass("btn-group");
  }
  }
  $(window).resize(resize_botones);
*/

$(document).ready(() => {
    //resize_botones();
    if(getCookie("usuario") != ""){
    }
});
/*
   setCookie("nombre2", "FA");
   console.log(decodeURIComponent(document.cookie));
   console.log(getCookie("nombre"));
   setCookie("nombre", "Fabio");
   console.log("AAAA");

   if(viewportWidth < 992){
   }
 */
let navbarDesplegada = false;

function desplegarNavbar(){
    $(".navlink").toggleClass("d-block");
    $(".navlink").toggleClass("d-none");
    $(".navlink").toggleClass("align-self-start");
    $("#navbar").toggleClass("flex-row");
    $("#navbar").toggleClass("flex-column");
    $("#navbar").toggleClass("align-items-start");
    $("#navbar").toggleClass("text-center");    
    $("#navbar-button").toggleClass("width-100");
    if(getCookie("usuario") == "") $("#navbar-pedidos").addClass("d-none");	
	if(window.innerWidth < 576){
		if(!navbarDesplegada) $("#navbar-perfil").removeClass("d-none");
	}
	else $("#navbar-perfil").addClass("d-none");
	if(navbarDesplegada) $("#navbar-perfil").addClass("d-none");
    navbarDesplegada = !navbarDesplegada;
}

$(window).resize(() => {
    if(window.innerWidth > 992 && navbarDesplegada) desplegarNavbar();
});

let registrando = true;

function alertar(objetivo, mensaje, tipo, icon){
    const contenido = `<div class="alert alert-${tipo}"> <i class="${icon}"> </i> ${mensaje} </div>`;
    $(objetivo).append(contenido);
}

function tab_registrar(){
    $(".alerta").empty();
    if(!registrando){	
	$(".registro").removeClass("d-none");	
	$(".registro").addClass("d-block");
	$("#btn_tab_iniciar_sesion").toggleClass("btn-outline-primary");
	$("#btn_tab_iniciar_sesion").toggleClass("btn-primary");
	$("#btn_tab_registrar").toggleClass("btn-outline-primary");
	$("#btn_tab_registrar").toggleClass("btn-primary");
	$("#btn_iniciar_sesion").toggleClass("d-none");
	$("#btn_iniciar_sesion").toggleClass("d-block");
	$("#btn_registrar").toggleClass("d-none");
	$("#btn_registrar").toggleClass("d-block");
	registrando = true;
    }
}

function tab_iniciar_sesion(){
    $(".alerta").empty();
    if(registrando){
	$(".registro").addClass("d-none");	
	$(".registro").removeClass("d-block");
	$("#btn_tab_iniciar_sesion").toggleClass("btn-outline-primary");
	$("#btn_tab_iniciar_sesion").toggleClass("btn-primary");
	$("#btn_tab_registrar").toggleClass("btn-outline-primary");
	$("#btn_tab_registrar").toggleClass("btn-primary");
	$("#btn_iniciar_sesion").toggleClass("d-none");
	$("#btn_iniciar_sesion").toggleClass("d-block");
	$("#btn_registrar").toggleClass("d-none");
	$("#btn_registrar").toggleClass("d-block");
	registrando = false;
    }
}

function registrar(){
    $(".alerta").empty();
    if(registrando){
	const nombre = $("#nombre").val();
	const correo = $("#correo").val();
	const contrasena = $("#contrasena").val();
	const contrasena2 = $("#contrasena2").val();
	let exito = true;
	if(nombre.length > 40){
	    exito = false;
	    alertar("#alerta_nombre", "El nombre de usuario es demasiado largo", "danger", "fa-solid fa-triangle-exclamation");
	}	   
	if(nombre.length < 4){
	    exito = false;
	    alertar("#alerta_nombre", "El nombre de usuario es demasiado corto", "danger", "fa-solid fa-triangle-exclamation");
	}
	if(contrasena != contrasena2){
	    exito = false;
	    alertar("#alerta_contrasena2", "Las contraseñas no coindiden", "danger", "fa-solid fa-triangle-exclamation");
	}
	if(contrasena.length < 4){
	    exito = false;
	    alertar("#alerta_contrasena", "La contraseña es demasiado corta", "danger", "fa-solid fa-triangle-exclamation");
	}
	if(!/^\w+\@\w+\.\w+$/.test(correo)){
	    exito = false;
	    alertar("#alerta_correo", "La dirección de correo electrónico no es válida", "danger", "fa-solid fa-triangle-exclamation");
	}
	
	if(exito){
	    setCookie("usuario", nombre);
	    setCookie("correo", correo);	
	    window.location.href = "pagina_principal.html";
	}
    }
}

function iniciar_sesion(){
    $(".alerta").empty();
    if(!registrando){
	let exito = true;
	const nombre = $("#nombre").val();
	const contrasena = $("#contrasena").val();
	
	if(nombre.length < 4){
	    exito = false;
	    alertar("#alerta_nombre", "El nombre de usuario no es válido (debe contener al menos 4 caracteres)", "danger", "fa-solid fa-triangle-exclamation");
	}
	if(contrasena.length < 4){
	    exito = false;
	    alertar("#alerta_contrasena", "El nombre de usuario o contraseña son incorrectos", "danger", "fa-solid fa-triangle-exclamation");
	}

	if(exito){
	    setCookie("usuario", nombre);
	    window.location.href = "pagina_principal.html";
	}
    }
}

function cerrar_sesion(){
    setCookie("usuario", "");
    setCookie("correo", "");
    window.location.href = "iniciar_sesion.html";
}

