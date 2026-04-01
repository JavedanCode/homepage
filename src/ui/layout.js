export default function createLayout() {
  // Declare container for all sections
  const hero = document.createElement("section");
  const content = document.createElement("section");
  const footer = document.createElement("footer");
  // Give ID's to all sections
  hero.id = "hero-contianer";
  content.id = "content";
  footer.id = "footer";

  // Return all sections
  return {
    hero,
    content,
    footer,
  };
}
