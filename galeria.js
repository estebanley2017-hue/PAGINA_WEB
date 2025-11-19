const images = [
"migi.jpg",
"isis_mirando.jpg",
"isis_acostada.jpg",
"IMG_20231013_200026_835.jpg",
"IMG_20231015_103655.jpg",
"IMG_20231016_132133.jpg",
"IMG_20231026_105951.jpg",
"IMG_20231211_155253.jpg",
"IMG_20251013_101301.jpg",
"IMG_20251009_163534.jpg",
"IMG_20251006_094217.jpg",
"IMG_20250922_161647.jpg",
"IMG_20250922_161603.jpg",
"IMG_20250816_072333.jpg",
"IMG_20250624_213143.jpg",
"IMG_20250602_142403.jpg",
"IMG_20250602_142213.jpg",
"IMG_20250525_080148.jpg",
"IMG_20250525_080053.jpg",
"IMG_20250524_172300.jpg",
"IMG_20250524_172253.jpg",
"IMG_20250524_171909.jpg"
];

function setup() {
  resizeCanvas(windowWidth, document.body.scrollHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, document.body.scrollHeight);
}

// =====================
// Inserción en el DOM
// =====================
const container = document.getElementById("gallery-container");

// Captions opcionales
const captions = {
  "gato_1.jpg": "Gato enfermero en la veterinaria",
  "IMG_20210414_102040.jpg": "Van a ver muchos gatos en la ventana",
  "isis_acostada.jpg": "Posuda",
  "migi.jpg": "Migi observando"
};

// Genera la galería completa
images.forEach(img => {
  const wrapper = document.createElement("div");
  wrapper.className = "polaroid pudding-lines";

  const image = document.createElement("img");

  // 🔥🔥🔥 AQUÍ ESTÁ LA CORRECCIÓN 🔥🔥🔥
  image.src = "images/" + img;
  // -----------------------------------

  image.alt = img;

  wrapper.appendChild(image);

  if (captions[img]) {
    const caption = document.createElement("div");
    caption.className = "caption";
    caption.innerText = captions[img];
    wrapper.appendChild(caption);
  }

  container.appendChild(wrapper);
});

// =====================
// Fade-in / Slide-up
// =====================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".polaroid").forEach(el => observer.observe(el));


