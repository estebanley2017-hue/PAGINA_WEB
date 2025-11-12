// ===== EFECTO DE LUCES PARA EL TÍTULO BRAGGERSPY =====

// Seleccionamos el título
const title = document.querySelector(".titulo-principal");

// Colores que irán rotando
const colores = ["#ff0044", "#00ffee", "#ffcc00", "#00ff55", "#ff6600", "#b300ff"];

// Función para cambiar color cada segundo
function cambiarColorTitulo() {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  title.style.color = colorAleatorio;
  title.style.textShadow = `0 0 25px ${colorAleatorio}`;
  title.style.transition = "all 0.5s ease"; // transición suave
}

// Inicia el cambio de color cada segundo
setInterval(cambiarColorTitulo, 1000);


