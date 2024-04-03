const greetings = {
    "de": ["<span>Hallo,<br></span>", "ich bin Dominik"],
    "ba": ["<span>Servus,<br></span>", "i bin da Dominik"],
    "bw": ["<span>Griaß Di,<br></span>", "i benn dr Dominik"],
    "en": ["<span>Hi,<br></span>", "I'm Dominik"],
    "it": ["<span>Ciao,<br></span>", "Io sono Dominik"],
    "es": ["<span>Hola,<br></span>", "Soy Dominik"],
    "zh": ["<span>你好,<br></span>", "我是Dominik"],
    "ru": ["<span>Привет,<br></span>", "Я - Доминик"],
    "jp": ["<span>こんにちは,<br></span>", "私はドミニクです"],
    "pt": ["<span>Oi,<br></span>", "Eu sou Dominik"],
    "fr": ["<span>Salut,<br></span>", "Je suis Dominik"],
    "tr": ["<span>Merhaba,<br></span>", "Ben Dominik'im"],
    "ar": ["<span>مرحبا,<br></span>", "أنا دومينيك"],
    "hi": ["<span>नमस्ते,<br></span>", "मैं डोमिनिक हूँ"],
    "ko": ["<span>안녕하세요,<br></span>", "나는 도미닉입니다"]
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

setInterval(updateGreeting, 10000);