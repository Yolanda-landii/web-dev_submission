document.addEventListener("DOMContentLoaded", function() {
  console.log("Script loaded");

  // Define personal information
  const name = 'Yolanda';
  const surname = 'Mabotja';
  const bio = 'Innovative Software Developer with expertise in Python, HTML and CSS, JavaScript, Java, SQL, and C#. Adept at thriving in dynamic environments that foster experimentation and innovation.';
  const projects = [
    { 
      title: 'Project One',
      imageSrc: 'image/Project-Management-Blogs.png',
      githubLink: 'https://github.com/Yolanda-landii/Django-Blog'
    },
    { 
      title: 'Project Two',
      imageSrc: 'image/rar.jpg',
      githubLink: 'https://github.com/Yolanda-landii/RazorPagesMovie'
    },
    { 
      title: 'Project Three',
      imageSrc: 'image/tictactoe.jpg',
      githubLink: 'https://github.com/Yolanda-landii/Tic-tac-toe'
    }
  ];
  const experienceFrontend = [
      { technology: 'HTML', level: 'Experienced' },
      { technology: 'CSS', level: 'Experienced' },
      { technology: 'JavaScript', level: 'Intermediate' }
  ];
  const experienceBackend = [
      { technology: 'C#', level: 'Basic' },
      { technology: 'Python', level: 'Experienced' },
      { technology: 'Java', level: 'Intermediate' },
      { technology: 'Docker', level: 'Basic' },
      { technology: 'Django', level: 'Intermediate' },
      { technology: 'Git', level: 'Intermediate' }
  ];
  const education = 'NQF 5 Information Technology in Systems Development';
  const experience = 'Animation Technical director';
  
  // Update name, surname, and titles
  const nameSurnameElement = document.querySelector('.section__text__p2');
  if (nameSurnameElement) {
    nameSurnameElement.textContent = 'Software Developer and Technical Director';
    console.log("Title updated: Software Developer and Technical Director");
  } else {
    console.log("Name and surname element not found");
  }

  const titleElement = document.querySelector('.title');
  if (titleElement) {
    titleElement.textContent = `${name} ${surname}`;
    console.log("Name and surname updated:", `${name} ${surname}`);
  } else {
    console.log("Title element not found");
  }

  // Update name in heading
  const heading = document.querySelector('header h1');
  if (heading) {
    heading.innerText = `${name} ${surname}`;
    console.log("Name updated:", `${name} ${surname}`);
  } else {
    console.log("Header h1 not found");
  }
  // Add GitHub and LinkedIn icons
  const socialsContainer = document.getElementById('socials-container');
  if (socialsContainer) {
    const githubIcon = document.createElement('a');
    githubIcon.href = 'https://github.com/Yolanda-landii'; 
    githubIcon.target = '_blank';
    githubIcon.innerHTML = '<i class="fab fa-github"></i>'; 

    const linkedinIcon = document.createElement('a');
    linkedinIcon.href = '#https://www.linkedin.com/in/yolanda-mabotja-8ab563232/'; 
    linkedinIcon.target = '_blank';
    linkedinIcon.innerHTML = '<i class="fab fa-linkedin"></i>'; 

    socialsContainer.appendChild(githubIcon);
    socialsContainer.appendChild(linkedinIcon);

    console.log("GitHub and LinkedIn icons added");
  } else {
    console.log("Socials container not found");
  }


 

   // Display projects
  const projectsContainer = document.querySelector('#projects .about-containers');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('details-container', 'color-container');

    const imageElement = document.createElement('img');
    imageElement.src = project.imageSrc;
    imageElement.alt = project.title;
    imageElement.classList.add('project-img');
    projectElement.appendChild(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.classList.add('experience-sub-title', 'project-title');
    titleElement.textContent = project.title;
    projectElement.appendChild(titleElement);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn', 'btn-color-2', 'project-btn');
    buttonElement.textContent = 'Github';
    buttonElement.onclick = function() {
      window.location.href = project.githubLink;
    };
    projectElement.appendChild(buttonElement);

    projectsContainer.appendChild(projectElement);
  });


  // Display experience (Frontend)
  const frontendExperienceContainer = document.querySelector('#experience .details-container:first-child .article-container');
  if (frontendExperienceContainer) {
    experienceFrontend.forEach(exp => {
      const article = document.createElement('article');
      article.innerHTML = `<img src="image/checkmark.png" alt="Experience icon" class="icon">
                            <div>
                              <h3>${exp.technology}</h3>
                              <p>${exp.level}</p>
                            </div>`;
      frontendExperienceContainer.appendChild(article);
    });
    console.log("Frontend experience updated:", experienceFrontend);
  } else {
    console.log("Frontend experience container not found");
  }

  // Display experience (Backend)
  const backendExperienceContainer = document.querySelector('#experience .details-container:nth-child(2) .article-container');
  if (backendExperienceContainer) {
    experienceBackend.forEach(exp => {
      const article = document.createElement('article');
      article.innerHTML = `<img src="image/checkmark.png" alt="Experience icon" class="icon">
                            <div>
                              <h3>${exp.technology}</h3>
                              <p>${exp.level}</p>
                            </div>`;
      backendExperienceContainer.appendChild(article);
    });
    console.log("Backend experience updated:", experienceBackend);
  } else {
    console.log("Backend experience container not found");
  }
  

   // Display experience
   const experienceElement = document.querySelector('#about .about-containers .details-container:nth-child(1) p');
   if (experienceElement) {
     experienceElement.innerText = experience;
     console.log("Experience updated:", experience);
   } else {
     console.log("Experience element not found");
   }

    // Display education
    const educationElement = document.querySelector('#about .about-containers .details-container:nth-child(2) p');
    if (educationElement) {
      educationElement.innerText = education;
      console.log("Education updated:", education);
    } else {
      console.log("Education element not found");
    }
 
   // Add paragraph to About section
   const aboutTextContainer = document.querySelector('#about .text-container');
   if (aboutTextContainer) {
     const paragraphElement = document.createElement('p');
     paragraphElement.textContent = bio;
     aboutTextContainer.appendChild(paragraphElement);
     console.log("About section paragraph added:", bio);
   } else {
     console.log("About text container not found");
   }
 });