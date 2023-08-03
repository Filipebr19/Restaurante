const menuMobile = document.querySelector('.menu');
const nav = document.querySelector('nav');
const conteudo = document.querySelectorAll('section');
const footer = document.querySelector('footer');


function menuToggle() {
    if(nav.style.display == 'flex') {
        nav.style.display = 'none';
        nav.style.height = '0vh';
        nav.style.opacity = '0';
        menuMobile.classList.remove('ativar');
        conteudo.forEach(element => {
            element.style.display = "flex";
        });
        footer.style.display = "flex";
    } else {
        nav.style.display = 'flex';
        setTimeout(() => {
            nav.style.opacity = '1';
            nav.style.height = '100vh';
        }, 150);
        menuMobile.classList.add('ativar');
        conteudo.forEach(element => {
            element.style.display = "none";
        });
        footer.style.display = "none";
    }
}
menuMobile.addEventListener('click', menuToggle);



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

