document.addEventListener("DOMContentLoaded", async function() {
  try {
    const profileData = await fetchProfileData();
    updatePortfolio(profileData);  // Atualiza o portfólio
    initializeSlideshow();         // Inicializa o slideshow após a atualização do portfólio
  } catch (error) {
    console.error('Erro ao carregar o perfil:', error);
  }
});

function initializeSlideshow() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Função para mostrar os slides
  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0 || dots.length === 0) return;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Funções de navegação dos slides
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Adiciona os event listeners aos botões "prev" e "next"
  document.addEventListener("click", function(event) {
    if (event.target.matches('.prev')) {
      plusSlides(-1);
    } else if (event.target.matches('.next')) {
      plusSlides(1);
    } else if (event.target.matches('.dot')) {
      const dotIndex = Array.from(document.getElementsByClassName('dot')).indexOf(event.target);
      currentSlide(dotIndex + 1);
    }
  });
}
