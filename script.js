"use strict";

$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        } if (position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        } if (position >= 2300) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });


});































