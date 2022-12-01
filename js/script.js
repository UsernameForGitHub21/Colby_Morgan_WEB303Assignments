$(document).ready(function () {


    var form = document.getElementById('form'); 
    var username = document.getElementById('user');
    var password = document.getElementById('pass');
    var confirmPassword = document.getElementById('confpass'); 
    var tos = document.getElementById('tos');

    var submit = document.getElementById('submit');
    submit.disabled = true;

    addEventListener('change', function(e) {
        if(username.value != "" && password.value != "" && password.value == confirmPassword.value && tos.checked) {
          console.log("test");
            submit.disabled = false;
        }
    })
})