document.addEventListener("DOMContentLoaded", function () {
  var menuToggleArticle = document.getElementById("menu-toggle-article");
  var menuToggleCompetitions = document.getElementById("menu-toggle-competitions");
  var arrowDowns = document.querySelectorAll(".arrow-down");

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
});