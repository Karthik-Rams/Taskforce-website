$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $( ".header #background").fadeIn();
    }
    else {
        console.log('there');
        $(".header #background").fadeOut();
    }
});