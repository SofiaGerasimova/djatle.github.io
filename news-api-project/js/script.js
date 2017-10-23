	var newsApp = angular.module("newsApp", []);

	var model = {
				 nav:{cnn:{name: "cnn", icon: "img/cnn-icon.png", img: "img/cnn-img.png"},
				 	  bbc:{name: "bbc-news", icon: "img/bbc-icon.png", img: "img/bbc-img.png"},
				 	  daily_mail:{name: "daily-mail", icon: "img/daily-icon.png", img: "img/daily-img.png"},
				 	  bloomberg:{name: "bloomberg", icon: "img/bloom-icon.png", img: "img/bloom-img.png"},
				 	  guardian:{name: "the-guardian-au", icon: "img/guardian-icon.png", img: "img/guard-img.png"},
				 	  mtv:{name: "mtv-news", icon: "img/mtv-icon.png", img: "img/mtv-img.png"}	

				 }};
	
	newsApp.controller('NewsCtrl', function ($scope, $http) {
	

	var request_body = "https://newsapi.org/v1/articles?";   
	var sort = "&sortBy=top";                                 //эти переменные позволят более гибко манипулирвать запросами к API
	var api_key = "&apiKey=c429b748432d43cda76f28feb8064cc7";
	

	var storage = localStorage;
	
	$scope.nav_arr = model.nav;   //построение списка доступных источников
	$scope.current_page = 'main';
	
	var default_source = model.nav.bbc; //здесь указан параметр, который отвечает за источник отображения новостей по умолчанию
	defaultShow(default_source);  

	watchList = storage['watchList'];
	if(watchList == undefined){
		storage.setItem("watchList", JSON.stringify([]));
	}

	user_articles = storage['user_articles'];
	if(user_articles == undefined){
		storage.setItem("user_articles", JSON.stringify([]));
	}
	
	/*********Основная функция постоения ленты новостей.******************/
	$scope.showFunc = function(source, img, text){	
		$http.get(request_body+'source='+source+sort+api_key).then(successCallback, errorCallback); //в этой строке происходит "ручная сборка" запроса к API
			function successCallback(response){
				$scope.news = checkList(response.data.articles);
				$scope.news.img = img;
				$scope.news.text = text;
				$scope.current_page = 'main';
		}
			function errorCallback(error){
			    alert('error');
		}
	}


	/*************Проверка на совпадение с записями в WatchList*******/

	function checkList(news){
		watchList = storage['watchList'];
		watchList_g = JSON.parse(watchList);
			for(i=0; i<news.length; i++){

				for(n=0; n<watchList_g.length; n++){
					
					if(news[i].title == watchList_g[n].title){
						news[i].added = 1;
					}
					
				}
				
			}
			return news;
			
	}

	/*******Функция отображения ленты новостей из источника назначенного по умолчанию************/
	function defaultShow(source){
		$http.get(request_body+'source='+source.name+sort+api_key).then(successCallback, errorCallback);
		function successCallback(response){
		$scope.news = checkList(response.data.articles);
		
		$scope.current_page = 'main';
		$scope.news.img = source.img;  
		}
		function errorCallback(error){
		    alert('error');
		}
		
	}

	/********Функционал построения и отображения конкретной статьи**************/
	$scope.showArticle = function(article){
			$scope.article = article;
			$scope.current_page = 'article';
	}

	/*********Добавление статьи в WatchList*********/
	$scope.readLater = function(article, event)
		{	
			event.currentTarget.style.display = 'none'; //ортопедический снаряд
			article_arr_s = JSON.parse(storage['watchList']); 
			article_arr_s.push(article); //добавили новую статью в массив
			storage.setItem('watchList', JSON.stringify(article_arr_s));//отправили обновленный массив в Localstorage
			$scope.list = article_arr_s;

		}

	/********Функционал построения и отображения списка сохраненных статей**************/
	$scope.showWatchList = function(){
			$scope.current_page = 'watch_list';
			article_arr_g = storage['watchList'];   
			$scope.list = JSON.parse(article_arr_g); 
	}

	/********Функционал удаления конкретной статьи из WatchList**************/
	$scope.removeFromList = function(article){
			var ident = article.title;
			article_arr_s = JSON.parse(storage['watchList']);
			for(i=0; i<=article_arr_s.length; i++){
				
			if(article_arr_s[i].title  == ident){	
				article_arr_s.splice(i, 1);
				storage.setItem('watchList', JSON.stringify(article_arr_s));
				$scope.list = article_arr_s;
				break;
			}
		}

	} 

	/************Функционал отображения списка статей, добавленных пользователем**************/
	
	/*В отличии от сохранения статей в WatchList, здесь был применен подход добавления
	  записей ввиде объектов в заранее подготовленный массив*/	
	$scope.showUserArticles = function(){
		$scope.current_page = "user_articles";
		article_arr_g = storage['user_articles'];   
		
		$scope.exiting_arr = JSON.parse(article_arr_g); //если массив существует, достаем из него данные и отдаем их $scope
		
		
	}

	/************Функционал построения и добавления пользовательской статьи в localsorage**************/
	$scope.addArticle = function(newArticle){
		$scope.userArticle = {};
		$scope.userArticle.title = newArticle.title;
		$scope.userArticle.description = newArticle.description;
		
		article_arr_s = JSON.parse(storage['user_articles']); //получили запись и преобразовали её
		article_arr_s.push($scope.userArticle); //добавили новую статью в массив
		storage.setItem('user_articles', JSON.stringify(article_arr_s));//отправили обновленный массив в Localstorage
		$scope.exiting_arr = article_arr_s;
	
	}

	/*********Удаление Пользовательской статьи и соответствующее преобразование $scope*******/
	$scope.removeArticle = function(deletingArticle){
		var ident = deletingArticle.title;
		article_arr_s = JSON.parse(storage['user_articles']);
		
		for(i=0; i<article_arr_s.length; i++){
			
			if(article_arr_s[i].title == ident){

				article_arr_s.splice(i, 1);
				storage.setItem('user_articles', JSON.stringify(article_arr_s));
				$scope.exiting_arr = article_arr_s;
				break;
			}
		}
	}		

	
});

