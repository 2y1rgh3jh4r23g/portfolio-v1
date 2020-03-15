$("#view-my-work").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top
    }, 'slow');
});
