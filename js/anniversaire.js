$(document).ready(function() {
    // Paragraphs selectors
    const $voeu1 = $('#voeu1');
    const $voeu2 = $('#voeu2');
    const $voeu3 = $('#voeu3');
    const $audio = $('#audio')[0];
    
    // Display next message on click and add animations
    $voeu1.on('click', function() {
        $voeu1.addClass('hidden');
        $voeu2.addClass('show');
    });

    $voeu2.on('click', function() {
        $voeu2.addClass('hidden');
        $voeu3.addClass('show');
    });

    $voeu3.on('click', function() {
        $voeu3.addClass('hidden');
        $('body').addClass('animate-bg');
        $audio.play();
    });
});
