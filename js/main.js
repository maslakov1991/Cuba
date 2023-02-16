$(function () {

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    })

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

});