export default function frasesRobot(sleep){

    let frases = [
        "Bip bop bip bop...",
        "Estoy pensando...",
        "Listo y preparado...",
        "Estoy pidiendo por ti...",
        "Tu relajate yo pido..",
        "Odio las naranjas...🍊🍊🍊"
    ]

    const random = Math.floor(Math.random() * frases.length);

    if(sleep){
        return "ZZZZZZZ......"
    }

    let frase = frases[random];
    return frase;
}