$(document).ready(function() {

    var navbar = $(".navbar")
    var navbarOffset = navbar.offset()

    // var noActivity;

    // function setActivity() {
    //     noActivity = setTimeout(function() {
    //         alert("AA");
    //     }, 30 * 1000)
    // }

    // function resetActivity() {
    //     clearTimeout(noActivity);
    //     setActivity();
    // }

    // $(document).mouseover(resetActivity)

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

    // Dropdown
    $(".navbar > li > .dropdown").hover(() => {
        $(".navbar > li > .dropdown .dropdown-content").css("display", "block");
    }, () => {
        $(".navbar > li > .dropdown .dropdown-content").css("display", "none");
    });

    $("#new-comment").click(function(e) {
        e.preventDefault()

        $(this).hide(function() {
            $(".new-comment-block").slideDown("slow");
        })
    })

    $("#form-komentar").submit(function(e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        var komentar = $("#komentar")[0].value;

        var d = new Date();
        var o = {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};

        var e = d.toLocaleDateString('en-US', o);

        $(".comment-list").append('<div class="comment-item"><div class="comment-box"><div class="comment-content"><div class="comment-author"><span style="font-weight: bold;">'+name+'</span><div class="time"><span class="help-text">'+email+' - '+e+'</span></div></div><div class="comment-body"><p>'+komentar+'</p><a href="#" class="button right"><i class="fas fa-reply"></i> Balas</a></div></div></div></div>');
        
        $("#name").val('');
        $("#email").val('')
        $("#komentar").val('');
    })
})