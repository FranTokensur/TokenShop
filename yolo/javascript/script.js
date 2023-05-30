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

  window.addEventListener("load", function() {
    var idiomaGuardado = localStorage.getItem("idiomaSeleccionado");
  
    if (idiomaGuardado) {
      cambiarIdioma(idiomaGuardado);
    }
  });
  
  
  
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
      contactform:"Formulario de contacto",
      tokenizacionactivos:"Tokenización de activos",
      propuestaideal:"Propuesta ideal:",
      textotokenizacion:".Tokenizamos tu empresa a traves de nuestra plataforma haciendo que puedas captar capital, financiación y liquidez",
      propuestaideal1:".Empresas en ronda de financiación",
      propuestaideal2:".Captación de fondos para Pymes",
      propuestaideal3:".Startups",
      propuestaideal4:".Sector inmobiliario",
      propuestaideal5:".Sector agricola",
      propuestaideal6:".Sector ganadero",
      propuestaideal7:".Proyectos de energía renovable",
      h3nuestro:"NUESTRO SERVICIO DE TOKENIZACIÓN Y GESTIÓN DE ACTIVOS",
      tokenizacion:"Tokenización",
      tokenizacionp:"Convertimos tus activos reales en activos digitales que luego podrás vender a cambio de renta a futuro para tu inversor",
      publicacion:"Publicación",
      publicacionp:"Te brindamos las herramientas necesarias para construir tu espacio o dashboard donde tus inversores podrán acceder a los tokens ofrecidos.",
      consultoria:"Contultoría",
      consultoriap:"Finalmente, te capacitamos acerca de como cobrar tus tokens ofrecidos para que puedas disponer de los fondos al momento de potenciar tu negocio.",
      h1aboutus:"Acerca de nosotros",
      unique:"Por qué somos únicos",
      mision:"Nuestra misión",
      valores:"Propuesta de valor",
      diferencia:"Nuestra diferencia"
    
    
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
      tokenizacionactivos:"Asset tokenization",
      propuestaideal:"Ideal proposal:",
      textotokenizacion:"We tokenize your company through our platform so that you can raise capital, financing and liquidity.",
      propuestaideal1:".Companies in financing round",
      propuestaideal2:".Fundraising for SMEs",
      propuestaideal3:".Startups",
      propuestaideal4:".Real estate",
      propuestaideal5:".Agricultural sector",
      propuestaideal6:".Livestock sector",
      propuestaideal7:".Renewable energy projects",
      h3nuestro:"OUR TOKENIZATION AND ASSET MANAGEMENT SERVICE",
      tokenizacion:"Tokenization",
      tokenizacionp:"We convert your real assets into digital assets that you can later sell in exchange for future income for your investor.",
      publicacion:"Publication",
      publicacionp:"We provide you with the necessary tools to build your space or dashboard where your investors can access the tokens offered.",
      consultoria:"Consultancy",
      consultoriap:"Finally, we train you on how to collect your offered tokens so that you can dispose of the funds when boosting your business.",
      h1aboutus:"About Us",
      unique:"Why we are Unique",
      mision:"Our Mission",
      valores:"Value Proposition",
      diferencia:"Our Difference"
    
   
    }
  };
  
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
    document.getElementById("tokenizacionactivos").textContent = texto.tokenizacionactivos
    document.getElementById("propuestaideal").textContent = texto.propuestaideal
    document.getElementById("textotokenizacion").textContent = texto.textotokenizacion
    document.getElementById("propuestaideal1").textContent = texto.propuestaideal1
    document.getElementById("propuestaideal2").textContent = texto.propuestaideal2
    document.getElementById("propuestaideal3").textContent = texto.propuestaideal3
    document.getElementById("propuestaideal4").textContent = texto.propuestaideal4
    document.getElementById("propuestaideal5").textContent = texto.propuestaideal5
    document.getElementById("propuestaideal6").textContent = texto.propuestaideal6
    document.getElementById("propuestaideal7").textContent = texto.propuestaideal7
    document.getElementById("h3nuestro").textContent = texto.h3nuestro
    document.getElementById("tokenizacion").textContent = texto.tokenizacion
    document.getElementById("tokenizacionp").textContent = texto.tokenizacionp
    document.getElementById("publicacion").textContent = texto.publicacion
    document.getElementById("publicacionp").textContent = texto.publicacionp
    document.getElementById("consultoria").textContent = texto.consultoria
    document.getElementById("consultoriap").textContent = texto.consultoriap
    document.getElementById("h1aboutus").textContent = texto.h1aboutus
    document.getElementById("unique").textContent = texto.unique
    document.getElementById("mision").textContent = texto.mision
    document.getElementById("valores").textContent = texto.valores
    document.getElementById("diferencia").textContent = texto.diferencia
    localStorage.setItem("idiomaSeleccionado", idioma);


}
  