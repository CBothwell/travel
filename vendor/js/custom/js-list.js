//------------------------------
//Niciscroll
//------------------------------
jQuery(document).ready(function() {
"use strict";
	var nice = jQuery("html").niceScroll({
		
		cursorcolor:"#ccc",
		//background:"#fff",	
		cursorborder :"0px solid #fff",			
		railpadding:{top:0,right:0,left:0,bottom:0},
		cursorwidth:"5px",
		cursorborderradius:"0px",
		cursoropacitymin:0,
		cursoropacitymax:0.7,
		boxzoom:true,
		autohidemode:false
	});  
	
	jQuery(".hotelstab").niceScroll({horizrailenabled:false});
	jQuery(".flightstab").niceScroll({horizrailenabled:false});
	jQuery(".vacationstab").niceScroll({horizrailenabled:false});
	jQuery(".carstab").niceScroll({horizrailenabled:false});
	jQuery(".cruisestab").niceScroll({horizrailenabled:false});
	jQuery(".flighthotelcartab").niceScroll({horizrailenabled:false});
	jQuery(".flighthoteltab").niceScroll({horizrailenabled:false});
	jQuery(".flightcartab").niceScroll({horizrailenabled:false});
	jQuery(".hotelcartab").niceScroll({horizrailenabled:false});
	
	jQuery('html').addClass('no-overflow-y');
	
});

//------------------------------
//Animations for this page
//------------------------------
jQuery(document).ready(function(){
"use strict";
	jQuery('.tip-arrow').css({'bottom':1+'px'});
	jQuery('.tip-arrow').animate({'bottom':-9+'px'},{ duration: 700, queue: false });	
	
	jQuery('.bookfilters').css({'margin-top':-40+'px'});
	jQuery('.bookfilters').animate({'margin-top':0+'px'},{ duration: 1000, queue: false });	
	
	jQuery('.topsortby').css({'opacity':0});
	jQuery('.topsortby').animate({'opacity':1},{ duration: 1000, queue: false });	

	jQuery('.itemscontainer').css({'opacity':0});
	jQuery('.itemscontainer').animate({'opacity':1},{ duration: 1000, queue: false });			
});


				












