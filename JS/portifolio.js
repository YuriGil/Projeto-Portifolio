function updatePortfolio(profileData) {
  const portfolio = document.getElementById("slideshow");
  if (profileData.portfolio) {
      portfolio.innerHTML = profileData.portfolio
          .map((project, index) => {
              return `         
              <div class="slideshow-container">
                  <div class="project-container mySlides fade" style="display:${
                    index === 0 ? "block" : "none"
                  }">
                      <div class="portifolio-container">
                          <div class="backgroundSlide"></div>
                          <div class="project-image">
                              <img src="${project.portifolioImg}" class="printImage">
                              <button class="visit-site" type="button" onclick="window.location.href='${
                                project.urlDirect
                              }'">visitar site</button>
                          </div>
                          <div class="project-details">                 
                              <h1 ${project.github ? 'class="github"' : ""}>${project.name}</h1>
                              <p>${project.description}</p>
                              <button class="view-project" type="button" onclick="window.location.href='${
                                project.urlGit
                              }'">ver projeto</button>
                          </div>
                          <div class="text">${project.portifolioNumber}</div>
                      </div>
                      <!-- Next and previous buttons -->
                      <a class="prev" onclick="plusSlides(-1)">&lt;</a>
                      <a class="next" onclick="plusSlides(1)">&gt;</a>
                  </div>
              </div>
              `;
          })
          .join("");

      // Adiciona os pontos de navegação
      portfolio.innerHTML += `
      <div style="text-align:center">
          ${profileData.portfolio
              .map(
                  (_, index) =>
                      `<span class="dot" onclick="currentSlide(${index + 1})"></span>`
              )
              .join("")}
      </div>
      `;
  }
}
