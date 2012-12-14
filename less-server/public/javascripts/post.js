$(function() {
    $(function() {
        var firstp = true;
        $("#thumbFeatures div a").each(function() {
            var $a = $(this);
            var $img = $a.find("img");
            //console.log($img.attr("src"));
            // adding image
            $("#sale-slideshow ul")
                .append('<li>'
                        + '<a href="'
                        + $a.attr("href")
                        + '">'
                        + '<img src="'
                        + $img.attr("src")
                        + '" />'
                        + '</a>'
                        + '</li>');
            // adding link
            if (firstp) {
                firstp = false;
                $("#sale-slideshow .next-link")
                    .before('<a href="#" class="active">&bull;</a>');
            }
            else {
                $("#sale-slideshow .next-link")
                    .before('<a href="#">&bull;</a>');
            }
        });
    });
});

