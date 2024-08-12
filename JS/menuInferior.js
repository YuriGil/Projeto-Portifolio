//MENU INFERIOR DIREITO, ANIMAÇÃO E AÇÃO 
document.querySelector('.trigger-menu-contact').addEventListener('click', function() {
  const menuContent = document.querySelector('.content-menu-contact');
  this.classList.toggle('active');
  menuContent.classList.toggle('active');
  
  // Mude o ícone dependendo do estado ativo do botão
  const icon = this.querySelector('.material-symbols-outlined');
  if (this.classList.contains('active')) {
      icon.textContent = 'close';
  } else {
      icon.textContent = 'perm_contact_calendar';
  }
});
