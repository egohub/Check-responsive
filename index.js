// Url to iframes
$('.enter-url').submit(function(e) {
    e.preventDefault();
    var url = $(this).find('input').val();
	var iframes = $('iframe');
	$('.device-iframe').css('background', 'white');
	$(iframes).attr('src', url);
	$(iframes[0]).on('load', function() {
		for (i = 0; i < iframes.length; i++) {
			$(iframes[i]).ready(function() {
				console.log('iframe-' + [i] + ' is ready');
			});			
		}
		console.log('all ready');
		$('#welcome').addClass('popOut');
		$('#settings').delay(600).addClass('popIn');
		$('.devices-wrapper').delay(600).removeClass('isBlurred');
	});
});

// Change Layout
$('[name=devices-layout]').change(function() {
  var layout = $(this).val();
  $('.devices-container').removeClass('layout-1 layout-2 layout-3').addClass(layout);
});

// Zoom
var zoomInput = $('#zoom-in-out');

function getZoomValue() {
	var zoomValue = parseInt($(zoomInput).val());
	return zoomValue;
}

function zoomInOut(zoomFactor) {
  var zoomValue = zoomFactor / 100;	
  $('.devices-container').css('transform', 'scale(' + zoomValue + ')');
	$('symbol *').css('transform', 'scale(1)');
}

$('#zoom-out').click(function() {
	var zoomValue = getZoomValue() - 10;
	parseInt($(zoomInput).val(zoomValue + '%'));
	zoomInOut(zoomValue);
});

$('#zoom-in').click(function() {
	var zoomValue = getZoomValue() + 10;
	parseInt($(zoomInput).val(zoomValue + '%'));
	zoomInOut(zoomValue);
});

$('#zoom-in-out').change(function() {
	var zoomValue = getZoomValue();
	zoomInOut(zoomValue);
});

// Scaling
$('#toggle-scaling').change(function() {
  $('.device-iPhone iframe' ).toggleClass('isScaledTo960');
  $('.device-iPadMini iframe' ).toggleClass('isScaledTo960');
  $('.device-iPad iframe' ).toggleClass('isScaledTo960');
});

// Toggle Background 
$('#toggle-background').change(function() {
  $('.bg-iframe').toggleClass('invisible');
}); 
