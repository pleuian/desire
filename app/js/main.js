$(function () {
    $('.header__btn').on('click', function () {
        $('.rightmenu').removeClass('rightmenu__hidden');
    });
    $('.rightmenu__close').on('click', function () {
        $('.rightmenu').addClass('rightmenu__hidden');
    });

    if ($(window).width() < 701) {
        $('.works__item--measuring').appendTo($('.works__items--box'));
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact__slider').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 10,
        slidesToShow: 10,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToScroll: 8,
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToScroll: 6,
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToScroll: 5,
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="../images/previous.svg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="../images/next.svg" alt="Next"></button>',
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.rutsaghimp'
        }
    });

});