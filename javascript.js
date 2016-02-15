// There definitely are a couple of different issues with this code. One example is that,
// you are trying to use jQuery and you don't have jQuery or a CDN script tag in your html document
// I would like to go over this again when we start jQuery. For now, just practice Vanilla JS!!  
$('#list').hover(function() {
    $('ul', this).addClass('pseudoHover');
});
$(document).click(function() {
    $('#list ul').removeClass('pseudoHover');
});
