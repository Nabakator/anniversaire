$(document).ready(function() {
    // Paragraphs selectors
    const $voeu1 = $('#voeu1');
    const $voeu2 = $('#voeu2');
    const $voeu3 = $('#voeu3');
    const $audio = $('#audio')[0];

    // Display next message on click and add animations
    $voeu1.on('click', function() {
        $voeu2.addClass('show');
    });

    $voeu2.on('click', function() {
        $voeu3.addClass('show');
    });

    $voeu3.on('click', function() {
        // Check screen width to apply different backgrounds
        const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

        if (isTablet) {
            // Apply the birthday card background for tablet size
            $('body').addClass('animate-bg');
        } else {
            // Apply the color-changing animation for non-tablet sizes
            $('body').addClass('colorful-bg');
        }

        // Play the audio sound effect
        $audio.play();
    });
});
