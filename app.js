// Función para ocultar todos los cofres
function ocultarCofres() {
  var cofres = document.querySelectorAll('.cofre');
  cofres.forEach(function(cofre) {
     cofre.style.display = 'none';
  });
}

// Función para mostrar un cofre específico
function mostrarCofre(idCofre) {
  // Ocultar todos los cofres antes de mostrar uno nuevo
  ocultarCofres();

  // Mostrar el contenedor de cofres
  document.getElementById('contenedorCofres').style.display = 'block';

  // Mostrar el cofre específico
  var cofre = document.getElementById(idCofre);
  cofre.style.display = 'block';

  // Mostrar los premios del cofre específico
  mostrarPremios(idCofre);
}

// Función para mostrar los premios de un cofre específico
function mostrarPremios(idCofre) {
  // Obtener el contenedor de premios
  var contenedorPremios = document.getElementById('contenedorPremios');
  // Limpiar los premios anteriores
  contenedorPremios.innerHTML = "";

  // Definir la lógica de premios para cada cofre
  switch (idCofre) {
    case 'cofreRapido':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(10, 100));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(1, 10));
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(0, 1));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 10, 90, 50, 0, 0, 0, 0);
      break;

    case 'cofrePremium':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(100, 300));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(10, 30));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(1, 5));
      agregarPremio(contenedorPremios, 'Agua Oscura', generarNumeroAleatorio(1, 10));
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(1, 2));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 11, 60, 80, 10, 0, 0, 0);
      break;

    case 'cofrePlata':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(300, 500));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(30, 50));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(5, 10));
      agregarPremio(contenedorPremios, 'Agua Oscura', generarNumeroAleatorio(10, 20));
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(1, 2));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 12, 50, 80, 50, 0, 0, 0);
      break;

    case 'cofreOscuro':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(500, 1000));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(50, 100));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(10, 30));
      agregarPremio(contenedorPremios, 'Agua Oscura', 50); // Valor fijo
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(1, 3));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 13, 20, 40, 80, 0, 0, 0);
      break;

    case 'cofreDeOro':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(1000, 3000));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(100, 200));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(30, 70));
      agregarPremio(contenedorPremios, 'Agua Oscura', generarNumeroAleatorio(40, 60));
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(2, 4));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 14, 0, 50, 80, 10, 0, 0);
      break;

    case 'cofrePotenciador':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(3000, 5000));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(200, 500));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(70, 100));
      agregarPremio(contenedorPremios, 'Agua Oscura', generarNumeroAleatorio(60, 80));
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(3, 4));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 15, 0, 0, 50, 70, 20, 10);
      break;

    case 'cofrePotenciador2':
      agregarPremio(contenedorPremios, 'Monedas', generarNumeroAleatorio(5000, 8000));
      agregarPremio(contenedorPremios, 'Gemas', generarNumeroAleatorio(500, 1000));
      agregarPremio(contenedorPremios, 'Piedras Evolutivas', generarNumeroAleatorio(100, 200));
      agregarPremio(contenedorPremios, 'Agua Oscura', 100); // Valor fijo
      agregarPremio(contenedorPremios, 'Mejoras', generarNumeroAleatorio(4, 5));
      agregarPremioBabosa(contenedorPremios, 'Babosas', 20, 0, 0, 0, 80, 70, 30);
      break;
  }
}

// Función para generar un número aleatorio en un rango
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para agregar un premio al contenedor
function agregarPremio(contenedor, tipo, cantidad) {
  var premio = document.createElement('p');
  premio.textContent = `${tipo}: ${cantidad}`;
  contenedor.appendChild(premio);
}

// Función para agregar un premio de babosa al contenedor
function agregarPremioBabosa(contenedor, tipo, probNinguna, probComun, probRara, probEpica, probLegendaria, probHeroica) {
  var probabilidadTotal = probNinguna + probComun + probRara + probEpica + probLegendaria + probHeroica;
  var probAleatoria = Math.random() * probabilidadTotal;

  if (probAleatoria <= probNinguna) {
    // No hay babosa
    agregarPremio(contenedor, tipo, 'Ninguna');
  } else {
    // Hay babosa, determinar el tipo
    var probAcumulada = probNinguna;

    if (probAleatoria <= probAcumulada + probComun) {
      agregarPremio(contenedor, tipo, 'Común');
    } else {
      probAcumulada += probComun;
      if (probAleatoria <= probAcumulada + probRara) {
        agregarPremio(contenedor, tipo, 'Rara');
      } else {
        probAcumulada += probRara;
        if (probAleatoria <= probAcumulada + probEpica) {
          agregarPremio(contenedor, tipo, 'Épica');
        } else {
          probAcumulada += probEpica;
          if (probAleatoria <= probAcumulada + probLegendaria) {
            agregarPremio(contenedor, tipo, 'Legendaria');
          } else {
            // Probabilidad de Heroica
            agregarPremio(contenedor, tipo, 'Heroica');
          }
        }
      }
    }
  }
}
