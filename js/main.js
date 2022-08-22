
// 메인섹션 스크롤
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollBar: false,
	scrollHorizontally: true,
	anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
	navigation: true,
	navigationPosition: 'left',
	

	//섹션 배경색, 이미지 로드
	beforeLeave: function(origin, destination, direction, trigger){
			$('.sectionBg').removeClass('act0 act1 act2 act3 act4 act5 act6 act7 act8');      
			$('.contentImg').slideUp(100);
			$('.contentWrap').removeClass('on');      
			$('#s0').removeClass('on');      
	},

	afterLoad: function(index, nextIndex, direction){
        var leavingSection = $(this);

        //after leaving section 1
        if ($('#s0').hasClass('active')) {
			$('.sectionBg').addClass('act0');
			$('#s0').addClass('on');
		} else if ($('#s1').hasClass('active')) {
			$('.sectionBg').addClass('act1');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con1Img.png'});
		} else if ($('#s2').hasClass('active')) {
			$('.sectionBg').addClass('act2');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con2Img.png'});
		} else if ($('#s3').hasClass('active')) {
			$('.sectionBg').addClass('act3');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con3Img.png'});
		} else if ($('#s4').hasClass('active')) {
			$('.sectionBg').addClass('act4');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con4Img.png'});
		} else if ($('#s5').hasClass('active')) {
			$('.sectionBg').addClass('act5');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con5Img.png'});
		} else if ($('#s6').hasClass('active')) {
			$('.sectionBg').addClass('act6');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con6Img.png'});
		} else if ($('#s7').hasClass('active')) {
			$('.sectionBg').addClass('act7');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con7Img.png'});
		} else if ($('#s8').hasClass('active')) {
			$('.sectionBg').addClass('act8');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con8Img.png'});
		};  
		
		$('.contentWrap').addClass('on');
    }
});



//프로필 팝업

$('.profileBtn').click(function(){
	$('.profilePopup').show();
	$('.popupBg').fadeIn();
	$(this).addClass('on');
});
$('.profileBtn').click(function(){
	$('.popupWrap').delay(100).slideDown();
});

$('.closeBtn').click(function(){
	$('.popupWrap').slideUp(400);
	$('.profileBtn').removeClass('on');
});
$('.closeBtn').click(function(){
	$('.profilePopup').delay(300).fadeOut(200);
});
$('.popupBg').click(function(){
	$('.popupWrap').slideUp(400);
	$('.profileBtn').removeClass('on');
});
$('.popupBg').click(function(){
	$('.profilePopup').delay(300).fadeOut(200);
});

//프로필 스크롤

// var myScroll = new IScroll('#wrapper', {
//     mouseWheel: false,
//     // scrollbars: false,
// 	fadeScrollbars: true,
// });


//s4 새 창 사이즈 조절

function openS4() {
	window.open("https://yj-cha.github.io/asan/","아산병원 모바일","width=500, height=800, top=100, left=100");
}