const hasUserCompletedTutorial = localStorage.getItem(
  "hasUserCompletedTutorial"
);
const textElement = document.querySelector(".text-wrapper");
const hand = document.querySelector(".hand-wrapper i");
const animationOverlayWrapper = document.querySelector(
  ".animation-overlay-wrapper"
);

const squareElement = document.querySelector(".moving-sqaure");
const squareText = document.querySelector(".square-text");
const siteHeader = document.querySelector(".site-header");
const siteHeaderLinks = document.querySelectorAll(".site-header a");
const navWrapper = document.querySelector(".nav-wrapper");

let isUserAction = false;
let isMenuOpened = false;

if (!hasUserCompletedTutorial && window.innerWidth < 1050) {

    // Disable scrolling initially to prevent user from scrolling while tutorial is running
    disableScroll();

    greetUser();

    // Wait for greetUser animation and delay, then show showTutorial
    setTimeout(showTutorial, 6000); 


  // Wait for showTutorial animation and delay, then show showNavFunctions => ONLY FOR MOBILE

    setTimeout(showMobileNavFunctions, 0);

    setTimeout(() => {
      enableScroll(); // Enable scrolling after tutorial is complete
    }, 18000); // Adjust time based on actual needs

    localStorage.setItem("hasUserCompletedTutorial", true);
} 

function greetUser() {
  textElement.innerHTML =
    '<img class="tutorial-logo" src="images/website_images/images_lightmode/Logo-White.png"><p>Здравейте, и добре дошли в новия сайт на СМБ-Велико Търново!</p>';
  textElement.style = "transform: translateY(0px); transition: all 1s;";

  setTimeout(() => {
    textElement.style = "transform: translateY(-999px); transition: all 1s;";
  }, 5000);
}

function showTutorial() {
  // Ensure this runs only after the previous animation is complete
  textElement.innerHTML =
    "Това е туториал, който ще ви помогне да се ориентирате с новите функционалности в сайта.";
  textElement.style = "transform: translateY(0px); transition: all 1s;";

  setTimeout(() => {
    textElement.style = "transform: translateY(-999px); transition: all 1s;";
  }, 5000);
}

function showMobileNavFunctions() {
  textElement.innerHTML =
    "За да покажете менюто, трябва да дръпнете с пръст надясно, а за да го скриете - наляво.";
  textElement.style = "transform: translateY(0px); transition: all 1s;";

  setTimeout(() => {
    textElement.style = "transform: translateY(-999px); transition: all 1s;";
  }, 5000);

  setTimeout(() => {
    siteHeader.style =
      "filter: none; -webkit-transition : -webkit-filter 500ms linear; z-index: 6;";
  }, 5000);

  setTimeout(() => {
    navWrapper.style = "transform: translateX(0);";
    isUserAction = false;
  }, 5000);

  setTimeout(() => {
    navWrapper.style = "transform: translateX(-100%);";
    isUserAction = false;
  }, 7000);

  setTimeout(() => {
    textElement.innerHTML =
      "Запомнете, че навигационното меню има зона на активиране.";
    textElement.style = "transform: translateY(0px); transition: all 1s;";
    squareElement.style =
      "width: 90%; height: 200px; bottom: 2em; left: 0; right: 0; margin: 0 auto; transition: all 1s;";

    hand.style =
      "font-size: 2.5em; left: 2.3em; bottom: 6em; transform: rotate(180deg); transition: all 1s;";
  }, 10_000);

  setTimeout(() => {
    textElement.innerHTML = "Сега е ваш ред. Опитайте се да покажете менюто.";
    navWrapper.classList.add("tutorial-open");
    textElement.style = "transform: translateY(0px); transition: all 1s;";

    hand.style =
      "font-size: 2.5em; left: 2.3em; bottom: 2.5em; transform: rotate(-45deg); transition: all 1s;";
    hand.classList.add("swipe-animation");

    isUserAction = true;
  }, 13_000); // This timeout starts after the first message begins to hide

  

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (navWrapper.style.transform.includes("0%") && isUserAction == true) {
        textElement.innerHTML = "Браво! Успешно показахте менюто.";

        isUserAction = false;

        isMenuOpened = true;

        textElement.style =
          "width: 200px; transform: translateY(0px); transition: all 1s;";

        setTimeout(() => {
          textElement.style =
            "transform: translateY(-999px); transition: all 1s;";
        }, 5000);

        if(isMenuOpened) {
          setTimeout(() => {
            textElement.innerHTML = "Менюто може да бъде кликнато, за да бъде показана по подробна информация.";
            textElement.style = "transform: translateY(0px); transition: all 1s;";

            hand.style = "font-size: 2.5em; left: 2.3em; transition: all 1s;";
            hand.classList.remove("swipe-animation");
            hand.classList.add("hand-animation");

            if(checkForNavWrapperClass() == true) {
                textElement.innerHTML =
          " Чудесно! Вече знаете как да показвате и скривате менюто. Може да продължите напред.";
        textElement.style = "transform: translateY(0px); transition: all 1s;";
        setTimeout(() => {
          textElement.style =
            "transform: translateY(-999px); transition: all 1s;";
        }, 5000);
        setTimeout(() => {
          siteHeaderLinks.forEach((link) => {
            link.style = "pointer-events: auto;";
          });

          animationOverlayWrapper.style = "display: none;";
          siteHeader.style =
            "filter: none; -webkit-transition : -webkit-filter 500ms linear; z-index: 6;";
          var mainElement = document.querySelector("main");

          if (mainElement) {
            mainElement.style =
              "filter: none; -webkit-transition : -webkit-filter 500ms linear;";
          }
        }, 6000);
            }

            squareElement.style = "width: 0px; height: 0px; bottom: 2em; left: 0; right: 0; margin: 0 auto; transition: all 1s;";
          }, 1000);
        }
      }

      
        
      }
    }
  };

  // Create an instance of MutationObserver with the callback
  const observer = new MutationObserver(callback);

  // Configuration object to specify what to observe
  const config = { attributes: true, attributeFilter: ["style"] };

  // Start observing the navWrapper element for configured mutations
  observer.observe(navWrapper, config);

  setTimeout(() => {
    textElement.style = "transform: translateY(-999px); transition: all 1s;";
  }, 16000); // Hide the second message after it has been displayed for a while


function disableScroll() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}

function checkForNavWrapperClass(){
    setTimeout(() => {
        if (navWrapper.classList.contains("expanded") == true) {
            textElement.innerHTML = "Менюто може да бъде скрито, като отново го посочите.";
            textElement.style = "transform: translateY(0px); transition: all 1s;";
    
            hand.style = "font-size: 0em; left: 2.3em; transition: all 1s;";

            return true;
        } else {
            textElement.innerHTML = "Менюто може да бъде отворено, като кликнете върху него.";
            textElement.style = "transform: translateY(0px); transition: all 1s;";
            hand.style = "font-size: 2.5em; left: 2.3em; bottom: 3em; transition: all 1s;";
        }
    }, 1000);
    
    // This will execute the block after a delay of 1000 milliseconds (1 second)
}

navWrapper.addEventListener("click", checkForNavWrapperClass);
