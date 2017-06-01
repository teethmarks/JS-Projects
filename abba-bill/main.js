$('#calculate').on('click', function() {
    var totalBill = parseFloat($('#total-bill').val());
    var power = parseFloat($('#power').val());
    var lessPower = totalBill - power;
    var daysWorked = parseFloat($('#days-worked option:selected').val());
    var abbaPay = (lessPower * (daysWorked / 100) + power).toFixed(2);
    var clPay = ((totalBill - abbaPay) / 2).toFixed(2);

    $('#abbapay').html(abbaPay);
    $('#clpay').html(clPay);
    $('#tbpay').html(clPay);

   console.log('total bill:' + totalBill);
   console.log('power:' + power);
   console.log('less power:' + lessPower);
   console.log('Percentage Paying: ' + daysWorked + "%");
   console.log('Abba Pays: ' + abbaPay);
   console.log('CL/TB Pays: ' + clPay);
});
