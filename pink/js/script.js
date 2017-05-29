
  
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
		
		if ( w_width > 980){
				
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
///////////////Последовательное изменение изображений в мобильной версии///////////
	
	var i_case = $(".phone-frame");
	var re = window.devicePixelRatio;
	
	//Содержимое массива img_array от разрешающей способности экрана. Значение переменной re становится
    //частью пути к файлу. конструкция страдает некоторой громоздкостью, но избавляет от необходимости создавть 3 отдельных массива	
	var img_array = [
							"url(img/iphone-screen-1-1@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)",
							"url(img/iphone-screen-1-2@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)",
							"url(img/iphone-screen-1-3@"+re+"x.png), url(img/iphone-case-1@"+re+"x.png)"
					];
	
	var i = 0;	
	var timerId = setInterval(function(){
				    	
			i_case.css("backgroundImage", img_array[i]);
			i++;
			
			if(i > img_array.length){
				i = 0;
			}
	}
	, 2000);
	
///////////////////////////////////////////////////////////////	
	
	
///////////Заполнение ячеек таблицы тарифных планов////////////	
	var yes = $(".yes-mark").html();
	var no = $(".no-mark").html();
	
	var cells = $(".feauture-exist");
	
		for(i = 0; i < cells.length; i++)
		{
			var res = cells[i].innerHTML;

			if(res == 'yes')
			{
				$(cells[i]).css("fill", "green").html(yes);
			}
			
			if(res == 'no')
			{
				$(cells[i]).css("fill", "red").html(no);
			}	
					
		}
		
/////////////-------Слайдер для десктопной версии-------////////////////////
	var slideWidth=680;
	var sliderTimer;
	
	$(function(){
$('.slidewrapper').width($('.slidewrapper').children().length*slideWidth);
    sliderTimer=setInterval(nextSlide,2000);
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,2000);
    });
    $('.right-arrow').click(function(){
		clearInterval(sliderTimer);
        nextSlide();
        sliderTimer=setInterval(nextSlide,2000);
    });
    $('.left-arrow').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer=setInterval(nextSlide,2000);
    });
});

	function nextSlide(){
		var currentSlide=parseInt($('.slidewrapper').data('current'));
		currentSlide++;
		if(currentSlide>=$('.slidewrapper').children().length)
		{
			currentSlide=0;   
		}
		$('.slidewrapper').animate({left: -currentSlide*slideWidth},680).data('current',currentSlide);
	}

	function prevSlide(){
		var currentSlide=parseInt($('.slidewrapper').data('current'));
		currentSlide--;
		if(currentSlide<0)
		{
			currentSlide=$('.slidewrapper').children().length-1;   
		}
		$('.slidewrapper').animate({left: -currentSlide*slideWidth},680).data('current',currentSlide);
	}
			
});