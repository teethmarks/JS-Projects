var converted;

function convertName() {
    converted = $('.entered').val();
    converted = converted.toLowerCase();
    converted = converted.replace(/ /g, '_');
    $('.result').html('<div id="foo" class="result-wrap">' + converted + '</div> <button data-clipboard-target="#foo" class="btn btn-lg btn-primary">COPY</button>');
}

$('.entered').on('keyup', function(e) {
    convertName();
    if ( $('.entered').val() === '') {
    	$('.result-wrap').hide();
    }
});

new Clipboard('.btn');