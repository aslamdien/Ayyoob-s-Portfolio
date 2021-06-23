let projects = [
  {
    imgURL: "./images/contact.png",
    imgAlt: "project.png",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description:
    "This was the first Project I work. It was made using Html, CSS and a web site know as 'formspree.oi'",
    title2: "Links:",
    githubURL: "https://github.com/aslamdien/contact-form/",
    liveProjectURL: "https://nostalgic-galileo-e941cf.netlify.app/",
  },
  {
    imgURL: "./images/timeline.png",
    imgAlt: "project.png",
    title: "Timeline",
    techStack: "HTML/CSS",
    description:
    "This the layout of a timeline I created. It was with HTML, CSS and using code from 'michalsnik.github.io/aos/'",
    title2: "Links:",
    githubURL: "https://github.com/My-Timeline/",
    liveProjectURL: "https://stoic-feynman-8ad41d.netlify.app/",
  },
  {
    imgURL: "./images/Screenshot_2021-05-15_Testimonials.png",
    imgAlt: "project.png",
    title: "Testimonials",
    techStack: "HTML/CSS",
    description:
    "This the layout of a timeline I created. It was with HTML, CSS and JavaScript",
    title2: "Links:",
    githubURL: "https://github.com/Testimonial/",
    liveProjectURL: "https://competent-spence-e7ce8e.netlify.app/",
  },
  {
    imgURL: "./images/project-cards.png",
    imgAlt: "project.png",
    title: "Project Cards",
    techStack: ("HTML/CSS","JavaScript"),
    description:
    "These are my project cards with both the Live and Github link attach. This only contains the first three project above.",
    title2: "Links:",
    githubURL: "https://github.com/Testimonial/",
    liveProjectURL: "https://competent-spence-e7ce8e.netlify.app/",
  },
  {
    imgURL: "./images/sneaker-store.png",
    imgAlt: "project.png",
    title: "Sneaker Site",
    techStack: ("HTML/CSS","JavaScript"),
    description:
    "This was the first python project I created. It was a simple two number adding calculator, it was made with Python programming and Tkinter.",
    title2: "Links:",
    githubURL: "https://github.com/Testimonial/",
    liveProjectURL: "https://competent-spence-e7ce8e.netlify.app/",
  }, 
  {
    imgURL: "./images/Screenshot_2021-05-15_Tkinter-3-min.png",
    imgAlt: "project.png",
    title: "My First Python Project",
    techStack: "Python",
    description:
    "This was the first python project I created. It was a simple two number adding calculator, it was made with Python programming and Tkinter.",
    title2: "Links:",
    githubURL: "https://github.com/Testimonial/",
    liveProjectURL: "https://github.com/aslamdien/Tkinter/blob/main/Python_tkinter.py",
  },     
];

function createCard(card) {
  let createCard = `<div class="project-cards" tecStack=${card.techStack}>
<div data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" class="aos-init aos-animate">
        <div class="row project-card pro" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites">
          <div class="col-md-6 col-lg-5 project-card__img">
            <img class="img-contact" src=${card.imgURL} alt=${card.imgAlt}>
          </div>
          <div class="col-md-6 col-lg-7 project-card__info">
            <h3 class="project-card__title">${card.title}</h3>
            <p class="project-card__description">${card.description}</p>
            <p class="project-card__stack">Links:</p>
            <ul class="tag">
              <li class="link"><a href=${card.liveProjectURL}><i class="far fa-eye" aria-hidden="true"></i> Live</a></li>
              <li class="link"><a href=${card.githubURL}><i class="fab fa-github" aria-hidden="true"></i>GitHub</a></li>
            </ul>
    </div>
  `;
  return createCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}
renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-cards");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "none";
    }

    let selectedCards = document.querySelectorAll(`[techStack=${category}']`);

    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
}
