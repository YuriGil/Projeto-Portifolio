function updateAcordeon(profileData) {
    const acordeon = document.getElementById('acordeonConj');
    if (acordeon) { 
        acordeon.innerHTML = `
            <section class="acordeon">
                <button class="trigger" type="button">
                    <h2>Skills</h2>
                </button>
                <div class="content">
                    <div class="skill">
                        <section class="tools">
                            <h3>Hard Skills</h3>
                            <div class="carousel">
                                <ul id="profile.skills.hardSkills">
                                    ${profileData.skills.hardSkills.map(skill => `
                                        <li>
                                            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
                                            <p>${skill.name}</p>
                                        </li>
                                    `).join('')}
                                </ul>
                                <div class="carousel-controls">
                                    <button class="carousel-prev">❮</button>
                                    <button class="carousel-next">❯</button>
                                </div>
                            </div>
                        </section>
                        <section class="personal">
                            <h3>Soft Skills</h3>
                            <ul id="profile.skills.softSkills">
                                ${profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </section>
                    </div>
                </div>
            </section>

            <section class="acordeon">
                <button class="trigger" type="button">
                    <h2>Idiomas</h2>
                </button>
                <div class="content">
                    <ul class="languages" id="languages">
                        ${profileData.languages.map(language => `<li>${language}</li>`).join('')}
                    </ul>
                </div>
            </section>

            <section class="acordeon">
                <button class="trigger" type="button">
                    <h2>Experiência Profissional</h2>
                </button>
                <div class="content">
                    <ul class="experience" id="profile.professionalExperience">
                        ${profileData.professionalExperience.map(experience => `
                            <li>
                                <h3 class="title">${experience.name}</h3>
                                <p class="period">${experience.period}</p>
                                <p>${experience.description}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </section>

            <section id="sobre" class="acordeon">
                <button class="trigger" type="button">
                    <h2>Dados Pessoais</h2>
                </button>
                <div class="content">
                    <div class="dadosPessoais">
                        <li class="job" id="profile.job">${profileData.job}</li>
                        <li class="location" id="profile.location">${profileData.location}</li>
                        <li class="contact">
                            <a href="tel:${profileData.phone}" id="profile.contact">${profileData.phone}</a>
                        </li>
                        <li class="email">
                            <a href="mailto:${profileData.email}" id="profile.email">${profileData.email}</a>
                        </li>
                    </div>
                    <div class="dadosPessoaisFoto">
                        <img src="${profileData.photo}" alt="${profileData.name}" class="photo" id="profile.photo">
                    </div>
                </div>
            </section>
        `;

        addAcordeonEventListeners();
        startCarousel();
    }
}
