$(function() {
	var $window = $(window),
		$body = $('body'),
		scale = 3;

	$(window).resize(function() {
		$('.page').each(function(i, e) {
			var $e = $(e),
				bg = $e.find('.background-image');

			var marginLeft = ($e.width() - bg.width()) / 2,
				marginTop = ($e.height() - bg.height()) / 2;
			$e.css({
				'margin-left': ((marginLeft > 0) ? marginLeft : 0) + 'px',
				'margin-top': ((marginTop > 0) ? marginTop : 0) + 'px',
			});

			var scaleSource = bg.width(),
				scaleFactor = 0.35,
				maxScale = 600,
				minScale = 30; //Tweak these values to taste

			var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

			if (fontSize > maxScale) fontSize = maxScale;
			if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

			$e.css('font-size', fontSize + '%');

			$e.find('.wide-as-bg').css('width', bg.width() + 'px');
			$e.find('.tall-as-bg').css('height', bg.height() + 'px');
		});
	}).resize();

	$('.background-image').load(function() {
		$(window).resize();
	});

	$('a').each(function(i, e) {
		var $e = $(e),
			href = $e.attr('href');

		if (href[0] == '#' && $(href).length > 0) {
			var offset = $(href).data('offset');
			$e.click(function(e) {
				e.preventDefault();
				skroll.animateTo(offset*3, {duration: 1000, easing: 'easeIn'});
				return false;
			});
		}
	});

	var skroll = skrollr.init({
		scale: scale,
		easing: {
			easeIn: function(r) { return 1-(1-r)*(1-r)*(1-r)*(1-r); }
		}
	});
});
