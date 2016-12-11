// Convert Function
function convertName() {
    var converted;
    converted = $('.entered').val().toLowerCase().replace(/ /g, '_'); // converts to lowercase, and replaces spaces with underscores
    $('.result').html('<input id="copy" class="form-control result-wrap" value="' + converted + '"><button data-clipboard-target="#copy" class="btn btn-success">COPY</button>');
}

// Fire upon user input
$('.entered').on('keyup', function(e) {
    
    convertName(); // call function
    var str = $('.entered').val(); // store userinput into a var
    
    if ( $('.entered').val() === '' ) {
    	$('.result').hide();
    
    } else if (/^[a-zA-Z0-9- ]*$/.test(str) == false) { //test for illegal chars
    	$('.result').addClass('bg-danger').text('There are illegal characters in your filename. (i.e. !@#$%^&*)');
    
    } else {
    	$('.result').show();
    	$('.result').removeClass('bg-danger');
    }
});

// Bootstrap Tooltip
$('button').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
    $(btn).tooltip('hide');
    }, 2000);
}

// Clipboard
var clipboard = new Clipboard('button');

clipboard.on('success', function(e) {
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
    setTooltip(e.trigger, 'Failed!');
    hideTooltip(e.trigger);
});