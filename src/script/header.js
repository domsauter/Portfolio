document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    const titleElement = document.getElementById('title');
    const greetingText = "Hi,\nI'm Dominik"; // Zeilenumbruch durch '\n'
    const titles = ["Software Developer", "Web Developer", "Mechanical Engineer"];
    const displayDuration = 500; // Duration to display each title

    function typeWriter(text, element, callback) {
        let index = 0;
        element.innerHTML = ''; // Clear existing text

        function type() {
            if (index < text.length) {
                if (text.charAt(index) === '\n') {
                    element.innerHTML += '<br>'; // Add <br> tag for newline
                } else {
                    element.innerHTML += text.charAt(index);
                }
                index++;
                setTimeout(type, 500); // Adjust typing speed here
            } else {
                if (callback) callback();
            }
        }

        type();
    }

    function showTitles(index) {
        if (index < titles.length) {
            titleElement.textContent = titles[index];
            titleElement.classList.add('fade-in');

            if (index === titles.length - 1) {
                titleElement.classList.add('no-background');
                setTimeout(() => {
                    titleElement.classList.remove('no-background');
                }, 1000); // Delay to remove no-background class
            } else {
                titleElement.classList.remove('no-background');
            }
    
            setTimeout(() => {
                titleElement.classList.remove('fade-in');
                if (index < titles.length - 1) {
                    showTitles(index + 1); // Keine zusätzliche Verzögerung für den nächsten Titel
                } else {
                    titleElement.classList.add('fade-in');
                }
            }, displayDuration);
        }
    }

    // Start the typewriter effect for greeting text
    typeWriter(greetingText, greetingElement, () => {
        // After greeting text is typed, show titles sequentially
        showTitles(0);
    });
});
