function startCarousel() {
    const carousel = document.querySelector('.carousel ul');
    const items = Array.from(carousel.children);
    const totalItems = items.length;
    let index = 0;

    // Define a largura do ul para suportar o carrossel
    carousel.style.width = `${totalItems * 100}%`;

    // Define a largura de cada item
    items.forEach(item => {
        item.style.flex = `0 0 ${100 / totalItems}%`;
    });

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${index * (100 / totalItems)}%)`;
    }

    // Função para mover para o próximo slide
    function moveToNextSlide() {
        index = (index + 1) % totalItems;
        updateCarousel();
    }

    // Função para mover para o slide anterior
    function moveToPrevSlide() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Inicia o carrossel automaticamente
    let interval = setInterval(moveToNextSlide, 4000); // 2 segundos

    // Adiciona eventos aos botões de navegação
    const nextButton = document.querySelector('.carousel-prev');
    const prevButton = document.querySelector('.carousel-next');

    nextButton.addEventListener('click', function() {
        clearInterval(interval); // Para o slide automático ao interagir
        moveToNextSlide();
        interval = setInterval(moveToNextSlide, 3500); // Reinicia o intervalo
    });

    prevButton.addEventListener('click', function() {
        clearInterval(interval); // Para o slide automático ao interagir
        moveToPrevSlide();
        interval = setInterval(moveToNextSlide, 3500); // Reinicia o intervalo
    });
}

document.addEventListener('DOMContentLoaded', function () {
    startCarousel();
});
