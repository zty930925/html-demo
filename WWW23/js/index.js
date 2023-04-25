$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('nav').addClass('aa');
    } else {
      $('nav').removeClass('aa');
    }
  });
});

$('#top').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#top').fadeIn('fast');
    } else {
      $('#top').fadeOut('fast');
    }
  });

$('#robot').delay(1000).fadeOut("slow");
var r = false;
$('#ro').click(function () {
  $('#robot').toggle(function () {
    if (r) $('#ro img').attr('src', 'img/ro.png');
    else $('#ro img').attr('src', 'img/ro2.png');
    r = !r;
  });
});

function keyin() {
  var keyCode = event.which;
  if (keyCode == 13) {
    $('#rotalk').append('<div class="m2">' + $('#roask').val() + '</div><br>');
    $('#rotalk').append('<div class="m1">' + ans() + '</div><br>');
    $('#roask').val("");
    event.preventDefault();
    $('#rotalk').scrollTop(9999999);
  }
}

function ans() {
  var c = Math.floor(Math.random() * 3);
  if (c % 3 == 0) return '我們已收到您的留言，請稍待專人回覆！'
  if (c % 3 == 1) return '很抱歉，客服端忙線中請稍後再留言一次'
  if (c % 3 == 2) return '謝謝您的留言，請耐心稍待專人回覆！'
}

$('#top,#ro').click(function () {
  $(this).addClass('animate__animated animate__bounceIn');
}).bind('animationend', function () {
  $(this).removeClass('animate__animated animate__bounceIn');
})

$('#q1,#q2,#q3').click(function () {
  $(this).addClass('animate__animated animate__flipInY');
}).bind('animationend', function () {
  $(this).removeClass('animate__animated animate__flipInY');
})

$('.nav-link,a').click(function () {
  $(this).addClass('animate__animated animate__bounceIn');
}).bind('animationend', function () {
  $(this).removeClass('animate__animated animate__bounceIn');
})

var a = false;
$('#q1').click(function () {
  if (a) {
    $('h5',this).html('如何避免被詐騙?');
    $(this).addClass('card-q');
    $(this).removeClass('card-a');
  } else {
    $('h5',this).html('<h2>解答：</h2>1.假冒機構公務員或警察機構詐財手法及預防策略<br>2.假冒拍賣賣家詐騙預防策略<br>3.假冒銀行詐騙預防策略 ' );
    $(this).addClass('card-a');
    $(this).removeClass('card-q');
  }
  a = !a;
});

var b = false;
$('#q2').click(function () {
  if (b) {
    $('h5',this).html('詐欺案件有那些較常見?');
    $(this).addClass('card-q');
    $(this).removeClass('card-a');
  } else {
    $('h5',this).html('<h2>解答：</h2>1.假冒機構公務員或警察機構詐財手法及預防策略<br>2.假冒拍賣賣家詐騙預防策略<br>3.假冒銀行詐騙預防策略 ' );
    $(this).addClass('card-a');
    $(this).removeClass('card-q');
  }
  b = !b;
});

var c = false;
$('#q3').click(function () {
  if (c) {
    $('h5',this).html('投資詐騙前3大類依序為？');
    $(this).addClass('card-q');
    $(this).removeClass('card-a');
  } else {
    $('h5',this).html('<h2>解答：</h2>「網路賭博」、「虛擬資產詐騙」及「境外金融資產投資（如期貨、股票）」等。' );
    $(this).addClass('card-a');
    $(this).removeClass('card-q');
  }
  c = !c;
});
