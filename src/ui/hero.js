export default function renderHero(hero) {
  const aboutMeContianer = document.createElement("div");
  const profilePic = document.createElement("img");

  aboutMeContianer.id = "about-me-container";
  profilePic.id = "profile-pic";

  profilePic.alt = "Soren Javedan Computer Engineer";

  const heading1 = document.createElement("h1");
  heading1.textContent = "Soren Javedan";
  const heading2 = document.createElement("h2");
  heading2.textContent = "About me";

  const aboutMe = document.createElement("p");
  aboutMe.textContent =
    "I'm a Computer Engineering student with experience across a wide range of programming languages and technologies I’ve built numerous projects, from low-level systems to higher-level applications, which has helped me develop a strong and flexible problem-solving mindset. I enjoy exploring different areas of software development and continuously expanding my skill set, whether it's systems programming, web development, or emerging technologies. I focus on writing clean, reliable code and building projects that are both practical and well-structured.";

  const iconContainer = document.createElement("div");
  const githubIcon = document.createElement("img");
  const linkdinIcon = document.createElement("img");

  githubIcon.classList.add = "icon";
  linkdinIcon.classList.add = "icon";

  githubIcon.alt = "Visit my Github page";
  linkdinIcon.alt = "Visit my Linkdin page";

  iconContainer.appendChild(githubIcon);
  iconContainer.appendChild(linkdinIcon);

  aboutMeContianer.appendChild(heading2);
  aboutMeContianer.appendChild(aboutMe);
  aboutMeContianer.appendChild(iconContainer);

  hero.appendChild(heading1);
  hero.appendChild(profilePic);
  hero.appendChild(aboutMeContianer);
}
