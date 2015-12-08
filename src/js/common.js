$(document).ready(function() {
	//sliders

	//main-slider
	$('.js-main-slider').slick({
		fade: true
	});
	//item-slider
	$('.js-item-slider').slick({
		slidesToShow: 4
	});
	//featured-slider
	$('.js-featured-slider').slick({
		fade: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	//prod
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