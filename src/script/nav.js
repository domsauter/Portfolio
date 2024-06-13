document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var headerNav = document.querySelector(".header-nav");
    var hideTimeout;
    var isHovering = false;

    // Event Listener für das Scrollen (inklusive touchmove für Touch-Geräte)
    function handleScroll() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Beim Hochscrollen oder wenn die Maus nicht über der Navigation ist
        if (scrollTop < lastScrollTop && !isHovering) {
            headerNav.classList.remove("hidden");

            // Setze den Timeout zurück, falls der Benutzer weiterhin hochscrollt
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(function() {
                // Blende die Leiste aus, wenn nicht ganz oben
                if (window.scrollY > 0 && !isHovering) {
                    headerNav.classList.add("hidden");
                    closeMenu(); // Menü schließen, wenn die Navigation ausgeblendet wird
                }
            }, 1000); // 1 Sekunde Verzögerung bevor die Navigation ausgeblendet wird
        } else if (scrollTop > 160 || isHovering) {
            // Beim Runterscrollen oder wenn die Maus über der Navigation ist
            headerNav.classList.add("hidden");
            closeMenu(); // Menü schließen, wenn der Benutzer weiterscrollt und nicht über dem Menü schwebt
        }

        // Stelle sicher, dass die Leiste sichtbar bleibt, wenn man ganz oben ist und nicht über der Navigation schwebt
        if (scrollTop <= 0 && !isHovering) {
            headerNav.classList.remove("hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Negative scroll Werte vermeiden
    }

    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("touchmove", handleScroll, false);

    // Event Listener für das Schweben über der Navigation
    headerNav.addEventListener("mouseenter", function() {
        isHovering = true;
        clearTimeout(hideTimeout); // Verhindere, dass die Navigation ausgeblendet wird
    });

    // Event Listener für das Verlassen der Navigation
    headerNav.addEventListener("mouseleave", function() {
        isHovering = false;
        // Setze den Timeout, um die Navigation nach einer Verzögerung auszublenden
        hideTimeout = setTimeout(function() {
            if (window.scrollY > 0) {
                headerNav.classList.add("hidden");
                closeMenu(); // Menü schließen, wenn der Benutzer nicht über der Navigation schwebt
            }
        }, 1000); // 1 Sekunde Verzögerung bevor die Navigation ausgeblendet wird
    });

    // Funktion zum Schließen des Menüs
    function closeMenu() {
        var toggleButton = document.getElementById("toggle_button");
        if (toggleButton.checked) {
            toggleButton.checked = false; // Menü schließen, indem die Checkbox deaktiviert wird
        }
    }
});
