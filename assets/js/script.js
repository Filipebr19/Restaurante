const menuMobile = document.querySelector('.menu');
const nav = document.querySelector('nav');
const conteudo = document.querySelectorAll('section');
const footer = document.querySelector('footer');

// Menu abrir e fechar
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
            nav.style.height = '88vh';
        }, 150);
        menuMobile.classList.add('ativar');
        conteudo.forEach(element => {
            element.style.display = "none";
        });
        footer.style.display = "none";
    }
}
menuMobile.addEventListener('click', menuToggle);