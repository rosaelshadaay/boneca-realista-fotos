// Animação de entrada suave para elementos com a classe "fade-in"
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // garante que anima apenas uma vez
      }
    });
  }, { threshold: 0.2 }); // ativa quando 20% do elemento aparece na tela

  elements.forEach(el => observer.observe(el));
});
