// Animações de entrada ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
