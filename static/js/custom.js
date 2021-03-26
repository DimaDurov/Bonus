(function($){
    "use strict"
    var ORIO = {};


    ORIO.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.header').addClass('fixed-header');
        }
        else {
           $('.header').removeClass('fixed-header');
        }
    }

    
    $(document).on("ready", function(){
        ORIO.HeaderFixed();
    });

    $(window).on("scroll", function(){
        ORIO.HeaderFixed();
    });

    

})(jQuery);


