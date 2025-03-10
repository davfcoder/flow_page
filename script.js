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
  setTimeout(hideLoader, 2000); // Initial delay (3000ms or 3 seconds)
};

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

// Function to show and close the popup (gallery images)
var galeria = document.querySelectorAll('.galeria-container img, .galeria-characters img');
galeria.forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.popup img').src = image.src;
    document.body.style.overflow = 'hidden';
  }
});

var close = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
close.onclick = function() { 
  document.querySelector('.popup').style.display = "none";
  document.body.style.overflow = '';
}


// Carousel

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${180*stt}px) scale(${1 - 0.3*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-180*stt}px) scale(${1 - 0.3*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }