function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


var idiomas = {
    español: {
      contenido: "Inicio",
      pages: "Paginas",
      aboutcompany:"Acerca de la compañia",
      platform:"Plataforma",
      aboutme:"Sobre mí",
      commingsoon:"Muy pronto",
      investment:"Oportunidades de inversión",
      marketplace:"Mercado",
      elements:"Elementos",
      teammembers:"Miembros del equipo",
      contactform:"Formulario de contacto"
},
ingles: {
    contenido: "Home",
    pages: "Pages",
    aboutcompany:"About company",
    platform:"Platform",
    aboutme:"About me",
    commingsoon:"Comming-soon",
    investment:"Investment Opportunities",
    marketplace:"Marketplace",
    elements:"Elements",
    teammembers:"Team members",
    contactform:"Contact Form",
 }
}

function cambiarIdioma(idioma) {
    var texto = idiomas[idioma];
    document.getElementById("contenido").textContent = texto.contenido;
    document.getElementById("pages").textContent = texto.pages
    document.getElementById("aboutcompany").textContent = texto.aboutcompany
    document.getElementById("platform").textContent = texto.platform
    document.getElementById("aboutme").textContent = texto.aboutme
    document.getElementById("commingsoon").textContent = texto.commingsoon
    document.getElementById("investment").textContent = texto.investment
    document.getElementById("marketplace").textContent = texto.marketplace
    document.getElementById("elements").textContent = texto.elements
    document.getElementById("teammembers").textContent = texto.teammembers
    document.getElementById("contactform").textContent = texto.contactform
}