// JavaScript Document

//------------------------------------------------navbar-----------------------------------------------

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('nav').addClass('cc');
    } else {
      $('nav').removeClass('cc');
    }
  });
});
////---------------------------------------------clicking---------------------------------------------------

$('.nav-link,a').click(function () {
  $(this).addClass('animate__animated animate__rubberBand');
}).bind('animationend', function () {
  $(this).removeClass('animate__animated animate__rubberBand');
});

$('#ro,#top').click(function () {
    $(this).addClass('animate__animated animate__rubberBand');
  })
  .bind('animationend', function () {
    $(this).removeClass('animate__animated animate__rubberBand');
  });
//

//---------------------------------------------robot-----------------------------------------------------

$("#robot").delay(1000).fadeOut("slow");
var r = false;
$("#ro").click(function () {
  $("#robot").toggle(function () {
    if (r) $("#ro img").attr('src', 'img/ro.png');
    else $("#ro img").attr('src', 'img/ro2.png');
    r = !r
  });

})

function keyin() {
  var keyCode = event.which;
  if (keyCode == 13) {
    $("#rotalk").append('<div class="m2">' + $("#roask").val() + '</div><br>');
    $("#rotalk").append('<div class="m1">' + ans() + '</div><br>');
    $("#roask").val("");
    event.preventDefault();
    $("#rotalk").scrollTop(9999999);
  }

}

function ans() {
  var c = Math.floor(Math.random() * 3);
  if (c % 3 == 0) return '客服端忙線中，請您稍待專人回覆您'
  if (c % 3 == 1) return '很抱歉，請您稍待專人回覆您的問題'
  if (c % 3 == 2) return '謝謝您的答覆及反饋，請稍待專人回覆您的問題'
}
