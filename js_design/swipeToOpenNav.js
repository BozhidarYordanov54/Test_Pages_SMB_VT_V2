document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

window.addEventListener('resize', function() {

    var navWrapper = document.querySelector('.nav-wrapper');
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        navWrapper.style.transform = "translateX(0%)";
    }
    else {
        navWrapper.style.transform = "translateX(-100%)";
    }
});

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             
         evt.originalEvent.touches; 
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    var toggle = document.getElementById("menu-toggle");
    var navWrapper = document.querySelector('.nav-wrapper');

    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) 
    {
        if ( xDiff > 0 ) {
            navWrapper.style.transform = "translateX(-100%)";
            toggle.checked = false;

        } else {
            navWrapper.style.transform = "translateX(0%)";
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};