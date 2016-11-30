var currentPage = "home";

function loadPage(pageName){
	currentPage = pageName;
	pageName = "pages/" + pageName + ".html";

	var contentElement = $("#main-content-container");
	contentElement.html($("#loader-container").html());

	var callBack = function(response){
		contentElement.html(response);
	};

	// setTimeout(function(){
	// 	$.get(pageName, callBack);
	// }, 1000);
	
	$.get(pageName, callBack);
}

function replaceParam(paramName, newValue){
	var currentURL = window.location.href;
	var re = new RegExp(paramName + "=(.+)&?");

	currentURL = currentURL.replace(re, newValue);
	window.history.pushState({}, null, currentURL);


	return currentURL;
}

function getParam(name) {
	var url = window.location;

    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

loadPage("home");