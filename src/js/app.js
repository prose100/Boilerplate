$(document).ready(function(){
    // fade in and fade out
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#uparrow').fadeIn();
            } else {
                $('#uparrow').fadeOut();
            }
        });
 
        // scroll body to 0px on click
        $('#uparrow').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
 
    //nav-icons
    $nav = $('.nav-list');
        
    $(".menu-icon").click("on", function() {
        if ($nav.hasClass('active')) {
            $nav.slideToggle();
            $nav.removeClass('active'); 
        } else {
            $nav.slideToggle();
            $nav.addClass('active');    
        }
    });

    //sub-menus
    $(".sub-link").click("on", function() {
        $sublist = $(this).next(".sub-list");

        if ($sublist.hasClass('active')) {
            $sublist.hide();
            $sublist.removeClass('active'); 
        } else {
            $sublist.show();
            $sublist.addClass('active');    
        }
    });

    //resize window
    $(window).resize(function() {
        if ($(window).width() >= 769) {
            $nav.show();
        }
    });
});