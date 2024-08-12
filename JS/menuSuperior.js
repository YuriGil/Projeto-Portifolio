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
