let lastScrollY = 0; // Stocke la dernière position de défilement
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Si on défile vers le bas
        navbar.style.transform = "translateY(-100%)"; // Cache la barre
    } else {
        // Si on défile vers le haut
        navbar.style.transform = "translateY(0)"; // Réaffiche la barre
    }

    lastScrollY = currentScrollY; // Met à jour la dernière position
});