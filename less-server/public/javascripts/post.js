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
    // looks
    $("#staff_styling_box").each(function() {
        var $html = $("#new-mobile-styling-box")
        var title = $(this).find("h3").text();
        $html.append("<h3>" + title + "</h3>");
        $(this).find("#styling_img_box a.hoverimage").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            $html.append('<a href="' + link + '">'
                         + '<img src="'
                         + $img.attr("src")
                         + '" />'
                         + '</a>');
        });
        //$(".features-box").append($html);
    });
    $(".new_arrival_box:not(saleitem_box)").each(function() {
        var $html = $("#new-mobile-arrival-box");
        var title = $(this).find("h3").text();
        $(this).find("tr a").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            $html.append('<a href="' + link + '">'
                         + '<img src="'
                         + $img.attr("src")
                         + '" />'
                         + '</a>');
        });
    });
    $(".new_arrival_box.saleitem_box").each(function() {
        var $html = $("#new-mobile-sale-box");
        var title = $(this).find("h3").text();
        $(this).find("tr a").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            $html.append('<a href="' + link + '">'
                         + '<img src="'
                         + $img.attr("src")
                         + '" />'
                         + '</a>');
        });
    });
    // category
    $("#category_list_box dl.accordion dt a").each(function() {
        var $a = $(this);
        var link = $a.attr("href");
        var name = $a.text();
        $("#mobile-category ul")
            .append('<li><a href="'
                    + link + '">'
                    + name + '</a></li>');
    });
});
