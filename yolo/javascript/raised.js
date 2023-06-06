// Obtén el elemento del contador
var counterElement = document.getElementById('counter');

// Variable para almacenar la cantidad de inversiones en pesos
var cantidadInversiones = 0;

// Función para incrementar el contador
function incrementarContador() {
  cantidadInversiones += 1000; // Incrementa en 1000 pesos cada vez
  counterElement.textContent = cantidadInversiones.toLocaleString(); // Formatea el número con separadores de miles
}

// Llama a la función de incremento cada cierto intervalo de tiempo (por ejemplo, cada segundo)
setInterval(incrementarContador, 1000);
