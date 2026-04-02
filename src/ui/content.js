import githubLogo from "../img/github-mark.svg";
import projectImg from "../img/img1.png";
import visit from "../img/open-in-new.svg";
export default function renderContent(content) {
  // Create Elements
  const contentWrapper = document.createElement("div");
  const heading = document.createElement("h2");
  const cardContainer = document.createElement("div");
  const projects = [
    {
      img: projectImg,
      name: "Project 1",
      description: "Description of project 1",
    },
    {
      img: projectImg,
      name: "Project 2",
      description: "Description of project 2",
    },
    {
      img: projectImg,
      name: "Project 3",
      description: "Description of project 3",
    },
    {
      img: projectImg,
      name: "Project 4",
      description: "Description of project 4",
    },
    {
      img: projectImg,
      name: "Project 5",
      description: "Description of project 5",
    },
    {
      img: projectImg,
      name: "Project 6",
      description: "Description of project 6",
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

    // Text Content
    projectName.textContent = project.name;
    projectDescription.textContent = project.description;

    //Links
    githubLink.href = "https://github.com/JavedanCode";
    // Add project links later
    visitLink.href = "#";

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
