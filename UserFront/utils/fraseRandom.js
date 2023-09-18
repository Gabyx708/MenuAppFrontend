export default function fraseRandom(){

    let frases = [
        "mas suerte para la proxima",
        "esperemos no mueras de hambre",
        "si tienes hambre en la cocina hay pan",
        "no comer es algo grave",
        "The cake is a lie"
    ]

    const random = Math.floor(Math.random() * frases.length);

    let frase = frases[random];
    return frase;
}