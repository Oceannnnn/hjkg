//toast提示
	function toast(text) {
		var $toast = $('.toast_container');
		$(".toast_text").text(text);
		if ($toast.css('display') != 'none') {
			return;
		}
		$toast.show();
		setTimeout(function() {
			$toast.hide();
		}, 1500);
	}
$(document).ready(function() {
	/* 插入更多导航 */
	var str = "<div class='nav-menu' id='head-menu-more'><ul><li><a href='index.html'><i><img src='img/btn/home.png' /></i><span>主页</span></a></li><li><a href='category2.html'><i><img src='img/btn/category.png' /></i><span>分类</span></a></li><li><a href='cart.html'><i><img src='img/btn/cart.png' /></i><span>购物车</span></a></li><li><a href='my.html'><i><img src='img/btn/user.png' /></i><span>我的</span></a></li></ul></div>";
	$("header").after(str);

	$(".head-more").on("click", function() {
		var top = $(".nav-menu").css("top");
//		console.log(top);
		if (top != "-50px") {
			$(".nav-menu").css("top","-50px");
		}
		if (top != "46px") {
			$(".nav-menu").css("top","46px");
		}
	});

	//select美化 模拟select 
	$("select").change(function() {
		var selected = $(this).find("option:selected").text();
		$(this).parent().find(".select-skin-l").text(selected);
	});

	//购物车数量为零时隐藏badge
	if ($(".am-badge").text() == '0') {
		$(".am-badge").hide();
	} else if (parseInt($(".am-badge").text()) > 99) {
		$(".am-badge").text("…")
	}

	//图片懒加载
	//lazyload里面已包含图片未加载与加载失败的脚本，修改placeholder即可
	if ($("img.lazy").length > 0) {
		$("img.lazy").lazyload();
	}

	
	/* 回到顶部 */

	function goTop() {
		$(window).scroll(function(e) {
			$(".nav-menu").css("top","-50px");
			if ($(window).scrollTop() > 100) {
				$("#gotop").fadeIn(1000);
			} else {
				$("#gotop").fadeOut(1000);
			}
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
	

});