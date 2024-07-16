$(function() {
    var gIABOZ = $(".gIABOZ");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            gIABOZ.removeClass('gIABOZ').addClass("header-alt");
        } else {
            gIABOZ.removeClass("header-alt").addClass('gIABOZ');
        }
    });
});