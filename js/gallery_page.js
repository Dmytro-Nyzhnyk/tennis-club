$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $(".mobile-menu span").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("owerlay");
  });
});
