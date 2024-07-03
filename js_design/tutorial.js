
const hasUserCompletedTutorial = localStorage.getItem('hasUserCompletedTutorial');
const textElement = document.querySelector('.text-wrapper');
const hand = document.querySelector('.hand-wrapper i');
const animationOverlayWrapper = document.querySelector('.animation-overlay-wrapper');

if (!hasUserCompletedTutorial) {
    disableScroll();

    // Show tutorial
    greetUser();

    // // Wait for greetUser animation and delay, then show showTutorial
    setTimeout(showTutorial, 6000); // Adjust time based on actual needs

    // Wait for showTutorial animation and delay, then show showNavFunctions
    
    setTimeout(showNavFunctions, 12000); // Adjust time based on actual needs -> DEFAULT VALUE FOR TIMEOUT IS 12_000
    
    setTimeout(() => {enableScroll()}, 18000); // Adjust time based on actual needs
}

function greetUser() {
    textElement.innerHTML = '<img class="tutorial-logo" src="images/website_images/images_lightmode/Logo-White.png"><p>Здравейте, и добре дошли в новия сайт на СМБ-Велико Търново!</p>';
    textElement.style = 'transform: translateY(0px); transition: all 1s;';

    setTimeout(() => {
        textElement.style = 'transform: translateY(-999px); transition: all 1s;';
    }, 5000);   
}

function showTutorial() {
    // Ensure this runs only after the previous animation is complete
    textElement.innerHTML = 'Това е туториал, който ще ви помогне да се ориентирате с новите функционалности в сайта.';
    textElement.style = 'transform: translateY(0px); transition: all 1s;';

    setTimeout(() => {
        textElement.style = 'transform: translateY(-999px); transition: all 1s;';
    }, 5000);   
}

function showNavFunctions() {
    let isUserAction = true;
    const squareElement = document.querySelector('.moving-sqaure');
    const squareText = document.querySelector('.square-text');
    const siteHeader = document.querySelector('.site-header');
    const siteHeaderLinks = document.querySelectorAll('.site-header a');
    const navWrapper = document.querySelector('.nav-wrapper');

    siteHeaderLinks.forEach(link => {
        link.style = 'pointer-events: none;';
    });

    textElement.innerHTML = 'Това са функциите на навигационното меню. За да видите менюто, може да кликнете върху него.';
    textElement.style = 'transform: translateY(0px); transition: all 1s;';

    if (window.innerWidth < 768) {
        textElement.innerHTML = 'За да покажете менюто, трябва да дръпнете с пръст надясно, а за да го скриете - наляво.';
        textElement.style = 'transform: translateY(0px); transition: all 1s;';

        setTimeout(() => {
            textElement.style = 'transform: translateY(-999px); transition: all 1s;';
        }, 5000);

        setTimeout(() => {
            siteHeader.style = 'filter: none; -webkit-transition : -webkit-filter 500ms linear; z-index: 6;';
        }, 5000);

        setTimeout(() => {
            navWrapper.style = 'transform: translateX(0);'; 
            isUserAction = false;
        }, 5000);

        setTimeout(() => {
            navWrapper.style = 'transform: translateX(-100%);';
            isUserAction = false;
        }, 7000);

        setTimeout(() => {isUserAction = true}, 7200);

        setTimeout(() => {
            textElement.innerHTML = 'Сега е ваш ред. Опитайте се да покажете менюто.';
            navWrapper.classList.add('tutorial-open');
            textElement.style = 'transform: translateY(0px); transition: all 1s;';

            hand.style = 'font-size: 2.5em; left: 2.3em; bottom: 1em; transform: rotate(-45deg); transition: all 1s;';
            hand.classList.add('swipe-animation');
        }, 8000); // This timeout starts after the first message begins to hide

        const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    console.log(`Class changed! New class list: ${mutation.target.className}`);
                    // Perform any action after class change
                }

                if(navWrapper.style.transform.includes('0%') && isUserAction == true){
                    textElement.innerHTML = 'Браво! Сега опитайте да скриете менюто.';
                    textElement.style = 'transform: translateY(0px); transition: all 1s;';
                }

                if(navWrapper.style.transform.includes('-100%') && isUserAction == true){
                    textElement.innerHTML = 'Чудесно! Вече знаете как да показвате и скривате менюто. Може да продължите напред.';
                    textElement.style = 'transform: translateY(0px); transition: all 1s;';
                    setTimeout(() => {
                        textElement.style = 'transform: translateY(-999px); transition: all 1s;';
                    }, 5000);
                    setTimeout(() => {
                        siteHeaderLinks.forEach(link => {
                            link.style = 'pointer-events: auto;';
                        });

                        animationOverlayWrapper.style = 'display: none;';
                        siteHeader.style = 'filter: none; -webkit-transition : -webkit-filter 500ms linear; z-index: 6;';
                        var mainElement = document.querySelector('main');

                        if (mainElement) {
                            mainElement.style = 'filter: none; -webkit-transition : -webkit-filter 500ms linear;';
                        }
                    }, 6000);
                }
            }

            
        };
        
        // Create an instance of MutationObserver with the callback
        const observer = new MutationObserver(callback);
        
        // Configuration object to specify what to observe
        const config = { attributes: true, attributeFilter: ['style'] };
        
        // Start observing the navWrapper element for configured mutations
        observer.observe(navWrapper, config);

        setTimeout(() => {
            textElement.style = 'transform: translateY(-999px); transition: all 1s;';
        }, 16000); // Hide the second message after it has been displayed for a while
    } else {
        setTimeout(() => {
            hand.style.fontSize = '2em'; // Modify font size
            hand.style.transition = 'all 0.5s'; // Set transition
            hand.style.transitionDelay = '0.5s'; // Set transition delay
        }, 600);

        hand.style = 'left: 2.3em; transition: all 1s;';
        hand.classList.add('hand-animation');

        setTimeout(() => {
            siteHeader.style = 'filter: none; -webkit-transition : -webkit-filter 500ms linear; z-index: 6;';
        }, 1000);

        siteHeader.addEventListener('click', function() {
            hand.classList.remove('hand-animation'); // This stops the animation
            hand.style = 'font-size: 0;'
        });

        setTimeout(() => {
            textElement.style = 'transform: translateY(-999px); transition: all 1s;';
        }, 5000);
    }
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}