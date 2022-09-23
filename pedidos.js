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

function crearTarjeta(pedido){
    const elemento = `

	<div class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
	  <div class="card">
	    <div class="card-header"> ${pedido.tipo} </div>
	    <div class="card-body">
	      <h4 class="card-title"> ${pedido.titulo} </h4>
	      <p class="card-text"> ${pedido.texto} </p>
	      <button class="btn btn-danger"> Eliminar pedido </button>
	    </div>
	  </div>
	</div>
`
}

let pedidos = [];

