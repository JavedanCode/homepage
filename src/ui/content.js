import githubLogo from "../img/github-mark.svg";
import todo from "../img/todo.png";
import phoenixTravails from "../img/phoenix-travails.png";
import tictactoe from "../img/tictactoe.png";
import battleship from "../img/battleship.png";
import weather from "../img/weather.png";
import rtinos from "../img/rtinos.png";
import visit from "../img/open-in-new.svg";
export default function renderContent(content) {
  // Create Elements
  const contentWrapper = document.createElement("div");
  const heading = document.createElement("h2");
  const cardContainer = document.createElement("div");
  const projects = [
    {
      img: todo,
      name: "Todo List",
      description:
        "Odin Project | Todo list webpage. It was a challenging one!",
      gitLink: "https://github.com/JavedanCode/todo-list",
      projectLink: "https://javedancode.github.io/todo-list/",
    },
    {
      img: phoenixTravails,
      name: "Phoenix Travails",
      description:
        "Odin Project | Knights Travails. This one was very fun to design.",
      gitLink: "https://github.com/JavedanCode/phoenix-travails",
      projectLink: "https://javedancode.github.io/phoenix-travails/",
    },
    {
      img: tictactoe,
      name: "Tic Tac Toe",
      description:
        "Odin Project | Tic Tac Toe game. The phoenix theme started from here.",
      gitLink: "https://github.com/JavedanCode/Tic-Tac-Toe",
      projectLink: "https://javedancode.github.io/Tic-Tac-Toe/",
    },
    {
      img: battleship,
      name: "Battleship",
      description:
        "Odin Project | Battleship game. Still need to improve the UI for this one heh...",
      gitLink: "https://github.com/JavedanCode/battleship",
      projectLink: "https://javedancode.github.io/battleship/",
    },
    {
      img: weather,
      name: "Weather App",
      description:
        "Odin Project | Weather App. In this one I learned how to use APIs, it was a good one!",
      gitLink: "https://github.com/JavedanCode/weather-app",
      projectLink: "https://javedancode.github.io/weather-app/",
    },
    {
      img: rtinos,
      name: "Resturant Page",
      description:
        "Odin Project | Resturant Page. This one is actually themed after my best friends vision of his resturant when he was child.",
      gitLink: "https://github.com/JavedanCode/Restaurant-Page",
      projectLink: "https://javedancode.github.io/Restaurant-Page/",
    },
  ];

  // Text Content
  heading.textContent = "My Odin Projects";

  // Card Container Class
  cardContainer.classList.add("card-container");
  contentWrapper.classList.add("content-wrapper");

  // Create Project Cards
  projects.forEach((project) => {
    // Create Elements
    const card = document.createElement("article");
    const projectImg = document.createElement("img");
    const projectName = document.createElement("h3");
    const cardIcons = document.createElement("div");
    const githubLink = document.createElement("a");
    const githubIcon = document.createElement("img");
    const visitLink = document.createElement("a");
    const visitIcon = document.createElement("img");
    const projectDescription = document.createElement("p");
    const cardTop = document.createElement("div");

    // Assign Classes
    card.classList.add("card");
    projectName.classList.add("project-name");
    projectImg.classList.add("project-img");
    githubIcon.classList.add("icon");
    visitIcon.classList.add("icon");
    cardIcons.classList.add("card-icons");
    cardTop.classList.add("card-top");
    projectDescription.classList.add("description");

    // Text Content
    projectName.textContent = project.name;
    projectDescription.textContent = project.description;

    //Links
    githubLink.href = project.gitLink;
    // Add project links later
    visitLink.href = project.projectLink;

    // Link Attributes
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.setAttribute("aria-label", "Visit my GitHub profile");
    visitLink.target = "_blank";
    visitLink.rel = "noopener noreferrer";
    visitLink.setAttribute("aria-label", "View live project");

    // Image Sources
    projectImg.src = project.img;
    githubIcon.src = githubLogo;
    visitIcon.src = visit;

    //Image Loading
    projectImg.loading = "lazy";

    // Project Image Alternates
    // Will add later into project objects
    projectImg.alt = `${project.name} screenshot`;
    visitIcon.alt = "View live project";
    githubIcon.alt = "View Project repository";

    // Append Children
    githubLink.appendChild(githubIcon);
    visitLink.appendChild(visitIcon);
    cardIcons.appendChild(githubLink);
    cardIcons.appendChild(visitLink);
    cardTop.appendChild(projectName);
    cardTop.appendChild(cardIcons);
    card.appendChild(projectImg);
    card.appendChild(cardTop);
    card.appendChild(projectDescription);
    cardContainer.appendChild(card);
  });

  // Add All to Content
  contentWrapper.appendChild(heading);
  contentWrapper.appendChild(cardContainer);
  content.appendChild(contentWrapper);
}
