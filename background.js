document.addEventListener("DOMContentLoaded", function () {
  var page = window.location.pathname.split("/").pop(); // Get the current page's filename
  var home = document.getElementById("home");
  home.setAttribute("data-page", page);
});
