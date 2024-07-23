function updatePortfolio(profileData) {
  const portfolio = document.getElementById('slideshow');
  portfolio.innerHTML = profileData.portfolio.map((project, index) => {
      return `
      <div class="slideshow-container">
          <div class="project-container mySlides fade" style="display:${index === 0 ? 'block' : 'none'}">
              <div class="portifolio-container">
                  <div class="backgroundSlide"></div>
                  <div class="project-image">
                      <img src="${project.portifolioImg}" class="printImage">
                      <button href="${project.urlDirect}" class="visit-site" type="button">visitar site</button>
                  </div>
                  <div class="project-details">
                      <h1 ${project.github ? 'class="github"' : ''}>${project.name}</h1>
                      <p>${project.description}</p>
                      <button href="${project.urlGit}" class="view-project" type="button">ver projeto</button>
                  </div>
                  <div class="text">${project.portifolioNumber}</div>
              </div>
              <!-- Next and previous buttons -->
              <a class="prev" onclick="plusSlides(-1)">❮</a>
              <a class="next" onclick="plusSlides(1)">❯</a>
          </div>
      </div>
  `;
  }).join('');

  // Adcionando os botões por fora para não ficar duplicado
  portfolio.innerHTML += `
  <div style="text-align:center">
      ${profileData.portfolio.map((_, index) => `<span class="dot" onclick="currentSlide(${index + 1})"></span>`).join('')}
  </div>
  `;
}
