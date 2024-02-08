var darkModeSwitch = document.getElementById("checkbox");

var websiteLogo = document.querySelectorAll('.logo'); //Select all logo images => used for foreach loop

// Check local storage for dark mode preference
var savedDarkMode = localStorage.getItem('darkMode');

// Set initial dark mode state based on the saved preference
if (savedDarkMode === "true") {
    darkModeSwitch.checked = true;
    document.body.classList.add("darkmode");
    document.querySelector('.site').classList.add("darkmode");
    document.querySelector('.nav-wrapper').classList.add("darkmode");
    document.querySelector('.footer-wrap').classList.add("darkmode");

    if(document.querySelector('.login-form-wrapper'))
    {
        document.querySelector('.login-form-wrapper').classList.add("darkmode");
    }

    websiteLogo.forEach(logo => {
        logo.src = "images/Logo-White.png";
    });
} else {
    darkModeSwitch.checked = false;
    document.body.classList.remove("darkmode");
    document.querySelector('.site').classList.remove("darkmode");
    document.querySelector('.nav-wrapper').classList.remove("darkmode");
    document.querySelector('.footer-wrap').classList.remove("darkmode");

    if(document.querySelector('.login-form-wrapper'))
    {
        document.querySelector('.login-form-wrapper').classList.remove("darkmode");
    }

    websiteLogo.forEach(logo => {
        logo.src = "images/Logo-Black.png";
    });
}

darkModeSwitch.addEventListener("change", function() {
    if (darkModeSwitch.checked) 
    {
        document.body.classList.add("darkmode");
        document.querySelector('.site').classList.add("darkmode");
        document.querySelector('.nav-wrapper').classList.add("darkmode");
        document.querySelector('.footer-wrap').classList.add("darkmode");

        if(document.querySelector('.login-form-wrapper'))
        {
            document.querySelector('.login-form-wrapper').classList.add("darkmode");
        }
        websiteLogo.forEach(logo => {
            logo.src = "images/Logo-White.png";
        });
    } else 
    {
        document.body.classList.remove("darkmode");
        document.querySelector('.site').classList.remove("darkmode");
        document.querySelector('.nav-wrapper').classList.remove("darkmode");
        document.querySelector('.footer-wrap').classList.remove("darkmode");

        if(document.querySelector('.login-form-wrapper'))
        {
            document.querySelector('.login-form-wrapper').classList.remove("darkmode");
        }
        websiteLogo.forEach(logo => {
            logo.src = "images/Logo-Black.png";
        });
    }

    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkModeSwitch.checked);
});
