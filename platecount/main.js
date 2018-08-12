$('.add').click(function () {
    var field = $(this).parent().find('.field');
    field.val(+field.val() + 1);

    var numberOfPlates = $(this).parent().find('.field').val();
    var weight = $(this).parent().find('.hidden').val();
    var subTotal = numberOfPlates * weight;

    $(this).parent().find('.subtotal-hidden').val(subTotal);
    $(this).parent().find('.subtotal span').html(subTotal);

    var twentyfive = parseFloat($('#subtotal-twentyfive').val());
    var twenty = parseFloat($('#subtotal-twenty').val());
    var fifteen = parseFloat($('#subtotal-fifteen').val());
    var ten = parseFloat($('#subtotal-ten').val());
    var five = parseFloat($('#subtotal-five').val());
    var twopointfive = parseFloat($('#subtotal-twopointfive').val());
    var onepointtwofive = parseFloat($('#subtotal-onepointtwofive').val());
    $('.total').html((twentyfive + twenty + fifteen + ten + five + twopointfive + onepointtwofive) * 2 + 20 + " kg");

    if( field.val() > 0 ){
        $(this).parent().find('.plate-weight').css('background-color','green');
    } else {
        $(this).parent().find('.plate-weight').css('background-color','#333333');
    }
});

$('.sub').click(function () {
    var field = $(this).parent().find('.field');
    if ( field.val() > 0 ){
        field.val(field.val() - 1);
    } else {
        field = 0;
    }
    
    var numberOfPlates = $(this).parent().find('.field').val();
    var weight = $(this).parent().find('.hidden').val();
    var subTotal = numberOfPlates * weight;

    $(this).parent().find('.subtotal-hidden').val(subTotal);
    $(this).parent().find('.subtotal span').html(subTotal);

    var twentyfive = parseFloat($('#subtotal-twentyfive').val());
    var twenty = parseFloat($('#subtotal-twenty').val());
    var fifteen = parseFloat($('#subtotal-fifteen').val());
    var ten = parseFloat($('#subtotal-ten').val());
    var five = parseFloat($('#subtotal-five').val());
    var twopointfive = parseFloat($('#subtotal-twopointfive').val());
    var onepointtwofive = parseFloat($('#subtotal-onepointtwofive').val());
    $('.total').html((twentyfive + twenty + fifteen + ten + five + twopointfive + onepointtwofive) * 2 + 20 + " kg");

    if( field.val() > 0 ){
        $(this).parent().find('.plate-weight').css('background-color','green');
    } else {
        $(this).parent().find('.plate-weight').css('background-color','#333333');
    }
});

$('#reset').click(function(){
    $('.subtotal-hidden').val(0);
    $('.field').val(0);
    $('.total').html(' 20 kg');
    $('.plate-weight').css('background-color','#333333');
});