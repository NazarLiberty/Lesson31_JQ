$(window).on('load', function () {
    $('.content').slice(1).slideUp();
})

$('.tabs .tabs-item').on('click', function () {
    switch ($(this).attr('id')) {
        case 'rating-info-tab': $('.content').slideUp();
            $('#rating-info').slideDown();
            $('.tabs .tabs-item').removeClass('tabs-item--active')
            $('#rating-info-tab').addClass('tabs-item--active')
            break;
        case 'information-tab': $('.content').slideUp();
            $('#information').slideDown();
            $('.tabs .tabs-item').removeClass('tabs-item--active')
            $('#information-tab').addClass('tabs-item--active')
            break;
        case 'tobuy-tab': $('.content').slideUp();
            $('#tobuy').slideDown();
            $('.tabs .tabs-item').removeClass('tabs-item--active')
            $('#tobuy-tab').addClass('tabs-item--active')
            break;
        default:
            break;
    }
})