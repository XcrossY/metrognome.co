$(document).ready(function() {
	$("#hollywood a").fancybox();

	$("#hollywood a").fancybox({
		'overlayOpacity'	:	0,
		'overlayColor'		:	'#000'
	});

	$("a.zoom2").fancybox({
		'zoomSpeedIn'		:	500,
		'zoomSpeedOut'		:	500
	});
});
