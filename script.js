/* ------------------- */
/* MENU HAMBURGER */
/* ------------------- */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  /* ------------------- */
  /* ANIMATION APPARITION */
  /* ------------------- */
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  /* ------------------- */
  /* LANCEMENT INITIAL */
  /* ------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    reveal(); // Pour animer les sections déjà visibles au chargement
  });
  