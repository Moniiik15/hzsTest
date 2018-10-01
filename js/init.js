$(function () {
    $('.sidenav').sidenav().on('click tap', 'li a', () => {
        $('.sidenav').sidenav('close');
    });
    $(window).load(function() {
        if ($(window).width() <= 600) {
            $('.social').addClass('btn-small');
        } else {
            $('.social').removeClass('btn-small');
        }
        $(window).resize(function () {
            if ($(window).width() <= 600) {
                $('.social').addClass('btn-small');
            } else {
                $('.social').removeClass('btn-small');
            }
        });
    });
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.tap-target').tapTarget();
}); 

// end of document ready


