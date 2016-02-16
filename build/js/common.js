$(document).ready(function() {
	//sliders

	//main-slider
	$('.js-main-slider').slick({
		fade: true
	});
	//item-slider
	$('.js-item-slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
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
	$('.js-article-slider').slick();
	$('.js-menu-btn').click(function() {
		if ($(this).hasClass('is-active')) {
			$('.js-menu-drop').slideUp('fast');
			$('.js-menu-btn').removeClass('is-active');
		}
		else {
			$('.js-menu-drop').slideUp('fast');
			$('.js-menu-btn').removeClass('is-active');
			$(this).siblings('.js-menu-drop').slideDown('fast');
			$(this).addClass('is-active');
		}
		return false;
	});

	$('.js-nav-btn').click(function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.js-mobile-nav').removeClass('is-active');
			$('.mobile-overlay').removeClass('is-active');
		}
		else {
			$('.js-mobile-nav').addClass('is-active');
			$(this).addClass('is-active');
			$('.mobile-overlay').addClass('is-active');
		}
		return false;
	});
	$('.mobile-overlay').click(function() {
		if ($('.js-nav-btn').hasClass('is-active')) {
			$('.js-nav-btn').removeClass('is-active');
			$('.js-mobile-nav').removeClass('is-active');
			$('.mobile-overlay').removeClass('is-active');
		}
	});
});