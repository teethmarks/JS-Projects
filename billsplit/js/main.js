var pax;
var plates;
var i;

$('.submit').on('click', function(e){
	e.preventDefault();

	$('.namefields').html('');

	pax = $('#pax').val();
	plates = $('#plates').val();

	for (i = 0; i < pax; i++){
		$('.namefields').append('<input type="text" class="form-control" class="namefield" value="' + String.fromCharCode(i + 65) + '"></div>');
	}
});



$('.next').on('click', function(){
	$('.start').hide();
	$('.calculator').show();
	createCalculator();

	function createCalculator(){
		for (a = 0; a < i; a++){
			$('.calculator').append('<br /><input type="text" class="form-control" value=""><br /><button class="btn btn-success btn-block btn-lg next">Next</button>');
		}
	}
});