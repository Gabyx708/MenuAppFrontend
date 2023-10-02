export default function fraseRandom(){

    let frases = [
        "65 73 74 61 73 20 70 65 72 64 69 65 6E 64 6F 20 65 6C 20 74 69 65 6D 70 6F",
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