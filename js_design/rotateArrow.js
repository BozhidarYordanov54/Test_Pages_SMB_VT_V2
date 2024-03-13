document.addEventListener("DOMContentLoaded", function () {
  var menuToggleArticle = document.getElementById("menu-toggle-article");
  var menuToggleCompetitions = document.getElementById("menu-toggle-competitions");
  var arrowDowns = document.querySelectorAll(".arrow-down");

  if (menuToggleArticle) {
    menuToggleArticle.addEventListener("change", function () {
      if (menuToggleArticle.checked) {
        arrowDowns[0].classList.add("rotate");
        if (menuToggleCompetitions.checked) {
          menuToggleCompetitions.checked = false;
          arrowDowns[1].classList.remove("rotate");
        }
      } else {
        arrowDowns[0].classList.remove("rotate");
      }
    });

    menuToggleCompetitions.addEventListener("change", function () {
      if (menuToggleCompetitions.checked) {
        arrowDowns[1].classList.add("rotate");
        if (menuToggleArticle.checked) {
          menuToggleArticle.checked = false;
          arrowDowns[0].classList.remove("rotate");
        }
      } else {
        arrowDowns[1].classList.remove("rotate");
      }
    });
  }

  var menuToggle = document.getElementById("menu-toggle");
  var arrowDown = document.querySelector(".arrow-down");

  if (menuToggle) {
    menuToggle.addEventListener("change", function () {
      if (menuToggle.checked) {
        if (arrowDown) {
          arrowDown.classList.add("rotate");
        }
      } else {
        if (arrowDown) {
          arrowDown.classList.remove("rotate");
        }
      }
    });
  }
});
