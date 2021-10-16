$(document).ready(function () {
    $('#s-label').click(function () {
        $('#s-box').animate({
            width: "toggle"
        })
    });
    $('.fa-search').click(function (e) {
        e.preventDefault();
    })
});