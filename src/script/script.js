const greetings = {
    "de": ["Hallo,<br>", "ich bin Dominik"],
    "bw": ["Griaß Di,<br>", "i benn dr Dominik"],
    "en": ["Hi,<br>", "I'm Dominik"],
    "es": ["Hola,<br>", "soy Dominik"],
    "fr": ["Salut,<br>", "je suis Dominik"],
};

function getRandomGreeting() {
    const languages = Object.keys(greetings);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    const greeting = greetings[randomLanguage];
    return `${greeting[0]}${greeting[1]}`;
}

function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = getRandomGreeting();
}

// Sofortigen zufälligen Satz anzeigen
updateGreeting();

// Alle 10 Sekunden aktualisieren
setInterval(updateGreeting, 10000);
