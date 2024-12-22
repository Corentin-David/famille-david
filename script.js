let lastScrollY = 0; // Stocke la dernière position de défilement
const navbar = document.querySelector("nav");

// Fonction pour activer/désactiver le comportement selon la taille de l'écran
function handleScroll() {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
        // Grand écran : activer le comportement
        window.addEventListener("scroll", scrollHandler);
    } else {
        // Petit écran : désactiver le comportement
        window.removeEventListener("scroll", scrollHandler);

        // Réinitialise l'état de la barre pour qu'elle reste visible
        navbar.style.transform = "translateY(0)";
    }
}

// Handler pour le comportement de défilement
function scrollHandler() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Si on défile vers le bas
        navbar.style.transform = "translateY(-100%)"; // Cache la barre
    } else {
        // Si on défile vers le haut
        navbar.style.transform = "translateY(0)"; // Réaffiche la barre
    }

    lastScrollY = currentScrollY; // Met à jour la dernière position
}

// Exécute la vérification initiale
handleScroll();

// Recalcule lorsque la taille de la fenêtre change
window.addEventListener("resize", handleScroll);
