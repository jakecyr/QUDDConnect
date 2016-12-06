var currentPage = "home";

function loadPage(pageName){
	currentPage = pageName;
	pageName = "pages/" + pageName + ".html";

	var contentElement = $("#main-content-container");
	contentElement.html($("#loader-container").html());

	var callBack = function(response){
		contentElement.html(response);
	};

	$.get(pageName, callBack);
}

loadPage("home");