import { Recibo } from "../components/recibo/recibo.js";
import checkLogueo from "../utils/checkLogueo.js";

checkLogueo();
await Recibo.obtenerRecibo();