(() => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const navWrapper = document.querySelector('.nav-wrapper');
    const openArrow = document.querySelector('.fa-solid.fa-angles-right'); // select the arrow element
    const toggle = document.getElementById("menu-toggle");
    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => evt.touches || evt.originalEvent.touches;

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setNavWrapperTransform("-115%");
                openArrow.style.transform = ''; // reset the arrow transform
                navWrapper.classList.remove('expanded');
                toggle.checked = false;
            } else {
                setNavWrapperTransform("0%");
                openArrow.style.transform = 'translateX(140%) rotate(-180deg)'; // rotate the arrow when the nav is opened
            }
        }

        xDown = null;
        yDown = null;
    };

    const setNavWrapperTransform = (value) => {
        if (navWrapper) {
            navWrapper.style.transform = `translateX(${value})`;
        }
    };

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    if (carouselWrapper) {
        carouselWrapper.addEventListener('touchstart', (event) => {
            event.stopPropagation();
        }, false);
    }
   
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;

        if (windowWidth > 1200) {
            navWrapper.style.transform = '';
            openArrow.style.transform = ''; // reset the arrow transform
        } else {
            setNavWrapperTransform("-115%");
            openArrow.style.transform = 'translateX(140%) rotate(-180deg)'; // rotate the arrow when the nav is opened
        }
    });
})();