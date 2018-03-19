/* 点击顶部按钮切换内容 */
$(".category-btn span").on("click",function(){
	$(this).addClass("current")
	.siblings().removeClass("current");
	var _cIndex = $(".category-btn span").index(this);
	$(".categories-tabs").eq(_cIndex).show()
	.siblings().hide();
});
// 左边分类导航按钮点击样式
$('.cate-hd-list ul li:first-child').addClass('cur');
$('.cate-hd-list ul li').on('click', function(){
	$(this).addClass('cur').siblings().removeClass('cur');
})
//分类高度
$(".brand1X1,.brand2X1").height($(".categories-tabs").width()/4);
$(".brand1X2").height($(".categories-tabs").width()/2);