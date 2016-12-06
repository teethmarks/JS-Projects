var pax;
var plates;

$('.submit').on('click', function(e){
	e.preventDefault();

	$('.namefields').html('');

	pax = $('#pax').val();
	plates = $('#plates').val();

	for (var i = 0; i < pax; i++){
		$('.namefields').append('<input type="text" class="form-control" value="' + String.fromCharCode(i + 65) + '"></div>');
	}

	// $('.namefields').append('');
});

$('.next').on('click', function(){
	$('.start').hide();
	$('.calculator').show();
	$('header').text('Person A')
});