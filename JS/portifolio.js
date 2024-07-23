function updatePortfolio(profileData) {
    const portfolio = document.getElementById('')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
<div class="slideshow-container">
  <div class="project-container mySlides fade" style="display: block;">
    <div class="portifolio-container">
    <div class="backgroundSlide"></div>
        <div class="project-image">
          <img class="printImage"/>
     
            <button href="https://example.com" class="visit-site">visitar site</button>
        </div>
        <div class="project-details">
          <h1 ${project.github ? 'class="github"' : ''}>${project.name}</h1>
            <p>UX, UI e Protipação para aplicativo mobile.</p>
            <button href="https://example.com" class="view-project">ver projeto</button>
        </div>
        <div class="text">01</div>
      </div>
  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>
</div>
</div>

<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
</section>
       
`
    }).join('')
  }

  function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
  }
  