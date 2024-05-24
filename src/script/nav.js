document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var headerNav = document.querySelector(".header-nav");
    var hideTimeout;

    window.addEventListener("scroll", function() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Beim Hochscrollen wird die Navigationsleiste eingeblendet
        if (scrollTop < lastScrollTop) {
            headerNav.classList.remove("hidden");

            // Setze den Timeout zurück, falls der Benutzer weiterhin hochscrollt
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(function() {
                // Blende die Leiste aus, wenn nicht ganz oben
                if (window.scrollY > 0) {
                    headerNav.classList.add("hidden");
                }
            }, 1000); // 1 Sekunde Verzögerung bevor die Navigation ausgeblendet wird
        } else if (scrollTop > 160) {
            // Beim Runterscrollen und wenn mehr als 160px nach unten gescrollt wurde, wird die Navigationsleiste ausgeblendet
            headerNav.classList.add("hidden");
        }

        // Stelle sicher, dass die Leiste sichtbar bleibt, wenn man ganz oben ist
        if (scrollTop <= 0) {
            headerNav.classList.remove("hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Negative scroll Werte vermeiden
    }, false);
});