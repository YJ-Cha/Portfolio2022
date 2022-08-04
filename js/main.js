
// 메인섹션 스크롤
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['firstSlide', 'secondSlide'],

	//섹션 배경색, 이미지 로드
	beforeLeave: function(origin, destination, direction, trigger){
			$('.sectionBg').removeClass('act0 act1 act2 act3 act4');      
			$('.contentImg').slideUp(100);
			$('.contentWrap').removeClass('on');      
			$('#s0').removeClass('on');      
	},

	afterLoad: function(index, nextIndex, direction){
        var leavingSection = $(this);

        //after leaving section 1
        if ($('#s0').hasClass('active')) {
			console.log('main');
			$('.sectionBg').addClass('act0');
			$('#s0').addClass('on');
		} else if ($('#s1').hasClass('active')) {
			console.log('1');
			$('.sectionBg').addClass('act1');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con1Img.png'});
		} else if ($('#s2').hasClass('active')) {
			console.log('2');
			$('.sectionBg').addClass('act2');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con2Img.png'});
		} else if ($('#s3').hasClass('active')) {
			console.log('3');
			$('.sectionBg').addClass('act3');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con3Img.png'});
		} else if ($('#s4').hasClass('active')) {
			console.log('4');
			$('.sectionBg').addClass('act4');
			$('.contentImg').slideDown();
			$('.contentImg img').attr({src:'images/con4Img.png'});
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