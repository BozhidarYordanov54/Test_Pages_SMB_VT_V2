var nav = document.querySelector('.nav-wrapper');
var toggle = document.getElementById("menu-toggle");

function checkNavWidth(){
    var w = nav.offsetWidth;

    if(w < 200)
    {
        toggle.checked = false;
    }
}

window.addEventListener('resize', checkNavWidth);

checkNavWidth();

