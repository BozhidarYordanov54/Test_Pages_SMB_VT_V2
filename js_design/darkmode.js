var darkModeSwitch = document.getElementById("checkbox");
var websiteLogo = document.querySelectorAll('.logo'); //Select all logo images => used for foreach loop

// Check local storage for dark mode preference
var savedDarkMode = localStorage.getItem('darkMode');

// If there's no saved preference, use the device's preference
if (savedDarkMode === null) {
    savedDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
} else {
    savedDarkMode = savedDarkMode === "true";
}

// Set initial dark mode state based on the saved preference
toggleDarkMode(savedDarkMode);

darkModeSwitch.addEventListener("change", function() {
    toggleDarkMode(darkModeSwitch.checked);
    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkModeSwitch.checked);
});

function toggleDarkMode(isDarkMode) {
    var selectors = [
        'body',
        '.site',
        '.nav-wrapper',
        '.footer-wrap',
        '.login-form-wrapper',
        '.register-form-wrapper',
        '.profile-settings-wrapper',
        '.main-content-wrapper'
    ];

    selectors.forEach(selector => {
        var element = document.querySelector(selector);
        if (element) {
            isDarkMode ? element.classList.add("darkmode") : element.classList.remove("darkmode");
        }
    });

    websiteLogo.forEach(logo => {
        logo.src = isDarkMode ? "images/Logo-White.png" : "images/Logo-Black.png";
    });

    darkModeSwitch.checked = isDarkMode;
}