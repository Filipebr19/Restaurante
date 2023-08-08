const target = document.querySelectorAll('[data-anime]');
const classAnimate = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 0.75);
    console.log('blabla')
    target.forEach((el) => {
        if((windowTop) > el.offsetTop) {
            el.classList.add(classAnimate);
        } else {
            el.classList.remove(classAnimate);
        }
    });
}
animeScroll();

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};
if(target.length) {
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
        console.log('blabla')
    }, 80));
};





target.forEach((el) => {
    const foto2 = document.querySelector('.imgArea:nth-child(2)');
    const foto3 = document.querySelector('.imgArea:nth-child(3)')

    if(window.innerWidth >= 1024) {
        el.classList.add(classAnimate);
    } else if(foto2.offsetTop == 476 || foto3.offsetTop == 631) {
        el.classList.add(classAnimate);
    }
});
