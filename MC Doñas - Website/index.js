$(document).ready(function(){

		$("header").css({"height" : $(window).height() + "px"});

		var flag = false;
		var scroll;

		$(window).scroll(function(){

			scroll = $(window).scrollTop();

			if (scroll > 1) {
				if (!flag) {				
					$(".Mclogo").css({"width" : "350px"});					
					flag = true;
				}
			}else{
				if (flag) {
					$(".Mclogo").css({"width" : "250px"});		
					flag = false;
				};
			}

		});