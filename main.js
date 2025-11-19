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


// =====================
// 0. POLAROID TILTS
// =====================
document.querySelectorAll(".polaroid").forEach(card => {
  const angle = (Math.random() * 10 - 5).toFixed(2) + "deg";
  card.style.setProperty("--tilt", angle);
});


// =====================
// 1. SCROLL REVEAL
// =====================
const cards = document.querySelectorAll('.polaroid');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// =====================
// 2. PARTÍCULAS DE FONDO
// =====================
const bgCanvas = document.getElementById("bg-canvas");
const bgCtx = bgCanvas.getContext("2d");

function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeBg);
resizeBg();

let particles = [];
for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > bgCanvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > bgCanvas.height) p.dy *= -1;

    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    bgCtx.fillStyle = "rgba(80,80,80,0.4)";
    bgCtx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


// =====================
// 3. LÍNEAS "THE PUDDING"
// =====================
const lineCanvas = document.getElementById("lines-canvas");
const lineCtx = lineCanvas.getContext("2d");

function resizeLines() {
  lineCanvas.width = window.innerWidth;
  lineCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeLines);
resizeLines();

function drawLines() {
  lineCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);

  const positions = [];

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    // Centro del polaroid
    positions.push({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
  });

  lineCtx.strokeStyle = "rgba(50,50,50,0.35)";
  lineCtx.lineWidth = 1.4;

  // Conectar polaroids cercanos
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const dx = positions[i].x - positions[j].x;
      const dy = positions[i].y - positions[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 320) { // distancia máxima para conectar
        lineCtx.beginPath();
        lineCtx.moveTo(positions[i].x, positions[i].y);
        lineCtx.lineTo(positions[j].x, positions[j].y);
        lineCtx.stroke();
      }
    }
  }

  requestAnimationFrame(drawLines);
}

drawLines();



