jQuery(document).ready(function($) {
    moveNavigation();
    $(window).on('resize', function() {
        (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
    });

    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

        $('header').toggleClass('nav-is-visible');
        $('.cd-main-nav').toggleClass('nav-is-visible');
        $('.cd-main-content').toggleClass('nav-is-visible');

    });
    $('.menu-item').on('click', function(event) {
        event.preventDefault();
        if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

        $('header').toggleClass('nav-is-visible');
        $('.cd-main-nav').toggleClass('nav-is-visible');
        $('.cd-main-content').toggleClass('nav-is-visible');

    });



    function moveNavigation() {
        var navigation = $('.cd-main-nav-wrapper');
        var screenSize = checkWindowWidth();
        //let size = $(window).width();
        if (screenSize) {
            //desktop screen - insert navigation inside header element
            navigation.detach();
            navigation.insertBefore('.cd-nav-trigger');
        } else {
            //mobile screen - insert navigation after .cd-main-content element
            navigation.detach();
            navigation.insertAfter('.cd-main-content');
        }
        // if (size > 1024) {
        //     //desktop screen - insert navigation inside header element
        //     navigation.detach();
        //     navigation.insertBefore('.cd-nav-trigger');
        // } else {
        //     //mobile screen - insert navigation after .cd-main-content element
        //     navigation.detach();
        //     navigation.insertAfter('.cd-main-content');
        // }
    }

    function checkWindowWidth() {
        var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
        return (mq == 'mobile') ? false : true;
    }


});