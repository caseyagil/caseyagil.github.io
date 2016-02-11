$('#list').hover(function() {
    $('ul', this).addClass('pseudoHover');
});
$(document).click(function() {
    $('#list ul').removeClass('pseudoHover');
});
