
const header = `
  <header class="container-fluid row d-flex align-items-center" id="header">
    <div class="col-lg-8 col-xl-10 col-md-6 col-sm-6 col-12 my-3 m-sm-3">
      <a href="pagina_principal.html"><h1 class="d-inline w-auto" id="titulo"> Consultoría IT </h1></a>
    </div>
    <a href="iniciar_sesion.html" id="iniciar_sesion" class="d-none d-sm-block m-3 col-lg col-xl col-sm col-md col btn btn-primary"> Iniciar Sesión</a>
    <nav class="col-12 d-flex flex-row justify-content-center justify-content-lg-center justify-content-sm-start align-items-stretch" id="navbar">
    <i class="fa-solid fa-bars d-block d-lg-none p-3" id="navbar-button" onclick="desplegarNavbar()"> </i>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="pagina_principal.html"> <i class="fa-solid fa-house"> </i> Página Principal </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="front_end.html"> Programación Web Front End </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="back_end.html"> Programación Web Back End </a>
      <a class="navlink d-none d-lg-block py-2 px-2 px-lg-4" href="programacion_otros.html"> Programación (Otros) </a>
      <a id="navbar-pedidos" class="navlink d-none py-2 px-2 px-lg-4" href="pedidos.html"> Mis pedidos </a>
      <a id="navbar-perfil" class="navlink d-none py-2 px-2 px-lg-4" href="iniciar_sesion.html"> Iniciar Sesión </a>
    </nav>
  </header>`;

const footer = `
  <footer id="footer">
    <p> &copy; Consultoría IT - 2022</p>
    <p> <a class="footer-link" href="iniciar_sesion.html"> Subscribite </a> </p>
  </footer>`;

$("document").ready(() => {
    $("header").replaceWith(header);
    $("footer").replaceWith(footer);
    if(getCookie("usuario") != ""){
      $("#iniciar_sesion").html(`<i class="fa-solid fa-user"> </i> Mi perfil`);
      $("#iniciar_sesion").attr("href", "mi_perfil.html");
      $("#navbar-pedidos").addClass("d-lg-block");
      $("#navbar-perfil").html(`<i class="fa-solid fa-user"> </i> Mi perfil`);
      $("#navbar-perfil").attr("href", "mi_perfil.html");
    }
});

