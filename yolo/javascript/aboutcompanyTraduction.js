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
    contactform:"Formulario de contacto",
    aboutus:"Acerca de nosotros",
    unique:"Por qué somos únicos",
    mision:"Nuestra misión",
    valores:"Propuesta de valor",
    diferencia:"Nuestra diferencia",
    subtitulop:"Estamos aquí para acelerar su negocio y ayudarlo a encontrar el camino. Nuestros especialistas creativos trabajan a nivel internacional en branding, diseño y desarrollo. Tanto en línea como fuera de línea.",
    uniquep:"En Tokensur nos dedicamos a brindar soluciones para empresas que buscan financiamiento y para pequeños inversionistas que desean invertir en ellos sin tener un gran capital",
    uniquep2:"Para ello, a través de nuestra plataforma de tokenización, ofrecemos a nuestros clientes la posibilidad de convertir activos físicos o activos productivos reales en activos digitales y fragmentarlos de forma que puedan ser adquiridos por pequeños inversores online. Esto, utilizando la tecnología blockchain y la seguridad que brindan los contratos inteligentes",
    misionp:"Brindamos las herramientas necesarias a las empresas que buscan financiamiento a través de la tokenización digital de activos, colaborando así con la democratización de la inversión para los pequeños inversionistas.",
    valoresp1:"-Responsabilidad social y cuidado del medio ambiente",
    valoresp2:"-Integridad y respeto en todas nuestras acciones comerciales",
    valoresp3:"-Brindar una alta calidad de vida a las personas que operan negocios bajo los valores de la sustentabilidad",
    valoresp4:"-Trabajo en equipo",
    valoresp5:"-Búsqueda constante de innovación para crear valor",
    valoresp6:"-Colaborar con las comunidades brindando información y acceso a nuevas tecnologías y transformación digital",
    ourteam:"Nuestro equipo"
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
    aboutus:"About Us",
    unique:"Why we are Unique",
    mision:"Our Mission",
    valores:"Value Proposition",
    diferencia:"Our Difference",
    subtitulop:"We are here to Acelerate your business and help you find the way. Our creative specialists work on an international level at branding, design and development. Both online and offline",
    uniquep:"At Tokensur we are dedicated to providing solutions for companies seeking financing and for small investors who wish to invest in them without having large capital",
    uniquep2:"To do this, through our tokenization platform, we offer our clients the possibility of converting physical assets or real productive assets into digital assets and fragmenting them in such a way that they can be acquired by small investors online. This, using blockchain technology and the security provided by smart contracts",
    misionp:"We provide the necessary tools to companies seeking financing through the digital tokenization of assets, thus collaborating with the democratization of investment for small investors.",
    valoresp1:"-Social responsibility and care for the environment",
    valoresp2:"-Integrity and respect in all our commercial actions",
    valoresp3:"-Provide a high quality of life for people operating businesses under the values of sustainability",
    valoresp4:"-Teamwork",
    valoresp5:"-Constant search for innovation to create value",
    valoresp6:"-Collaborate with communities by providing information and access to new technologies and digital transformation",
    ourteam:"Our Team"
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
  document.getElementById("aboutus").textContent = texto.aboutus   
  document.getElementById("unique").textContent = texto.unique
  document.getElementById("mision").textContent = texto.mision
  document.getElementById("valores").textContent = texto.valores
  document.getElementById("diferencia").textContent = texto.diferencia
  document.getElementById("subtitulop").textContent = texto.subtitulop
  document.getElementById("uniquep").textContent = texto.uniquep
  document.getElementById("uniquep2").textContent = texto.uniquep2
  document.getElementById("misionp").textContent = texto.misionp
  document.getElementById("valoresp1").textContent = texto.valoresp1
  document.getElementById("valoresp2").textContent = texto.valoresp2
  document.getElementById("valoresp3").textContent = texto.valoresp3
  document.getElementById("valoresp4").textContent = texto.valoresp4
  document.getElementById("valoresp5").textContent = texto.valoresp5
  document.getElementById("valoresp6").textContent = texto.valoresp6
  document.getElementById("ourteam").textContent = texto.ourteam

}
    