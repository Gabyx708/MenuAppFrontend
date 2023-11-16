export default function fraseRandomNavidad(){

    let frases = [
        "66656C696365732066696573746173",
        "si tienes hambre en la cocina hay pan dulce",
        "esperemos no mueras de hambre",
        "se siente el espiritu navideño",
        "jo jo jo",
        "feliz navidad"
    ]

    const random = Math.floor(Math.random() * frases.length);

    let frase = frases[random];
    return frase;
}