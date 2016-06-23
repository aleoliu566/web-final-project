/************transition food page ***************/
var window_w = $(window).width();
var h = $("#firstImg").height();
var topPicture = $(".three").height();

$(window).resize(function() {
    h = $("#firstImg").height();
    topPicture = $(".three").height();
    window_w = $(window).width();
    if(window_w<480&&window_w>410){
        location.reload();
    }
});

if(window_w>450){
    animate();
}
function animate(){
    if (window_w > 450) {
        
        $(window).scroll(function() {
            if ($(window).scrollTop() > (h/3)) {
                $('#firstImg').animate({ left: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > (topPicture + h / 3)) {
                $('#flower').animate({ right: "+5%", opacity: 1 }, 2000);
                $('#milktea').animate({ right: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > (topPicture + 3 * (h / 3))) {
                $('#breadcream').animate({ left: '+5%', opacity: 1 }, 2000);
                $('#flowertea').animate({ left: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > (topPicture + 6 * h / 3)) {
                $('#chickenegg').animate({ right: "+5%", opacity: 1 }, 2000);
                $('#ice').animate({ right: "+5%", opacity: 1 }, 2000);
            }
            if ($(window).scrollTop() > (topPicture + 8 * h / 3)) {
                $('#pigblood').animate({ left: "+5%", opacity: 1 }, 2000)
            }
            if ($(window).scrollTop() > (topPicture + 10 * h / 3)) {
                $('#myyasu').animate({ right: "+5%", opacity: 1 }, 2000);
            }
        });
    }
}

if (window_w < 450) {
    $("#firstImg div h5").before($("#firstImg div a"));
    $("#flower div h5").before($("#flower div a"));
    $("#breadcream div h5").before($("#breadcream div a"));
    $("#chickenegg div h5").before($("#chickenegg div a"));
    $("#pigblood div h5").before($("#pigblood div a"));
    $("#myyasu div h5").before($("#myyasu div a"));

    $("#milktea div h5").before($("#milktea div a"));
    $("#flowertea div h5").before($("#flowertea div a"));
    $("#ice div h5").before($("#ice div a"));

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