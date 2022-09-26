if(getCookie("usuario") == ""){
    window.location.replace("iniciar_sesion.html");
}

$(document).ready(() => {
    $("#nombre").attr("value", getCookie("usuario"));
    if(getCookie("correo") != "") $("#correo").attr("value", getCookie("correo"));
    else $("#correo").attr("value", "-");
})
