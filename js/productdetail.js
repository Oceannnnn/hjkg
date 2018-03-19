//详细信息与客户评价
$(".msg-title-tab span").on("click", function() {
	$(this).addClass("active").siblings().removeClass("active");
	$(".msg-content").eq($(this).index()).show().siblings().hide();
});

//评论星级
rat('star');

function rat(star) {
	star = '.' + star;
	$(star).raty({
		path: 'img/raty',
		starOff: 'star-off-big.png',
		starOn: 'star-on-big.png',
		number: 5,
		size: 30,
		readOnly: true, //禁止再次评分
		score: function() {
			return $(this).attr('data-number');
		}
	});
}

/* 回到顶部 */

function goTop() {
	$(window).scroll(function(e) {
		if ($(window).scrollTop() > 100)
			$("#gotop").fadeIn(1000);
		else
			$("#gotop").fadeOut(1000);
	});
};
$(function() {
	$("#gotop").click(function(e) {
		//以1秒的间隔返回顶部
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	goTop();
});

//带缩略图的轮播图
  // The slider being synced must be initialized first
  $('#galleryThumbs').flexslider({
  	animation: 'slide',
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 70,
    itemMargin: 10,
//  directionNav: true,
    asNavFor: '#galleryTop'
    
  });
 
  $('#galleryTop').flexslider({
  	animation: 'slide',
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#galleryThumbs"
  });
