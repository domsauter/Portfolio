const greetings = {
    "de": ["Hallo,<br>", "ich bin Dominik"],
    "ba": ["Servus,<br>", "i bin da Dominik"],
    "bw": ["Griaß Di,<br>", "i benn dr Dominik"],
    "en": ["Hi,<br>", "I'm Dominik"],
    "it": ["Ciao,<br>", "Io sono Dominik"],
    "es": ["Hola,<br>", "Soy Dominik"],
    "zh": ["你好,<br>", "我是Dominik"],
    "ru": ["Привет,<br>", "Я - Доминик"],
    "jp": ["こんにちは,<br>", "私はドミニクです"],
    "pt": ["Oi,<br>", "Eu sou Dominik"],
    "fr": ["Salut,<br>", "Je suis Dominik"],
    "tr": ["Merhaba,<br>", "Ben Dominik'im"],
    "ar": ["مرحبا,<br>", "أنا دومينيك"],
    "hi": ["नमस्ते,<br>", "मैं डोमिनिक हूँ"],
    "ko": ["안녕하세요,<br>", "나는 도미닉입니다"]
};

function getRandomGreeting(language) {
    const greeting = greetings[language];
    return `${greeting[0]}${greeting[1]}`;
}

function updateGreeting() {
    const languages = Object.keys(greetings);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = getRandomGreeting(randomLanguage);
}

setInterval(updateGreeting, 3000);