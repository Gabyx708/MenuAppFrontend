import { agregarEstilo } from "../../utils/agregarEstilos.js";

const footerTag = document.getElementsByTagName("footer")[0];

async function getFooter(){

    const response = await fetch('/components/footer/footer.html');
    const footer = await response.text();
    footerTag.innerHTML += footer;

    agregarEstilo('/components/footer/footer.css');

};

export const FooterComponent = {
    footer : getFooter
}