(() => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const navWrapper = document.querySelector('.nav-wrapper');
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
                setNavWrapperTransform("-100%");
                navWrapper.classList.remove('expanded');
            } else {
                setNavWrapperTransform("0%");
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
            setNavWrapperTransform("0%");
        } else {
            setNavWrapperTransform("-100%");
        }
    });
})();