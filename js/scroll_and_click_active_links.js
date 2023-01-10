(function ($) {
    $("a").on("click", function(event){
    	if (this.hash !== "") {
            event.preventDefault();

            /* smooth scroll*/
    		$('html, body').stop().animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 400);
		    return false;
		    /* smooth scroll*/

		    /*Active links after scroll and click */
	    	if ($(this).parents('.scroll_active').length) {
		        $('.scroll_active .active').removeClass('active');
		        $(this).closest('a').addClass('active');
		    }
		    /*Active links after scroll and click */
		}
    })
})(jQuery);