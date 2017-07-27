$(document).ready(function() {

    $('img').hover(function() {
        var muffin = $(this).attr('src')
        var eva = $(this).attr('alt')
        $(this).attr('src', function() {
            $(this).attr('alt', function() {
                return muffin;
            })
            return eva;
        });
    });
    $('button').click(function() {
        $('img').css("visibility", "visible");
    });

});