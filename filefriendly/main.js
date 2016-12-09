var converted;

function convertName() {
    converted = $('.entered').val();
    converted = converted.toLowerCase();
    converted = converted.replace(/ /g, '_');
    $('.result').html('<div id="foo" class="result-wrap">' + converted + '</div>');
}

$('.entered').on('keyup', function(e) {
    convertName();
    if ( $('.entered').val() === '') {
    	$('.result-wrap').hide();
    }
});
