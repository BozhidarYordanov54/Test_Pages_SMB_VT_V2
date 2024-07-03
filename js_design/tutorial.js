
const hasUserCompletedTutorial = localStorage.getItem('hasUserCompletedTutorial');
const textElement = document.querySelector('.text-wrapper');

if (!hasUserCompletedTutorial) {
    disableScroll();

    // Show tutorial
    greetUser();

    // Wait for greetUser animation and delay, then show showTutorial
    setTimeout(showTutorial, 6000); // Adjust time based on actual needs

    // Wait for showTutorial animation and delay, then show showNavFunctions
    setTimeout(showNavFunctions, 12000); // Adjust time based on actual needs -> DEFAULT VALUE FOR TIMEOUT IS 12_000
}

function greetUser() {
    textElement.innerHTML = '<img class="tutorial-logo" src="/images/website_images/images_darkmode/Logo-Black.png"><p>Здравейте, и добре дошли в новия сайт на СМБ-Велико Търново!</p>';
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
    const squareElement = document.querySelector('.moving-sqaure');
    const siteHeader = document.querySelector('.site-header');
    const squareText = document.querySelector('.square-text');
    // Ensure this runs only after the previous animation is complete
    textElement.innerHTML = 'Това са функциите на навигационното меню.';
    textElement.style = 'transform: translateY(0px);';

    if(window.innerWidth < 768){
        textElement.innerHTML = 'Това са функциите на навигационното меню. За да ги видите, натиснете бутона в горния десен ъгъл на екрана.';
    }

    siteHeader.style = 'filter: none; -webkit-transition : -webkit-filter 500ms linear';
    squareElement.style = 'width: 50px; height: 50px; transition: all 0.5s;';
    squareText.innerHTML = 'Навигация';

    setTimeout(() => {
        textElement.style = 'transform: translateY(-999px); transition: all 1s;';
        console.log('Tutorial completed');
    }, 5000);   
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}