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


	
	/*********Основная функция постоения ленты новостей.******************/
	$scope.showFunc = function(source, img, text){	
		$http.get(request_body+'source='+source+sort+api_key).then(successCallback, errorCallback); //в этой строке происходит "ручная сборка" запроса к API
			function successCallback(response){
			$scope.news = response.data.articles;
			$scope.news.img = img;
			$scope.news.text = text;
			$scope.current_page = 'main';
		}
			function errorCallback(error){
			    alert('error');
		}
	}

	/*******Функция отображения ленты новостей из источника назначенного по умолчанию************/
	function defaultShow(source){
		$http.get(request_body+'source='+source.name+sort+api_key).then(successCallback, errorCallback);
		function successCallback(response){
		$scope.news = response.data.articles;
		$scope.current_page = 'main';
		$scope.news.img = source.img;  
		}
		function errorCallback(error){
		    alert('error');
		}
		
	}

	/********Функционал построения и отображения конкретной статьи**************/
	$scope.showArticle = function(title, description, _url, urlToImage){
			$scope.article = createArticleObj(title, description, _url, urlToImage);
			$scope.current_page = 'article';
	}

	/*********Добавление статьи в WatchList. Реализовано через добавление отдельной записи в Localstorage*********/
	$scope.readLater = function(article)
			{	
				storage.setItem("item"+storage.length, JSON.stringify(article));
			}

	/********Функционал построения и отображения списка сохраненных статей**************/
	$scope.showWatchList = function(){
			$scope.current_page = 'watch_list';
			$scope.list = [];	
			
			for(i=0; i<=storage.length; i++){
				
				if(storage["item"+i])
				{
					$scope.list.push(JSON.parse(storage["item"+i]));
				}
			}
	}

	/********Функционал удаления конкретной статьи из WatchList**************/
	$scope.removeFromList = function(article){
			var ident = article.title;
			for(i=0; i<=storage.length; i++){
				
			if(storage["item"+i]){	
				if(JSON.parse(storage["item"+i]).title == ident)
				{	
					storage.removeItem("item"+i);
					$scope.list.splice("item"+i, 1);
				}
			}
		}

	} 

	/************Функционал отображения списка статей, добавленных пользователем**************/
	
	/*В отличии от сохранения статей в WatchList, здесь был применен подход добавления
	  записей ввиде объектов в заранее подготовленный массив*/	
	$scope.showUserArticles = function(){
		$scope.current_page = "user_articles";
		article_arr_g = storage['user_articles'];   
		if(article_arr_g)//проверяем существование массива 'user_articles'
		{
			$scope.exiting_arr = JSON.parse(article_arr_g); //если массив существует, достаем из него данные и отдаем их $scope
		}
		else{
			storage.setItem("user_articles", JSON.stringify([])); //если массив не существует - создаем его
		}

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
			}
		}
	}		

	/********Создание дополнительного объекта конкретной статьи. Используется для генереации отдельной записи. Спорное решение*****/
	function createArticleObj(title, description, _url, urlToImage){
			var article_obj = {"title":title, "description":description, "url":_url, "urlToImage":urlToImage};
			return article_obj;
	}
	
});

