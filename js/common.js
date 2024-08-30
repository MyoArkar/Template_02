$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-group').toggleClass('is-show');
    });
});