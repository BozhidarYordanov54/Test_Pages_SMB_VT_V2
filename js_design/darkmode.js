var darkModeSwitch = document.getElementById("checkbox");

// Check local storage for dark mode preference
var savedDarkMode = localStorage.getItem('darkMode');

// Set initial dark mode state based on the saved preference
if (savedDarkMode === "true") {
    darkModeSwitch.checked = true;
    document.body.classList.add("darkmode");
    document.querySelector('.nav-wrapper').classList.add("darkmode");
    document.querySelector('.logo').src = "images/Logo-White.png";
} else {
    darkModeSwitch.checked = false;
    document.body.classList.remove("darkmode");
    document.querySelector('.nav-wrapper').classList.remove("darkmode");
    document.querySelector('.logo').src = "images/Logo-Black.png";
}

darkModeSwitch.addEventListener("change", function() {
    if (darkModeSwitch.checked) 
    {
        document.body.classList.add("darkmode");
        document.querySelector('.nav-wrapper').classList.add("darkmode");
        document.querySelector('.logo').src = "images/Logo-White.png";
    } else 
    {
        document.body.classList.remove("darkmode");
        document.querySelector('.nav-wrapper').classList.remove("darkmode");
        document.querySelector('.logo').src = "images/Logo-Black.png";
    }

    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkModeSwitch.checked);
});
