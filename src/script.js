const greetings = {
    "de": ["Hallo,", "ich bin Dominik"],
    "ba": ["Servus,", "i bin da Dominik"],
    "bw": ["Griaß Di,", "i benn dr Dominik"],
    "en": ["Hi,", "I'm Dominik"],
    "it": ["Ciao,", "Io sono Dominik"],
    "es": ["¡Hola,", "Soy Dominik"],
    "zh": ["你好,", "我是Dominik"],
    "ru": ["Привет,", "Я - Доминик"],
    "jp": ["こんにちは,", "私はドミニクです"]
    "pt": ["Oi,", "Eu sou Dominik"],
    "fr": ["Salut,", "Je suis Dominik"],
    "tr": ["Merhaba,", "Ben Dominik'im"],
    "ar": ["مرحبا,", "أنا دومينيك"],
    "hi": ["नमस्ते,", "मैं डोमिनिक हूँ"],
    "ko": ["안녕하세요,", "나는 도미닉입니다"]
};

function getRandomGreeting(language) {
    const greeting = greetings[language];
    return `${greeting[0]}\n${greeting[1]}`;
}

function updateGreeting() {
    const language = Object.keys(greetings)[Math.floor(Math.random() * Object.keys(greetings).length)];
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = getRandomGreeting(language);
}

setInterval(updateGreeting, 10000);