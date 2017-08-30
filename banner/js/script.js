{
		function parseGET() {
	  // Обработка GET-запросов
	  var tmp = new Array();    
	  var tmp2 = new Array(); 
	  get = new Array();

	  var url = location.search;	
	  if(url != '') {
	    tmp = (url.substr(1)).split('&');	
	    
	    for(var i=0; i < tmp.length; i++) {
	      tmp2 = tmp[i].split('=');		
	      get[tmp2[0]] = tmp2[1];		
	      return(get['lang']);
	    }
	  }
	}

	 var lang = parseGET();
	 var promo = document.getElementById('promo');
	 var trial = document.getElementById('trial');
	 var w_width = window.innerWidth;
	 
	 
	 if(lang == 'ru')
	 	{
	 		promo.innerHTML = 'Держите Личные Фото и Видео под Надежной Защитой';
	 		trial.innerHTML = '7-дневная пробная версия';
	 			
	 			if(w_width == 768)
	 				{
	 					promo.style.fontSize = '41px';
	 					promo.style.lineHeight = '61px';
	 					trial.style.fontSize = '35px';	
	 					trial.style.lineHeight = '68px';
	 				}

	 			else if(w_width == 1080){
	 					promo.style.fontSize = '53px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '43px';	
	 					trial.style.lineHeight = '24px';
	 			}	
	 			else if(w_width ==750)
	 				{	
	 					promo.style.fontSize = '42px';
	 					promo.style.lineHeight = '60px';
	 					trial.style.fontSize = '36px';
	 					trial.style.lineHeight = '23px';
	 				}
	 			else if(w_width == 640)
	 				{
	 					promo.style.fontSize = '33px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '30px';
	 					trial.style.lineHeight = '23px';
	 					
	 				}		
	 	}

	 else if(lang == 'es')
	 	{
	 		promo.innerHTML = 'Mantén Seguras Tus Fotosy Vídeos Privados';
	 		trial.innerHTML = 'Prueba gratuita de 7 días';
	 				if(w_width == 1080)
	 				{
	 					promo.style.fontSize = '64px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '51px';
	 					trial.style.lineHeight = '25px';
	 				}

	 				if(w_width == 768){
	 					promo.style.fontSize = '50px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '40px';
	 					trial.style.lineHeight = '25px';
	 				}

	 				else if(w_width == 750)
	 				{
	 					promo.style.fontSize = '48px';
	 					promo.style.lineHeight = '65px';
	 					trial.style.fontSize = '40px';
	 					trial.style.lineHeight = '55px';
	 					
	 				}

	 				else if(w_width ==640)
	 				{	
	 					promo.style.fontSize = '34px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '29px';
	 					trial.style.lineHeight = '20px';
	 				}	
	 	}

	 else if(lang == 'de')
		{
			promo.innerHTML = 'Halten Sie Ihre privaten Fotos & Videos';
			trial.innerHTML = 'geheim7-tägige Gratis-Version';

					if(w_width == 768)
					{
						promo.style.fontSize = '43px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 1080){
						promo.style.fontSize = '65px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '46px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 750){
						promo.style.fontSize = '45px';
	 					promo.style.lineHeight = '54px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '42px';
					}

					else if(w_width == 640){
						promo.style.fontSize = '34px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '27px';
	 					trial.style.lineHeight = '20px';
					}
		}

	else if(lang == 'fr')
		{
			promo.innerHTML = 'Protégez Vos Photos et Vidéos Privées';
			trial.innerHTML = "7 jours d'essai gratuit";

					if(w_width == 768)
					{
						promo.style.fontSize = '47px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 1080){
						promo.style.fontSize = '70px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '46px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 750){
						promo.style.fontSize = '45px';
	 					promo.style.lineHeight = '54px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '42px';
					}

					else if(w_width == 640){
						promo.style.fontSize = '40px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '20px';
					}	
		}

	else if(lang == 'ja')
		{
			promo.innerHTML = 'プライベート写真と 動画を安全に 保つ';
			trial.innerHTML = '7日間無料トライアル';

					if(w_width == '768'){
						promo.style.fontSize = '64px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '46px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 1080){
						promo.style.fontSize = '94px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '46px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 750){
						promo.style.fontSize = '62px';
	 					promo.style.lineHeight = '54px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '42px';
					}

					else if(w_width == 640){
						promo.style.fontSize = '51px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '33px';
	 					trial.style.lineHeight = '20px';
					}	
		}

	else if(lang == 'it')
		{	
			promo.innerHTML = 'Tieni al Sicuro i Tuoi Video e Foto Private';
			trial.innerHTML = 'Prova gratuita di 7 giorni';

					if(w_width == 768){
						promo.style.fontSize = '50px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '40px';
	 					trial.style.lineHeight = '25px';
					}

					else if(w_width == 1080){
	 					promo.style.fontSize = '75px';
	 					promo.style.lineHeight = '75px';
	 					trial.style.fontSize = '51px';
	 					trial.style.lineHeight = '25px';
	 				}

	 				else if(w_width == 750)
	 				{
	 					promo.style.fontSize = '48px';
	 					promo.style.lineHeight = '50px';
	 					trial.style.fontSize = '40px';
	 					trial.style.lineHeight = '55px';
	 					
	 				}

	 				else if(w_width == 640)
	 				{	
	 					promo.style.fontSize = '40px';
	 					promo.style.lineHeight = '49px';
	 					trial.style.fontSize = '32px';
	 					trial.style.lineHeight = '20px';
	 				}	


		}				


}