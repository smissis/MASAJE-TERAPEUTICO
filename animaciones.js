// Más efectos JavaScript
function initServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });
        
        observer.observe(card);
    });
}

// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initServiceCards);