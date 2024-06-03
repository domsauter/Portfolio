<<<<<<< HEAD
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
=======
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
      },
    968: {
    slidesPerView: 3,
    },
  },
});
>>>>>>> feature-branch
