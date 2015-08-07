
$(document).ready(function() {

    // Makes the whole ecom product tiles clickable

     $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    metaKeyPressed = false;

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });


    $('.product-item').click(function() {

        var href = $(this).find("a").attr("href");
        if(href) {

            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });


    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0)
    {
       $("body").addClass("product-one-image");
    }


    // Next Button for ecom gallery
    $('.product-gallery').each(function() {
      var max = 5;
      if ($(this).find("li.gallery-item").length > max) {
        $(this).addClass("hiding");

        $(this)
            .find('li.gallery-item:gt('+max+')')
            .hide()
            .end()
            .append(
                $('<li class="ecom-view-more" id="ecomscroll" href="#">&gt;</li>').click( function(){
                $(this).siblings(':hidden').show().end();
            })
            );
      }
    });


    // Ecom Gallery Scrolling

    $('#ecomscroll').click(function(e) {
        e.preventDefault();
        var id = e.target.id;
        if(id == 'ecomscroll')
        {
            $('ul.product-gallery li:first').appendTo('ul.product-gallery');
        }
            else
        {
            $('ul.product-gallery li:last').prependTo('ul.product-gallery');
        }
    });
});



$(document).on("click", ".ecombasket__basket-toggle", function() {
    $( "body, html" ).toggleClass( "basket--open" );
});

$(document).click(function(event) {
    if( $(event.target).is(".basket-body") ) {
        closeEverything();
    }
});

$('.ecombasket__basket-body').click(function(e) {
    if (e.target == this) {
        $( "body, html" ).removeClass( "basket--open" );
        $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    }
});