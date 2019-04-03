$(document).ready(function() {

    var navbar = $(".navbar")
    var navbarOffset = navbar.offset()

    $(window).scroll(function() {
        if (window.pageYOffset >= navbarOffset.top) {
            navbar.addClass("sticky")
        } else {
            navbar.removeClass("sticky")
        }

        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200)
        } else {
            $('#return-to-top').fadeOut(200)
        }
    })

    $("#return-to-top").on({
        click: function() {
            $("body,html").animate({
                scrollTop: 0
            }, 500);
        }
    })

    $("#new-comment").click(function(e) {
        e.preventDefault()

        $(this).hide(function() {
            $(".new-comment-block").slideDown("slow");
        })
    })
})