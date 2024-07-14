document.addEventListener('DOMContentLoaded', (event) => {
    const phrases = [
        "El trabajo dignifica. 🌭",
        "Es difícil ser hombre. 👨🏻",
        "Y si matamos unos zombies? 🧟"
    ];

    const textElement = document.getElementById('saffitext');

    textElement.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        textElement.innerText = phrases[randomIndex];
    });
});
