/************************
 *************************
 *************************/

function openNav() {
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.close').style.display = 'block';
}

function closeNav() {
    document.querySelector('nav').style.display = 'none';
    document.querySelector('.open').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
}

/*************************
 * ******************
 */
let screenWidthX = () => document.body.clientWidth;
let trueClick = true;

$('.minimized').click(trueClick = false);

$(function() {
    if (screenWidthX() > 720) {
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                top: ($(window).height() - $('#magnify').outerHeight()) / 2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });
    }

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
    trueClick = true;
});

function noClick() {
    $('.help_img').css({
        'display': 'none',
    })
}

$('.article').click(function(event) {
    if (screenWidthX() > 720) {
        if (trueClick) {
            let leftX = event.pageX;
            let topY = event.pageY;
            $('.help_img').css({
                'top': topY - 30,
                'left': leftX,
                'display': 'block',
            })
            setTimeout(noClick, 2500);
        }
    }
});
