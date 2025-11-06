// Script pour le comportement du header au scroll
let lastScrollTop = 0;
let scrollThreshold = 100;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ajouter la classe "scrolled" pour réduire le header
    if (scrollTop > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Cacher le header quand on descend, le montrer quand on remonte
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scroll vers le bas - cacher le header
        header.classList.add('hidden');
    } else {
        // Scroll vers le haut - montrer le header
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
