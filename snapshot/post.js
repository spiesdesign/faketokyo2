$(function() {
    $(function() {
        var firstp = true;
        var slide_images = [
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1217presalemain.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1215sistermain.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1210xmaspickup2.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1207wrap.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/12awcase.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/12awholland2.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/12awpearl.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1128wia1.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1109tightsmain.jpg",
            "http://www.faketokyo.com/design/faketokyo/image_mainvisual/1018candymain.jpg"
        ];
        var images_num = slide_images.length;
        
        $("#sale-slideshow .flickSimple ul").css("width", (images_num * 100) + "%");
        
        for (var i = 0; i < slide_images.length; i++) {
            $("#sale-slideshow ul")
                .append('<li>'
                        + '<a href="'
                        + '#'
                        + '">'
                        + '<img src="'
                        + slide_images[i]
                        + '"/>'
                        + '</a>'
                        + '</li>');
            if (firstp) {
                firstp = false;
                $("#sale-slideshow .next-link")
                    .before('<a href="#" class="bullet active" data-index="' + i + '">&bull;</a>');
            }
            else {
                $("#sale-slideshow .next-link")
                    .before('<a href="#" class="bullet" data-index="' + i + '">&bull;</a>');
            }
        }

        $("#sale-slideshow ul li").css("width", (100.0 / images_num) + "%");
        $("#sale-slideshow .flickSimple").flickSimple({
            ratio: 10,
            duration: 300,
            vertical: false,
            horizontal: true,
            lock: true,
            paginate: 'x',
            onChange: function() {
                $("#sale-slideshow .bullet").removeClass("active");
                $($("#sale-slideshow .bullet")[this.page - 1]).addClass("active");
            }
        });
        
        var fs = $("#sale-slideshow .flickSimple");
        $("#sale-slideshow .bullet").click(function() {
            var index = parseInt($(this).attr("data-index"), 10);
            fs.flickSimple("goTo", index);
        });
        //fs.onChange();
        $("#sale-slideshow .pager .previous-link").click(function() {
            console.log("hgoe");
            //fs.prevPage(1);
            fs.flickSimple("prevPage", 1);
            return false;
        });
        $("#sale-slideshow .pager .next-link").click(function() {
            console.log("fuga");
            fs.flickSimple("nextPage", 1);
            return false;
        });

        var insfs = fs.flickSimple();
        var ssflg = true;
        setInterval( function() {
	    if ( ! ssflg ) { return; }
	    if ( insfs.startX != null ) { return; }
	    ( insfs.pageLength < insfs.page +1 )
		? insfs.goTo( 1 )
		: insfs.nextPage( 1 );
	}, 3000 );        
        
        // $("#thumbFeatures div a").each(function() {
        //     var $a = $(this);
        //     var $img = $a.find("img");
        //     //console.log($img.attr("src"));
        //     // adding image
        //     $("#sale-slideshow ul")
        //         .append('<li>'
        //                 + '<a href="'
        //                 + $a.attr("href")
        //                 + '">'
        //                 + '<img src="'
        //                 + $img.attr("src")
        //                 + '" />'
        //                 + '</a>'
        //                 + '</li>');
        //     // adding link
        //     if (firstp) {
        //         firstp = false;
        //         $("#sale-slideshow .next-link")
        //             .before('<a href="#" class="active">&bull;</a>');
        //     }
        //     else {
        //         $("#sale-slideshow .next-link")
        //             .before('<a href="#">&bull;</a>');
        //     }
        // });
    });
    // looks
    $("#staff_styling_box").each(function() {
        var $html = $("#new-mobile-styling-box");
        var title = $(this).find("h3").text();
        $html.append('<h3 class="topic-title">' + title + "</h3>");
        $(this).find("#styling_img_box a.hoverimage").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            if (link && $img.attr("src") ) {
                $html.append('<a href="' + link + '">'
                             + '<img src="'
                             + $img.attr("src")
                             + '" />'
                             + '</a>');
            }
        });
    });
    // new arrival
    $(".new_arrival_box:not(.saleitem_box)").each(function() {
        var $html = $("#new-mobile-arrival-box");
        var title = $(this).find("h3").text();
        $html.append('<h3 class="topic-title">' + title + "</h3>");
        $(this).find("tr a").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            if (link && $img.attr("src") ) {
                $html.append('<a href="' + link + '">'
                             + '<img src="'
                             + $img.attr("src")
                             + '" />'
                             + '</a>');
            }
        });
    });
    // sale
    $(".new_arrival_box.saleitem_box").each(function() {
        var $html = $("#new-mobile-sale-box");
        var title = $(this).find("h3").text();
        $html.append('<h3 class="topic-title">' + title + "</h3>");
        $(this).find("tr a").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            if (link && $img.attr("src") ) {
                $html.append('<a href="' + link + '">'
                             + '<img src="'
                             + $img.attr("src")
                             + '" />'
                             + '</a>');
            }
        });
    });
    // recent checked
    $("#recent_check_box.item_box").each(function() {
        var $html = $("#mobile-recent-box");
        var title = $(this).find("h3").text();
        $html.append('<h3 class="topic-title">' + title + "</h3>");
        $(this).find("tr a").each(function() {
            var link = $(this).attr("href");
            var $img = $(this).find("img");
            if (link && $img.attr("src") ) {
                $html.append('<a href="' + link + '">'
                             + '<img src="'
                             + $img.attr("src")
                             + '" />'
                             + '</a>');
            }
        });
    });
    
    // category
    $("#category_list_box dl.accordion dt a").each(function() {
        var $a = $(this);
        var link = $a.attr("href");
        var name = $a.text();
        if (name != "CANDY" && name != "Sister") {
            $("#mobile-category ul")
                .append('<li><div class="black-link-disclosure"><a href="'
                        + link + '">'
                        + name + '</a></div></li>');
        }
    });

    $(".update_images a.hoverimage").each(function() {
        var $a = $(this);
        var link = $a.attr("href");
        var $img = $a.find("img");
        var img_src = $img.attr("src");
        $(".topics ul").append('<li><a href="' +
                               link + '">'
                               + '<img src="'
                               + img_src
                               +'" />'
                               + '</a>'
                               + '</li>');
    });
});
