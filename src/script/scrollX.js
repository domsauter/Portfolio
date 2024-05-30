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
        scrollContainer.style.scrollBeavior = "auto";
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