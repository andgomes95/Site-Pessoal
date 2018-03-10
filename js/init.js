(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(document).ready(function(){
	  $('.collapsible').collapsible();
	});
	$(document).ready(function(){
      $('.carousel').carousel();
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space