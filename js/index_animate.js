var object = [ "#index", "#food", "#drink", "#map" ];

// for (var i = 0; i < object.length; i++) {}
	// console.log(object[i]);
    $("#food").mouseover(function() {
        $("#food").addClass("bgcolor");
        $("#food a img").animate({ opacity: 1 }, 500);
    }).mouseleave(function() {
        $("#food a img").animate({ opacity: 0 }, 100);
        $("#food").removeClass("bgcolor");
    });

    $("#index").mouseover(function() {
        $("#index").addClass("bgcolor");
        $("#index a img").animate({ opacity: 1 }, 500);
    }).mouseleave(function() {
        $("#index a img").animate({ opacity: 0 }, 100);
        $("#index").removeClass("bgcolor");
    });

    $("#drink").mouseover(function() {
        $("#drink").addClass("bgcolor");
        $("#drink a img").animate({ opacity: 1 }, 500);
    }).mouseleave(function() {
        $("#drink a img").animate({ opacity: 0 }, 100);
        $("#drink").removeClass("bgcolor");
    });
    $("#map").mouseover(function() {
        $("#map").addClass("bgcolor");
        $("#map a img").animate({ opacity: 1 }, 500);
    }).mouseleave(function() {
        $("#map a img").animate({ opacity: 0 }, 100);
        $("#map").removeClass("bgcolor");
    });