let scrollContainer = document.querySelector(".projects-container");
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");

function getCardWidth() {
    let projectCard = document.querySelector(".project-card");
    return projectCard ? projectCard.offsetWidth + parseInt(window.getComputedStyle(scrollContainer).gap) : 350;
}

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 2; // Increase scroll speed
    scrollContainer.style.scrollBehavior = "auto";
});

leftButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -getCardWidth(),
        behavior: 'smooth'
    });
});

rightButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: getCardWidth(),
        behavior: 'smooth'
    });
});

// Adjust card width on window resize
window.addEventListener('resize', () => {
    let cardWidth = getCardWidth();
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.flexBasis = `${cardWidth}px`;
    });
});

// Variables for mouse and touch drag functionality
let isDown = false;
let startX;
let scrollLeft;

// Mouse events
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = 'grabbing'; // Optional: change cursor to grabbing
    scrollContainer.style.userSelect = 'none'; // Optional: disable text selection
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.style.cursor = 'default'; // Optional: revert cursor
    scrollContainer.style.removeProperty('user-select'); // Optional: re-enable text selection
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.style.cursor = 'default'; // Optional: revert cursor
    scrollContainer.style.removeProperty('user-select'); // Optional: re-enable text selection
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Touch events
scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchend', () => {
    isDown = false;
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});
