'use strict';

export default function hacerConfetti() {

    Swal.fire({
        title: "FELIZ CUMPLEAÑOOOOS!!!",
        showConfirmButton: false});

    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    const numConfetti = 100;
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff']; // Define tus colores aquí

    function createConfetto() {
        const confetto = document.createElement('div');
        confetto.style.position = 'absolute';
        confetto.style.width = '10px';
        confetto.style.height = '10px';
        confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetto.style.borderRadius = '50%';
        confetto.style.pointerEvents = 'none';

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        confetto.style.left = x + 'vw';
        confetto.style.top = y + 'vh';

        confettiContainer.appendChild(confetto);

        return confetto;
    }

    const confettiElements = [];

    for (let i = 0; i < numConfetti; i++) {
        const confetto = createConfetto();
        confettiElements.push(confetto);
    }

    function animateConfetti() {
        confettiElements.forEach((confetto) => {
            const x = parseFloat(confetto.style.left);
            const y = parseFloat(confetto.style.top);

            const newX = x + (Math.random() - 0.5) * 2; // Cambia la velocidad ajustando el valor 2
            const newY = y + (Math.random() * 3); // Cambia la velocidad vertical ajustando el valor 3

            confetto.style.left = newX + 'vw';
            confetto.style.top = newY + 'vh';

            if (newY >= 100) {
                confetto.style.top = '0';
                confetto.style.left = Math.random() * 100 + 'vw';
            }
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();

    setTimeout(() => {
        confettiContainer.remove();
    }, 3000); // Cambia este valor para ajustar la duración de la animación
}
