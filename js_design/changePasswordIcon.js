document.addEventListener('DOMContentLoaded', function() {
    var showPasswords = document.querySelectorAll('.show-password');
    var hidePasswords = document.querySelectorAll('.hide-password');
    var passwordInputs = document.querySelectorAll('input[type="password"]');

    passwordInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            var wrapper = input.closest('.input-wrapper');
            var showPasswordButton = wrapper.querySelector('.show-password');
            if (input.value.length > 0) {
                showPasswordButton.style.fontSize = '16px';
            } else {
                showPasswordButton.style.fontSize = '0px';
            }
        });
    });

    showPasswords.forEach(function(show, index) {
        show.addEventListener('click', function() {
            var passwordInput = show.closest('.input-wrapper').querySelector('input[type="password"]');
            if (passwordInput && passwordInput.type === 'password') {
                passwordInput.type = 'text';
                show.style.fontSize = '0';
                hidePasswords[index].style.fontSize = '16px';
            }
        });
    });

    hidePasswords.forEach(function(hide, index) {
        hide.addEventListener('click', function() {
            var passwordInput = hide.closest('.input-wrapper').querySelector('input[type="text"]');
            if (passwordInput && passwordInput.type === 'text') {
                passwordInput.type = 'password';
                hide.style.fontSize = '0';
                showPasswords[index].style.fontSize = '16px';
            }
        });
    });
});
