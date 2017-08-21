
//Функционал отображения/скрытия меню в мобильной версии

$(document).ready(function(){
	
	$("#menubtn").on("click", showMenu);
	$("#mclosebtn").on("click", hideMenu);
		
	function showMenu(){
		$(".menu-item").css("display", "block");
		$("#mclosebtn").css("display", "block");
		$(".logo-container").css("top", "100%");
		$("#menubtn").css("visibility", "hidden");
		$(".phone-menu-block").css("display", "none");
	}
	
	function hideMenu(){
		$(".menu-item").css("display", "none");
		$("#mclosebtn").css("display", "none");
		$(".logo-container").css("top", "-56px");
		$("#menubtn").css("visibility", "visible");
		$(".phone-menu-block").css("display", "block");
	}
	
	$(window).resize(function(){
		
		var w_width = $(window).width();
		if(w_width > 480){
			
			$(".menu-item").css("display", "block");
			$(".logo-container").css("top", "0");
			$("#mclosebtn").css("display", "none");
		}
		
			 if(w_width < 480){
				
				if($(".phone-menu-block").css("display") == "none"){
					
					showMenu();

					}
				else{
				
					hideMenu();
					
					}
			}
			
	})
	
		
	
	
////////////////////////////////////////////////////////////////	
	
// Обработка кнопок увеличения/уменьшения количества персон на заселение	
	
	$(".minus-btn").on("click", minusPerson);
	$(".plus-btn").on("click", plusPerson);
	
		
	function minusPerson(){
		var pvalue = $(this).next().val();
		var field = $(this).next();
		Number(pvalue);
		pvalue--;
		field.val(pvalue);
		
			if(pvalue < 0){
				field.val(0); //данная проверка не позволяет уменьшить количество ниже ноля
			}
		
	}
	
	function plusPerson(){
		var pvalue = $(this).prev().val();
		var field = $(this).prev();
		Number(pvalue);
		pvalue++;
		field.val(pvalue);
		
	}
	
	

///////////////////////////////////////////////////////////////	

//Первичная простая валидация количества персон
	
	$(".persons-field").change(function(){
		
		if($(this).val() < 0 || isNaN($(this).val()))
		{
			$(this).val(0);
		}
		
	});

//Добавление текущей даты в соответсвующие поля ввода
	
	var d = new Date();
    var today;
	var month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
	var today = d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г.";
	
	$(".date-field").val(today);

//////////////////////////////////////////////////////////////
 
//Привязка предварительно установленного плагина-календаря к полям даты 
	
	$(".date-field").datepicker();
	
///////////////////////////////////////////////////////////////	
	
	
	
	
	$(".menu-item a").addClass("menu-link");
	
	$(".menu-link").hover(addTitle);
		
		function addTitle(){
			var t_val = $(this).html();
			
			$(this).attr("title", t_val);
		}


});