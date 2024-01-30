const buttonPlataforma = document.querySelector('.btn-plataforma');
const plataformas = document.querySelector('.btn-plataforma .plataformas');

buttonPlataforma .addEventListener('click', () => {
    plataformas.classList.toggle('active')
})