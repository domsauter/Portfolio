const greetings = {
    "de": ["Hallo,<br>", "ich bin Dominik"],
    "ba": ["Servus,<br>", "i bin da Dominik"],
    "bw": ["Griaß Di,<br>", "i benn dr Dominik"],
    "en": ["Hi,<br>", "I'm Dominik"],
    "it": ["Ciao,<br>", "Io sono Dominik"],
    "es": ["Hola,<br>", "Soy Dominik"],
    "pt": ["Oi,<br>", "Eu sou Dominik"],
    "fr": ["Salut,<br>", "Je suis Dominik"],
    "tr": ["Merhaba,<br>", "Ben Dominik'im"]
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
