document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the navbar burger
  var burger = document.querySelector(".navbar-burger");
  var menu = document.getElementById(burger.dataset.target);

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});
