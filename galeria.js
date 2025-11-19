const images = [
"gato_1.jpg",
"IMG_20210414_102040.jpg",
"IMG_20211217_105206.jpg",
"IMG_20211217_105213.jpg",
"IMG_20220214_110506.jpg",
"IMG_20220306_171637.jpg",
"IMG_20220728_172733.jpg",
"IMG_20220807_145705.jpg",
"migi.jpg",
"isis_mirando.jpg",
"isis_acostada.jpg",
"IMG_20220817_145944.jpg",
"IMG_20220823_093843.jpg",
"IMG_20220829_093204.jpg",
"IMG_20221006_152815.jpg",
"IMG_20221210_083030.jpg",
"IMG_20230303_082353.jpg",
"IMG_20230317_074007.jpg",
"IMG_20230317_093254.jpg",
"IMG_20230324_080921.jpg",
"IMG_20230602_181612.jpg",
"IMG_20230605_133357.jpg",
"IMG_20230605_133403.jpg",
"IMG_20230610_172513.jpg",
"IMG_20230611_122602.jpg",
"IMG_20230623_145559.jpg",
"IMG_20230707_144719.jpg",
"IMG_20230715_163244.jpg",
"IMG_20230715_163349.jpg",
"IMG_20230720_111954.jpg",
"IMG_20230730_123323.jpg",
"IMG_20230730_181903_594.jpg",
"IMG_20230809_063427.jpg",
"IMG_20230818_174515.jpg",
"IMG_20230902_095706.jpg",
"IMG_20230902_095714.jpg",
"IMG_20230903_115010.jpg",
"IMG_20231013_200002.jpg",
"IMG_20231013_200026_835.jpg",
"IMG_20231015_103655.jpg",
"IMG_20231016_132133.jpg",
"IMG_20231026_105951.jpg",
"IMG_20231211_155253.jpg",
"IMG_20231212_102308.jpg",
"IMG_20231224_153828.jpg",
"IMG_20240120_143500.jpg",
"IMG_20240303_095529.jpg",
"IMG_20240328_150239.jpg",
"IMG_20240328_185212.jpg",
"IMG_20240329_084935.jpg",
"IMG_20240923_160842.jpg",
"IMG_20241104_162918.jpg",
"IMG_20250503_130317.jpg",
"IMG-20231016-WA0000.jpg",
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
