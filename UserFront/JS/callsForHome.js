import { renderContadorNavidad } from "../christmast/contadorNavidad.js";
import { FooterComponent } from "../components/footer/footer.js";
import { HeaderComponent } from "../components/header/header.js";
import checkLogueo from "../utils/checkLogueo.js";

checkLogueo();

window.onload = () => {
    FooterComponent.footer();
    HeaderComponent.header();
    renderContadorNavidad();
}