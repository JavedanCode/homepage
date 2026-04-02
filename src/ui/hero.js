import githubLogo from "../img/github-mark.svg";
import storm from "../img/storm.jpg";

export default function renderHero(hero) {
  // Create Elements

  const aboutMeContainer = document.createElement("div");
  const profilePic = document.createElement("img");
  const heroWrapper = document.createElement("div");
  const heading2 = document.createElement("h2");
  const heading1 = document.createElement("h1");
  const aboutMe = document.createElement("p");
  const iconContainer = document.createElement("div");
  const githubLink = document.createElement("a");
  const githubIcon = document.createElement("img");
  const linkdinLink = document.createElement("a");
  const linkdinIcon = document.createElement("img");

  // Assign Classes
  heroWrapper.classList.add("hero-wrapper");
  aboutMeContainer.className = "about-me-container";
  iconContainer.classList.add("hero-icons");
  githubIcon.classList.add("icon");
  linkdinIcon.classList.add("icon");
  githubLink.classList.add("link");
  linkdinLink.classList.add("link");

  // IDs
  profilePic.id = "profile-pic";

  // Text Content
  heading1.textContent = "Soren Javedan";
  heading2.textContent = "About me";
  aboutMe.textContent =
    "I'm a Computer Engineering student with experience across a wide range of programming languages and technologies I’ve built numerous projects, from low-level systems to higher-level applications, which has helped me develop a strong and flexible problem-solving mindset. I enjoy exploring different areas of software development and continuously expanding my skill set, whether it's systems programming, web development, or emerging technologies. I focus on writing clean, reliable code and building projects that are both practical and well-structured.";

  // Links
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

  // Image Sources
  profilePic.src = storm;
  githubIcon.src = githubLogo;
  linkdinIcon.src =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg";

  // Image Alternates
  profilePic.alt = "Soren Javedan Computer Engineer";
  githubIcon.alt = "Visit my Github page";
  linkdinIcon.alt = "Visit my Linkdin page";

  // Append Children
  githubLink.appendChild(githubIcon);
  linkdinLink.appendChild(linkdinIcon);
  iconContainer.appendChild(githubLink);
  iconContainer.appendChild(linkdinLink);
  aboutMeContainer.appendChild(heading1);
  aboutMeContainer.appendChild(heading2);
  aboutMeContainer.appendChild(aboutMe);
  aboutMeContainer.appendChild(iconContainer);
  heroWrapper.appendChild(profilePic);
  heroWrapper.appendChild(aboutMeContainer);

  // Append All to Hero
  hero.appendChild(heroWrapper);
}
