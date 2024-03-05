document.addEventListener('DOMContentLoaded', function() {
    var showPasswordIcons = document.querySelectorAll('.fa-eye');
    var hidePasswordIcons = document.querySelectorAll('.fa-eye-slash');
    var passwordInputs = document.querySelectorAll('input[type="password"]');

    passwordInputs.forEach(function(input, index) {
        var showPasswordIcon = showPasswordIcons[index];
        var hidePasswordIcon = hidePasswordIcons[index];

        // Hide both icons initially
        showPasswordIcon.style.fontSize = '0px';
        hidePasswordIcon.style.fontSize = '0px';

        input.addEventListener('input', function() {
            if(input.value === '') {
                // Hide both icons if input is empty
                showPasswordIcon.style.fontSize = '0px';
                hidePasswordIcon.style.fontSize = '0px';
            } else {
                // Show the appropriate icon based on the input type
                updatePasswordIcons(input, showPasswordIcon, hidePasswordIcon);
            }
        });

        showPasswordIcon.addEventListener('click', function() {
            // When the show password icon is clicked, change the input type to text
            input.type = 'text';
            updatePasswordIcons(input, showPasswordIcon, hidePasswordIcon);
        });

        hidePasswordIcon.addEventListener('click', function() {
            // When the hide password icon is clicked, change the input type to password
            input.type = 'password';
            updatePasswordIcons(input, showPasswordIcon, hidePasswordIcon);
        });
    });

    function updatePasswordIcons(input, showPasswordIcon, hidePasswordIcon) {
        if(input.type === 'password') {
            showPasswordIcon.style.fontSize = '16px';
            hidePasswordIcon.style.fontSize = '0px';
        } else {
            showPasswordIcon.style.fontSize = '0px';
            hidePasswordIcon.style.fontSize = '16px';
        }
    }
});