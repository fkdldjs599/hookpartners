$(document).ready(function(){

	var leftH = $('.left_menu').innerHeight();
	var conH = $('.right_con').innerHeight();
	var winH = $(window).innerHeight();

	var winW = $(window).innerWidth();

	if(winW <= 1000) {
		$('.left_menu').css({'height': 'auto'});

	}else {
		if(leftH < conH) {
			$('.left_menu').css({'height': conH + 'px'});

		}

		if (conH < leftH) {
			//$('.right_con').css({'height': leftH + 'px'});
		}
	}
	


	$(window).resize(function(){
		var move_leftH = $('.left_menu').innerHeight();
		var move_conH = $('.right_con').innerHeight();
		var move_winH = $(window).innerHeight();
		var move_winW = $(window).innerWidth();

		if(move_winW <= 1000) {
			$('.left_menu').css({'height': 'auto'});
		
		}else {

			if (move_leftH < move_winH || move_conH < move_winH) {
				$('.left_menu').css({'height': '100vh'});
			}

			if(move_leftH < move_conH) {
				$('.left_menu').css({'height': move_conH + 'px'});

			}

			//if(move_leftH > move_conH) {
			//	$('.left_menu').css({'height': move_conH + 'px'});

			//}
		
		}

	});


	$('.mb_white_bg').addClass('on');
	var whiteBg = $('.mb_white_bg').innerWidth();

	$('.mb_white_bg').css({'left': - whiteBg + 'px'});
	$('.mb_white_bg').removeClass('on');


	$('.open_menu').click(function(){
		$('.mb_black_bg').addClass('on');
		$('.mb_white_bg').addClass('on');
		$('.mb_white_bg').stop().animate({'left': '0'}, 300);
	});

	$('.mb_black_bg, .left_menu .close_btn').click(function(){
		$('.mb_black_bg').removeClass('on');
		$('.mb_white_bg').css({'left': - whiteBg + 'px'});
		$('.mb_white_bg').removeClass('on');
	});




	//팝업
	$('.pop .black_bg, .pop .close_btn').click(function(){
		$('.pop').removeClass("on");
	});


	//수량
	$('.num_btn').click(function(){
		var buynum = parseInt($(this).siblings(".buynum").val());

		if($(this).hasClass('minus')) {
			if(buynum > 1) {
				$(this).siblings('.buynum').val(buynum-1);
			}
		}else if($(this).hasClass('plus')) {
			$(this).siblings('.buynum').val(buynum+1);
		
		}
	
	});




	var proH = $('#index .mypro').innerHeight();

	if(winW <= 1000) {

	}else {
		$('#index .status').css({'height': proH + 'px'});
	
	}
	$(window).resize(function(){
		var move_winW = $(window).innerWidth();

		if(move_winW <= 1000) {
		
		}else {
			var move_proH = $('#index .mypro').innerHeight();
			$('#index .status').css({'height': move_proH + 'px'});
		}
	});







	//비밀번호 보이기
	$('.pw_btns').each(function(){
		$('.pw_btns').data("willshow", true);
	});

	$('.pw_btns').click(function(){
		if($(this).data("willshow")) {
			$(this).data("willshow", false);
			$(this).children("img").removeClass("on");
			$(this).children(".hide").addClass("on");
			$(this).prev("input").attr("type", "text");

		}else{
			$(this).data("willshow", true);
			$(this).children("img").removeClass("on");
			$(this).children(".show").addClass("on");
			$(this).prev("input").attr("type", "password");
		}
	});



	//전체동의
	$("#all_ck").change(function(){
		if($(this).is(":checked")) {
			$("#term1").prop("checked", true);
			$("#term2").prop("checked", true);
		
		}else{
			$("#term1").prop("checked", false);
			$("#term2").prop("checked", false);
		
		}
	});

	$(".term_wrap .t_line .ckbox").change(function(){
		var termCount = $(".term_wrap .t_line .ckbox").length;
		var ckCount = $(".term_wrap .t_line .ckbox:checked").length;

		if(termCount != ckCount) {
			$("#all_ck").prop("checked", false);

		}else{
			$("#all_ck").prop("checked", true);
		
		}
	});





	//로그인 + 회원가입

	var formH = $('.form .form_box').innerHeight();
	var winH = $(window).innerHeight();

	//console.log(formH)
	//console.log(winH)

	if(formH > winH) {
		$('.form .form_box').removeClass('fix');

	}else if (formH == winH) {
			$('.form .form_box').removeClass('fix');
		
	}else {
		$('.form .form_box').addClass('fix');
	}

	$(window).resize(function(){
		var moveH = $('.form .form_box').innerHeight();
		var moveWinH = $(window).innerHeight();
		//console.log(moveH)
		//console.log(moveWinH)

		if(moveH > moveWinH) {
			$('.form .form_box').removeClass('fix');

		} else if(moveH == moveWinH) {
			$('.form .form_box').removeClass('fix');
		
		} else {
			$('.form .form_box').addClass('fix');
		}
		
	});


	$(".filter .ckbox").change(function(){
		var id = $(this).attr("id");
		var total = $(this).parent().siblings(".ck_block").length;
		var checked = $(".filter .item:checked").length;

		console.log(total)
		console.log(checked)

		if(id != "all_ck") {
			if(total != checked) {
				$(".filter #all_ck").prop("checked", false);

			}else{
				$(".filter #all_ck").prop("checked", true);

			}

		}
	});


	$(".back_btn").click(function(){
		history.go(-1);
	});
	$(".go_home").click(function(){
		location.href='index2.html';
	});


	//이미지박스 + 삭제버튼 가로사이즈 맞춤
	//var imgboxSize = $(".imgbox_wrap .img_box01").outerWidth(true);
	//$(".p_btn_area").css({"width": imgboxSize + "px"});
	//$(".txt_box").css({"width": imgboxSize + "px"});



//메인페이지

	//헤더 고정
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		//console.log(scrollTop)

		if(scrollTop == '0') {
			$('.header').removeClass('fix');
		}else{
			$('.header').addClass('fix');
		}
	});


	//상단으로 가는 버튼
	$(".go_top").click(function(){
		$("body, html").stop().animate({scrollTop: 0}, 500);
	});










});