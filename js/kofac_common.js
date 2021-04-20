$(document).ready(function(){
			// 주메뉴 오버 - 서브메뉴 보임(pc)
			$('.gnb>li').bind('mouseenter',function() {
				if ($(window).width() >= 1200) {
					$('.gnb li ul').stop().fadeOut(200);	
					$(this).find('ul').stop().fadeIn(200);
					$(this).addClass('active');
				}
			});
			// 주메뉴 아웃 - 서브메뉴 숨김(pc)
			$('.gnb>li').on('mouseleave',function() {
				if ($(window).width() >=1200) {
					$('.gnb li ul').stop().fadeOut(200);
					$(this).removeClass('active');
				}
			});
			// 주메뉴 오버 - 메인페이지와 서브페이지의 메뉴배경 작동(pc)
			$gnb_li = $('.gnb');
			$gnb_li.hover(function(){
				if ($(window).width() >= 1200) {
						$('.gnb_bg').stop().animate({width:'220px'},200);
				}
			},function(){
				if ($(window).width() >= 1200) {
					$('.gnb_bg').stop().animate({width:'0px'},200);
				}
			});
	
			// 모바일 삼선 클릭
			$(".mo_callmenu").click(function() {	
				if ($(window).width() < 1200) {	
					$(".mob_slidingbg").fadeIn();
					$(".mob_sliding").addClass('on');				
					if( $('#wrap').hasClass('main') )  {		//메인페이지에선 연수안내 서브메뉴가 펼쳐지도록 한다.
						$('.gnb > li').removeClass('open');
						$('.gnb > li:nth-child(3)').addClass('open');
						$('.gnb > li ul').hide();
						$('.gnb > li:nth-child(3) ul').show();
					}else {
						$('.gnb > li.on ul').show();
					}
				}
			});
			// 모바일 메뉴 닫기
			$(".mob_sliding  .btn_close").click(function() {
				if ($(window).width() < 1200) {
					$('.mob_slidingbg').fadeOut('fast');
					$('.mob_sliding').removeClass('on');
					$('.gnb > li').removeClass('open');
					$('.gnb > li ul').hide();
				}
			});

			// 모바일 메인메뉴 클릭
			$('.gnb > li > a').click(function() {
				if($(window).width() <= 1200) {
					if ($(this).parent().children('ul').is(":hidden")) {		//해당 서브메뉴 없으면
						$('.gnb > li').removeClass('open');
						$(this).parent().addClass('open');
						$('.gnb > li ul').hide();
						$(this).next().show();
					}
				}
			});
		
			//최근게시물 탭메뉴
/*			$('.rbbs_tab dt').click(function(){
				$('.rbbs_tab dt').removeClass('on');
				$(this).addClass('on');
				$('.rbbs_tab dd').hide();
				$(this).next().show();
			});
*/
			
			//추천메뉴pc 탭메뉴
			$('.recomm_tab dt a').click(function(){
				$('.recomm_tab dt').removeClass('on');
				$(this).parent().addClass('on');
				$('.recomm_tab dd').addClass('hidetab');
				$(this).parent().next().removeClass('hidetab');				
			});
			
			//글자수 제한
			$('.comment_box .cont').each(function(index){
				oText=$(this).html();
				if(oText.length > 80) {
					rText=oText.substring(0,80) + '..';
					$(this).html(rText);
				}
			});

			//family site
			$(".family a").click(function() {
				if($(this).next().css('display')!="block") {
					$(this).next().css("display", "block");
					$(this).next().stop().animate({height:'253px'});
				} else {
					$(this).next().stop().animate({height:'0px'});
					setTimeout(function() { $('.family-site').css("display", "none"); }, 300);
				}
			});
			
			//퀵메뉴
			$('.totop a').click(function(){
				position = $("#header").offset();
				$('html,body').animate( { scrollTop:0 },'slow' );
				return false;
			});

			// 검색	
			$('.btn_search').click(function() {
				if($('.srch_form').css('display')!="block") {
					 $('.srch_form').fadeIn('fast');
				} else {
					$('.srch_form').fadeOut('fast');
				}
			 });

			 //검색창 닫기
			 $('.btn_closesrch').click(function(){
				$('.srch_form').fadeOut('fast');
				$('.srch_form input[type=text]').val('');
			 });

			 //모바일 location
			 $('.location_list > li a').click(function(){
				if ($(window).width() <= 1000) {
					if(!$(this).hasClass('unfold')) {			//접혀 있으면
						$('.location_list > li ul').hide();
						$('.location_list > li a').removeClass('unfold');
						$(this).next().slideDown();
						$(this).addClass('unfold');
					}else {												//펼쳐 있으면
						$(this).next().slideUp();
						$(this).removeClass('unfold');
					}
				}
			 });

			 //선택강의 변경
			$('.btn_folding').click(function(){
				if( $(this).parent().next().css('display')!="block" ) {	//열기를 클릭?
					$(this).parent().next().slideDown();
					$(this).text('닫기');
					$(this).removeClass('closing');
				} else{																				//닫기를 클릭?
					$(this).parent().next().slideUp();
					$(this).text('열기');
					$(this).addClass('closing');
				}
			});

			//탭메뉴 디자인 맞춤
			$('.liketab_menu li a.on').parent().prev().find('a').addClass('onprev');
			
			//하단버튼 모바일 나열
			if($('.btn_bottom button').length == 2) {
				$('.btn_bottom').addClass('ea2'); 
			}else if($('.btn_bottom button').length == 3) {
				$('.btn_bottom').addClass('ea3'); 
			}

			//인사말 탭메뉴
			$('.base_tab dt').click(function(){
				$('.base_tab dt').removeClass('on');
				$(this).addClass('on');
				$('.base_tab dd').hide();
				$(this).next().show();
			});

			//아이디/비밀번호 찾기 탭메뉴
			$('.idpw_tab dt a').click(function(){
				$('.idpw_tab dt').removeClass('on');
				$(this).parent().addClass('on');
				$('.idpw_tab dd').hide();
				$(this).parent().next().show();
			});
});

$(document).ready(function(){
	$(window).resize(function(){
		if($(window).width() <= 1200) {
			$('.mob_slidingbg').fadeOut('fast');
			$('.mob_sliding').removeClass('on');		
			$('.gnb > li').removeClass('open');
			$('.gnb > li ul').hide();
		}
	});
});
