$(function() {
	var count = 0;
	var Width = $(document).width();
	if(Width > 750) {
		count = 4;
	} else if(Width > 480 && Width <= 750) {
		count = 3;
	} else if(Width > 320 && Width <= 480) {
		count = 2;
	} else {
		count = 1;
	}
	slide(count);
	if($(".main-companyOver-m ul").length > 1) {
		var special = $(".main-companyOver-m .owl").owlCarousel({
			items: 1,
			loop: true,
			dots: false
		})
		$(".main-companyOver-m .left").click(function() {
			special.trigger("prev.owl.carousel")
		});
		$(".main-companyOver-m .right").click(function() {
			special.trigger("next.owl.carousel")
		})
	}

	$(".menu_wrap").click(function() {
		if(!$(".header>ul").is(":animated")) {
			if($(".header>ul").width() > 0) {
				$(this).css({
					'background': 'url(images/menu.png) no-repeat',
					'background-size': '100% 100%'
				});
				$(".header>ul").width(0).find('a').css('color', 'transparent')
			} else {
				$(this).css({
					'background': 'url(images/menu-1.png) no-repeat',
					'background-size': '100% 100%'
				});
				$(".header>ul").width('100%').find('a').css('color', 'grey')
			}
		}
	})

	function slide(count) {
		jQuery(".main-keynelProdcut-m").slide({
			titCell: ".hd ul",
			mainCell: ".bd ul",
			autoPage: true,
			effect: "left",
			autoPlay: true,
			vis: count,
			trigger: "click"
		});
		$(".header>ul").height($(document).height());
	}
})
