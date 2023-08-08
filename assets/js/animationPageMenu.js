const btnComida = document.querySelector('.buttons--cardapio .btn--comida');
const btnBebida = document.querySelector('.buttons--cardapio .btn--bebida');
let consumivel = document.querySelectorAll('.alimentos .alimentos--comidaBebida h3');
let preco = document.querySelectorAll('.alimentos .alimentos--comidaBebida p:last-child');


btnComida.addEventListener('click', () => {
    btnComida.classList.remove('btnActive');
    btnBebida.classList.remove('btnActive');
    btnComida.classList.add('btnActive');

    consumivel.forEach((el) => {
        el.innerHTML = 'Opção de tapas'
    });

    preco.forEach((el) => {
        el.innerHTML = 'R$ 12,00'
    });
});

btnBebida.addEventListener('click', () => {
    btnBebida.classList.remove('btnActive');
    btnComida.classList.remove('btnActive');
    btnBebida.classList.add('btnActive');

    consumivel.forEach((el) => {
        el.innerHTML = 'Vinho';
    });

    preco.forEach((el) => {
        el.innerHTML = 'R$ 10,00'
    })
});