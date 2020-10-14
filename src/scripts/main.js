$(".Header-switch").on("click", function () {
  if ($(".Header").is(".menu-show")) {
    $(".Header").removeClass("menu-show")
  } else {
    $(".Header").addClass("menu-show")
  }
})

$(document).ready(function () {
  $(".read").click(function () {
    $(this).prev().toggle()
    $(this).siblings(".dots").toggle()
    if ($(this).text() == "Devamını oku") {
      $(this).text("Daralt")
      $(this).css({
        marginLeft: "6px",
        float: "right",
      })
    } else {
      $(this).text("Devamını oku")
      $(this).css({
        marginLeft: "0px",
        float: "none",
      })
    }
  })
})

$('.homepage-slider').flickity({
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

