// Atualiza o conteúdo do botão de contato com os dados fornecidos
function updateBotaoContato(profileData) {
  const botaoContato = document.getElementById("botaoContato");

      botaoContato.innerHTML = `
      <!--BOTÃO INFERIOR CONTATO MENU-->
      <div class="btn-menu-contact">
          <button class="trigger-menu-contact" type="button">
              <span class="material-symbols-outlined">perm_contact_calendar</span>
          </button>
          <div class="content-menu-contact">
              <h2>Contato</h2>
              <nav class="menuSecundario">
                  <span class="contact">
                      <img src="./IMG/icons/contact.svg" alt="telefone">
                      <a href="tel:${profileData.phone}" id="Profile.Contact">${profileData.phone}</a>
                  </span>
                  <span class="email">
                      <img src="./IMG/icons/email.svg" alt="email">
                      <a href="mailto:${profileData.email}" id="Profile.Email">${profileData.email}</a>
                  </span>
                  <span class="github">
                      <img src="./IMG/icons/github1.svg" alt="github">
                      <a href="${profileData.github}" id="profile.github">${profileData.github}</a>
                  </span>
                  <span class="linkedin">
                      <img src="./IMG/icons/linkedin.svg" alt="linkedin">
                      <a href="${profileData.linkedin}" id="profile.linkedin">${profileData.linkedin}</a>
                  </span>
              </nav>
          </div>
      </div>
      `;
      //FUNCIONALIADDE BOTÃO CONTATO  
      // Adiciona o evento de clique após atualizar o conteúdo
      const triggerMenuContact = document.querySelector('.trigger-menu-contact');
      if (triggerMenuContact) {
          triggerMenuContact.addEventListener('click', function() {
              const menuContent = document.querySelector('.content-menu-contact');
              if (menuContent) {
                  this.classList.toggle('active');
                  menuContent.classList.toggle('active');

                  // Mude o ícone dependendo do estado ativo do botão
                  const icon = this.querySelector('.material-symbols-outlined');
                  if (this.classList.contains('active')) {
                      icon.textContent = 'close';
                  } else {
                      icon.textContent = 'perm_contact_calendar';
                  }
              }
          });
      }
  }

//ANIMAÇÃO E INTERAÇÃO DO BOTÃO
  document.addEventListener('DOMContentLoaded', function() {
    // MENU INFERIOR DIREITO, ANIMAÇÃO E AÇÃO
    const triggerMenuContact = document.querySelector('.trigger-menu-contact');
    
    if (triggerMenuContact) {
      triggerMenuContact.addEventListener('click', function() {
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
    }
  });
  