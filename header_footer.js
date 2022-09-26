
const header = `
  <header class="container-fluid row d-flex align-items-center" id="header">
    <h1 class="col-lg-8 col-xl-10 col-md-6 col-sm-6 col-12" id="titulo"> Consultoría IT </h1>
    <a href="iniciar_sesion.html" id="iniciar_sesion" class="col-lg col-xl col-sm col-md col btn btn-primary"> Iniciar Sesión</a>
    <nav class="col-12 d-flex flex-row justify-content-center justify-content-sm-start align-items-center" id="navbar">
      <i class="fa-solid fa-bars d-block d-lg-none p-3" id="navbar-button" onclick="desplegarNavbar()"> </i>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="pagina_principal.html"> Página Principal </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="front_end.html"> Programación Web Front End </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="back_end.html"> Programación Web Back End </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="programacion_otros.html"> Programación (Otros) </a>
      <a id="navbar-pedidos" class="navlink d-none py-2 px-2 px-lg-4" href="pedidos.html"> Mis pedidos </a>
    </nav>
  </header>`;

const footer = `
  <footer id="footer">
    <p> &copy; Consultoría IT - 2022</p>
    <p> <a href="#"> Contacto </a> </p>
  </footer>`;

$("document").ready(() => {
    $("header").replaceWith(header);
    $("footer").replaceWith(footer);
    if(getCookie("usuario") != ""){
	$("#iniciar_sesion").text(getCookie("usuario"));
	$("#iniciar_sesion").attr("href", "mi_perfil.html");
	$("#navbar-pedidos").addClass("d-lg-block");
    }
});
