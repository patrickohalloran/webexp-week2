document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.

        var navBarHeight = $('.nav').height();

        /* click on about button */
        $('#about').click(function() {
            $('html, body').animate({
                scrollTop: ($(".about-container").offset().top - (1.5 * navBarHeight))
            }, 600);
        });

        /* click on pictures button */
        $('#pictures').click(function() {
            $('html, body').animate({
                scrollTop: ($(".picture-container").offset().top - (1.5 * navBarHeight))
            }, 600);
        });

        /* click on pictures button */
        $('#members').click(function() {
            $('html, body').animate({
                scrollTop: ($(".member-container").offset().top - (1.5 * navBarHeight))
            }, 600);
        });
    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}
