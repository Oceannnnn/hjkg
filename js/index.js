/*轮播图*/
$("#index-banner").flexslider({
	slideshowSpeed: 3000, // Integer: ms 滚动间隔时间
	animationSpeed: 600, // Integer: ms 动画滚动速度
	directionNav: false //Boolean: 是否创建上/下一个按钮（previous/next）
});
///* 分类 */ 删除 2016.11.15
//var mySwiper = new Swiper('#brand-swiper', {
//	pagination: '.swiper-pagination',
//	paginationType: 'progress',
//	freeMode: true,
//});

var swiper = new Swiper('.act-swiper', {
	slidesPerView: 3.5,
	paginationClickable: true,
});

/* 回到顶部 */

function goTop() {
	$(window).scroll(function(e) {
		if($(window).scrollTop() > 100)
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

//购物车数量为零时隐藏badge
if($(".am-badge").text() == '0') {
	$(".am-badge").hide();
} else if(parseInt($(".am-badge").text()) > 99) {
	$(".am-badge").text("…")
}
$("img.lazy").lazyload();
//分类高度
$(".brand1X1,.brand2X1").height($(".brand1X1").width());