(function ( $ ) {
 
    $.fn.smplmnu = function(options) {

    	//settings
    	var settings = $.extend({
            // These are the defaults.
            speed: "0.5s",
            mnuopn: 'mnuopn'
        }, options );


    	//vars
    	var hittrigger = $(this);
    	var clspos = hittrigger.next('ul');
    	var menutextcolor = hittrigger.next('ul li a');
    	var overlay = '<div class="overlay"></div>';

    	//manipulating dom
    	hittrigger.addClass('inrwrpr');
    	clspos.addClass('inrwrpr');
    	$('.inrwrpr').wrapAll( "<div class='navwrp'>" );
    	clspos.prepend('<a href="javascript:void(0)" class="mnuclose"></a>');
    	$('body').prepend(overlay);
    	
 		
 		//functions and methods
        hittrigger.click(function(event){
			hittrigger.next('ul').addClass('mobimenu');
		    $('.mobimenu').addClass(settings.mnuopn);
		    $('.mnuopn').css({
		    	'z-index': '9999',
		    	'transition': settings.speed
		    });
		    $('.overlay').addClass('ovrActv');
            $('.mnuopn').css({
                'z-index': '9999',
                'transition': '0ms'
            });
		});

        $('.mnuclose').click(function(event) {
			hittrigger.next('ul').removeClass('mnuopn');
			$('.overlay').removeClass('ovrActv');
		});

		$('.overlay').click(function(event) {
			hittrigger.next('ul').removeClass('mnuopn');
			$(this).removeClass('ovrActv')
		});

		return this				
 
    };
 
}( jQuery ));