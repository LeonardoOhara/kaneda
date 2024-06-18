window.revelar = ScrollReveal({reset:true})

// SOBRE NOS //

revelar.reveal('.texto1',{
    origin: 'left',
    distance: '500px',
    duration: 2000,
    
})

revelar.reveal('.imgsobre',{
    origin: 'right',
    distance: '500px',
    duration: 2000,
})

revelar.reveal('.container2',{
    origin: 'center',
    distance: '10px',
    duration: 2000,
    
})

revelar.reveal('.slider',{
    origin: 'right',
    distance: '500px',
    duration: 2000,
})

// MEMU BAR RESPONSIVE //

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrirMenu = document.querySelector('.btn-abrir-menu');
    const btnFecharMenu = document.querySelector('.btn-fechar');
    const menuMobile = document.querySelector('.menu-mobile');
    const overlayMenu = document.querySelector('.overlay-menu');

    // Função para abrir o menu
    btnAbrirMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');
    });

    // Função para fechar o menu
    btnFecharMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
    });

    // Fechar o menu ao clicar fora dele
    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
    });
});





