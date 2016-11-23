$(document).ready(function() {

$('.arrow').hide();

$('#header-headlines').addClass('animated bounceInDown');
$('.hi-icon-wrap').addClass('animated bounceInUp');

setTimeout(function() {
    $('.arrow').show();
}, 5000);

$('#settings').click(function() {
    if($(this).css("margin-left") == "180px")
    {
        $('#style_css').animate({"margin-left": '-=180'});
        $('#settings').animate({"margin-left": '-=180'});
    }
    else
    {
        $('#style_css').animate({"margin-left": '+=180'});
        $('#settings').animate({"margin-left": '+=180'});
    }


  });

$(".changer").click(function() {
    $(".changer").addClass("border_css2");
    $(this).removeClass("border_css2");
    $(this).addClass("border_css");
});

$.backstretch([
        "img/background1.jpg"
      , "img/background2.jpg"
      , "img/background3.jpg"
     ], {duration: 2500, fade: 750});


$(function() {

$(".roll").css("opacity","0");


$(".roll").hover(function () {


$(this).stop().animate({
opacity: .7
}, "350");
},


function () {


$(this).stop().animate({
opacity: 0
}, "350");
});
});

$("#back-top").hide();


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('#item_1, .arrow').click(function () {
			$('body,html').animate({
				scrollTop: $('#content').offset().top
			}, 800);
			return false;
		});

$('#item_2').click(function () {
			$('body,html').animate({
				scrollTop: $('#content1').offset().top
			}, 800);
			return false;
		});

$('#item_3').click(function () {
			$('body,html').animate({
				scrollTop: $('#content2').offset().top
			}, 800);
			return false;
		});

$('#item_4').click(function () {
			$('body,html').animate({
				scrollTop: $('#content3').offset().top
			}, 800);
			return false;
		});
	});


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#navigation').css('margin-top','0px');
			} else {
				$('#navigation').css('margin-top','-60px');;
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


$(document).scroll(function(){

    var docScroll = $(document).scrollTop(),
        contents = $('.content'),
        boxCntOfset = $(".skills-line").position().top + 150;

    if(docScroll >= boxCntOfset ) {
      $('.skills-line').each(function() {
        var skill = $(this);
        skill.css('width', skill.data('level'));
      });
    } else {
      $('.skills-line').css('width', '0px');
    }

    contents.each(function(i) {
      var content = $(this);
      var nextContent = contents[i + 1];
      var offset = content.offset().top - 5;
      var position = content.position().top + 100;

      if (nextContent) {
        var nextOffset = $(nextContent).offset().top - 5;

        if ((docScroll >= offset) && (docScroll <= nextOffset)) {
          $('#' + content.data('mi')).css('color','#32323c');
        } else {
          $('#' + content.data('mi')).css('color','#f2f2f2');
        }
      } else {
        if ((docScroll >= offset)) {
          $('#' + content.data('mi')).css('color','#32323c');
        } else {
          $('#' + content.data('mi')).css('color','#f2f2f2');
        }
      }

      if(docScroll >= position) {
          content.css('padding-top','100px');
          content.css('padding-bottom','100px');
      } else {
          content.css('padding-top','200px');
          content.css('padding-bottom','0px');
      }
    });
  });

});
