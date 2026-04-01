import "./styles.css";
import createLayout from "./ui/layout";
import renderHero from "./ui/hero";
import renderContent from "./ui/content";
import renderFooter from "./ui/footer";
const layout = createLayout();

document.body.appendChild(layout.hero);
document.body.appendChild(layout.content);
document.body.appendChild(layout.footer);

renderHero(layout.hero);
renderContent(layout.content);
renderFooter(layout.footer);
