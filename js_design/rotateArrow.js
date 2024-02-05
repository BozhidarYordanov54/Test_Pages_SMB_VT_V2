document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var arrowDown = document.querySelector(".arrow-down");

    menuToggle.addEventListener("change", function () {
      if (menuToggle.checked) {
        arrowDown.classList.add("rotate");
      } else {
        arrowDown.classList.remove("rotate");
      }
    });
  });