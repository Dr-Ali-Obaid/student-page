var $links = $(".itemlinks");

$links.click(function (e) {
    $links.removeClass('active');
    var clicklink = e.target;
    clicklink = $(clicklink);
    var position = clicklink.attr("data-pos");
    var translatevalue = 'translateX('+ position * 25 + '%)';
    $('#wrapper').css({
        transform : translatevalue
    });
    clicklink.addClass ('active')
})
$($links[0]).addClass('active')