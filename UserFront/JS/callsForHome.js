import { FooterComponent } from "../components/footer/footer.js";
import { HeaderComponent } from "../components/header/header.js";
import checkLogueo from "../utils/checkLogueo.js";
import hacerConfetti from "../utils/confetti.js";
checkLogueo();

let userBirth = new Date(JSON.parse(sessionStorage.getItem("user")).fecha_nacimiento);

window.onload = () => {
    FooterComponent.footer();
    HeaderComponent.header();

    const currentDate = new Date();
    const userBirthMonth = userBirth.getMonth() + 1; // Suma 1 porque los meses en JavaScript van de 0 a 11.
    const userBirthDay = userBirth.getDate();

    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    if (currentMonth === userBirthMonth && currentDay === userBirthDay) {
        hacerConfetti();
    }
}
