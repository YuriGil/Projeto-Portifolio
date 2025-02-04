document.querySelector('.trigger-menu').addEventListener('click', function() {
  const menu = document.querySelector('.content-menu');
  const icon = this.querySelector('.material-symbols-outlined');

  this.classList.toggle('active');
  menu.classList.toggle('active');
  
  // Mude o ícone dependendo do estado ativo do botão
  if (this.classList.contains('active')) {
    icon.textContent = 'close';
    icon.style.transform = 'rotate(180deg)';
    menu.classList.remove('hidden'); // Mostrar o menu com animação
  } else {
    icon.textContent = 'Home';
    icon.style.transform = 'rotate(0deg)';
    
    // Para esconder o menu após a animação de fechamento
    menu.addEventListener('transitionend', function() {
      if (!menu.classList.contains('active')) {
        menu.classList.add('hidden'); // Ocultar o menu completamente
      }
    }, { once: true });
  }
});


//NAVEGAÇÃO DO MENU SUPERIOR
document.getElementById('menuSobre').addEventListener('click', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  
  // Rolagem suave para a seção "sobre"
  const sobreSection = document.getElementById('sobre');
  sobreSection.scrollIntoView({ behavior: 'smooth' });
  
  // Abrir o acordeon após a rolagem
  const triggerButton = sobreSection.querySelector('.trigger');
  const contentDiv = sobreSection.querySelector('.content');

  // Alternativamente, você pode simular um clique no botão trigger para abrir o acordeon
  triggerButton.click();
});