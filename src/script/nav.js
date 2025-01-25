document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var headerNav = document.querySelector(".header-nav");
    var hideTimeout;
    var isHovering = false;

    // Funktion zum Ein-/Ausblenden der Navigation
    function handleScroll() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop && !isHovering) {
            headerNav.classList.remove("hidden");

            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(function() {
                if (window.scrollY > 0 && !isHovering) {
                    headerNav.classList.add("hidden");
                    closeMenu();
                }
            }, 1000);
        } else if (scrollTop > 160 || isHovering) {
            headerNav.classList.add("hidden");
            closeMenu();
        }

        if (scrollTop <= 0 && !isHovering) {
            headerNav.classList.remove("hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Event Listener für Scrollen und Touchbewegungen
    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("touchmove", handleScroll, false);

    // Hover- und Touch-Interaktionen für mobile Geräte
    function handleInteractionStart() {
        isHovering = true;
        clearTimeout(hideTimeout);
        headerNav.classList.remove("hidden");
    }

    function handleInteractionEnd() {
        isHovering = false;
        hideTimeout = setTimeout(function() {
            if (window.scrollY > 0) {
                headerNav.classList.add("hidden");
                closeMenu();
            }
        }, 1000);
    }

    // Desktop Hover-Events
    headerNav.addEventListener("mouseenter", handleInteractionStart);
    headerNav.addEventListener("mouseleave", handleInteractionEnd);

    // Mobile Touch-Events
    headerNav.addEventListener("touchstart", handleInteractionStart);
    headerNav.addEventListener("touchend", handleInteractionEnd);

    // Funktion zum Schließen des Menüs
    function closeMenu() {
        var toggleButton = document.getElementById("toggle_button");
        if (toggleButton && toggleButton.checked) {
            toggleButton.checked = false;
        }
    }

    // Stelle sicher, dass die Navbar beim Laden immer sichtbar ist
    headerNav.classList.remove("hidden");
});
