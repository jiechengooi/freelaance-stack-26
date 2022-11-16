$(document).ready(function () {
    $(".panel-collapse").addClass("show");
    $(".panel-heading").removeClass("collapsed");

    $(window).resize(function () {
        if ($(window).width() < 480) {
            $(".panel-collapse").removeClass("show");
            $(".panel-heading").addClass("collapsed");
        }

        else {
            $(".panel-collapse").addClass("show");
            $(".panel-heading").removeClass("collapsed");
        }
    });

    /* Menu Nav Toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Slider */
    $('.single-item').slick({
        dots: true,
        arrows: true,
        speed: 2000,
        nextArrow: '<img src="img/common/right.png" class="slick-next" alt="Right">',
        prevArrow: '<img src="img/common/left.png" class="slick-prev" alt="Left">',
        responsive: [
            {
                breakpoint: 766,
                settings: {
                    arrows: false

                }
            }
        ]
    });

    /* Collapse */
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function () {
        $('.spoiler-body').toggle()
    });
});
