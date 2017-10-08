window.onload = function(){

/* ------------Код управления слайдером -------------*/

var prev = document.getElementById('prev_btn');
var next = document.getElementById('next_btn');
var slider = document.getElementById('slider');
var width = 590;

if(window.innerWidth <= 480){ //здесь изменяется размер слайда в зависимости от разрешения
		width = 280;
	}

var qnt = document.getElementsByClassName('slide-block').length;
var current_pos = 0;

	
var slide_step = width;
	if(window.innerWidth >= 1200){ //данный блок кода увеличивает "шаг слайдера" на десктопных версиях
		slide_step = width * 2;
	}

	next.onclick = function(){
		if(Math.abs(current_pos) == Math.abs(width * (qnt - 2)))
		{
			slider.style.left = '0px';
			current_pos = 0;
		}
		else
		{
		current_pos -= slide_step;
		slider.style.left = current_pos + 'px';
		alert(current_pos);
		}

	}

	prev.onclick = function(){
		if(current_pos == 0){
			slider.style.left = '-' + width * (qnt - 2) + 'px';
			current_pos -= width * (qnt - 2);
			alert(current_pos);

		}
		
		else{
		current_pos = current_pos + slide_step;
		slider.style.left = current_pos + 'px';
		alert(current_pos);
		}
	}


/*----------Запись текущей даты в соответствующее поле---------*/

var date_field = document.getElementById('current_date');

var date = new Date();

var dd = date.getDate();

if (dd < 10) {
	dd = '0' + dd;
}

var mm = date.getMonth() + 1;
if (mm < 10) {mm = '0' + mm;	
}

var yy = date.getFullYear();

date_field.innerHTML = dd +'.'+ mm +'.'+ yy;



/***************Валидация полей формы***********/

function validate(){
	
}


}




	

