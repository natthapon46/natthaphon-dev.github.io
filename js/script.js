$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("h1").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("h1").html("<i class='fas fa-times'></i>");
        }
    });
});

var typed = new Typed('#type', {
    // Waits 1000ms after typing "First"
    strings: ['Natthaphon'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    });