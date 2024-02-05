var darkModeSwitch = document.getElementById("checkbox");

darkModeSwitch.addEventListener("change", function() {
    if (darkModeSwitch.checked) 
    {
        document.body.classList.add("dark-mode");
    } else 
    {
        document.body.classList.remove("dark-mode");
    }
});
