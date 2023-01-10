(function ($){
	/* preloader */
    var loader=function(){setTimeout(function(){$("#loader").length>0&&$("#loader").removeClass("show")},1)};loader();
    /* preloader */

	// Counter Up
	$('.counterUp').counterUp({
		time: 250,
	});
	// Counter Up

	// aos Animation
	AOS.init({
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  		initClassName: 'aos-init', // class applied after initialization
  		animatedClassName: 'aos-animate', // class applied on animation
  		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	});
	// aos Animation

	// courses owl carousel
	$('.courses-carousel').owlCarousel({
   	loop:true,
    margin:10,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
	        0:{
	            items:1,
	            center:true
	        },
	        576:{
	            items:2,
	            center:true
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:4
	        }
	    }
	})
	// courses owl carousel

	// testimonial owl carousel
	$('.testimonial-carousel').owlCarousel({
   	loop:true,
    margin:10,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
	        0:{
	            items:1,
	            center:true
	        },
	        576:{
	            items:1,
	            center:true
	        },
	        768:{
	            items:1,
	            center:true
	        },
	        992:{
	            items:1,
	            center:true
	        }
	    }
	})
	// testimonial owl carousel
})(jQuery);