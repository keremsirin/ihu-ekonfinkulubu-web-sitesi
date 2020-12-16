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

$(document).ready(function () {
  $(".read_en").click(function () {
    $(this).prev().toggle()
    $(this).siblings(".dots_en").toggle()
    if ($(this).text() == "Read more") {
      $(this).text("Read less")
      $(this).css({
        marginLeft: "6px",
        float: "right",
      })
    } else {
      $(this).text("Read more")
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

if ($(window).width() < 350) {
    $("#dku").text('Denetleme K. Ü.');
    $("#bya1").text('Başkan Y.');
    $("#bya2").text('Başkan Y.');
    $("#sms1").text('Sosyal Medya Y.');
    $("#sms2").text('Sosyal Medya Y.');
    $("#smy").text('Sosyal Medya Y.');


    $("#abdurrahman").text('A. ALKOLİ');
    $("#sbm").text('A. ÇETİN');
    $("#kim").text('E. Gazi ÇELİK');
    $("#smm").text('Social Media M.');
    $(".hakkimizda-vm").css('height', '7270px');


}



$(document).ready(function () {
  $(".submit").click(function (event) {
      console.log("clicked")

      var email = $('.email').val()
      var subject = $('.subject').val()
      var message = $('.message').val()

      if(email.length > 5 && email.includes('@') && email.includes('.')) {
          console.log('ok')
      } else {
          event.preventDefault()
          alert('Lütfen geçerli bir email adresi giriniz!')
      }

      if(subject.length > 2) {
          console.log('ok')
      } else {
          event.preventDefault()
          alert('Lütfen daha uzun bir konu başlığı giriniz!')
      }

      if(message.length > 10) {
          console.log('ok')
      } else {
          event.preventDefault()
          alert('Lütfen daha uzun bir mesaj giriniz!')
      }
  })
})
