import "./styles.css";
import createLayout from "./ui/layout";
import renderHero from "./ui/hero";
import renderContent from "./ui/content";
import renderFooter from "./ui/footer";

// Load Layout
const layout = createLayout();
document.body.appendChild(layout.main);
document.body.appendChild(layout.footer);

// Render Sections
renderHero(layout.hero);
renderContent(layout.content);
renderFooter(layout.footer);
