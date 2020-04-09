let text = $('#textarea');
for (let i = 0; i <= 9; i++) {
    $(`#${i}`).click(() => text.val(text.val() + i))
} // 0-9 clicks
$('#np').click(() => text.val(-1 * text.val())) // negative - positive
$('.buttons-operators div').click(function () {
    let _check = "";
    for (let i = 0; i < text.val().length; i++) {
        _check = text.val()[i]
    } // checking last symbol
    switch (_check) {
        case "/": break;
        case "-": break;
        case "*": break;
        case "+": break;
        case "": break;
        default: switch ($(this).attr('id')) {
            case "div": text.val(text.val() + '/'); break;
            case "mul": text.val(text.val() + '*'); break;
            case "min": text.val(text.val() + '-'); break;
            case "plus": text.val(text.val() + '+'); break;
            default:
                break;
        }
    }
})
$('#equal').click(function () {
    text.val(eval(text.val()));
})
$('#clear').click(() => text.val(""))


