$('#container div').click(function () {
    if ($(this).attr("id") == "container__block-1") {
        $("#container__block-1 .content").slideToggle('slow');
        $("#container div:not(:nth-of-type(1)) .content").slideUp()
    }
    else if ($(this).attr("id") == "container__block-2") {
        $("#container div:not(:nth-of-type(2)) .content").slideUp()
        $("#container__block-2 .content").slideToggle('slow');
    }
    else if ($(this).attr("id") == "container__block-3") {
        $("#container div:not(:nth-of-type(3)) .content").slideUp()
        $("#container__block-3 .content").slideToggle('slow');
    }
    else if ($(this).attr("id") == "container__block-4") {
        $("#container div:not(:nth-of-type(4)) .content").slideUp()
        $("#container__block-4 .content").slideToggle('slow');
    }
});
let counter = +$('button').text();
$('button').on('click', function () {
    $(this).text(++counter)
})
$('button').on('contextmenu', function (e) {
    e.preventDefault();
    $(this).text(--counter)
})



