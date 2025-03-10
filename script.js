// Function to hide the loader and restore scrolling
function hideLoader() {
  /* Se selecciona el elemento HTML con el ID loader. Este es el contenedor del loader que se mostrará mientras la página carga. */
  const loader = document.getElementById("loader");

  /* Se reduce la opacidad del loader a 0, lo que inicia un efecto de desvanecimiento gradual. Este efecto depende de las propiedades CSS de transición (transition) definidas para el loader. */
  loader.style.opacity = "0";

  /* Después de 500 milisegundos (la duración de la transición de opacidad), se ejecuta una función que:
  - Oculta completamente el loader estableciendo display: none.
  - Restaura el desplazamiento de la página estableciendo overflow: auto en el cuerpo del documento (document.body). Esto permite que el usuario pueda volver a desplazarse por la página. */
  setTimeout(function () {
    // Hide the loader completely
    loader.style.display = "none";

    // Restore scrolling after loader is hidden
    document.body.style.overflow = "auto";
  }, 500); /* El tiempo de espera de 500 ms coincide con la duración de la transición de opacidad definida en CSS para el loader */
}

// Wait for the page to fully load
window.onload = function () {
  /* Al cargar la página, se deshabilita el desplazamiento estableciendo overflow: hidden en el cuerpo del documento. Esto asegura que el usuario no pueda interactuar con el contenido de la página mientras el loader está activo */
document.body.style.overflow = "hidden";

/* Se programa la función hideLoader para que se ejecute después de 2 segundos (2000 ms). Este retraso simula una carga mínima, incluso si la página ya ha terminado de cargarse. */
setTimeout(hideLoader, 2000); // Initial delay (2000ms or 2 seconds)
};

// Navbar scroll
const navbar = document.querySelector("nav");
let hideTimeout;

// Función para mostrar la navbar
function showNavbar() {
  navbar.style.top = "0"; // Muestra la navbar
}

// Función para ocultar la navbar
// function hideNavbar() {
//   if (window.scrollY > 0) { // Solo oculta si el usuario NO está en la parte superior
//     navbar.style.top = "-10rem"; // Mueve la navbar hacia arriba para ocultarla
//   }
// }

// // Detectar cuando el usuario está en la parte superior de la página
// window.addEventListener("scroll", () => {
//   if (window.scrollY === 0) {
//     showNavbar(); // Siempre visible si está en la parte superior
//   } else {
//     hideNavbar(); // Se oculta si baja
//   }
// });

// // Detectar cuando el usuario pasa el mouse por la parte superior de la pantalla
// document.addEventListener("mousemove", (event) => {
//   if (event.clientY < 50) { // Si el mouse está en la parte superior (50px desde arriba)
//     showNavbar();
//   }
// });

// // Ocultar la navbar después de 3 segundos de inactividad
// navbar.addEventListener("mouseleave", () => {
//   hideTimeout = setTimeout(hideNavbar, 3000);
// });

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav"); // Selecciona la navbar
  /* Esta propiedad devuelve la cantidad de píxeles que el usuario ha desplazado verticalmente desde la parte superior de la página.
    En este caso, estamos verificando si el usuario ha desplazado más de 50px. Si es así, aplicamos la clase .scrolled. */
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Función para mostrar y cerrar el popup (de la galería) //
// Selecciona todas las imágenes dentro de los contenedores con las clases 'galeria-container' y 'galeria-characters'
var galeria = document.querySelectorAll('.galeria-container img, .galeria-characters img');

// Itera sobre cada imagen seleccionada
galeria.forEach(image => {
  // Agrega un evento 'onclick' a cada imagen, con una función de flecha como controlador de eventos
  image.onclick = () => {
    // Cuando se hace clic en una imagen, muestra el popup estableciendo su estilo display a 'flex'
    document.querySelector('.popup').style.display = 'flex';
    // Cambia la fuente de la imagen dentro del popup a la fuente de la imagen que se hizo clic
    // es decir, la imagen que se hizo clic se muestra en el popup
    document.querySelector('.popup img').src = image.src;
    // Deshabilita el desplazamiento de la página estableciendo overflow: hidden en el cuerpo del documento.
    // esto permite que el usuario se enfoque en el popup sin poder desplazarse por la página
    document.body.style.overflow = 'hidden';
  }
});

// Selecciona el primer elemento con la clase 'close', que se espera sea el botón de cerrar del popup
var close = document.getElementsByClassName("close")[0];

// Agrega un evento 'onclick' al botón de cerrar
close.onclick = function() { 
  // Cuando se hace clic en el botón de cerrar, oculta el popup estableciendo su estilo display a 'none'
  document.querySelector('.popup').style.display = "none";
  // Restaura el desplazamiento de la página estableciendo overflow: '' (vacío) en el cuerpo del documento
  document.body.style.overflow = '';
}

// Carousel

// Selecciona todos los elementos con la clase 'item' dentro del contenedor con la clase 'slider'
let items = document.querySelectorAll('.slider .item');

// Selecciona los botones de navegación 'next' y 'prev' por sus IDs
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Define el índice del elemento activo inicial en el carrusel
let active = 2;

// Función para cargar y mostrar los elementos del carrusel
function loadShow(){
    // Inicializa un contador para el estado de transformación
    let stt = 0;

    // Establece el estilo del elemento activo
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Itera sobre los elementos después del activo
    for(var i = active + 1; i < items.length; i++){
        stt++;
        // Aplica transformaciones para desplazar y escalar los elementos
        items[i].style.transform = `translateX(${180*stt}px) scale(${1 - 0.3*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Reinicia el contador
    stt = 0;

    // Itera sobre los elementos antes del activo
    for(var i = active - 1; i >= 0; i--){
        stt++;
        // Aplica transformaciones para desplazar y escalar los elementos
        items[i].style.transform = `translateX(${-180*stt}px) scale(${1 - 0.3*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

// Llama a la función para cargar y mostrar los elementos del carrusel
loadShow();

// Agrega un evento 'onclick' al botón 'next' para avanzar al siguiente elemento
next.onclick = function(){
    // Incrementa el índice del elemento activo si no es el último
    active = active + 1 < items.length ? active + 1 : active;
    // Vuelve a cargar y mostrar los elementos del carrusel
    loadShow();
}

// Agrega un evento 'onclick' al botón 'prev' para retroceder al elemento anterior
prev.onclick = function(){
    // Decrementa el índice del elemento activo si no es el primero
    active = active - 1 >= 0 ? active - 1 : active;
    // Vuelve a cargar y mostrar los elementos del carrusel
    loadShow();
}