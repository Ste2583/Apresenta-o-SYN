let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

// Inicializa o primeiro slide
showSlide(currentSlide);

// Adiciona evento aos botões de próxima seção
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", nextSlide);
});
