// script.js
console.log("Tutorial de React cargado correctamente.");
$(document).ready(function() {
    // Smooth scrolling for nav links
    $('nav a').on('click', function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Highlight active link on scroll
    $(window).on('scroll', function() {
        let scrollPos = $(document).scrollTop();
        $('nav a').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });

    // Animate h2 elements on scroll into view
    $(window).on('scroll', function() {
        $('h2').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom) {
                $(this).css({ opacity: 1, transform: 'translateY(0)' });
            }
        });
    });
});

