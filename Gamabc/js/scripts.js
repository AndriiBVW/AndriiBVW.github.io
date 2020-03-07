$('.toggle').on('click', function() {
	$(this).toggleClass('toggle_active');
	$('.menu').toggleClass('menu-anime');
	$('.menu').removeClass('menu_closed');
});