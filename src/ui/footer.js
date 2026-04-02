import githubLogo from "../img/github-mark.svg";
import emailOutline from "../img/email-outline.svg";
import phoenix from "../img/phoenix_two.png";
export default function renderFooter(footer) {
  // Create Elements
  const footerWrapper = document.createElement("div");
  const contactMeContainer = document.createElement("div");
  const heading = document.createElement("h2");
  const emailIcon = document.createElement("img");
  const email = document.createElement("a");
  const iconContainer = document.createElement("div");
  const githubLink = document.createElement("a");
  const githubIcon = document.createElement("img");
  const linkdinLink = document.createElement("a");
  const linkdinIcon = document.createElement("img");
  const paragraph = document.createElement("p");
  const address = document.createElement("p");
  const image = document.createElement("img");

  // Assign Classes
  footerWrapper.classList.add("footer-wrapper");
  contactMeContainer.classList.add("contact-me-container");
  image.classList.add("footer-image");
  iconContainer.classList.add("footer-icons");
  email.classList.add("email-link");
  emailIcon.classList.add("email-icon");
  githubIcon.classList.add("icon");
  linkdinIcon.classList.add("icon");
  paragraph.classList.add("contact-us-p");
  address.classList.add("address");

  // Text Contents
  heading.textContent = "Contact me";
  email.textContent = "sorenjavedan@gmail.com";
  paragraph.textContent =
    "Please get in touch if you think our work could be mutually beneficial! ";
  address.textContent = "1234 Random Road Random Town, California 12345";
  // Links
  email.href = "mailto:sorenjavedan@gmail.com";
  githubLink.href = "https://github.com/JavedanCode";
  linkdinLink.href =
    "https://www.linkedin.com/in/mohammadmahdi-mohammadinia-262a443a9/";

  // Link Attributes
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Visit my GitHub profile");
  linkdinLink.target = "_blank";
  linkdinLink.rel = "noopener noreferrer";
  linkdinLink.setAttribute("aria-label", "Visit my Linkedln profile");
  // Image Source
  githubIcon.src = githubLogo;
  linkdinIcon.src =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg";
  emailIcon.src = emailOutline;
  image.src = phoenix;

  // Image Loading
  image.loading = "lazy";

  // Image Alternates
  emailIcon.alt = "Email me";
  githubIcon.alt = "Visit my Github";
  linkdinIcon.alt = "Visit my Linkedln";
  image.alt = " ";

  // Append/Prepend Children
  email.prepend(emailIcon);
  githubLink.appendChild(githubIcon);
  linkdinLink.appendChild(linkdinIcon);
  iconContainer.appendChild(githubLink);
  iconContainer.appendChild(linkdinLink);
  contactMeContainer.appendChild(heading);
  contactMeContainer.appendChild(paragraph);
  contactMeContainer.appendChild(address);
  contactMeContainer.appendChild(email);
  contactMeContainer.appendChild(iconContainer);
  footerWrapper.appendChild(contactMeContainer);
  footerWrapper.appendChild(image);

  // Append All to Footer
  footer.appendChild(footerWrapper);
}
