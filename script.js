// Seleccionar el icono del corazón y el audio
const corazon = document.querySelector(".bx");
const audio = document.getElementById("audio");

// Variable para controlar si la carta está abierta
let cartaAbierta = false;

// Al hacer click en el corazón
corazon.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const IconoCorazon = document.querySelector(".bx");
  const ElementoMensaje = document.querySelector(".mensaje");

  // Si la carta está cerrada, abrirla y reproducir el audio
  if (!cartaAbierta) {
    // Reproducir el audio si no está reproduciéndose
    if (audio.paused) {
      audio.play();
    }

    ElementoSuperior.classList.add("abrir-superior");
    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";
    IconoCorazon.classList.add("bx-rotada");

    setTimeout(() => {
      ElementoSuperior.style.zIndex = -1;
      ElementoMensaje.classList.add("abrir-mensaje");
    }, 700);
  } else {
    // Si la carta está abierta, cerrarla y pausar el audio
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0; // Reinicia la canción
    }

    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(() => {
      h1.style.transform = "translateY(0px)";
      p.style.transform = "translateY(0px)";
      ElementoSuperior.style.zIndex = 0;
      ElementoSuperior.classList.remove("abrir-superior");
      IconoCorazon.classList.remove("bx-rotada");
    }, 700);
  }

  // Alternar el estado de la carta
  cartaAbierta = !cartaAbierta;
});
