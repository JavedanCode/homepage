export default function createLayout() {
  const mainContainer = document.createElement("main");
  // Declare container for all sections
  const hero = document.createElement("section");
  const content = document.createElement("section");
  const footer = document.createElement("footer");
  // Give ID's to all sections
  hero.id = "hero";
  content.id = "projects";
  footer.id = "footer";
  mainContainer.id = "main";

  // Assign Classes
  hero.classList.add("hero");
  content.classList.add("projects");
  footer.classList.add("footer");

  // Append Children
  mainContainer.appendChild(hero);
  mainContainer.appendChild(content);

  // Return All Sections
  return {
    hero,
    content,
    footer,
    main: mainContainer,
  };
}
