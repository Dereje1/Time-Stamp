$('#urlSubmitForm').submit(function (e) {
        e.preventDefault();
        let fullInput = (!$("#usr").val()) ? $("#usr").attr('placeholder') : $("#usr").val()
        let win = window.open(window.location.href+fullInput, '_blank');
        win.focus();
});

$( document ).ready(function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    today = monthNames[mm] + ' ' + dd + ',' + yyyy;
    $("#usr").attr('placeholder',today)
    console.log (today)
});
