$(document).ready(function() {

	$('#navbar-toggle').click(function() {
		$('.mobile-nav').slideToggle();
	});

	$(".slider").bxSlider({
		auto: true,
		pause: 5000,
		captions: true,
		pager: false,
		mode: 'fade'
	});
	
	$(".items-carousel").bxSlider({
		slideWidth: 270,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		pager: false
	});
	
	$(".featured-slider").bxSlider({
		controls: false,
		auto: true,
		pause: 5000,
		mode: 'fade'
	});

	$('.js-prod-big').slick({
		arrows: false,
		dots: false,
		asNavFor: '.js-prod-small',
		fade: true
	});
	$('.js-prod-small').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		asNavFor: '.js-prod-big',
		focusOnSelect: true,
		infinite: false
	});
});