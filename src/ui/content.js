export default function renderContent(content) {
  const heading = document.createElement("h2");
  heading.textContent = "My Projects";

  const cardContainer = document.createElement("div");

  const projects = [
    {
      img: "img1.png",
      name: "Project 1",
      description: "Description of project 1",
    },
    {
      img: "img2.png",
      name: "Project 2",
      description: "Description of project 2",
    },
    {
      img: "img3.png",
      name: "Project 3",
      description: "Description of project 3",
    },
    {
      img: "img4.png",
      name: "Project 4",
      description: "Description of project 4",
    },
    {
      img: "img5.png",
      name: "Project 5",
      description: "Description of project 5",
    },
    {
      img: "img6.png",
      name: "Project 6",
      description: "Description of project 6",
    },
  ];

  projects.forEach((project) => {
    const card = document.createElement("div");

    const projectImg = document.createElement("img");
    projectImg.src = project.img;

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;

    const iconContainer = document.createElement("span");

    const githubIcon = document.createElement("img");
    const visitIcon = document.createElement("img");

    iconContainer.appendChild(githubIcon);
    iconContainer.appendChild(visitIcon);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    card.appendChild(projectImg);
    card.appendChild(projectName);
    card.appendChild(iconContainer);
    card.appendChild(projectDescription);

    cardContainer.appendChild(card);
  });

  content.appendChild(heading);
  content.appendChild(cardContainer);
}
