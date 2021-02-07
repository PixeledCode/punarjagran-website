jQuery(document).ready(function($) {
    "use strict";
    //===== Responsive Header =====//
    $('.res-menu-btn').on('click', function () {
        $('.res-menu').addClass('slidein');
        return false;
    });
    $('.res-menu-close').on('click', function () {
        $('.res-menu').removeClass('slidein');
        return false;
    });

    // Current Year
    $('#year').html(new Date().getFullYear())

});

