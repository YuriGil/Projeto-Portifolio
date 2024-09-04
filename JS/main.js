function updateProfileInfo(profileData) {
  const nameLittle = document.getElementById("profile.nameLittle");
  if (nameLittle) nameLittle.innerText = profileData.nameLittle;

  const github = document.getElementById("profile.github");
  if (github) github.innerText = profileData.github;

  const linkedin = document.getElementById("profile.linkedin");
  if (linkedin) linkedin.innerHTML = profileData.linkedin;

  const photo = document.getElementById("profile.photo");
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  }

  const name = document.getElementById("profile.name");
  if (name) name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  if (job) job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  if (location) location.innerText = profileData.location;

  const contact = document.getElementById("profile.contact");
  if (contact) {
    contact.innerText = profileData.phone;
    contact.href = `tel:${profileData.phone}`;
  }

  const email = document.getElementById("profile.email");
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  }

  const Contact = document.getElementById("Profile.Contact");
  if (Contact) {
    Contact.innerText = profileData.phone;
    Contact.href = `tel:${profileData.phone}`;
  }

  const Email = document.getElementById("Profile.Email");
  if (Email) {
    Email.innerText = profileData.email;
    Email.href = `mailto:${profileData.email}`;
  }
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  if (softSkills) {
    softSkills.innerHTML = profileData.skills.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
  }
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  if (hardSkills) {
    hardSkills.innerHTML = profileData.skills.hardSkills
      .map(
        (skill) =>
          `<li><img src='${skill.logo}' alt='${skill.name}' title='${skill.name}'></li>`
      )
      .join("");
  }
}

function updateLanguages(profileData) {
  const languages = document.getElementById("languages");
  if (languages) {
    languages.innerHTML = profileData.languages
      .map((language) => `<li>${language}</li>`)
      .join("");
  }
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
  if (professionalExperience) {
    professionalExperience.innerHTML = profileData.professionalExperience
      .map((experience) => {
        return `
              <li>
                  <h3 class="title">${experience.name}</h3>
                  <p class="period">${experience.period}</p>
                  <p>${experience.description}</p>
              </li>
          `;
      })
      .join("");
  }
}

(async () => {
  try {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updateProfessionalExperience(profileData);
    updateBotaoContato(profileData);
    updatePortfolio(profileData);
    updateAcordeon(profileData);
  } catch (error) {
    console.error("Erro ao inicializar o perfil:", error);
  }
})();
