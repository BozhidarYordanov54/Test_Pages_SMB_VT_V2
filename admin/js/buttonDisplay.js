document.addEventListener("DOMContentLoaded", function () {
    var select = document.getElementById("competition");
    var button = document.querySelector(".btn-download");
  
    select.addEventListener("change", function () {
      if (select.value === "all") {
        button.style.display = "none";
      } else {
        button.style.display = "block";
      }
    });
  });