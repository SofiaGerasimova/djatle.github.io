
  
$(document).ready(function(){
	
	var mobile_menu = $(".mobile-menu");
	var show_btn = $(".mobile-menu-btn");
	var cl_btn = $(".menu-close-btn");
	
	
	show_btn.on("click", showMenu);
	cl_btn.on("click", hideMenu);
	
	
	function showMenu(){
		
		blockFunc(mobile_menu);
		hideFunc($(this));
		blockFunc(cl_btn);
		
	}
	
	function hideMenu(){
		hideFunc(mobile_menu);
		hideFunc(cl_btn);
		blockFunc(show_btn);
	}
	
$(window).resize(function(){
			
		var w_width = $(window).width();
		
		if ( w_width > 700){
				
			hideFunc(mobile_menu);
			hideFunc(show_btn);
			hideFunc(cl_btn);
			
		}
		
		else{
			blockFunc(show_btn);
		}
	
});
	
function blockFunc(a){
	a.css("display", "block");
}

function hideFunc(a){
	a.css("display", "none");
}
/////////////////////////////////////////////////////////////////
	
	var i_case = $(".phone-frame");
	var re = window.devicePixelRatio;
	
	
	
	
	var img_array_1x = [
							"url(img/iphone-screen-1-1@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)",
							"url(img/iphone-screen-1-2@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)",
							"url(img/iphone-screen-1-3@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)"
							
					   ];
		
	
	var i = 0;	
	var timerId = setInterval(function(){
				    	
			i_case.css("backgroundImage", img_array_1x[i]);
			i++;
			if(i > img_array_1x.length){
				i = 0;
			}
						
	}
		
	, 2000);
	
	
});