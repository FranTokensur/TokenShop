// Obtener el elemento del contador
var counterElement = document.getElementById('counter');

// Variable para almacenar el número de compras
var numCompras = 0;

// Función para incrementar el contador
function incrementarContador() {
  numCompras++;
  counterElement.textContent = numCompras;
}

// Llamar a la función de incremento cada vez que alguien realice una compra
// Puedes llamar a esta función en el evento de compra de tu página web
incrementarContador();