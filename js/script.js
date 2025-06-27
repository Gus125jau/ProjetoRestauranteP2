// Efeito de hover nos cards
document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});