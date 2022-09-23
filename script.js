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
$(document).ready(() => {
    resize_botones();
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
    navbarDesplegada = !navbarDesplegada;
}

$(window).resize(() => {
    if(window.innerWidth > 992 && navbarDesplegada) desplegarNavbar();
});

let registrando = true;

function registrar(){
    if(registrando){
	const nombre = $("#nombre").val();
	const contrasena = $("#contrasena").val();
	const contrasena2 = $("#contrasena2").val();
	console.log(nombre);
	if(nombre.length < 40){
	    if(nombre.length >= 4){
		if(contrasena === contrasena2){
		    if(contrasena.length >= 4){
			setCookie("usuario", nombre);
			alert("Registrado");
			window.location.href = "pagina_principal.html";
		    }
		    else alert("La contraseña es demasiado corta");
		}
		else alert("Las contraseñas no coinciden");
	    }
	    else alert("El nombre de usuario es demasiado corto");	    
	}
	else alert("El nombre de usuario es demasiado largo");
    }
    else{
	$(".registro").removeClass("d-none");	
	$(".registro").addClass("d-block");
	$("#btn_iniciar_sesion").toggleClass("btn-outline-primary");
	$("#btn_iniciar_sesion").toggleClass("btn-primary");
	$("#btn_registrar").toggleClass("btn-outline-secondary");
	$("#btn_registrar").toggleClass("btn-secondary");	
	registrando = true;
    }
}

function iniciar_sesion(){
    if(!registrando){
	const nombre = $("#nombre").val();
	if(nombre.length >= 4){
	    setCookie("usuario", nombre);
	    window.location.href = "pagina_principal.html";
	}
    }
    else{
	$(".registro").addClass("d-none");	
	$(".registro").removeClass("d-block");
	$("#btn_iniciar_sesion").toggleClass("btn-outline-primary");
	$("#btn_iniciar_sesion").toggleClass("btn-primary");
	$("#btn_registrar").toggleClass("btn-outline-secondary");
	$("#btn_registrar").toggleClass("btn-secondary");
	registrando = false;
    }
}

