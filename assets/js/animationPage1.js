// Animações
const img1 = document.querySelector('.img--queijo img');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
        img1.classList.add('animacao1');
    }
});

const img2 = document.querySelector('.img--bebida img');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 1739) {
        img2.classList.add('animacao2');
    }
});