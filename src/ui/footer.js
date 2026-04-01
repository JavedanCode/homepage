export default function renderFooter(footer) {
  const contactMeContainer = document.createElement("div");

  const heading = document.createElement("h2");
  heading.textContent = "Contact me";
  const emailIcon = document.createElement("img");
  emailIcon.alt = "email icon";
  const email = document.createElement("a");
  email.textContent = "sorenjavedan@gmail.com";
  const iconContainer = document.createElement("div");
  const githubIcon = document.createElement("img");
  const linkdinIcon = document.createElement("img");
  iconContainer.appendChild(githubIcon);
  iconContainer.appendChild(linkdinIcon);

  contactMeContainer.appendChild(heading);
  contactMeContainer.appendChild(emailIcon);
  contactMeContainer.appendChild(email);
  contactMeContainer.appendChild(iconContainer);

  const image = document.createElement("img");
  image.alt = "random image";

  footer.appendChild(contactMeContainer);
  footer.appendChild(image);
}
