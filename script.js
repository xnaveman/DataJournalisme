// Script pour le comportement du header au scroll - Version optimisée et smooth
let lastScrollTop = 0;
let scrollThreshold = 80;
const header = document.querySelector('header');
let ticking = false;

// Fonction pour gérer le scroll de manière optimisée (RequestAnimationFrame)
function updateHeader(scrollTop) {
    // Ajouter la classe "scrolled" pour réduire le header
    if (scrollTop > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Cacher le header quand on descend, le montrer quand on remonte
    if (scrollTop > lastScrollTop && scrollTop > 150) {
        // Scroll vers le bas - cacher le header
        header.classList.add('hidden');
    } else {
        // Scroll vers le haut - montrer le header
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    ticking = false;
}

// Écouteur d'événement scroll optimisé
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateHeader(scrollTop);
        });
        ticking = true;
    }
}, { passive: true });

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    updateHeader(scrollTop);
});
