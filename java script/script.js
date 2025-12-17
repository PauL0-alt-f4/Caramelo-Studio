document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".img-flutua");

  const ativarEfeito = (img) => {
    img.style.transform = "translateY(-10px) rotateZ(-2deg)";
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    img.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.3)";
  };

  const desativarEfeito = (img) => {
    img.style.transform = "translateY(0) rotateZ(0deg)";
    img.style.boxShadow = "none";
  };

  imagens.forEach(img => {
    img.addEventListener("mouseenter", () => ativarEfeito(img));
    img.addEventListener("mouseleave", () => desativarEfeito(img));
  });
});


