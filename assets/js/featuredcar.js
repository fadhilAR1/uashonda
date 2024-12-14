$(document).ready(function () {
  $(".filter-button").click(function () {
    let nilai = $(this).attr("data-filter");
    if (nilai === "all") {
      $(".filter").show(1000);
    } else {
      $(".filter")
        .not("." + nilai)
        .hide(1000);
      $(".filter")
        .filter("." + nilai)
        .show(1000);
    }

    // Handle active class
    $(this).addClass("active").siblings().removeClass("active");
  });
});