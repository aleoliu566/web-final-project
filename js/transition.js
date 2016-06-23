/************transition food page ***************/
var window_w = $(window).width();
var h = $("#firstImg").height();
var topPicture = $(".three").height();

$(window).resize(function() {
    h = $("#firstImg").height();
    topPicture = $(".three").height();
    window_w = $(window).width();
    if(window_w<470&&window_w>420){
        location.reload();
    }
});

if(window_w>450){
    animate();
}
function animate(){
    if (window_w > 450) {
        $('#firstImg').animate({ left: "+5%", opacity: 1 }, 2000);
        $(window).scroll(function() {
            if ($(window).scrollTop() > (200 + h / 3)) {
                $('#flower').animate({ right: "+5%", opacity: 1 }, 2000);
                $('#milktea').animate({ right: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > 200 + 3 * (h / 3)) {
                $('#breadcream').animate({ left: '+5%', opacity: 1 }, 2000);
                $('#flowertea').animate({ left: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > 200 + 5 * (h / 3)) {
                $('#chickenegg').animate({ right: "+5%", opacity: 1 }, 2000);
                $('#ice').animate({ right: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > 200 + 7 * h / 3) {
                $('#pigblood').animate({ left: "+5%", opacity: 1 }, 2000)
            }
            if ($(window).scrollTop() > 200 + 9 * h / 3) {
                $('#myyasu').animate({ right: "+5%", opacity: 1 }, 2000);
            }
        });
    }
}

if (window_w < 450) {
    $("#firstImg div h5").before($("#firstImg div a img"));
    $("#flower div h5").before($("#flower div a img"));
    $("#breadcream div h5").before($("#breadcream div a img"));
    $("#chickenegg div h5").before($("#chickenegg div a img"));
    $("#pigblood div h5").before($("#pigblood div a img"));
    $("#myyasu div h5").before($("#myyasu div a img"));

    $("#milktea div h5").before($("#milktea div a img"));
    $("#flowertea div h5").before($("#flowertea div a img"));
    $("#ice div h5").before($("#ice div a img"));

    $("#logo img").attr('src', 'img/logo_nav_small.png');
}



$(window).scroll(function() {
    /*******************/
    /********bar********/
    /*******************/
    if ($(window).scrollTop() > topPicture) {
        $("#bar").css("background-color", "rgba(255,255,255,0.7)");
        $("header").addClass("fixed");
    }
    if ($(window).scrollTop() < topPicture) {
        $("#bar").css("background-color", "rgb(37,37,38)");
        $("header").removeClass("fixed");
    }
})