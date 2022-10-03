if(getCookie("usuario") == ""){
    window.location.replace("iniciar_sesion.html");
}

function Pedido(tipo, titulo, texto){
    return {
		tipo: tipo,
		titulo: titulo,
		texto: texto
    };
}
let idCount = 0;
function crearTarjeta(pedido){
	idCount++;
    const elemento = `
	<div id="tarjeta-${idCount}" class="p-1 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
	  <div class="card">
	    <div class="card-header"> ${pedido.tipo} </div>
	    <div class="card-body">
	      <h4 class="card-title"> ${pedido.titulo} </h4>
	      <p class="card-text"> ${pedido.texto} </p>
	      <button onclick="eliminarTarjeta('tarjeta-${idCount}')" class="btn btn-danger"> <i class="fa-solid fa-trash"> </i> Eliminar pedido </button>
	    </div>
	  </div>
	</div>
`
    return {elemento, idCount};
}

let pedidos = [];
/*
for(let i = 0; i < 10; i++){
    pedidos.push(crearTarjeta(Pedido("Back-End", "Página", "Hacer una página de coso")));
    pedidos.push(crearTarjeta(Pedido("Ejemplo", "Titulo de ejemplo", "Texto")));
    pedidos.push(crearTarjeta(Pedido("tipo", "Titulo", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")));
}
*/

pedidos.push(crearTarjeta(Pedido("Front End", "Pedido de ejemplo", "Hacer una página web que haga algo y sirva de ejemplo")));
pedidos.push(crearTarjeta(Pedido("Back End", "Servidor de ejemplo", "Hacer una servidor web que haga algo y sirva de ejemplo")));
pedidos.push(crearTarjeta(Pedido("Multidisciplina", "Programa de ejemplo", "Hacer un progrma que haga algo y sirva de ejemplo")));

$(document).ready(() => {
    for(let i = 0; i < pedidos.length; i++){
		$("#tarjetas").append(pedidos[i].elemento);
    }
});

function eliminarTarjeta(id){
    $("#" + id).remove();
    let eliminar = pedidos.map((elem2, index) => {
		if(elem2.id == id){
			console.log(index);
			return index;
		}
		else return -1;
    });
    eliminar = eliminar.filter((elem1) => {
		return elem1 >= 0;
    });
    console.log(eliminar);
    pedidos.splice(eliminar[0], 1);
}

function enviarPedido(){
    const texto = $("#texto").val();
    const titulo = $("#titulo_pedido").val();
    const tipo = $("#categoria option:selected").text();
    //if(titulo.length > 1 && texto.length > 1){
    let exito = true;

    
    
    $(".alerta").empty();
    if((!/\w+/.test(texto)) && texto.length > 0){
	exito = false;
	alertar("#alerta_texto", "La descripción debe contener caracteres alfanuméricos", "danger", "fa-solid fa-triangle-exclamation");
    }
    if(texto.length < 1){
	exito = false;
	alertar("#alerta_texto", "La descripción no puede estar vacía", "danger", "fa-solid fa-triangle-exclamation");
    }
    if((!/\w+/.test(titulo)) && titulo.length > 0){
	exito = false;
	alertar("#alerta_titulo", "El título del pedido debe contener caracteres alfanuméricos", "danger", "fa-solid fa-triangle-exclamation");
    }
    if(titulo.length < 1){
	exito = false;
	alertar("#alerta_titulo", "El título del pedido no puede estar vacío", "danger", "fa-solid fa-triangle-exclamation");
    }
    
    if(exito){
	$("#texto").val("");
	$("#titulo_pedido").val("");
	const elemento = crearTarjeta(Pedido(tipo, titulo, texto));
	pedidos.push(elemento);
	$("#tarjetas").append(elemento.elemento);
    }
}

let form_desplegado = false;
function desplegar_form(){
    $("#form-pedido").toggleClass("d-none");
    $("#form-pedido").toggleClass("d-block");
    $("#btn_mostrar_form").toggleClass("d-none");
    $("#btn_mostrar_form").toggleClass("d-block");

    if(form_desplegado){
	$("#texto").val("");
	$("#titulo_pedido").val("");	
    }

    form_desplegado = !form_desplegado;
}
