//Prevent Ajax from caching the page content for testing
$.ajax({
	cache: false
});

//Load the navigation bar
$.get("includes/nav.html", function(response){
	$("nav").html(response);
});

//Check if the user is on a page other than home
var page = (getParams() == null ? "home": getParams().page);

//Load the page content
loadPage(page);

//Load the specified page content
function loadPage(pageName){

	//Get the parameters from the URL query string
	var params = getParams();

	//Add/Replace the current page in the URL with the new page
	addParam("page", pageName);

	//Update the navigation bar (nav changes when on home screen)
	updateNavigationBar(pageName);

	//Update the title element to reflect the new page name
	updateTitleElement(pageName);

	//Format the page name for the POST request
	pageName = "pages/" + pageName + ".html";

	//Get the main content element where the new content will go
	var contentElement = $("#main-content-container");

	//Show the loader while the page is loading
	showLoader();

	//Create the callback function for the post request
	var callBack = function(response){
		//Add the loaded content to the page after the timeout (to show the loading animation)
		setTimeout(function(){
			contentElement.html(response);
		}, 1000);
	};

	//Send the POST request for the new page's content
	$.post(pageName, callBack);
}

//Returns the current page the user is on
function getCurrentPage(){
	//Get all URL parameters as an object
	var params = getParams();

	if(params != null){
		if(params.page != null && params.page != ""){
			return params.page;
		}
		else{
			return "home";
		}
	}
	else{
		return "home";
	}
}

//Update the naviation bar if the user is on the homepage
function updateNavigationBar(newPage){
	if(newPage == "home"){
		$("#main-nav").hide();
		$("#home-nav").show();
	}
	else{
		$("#home-nav").hide();
		$("#main-nav").show();
	}
}

//Update the title element in the document head
function updateTitleElement(pageName){
	//Format the page name
	formattedPageName = toTitleCase(pageName.replace("-", " "));

	//Change the title element text
	$("title").text(formattedPageName + " | QUDD Connect");
}

//Show the loading animation in the main content container
function showLoader(){
	$("#main-content-container").html($("#loader-container").html());
}

//Add/Replace a parameter in the URL
function addParam(key, value){
	var baseURL = (window.location.href).replace("#", "").split("?")[0];
	var params = getParams();

	baseURL += "?";

	if(params != null){
		params[key] = value;

		if(count(params) > 0){
			for (var key in params) {
				baseURL += key + '=' + params[key] + "&";
			}

			baseURL = baseURL.substring(0, baseURL.length -1);
		}
	}
	else{
		baseURL += key + "=" + value;
	}

	window.history.pushState({}, null, baseURL);
	return baseURL;
}

//Return a count of key/value pairs in the URL query
function count(obj) { 
	return Object.keys(obj).length; 
}

//Returns all URL query key/value pairs as an object
function getParams(){
	var currentURL = (window.location.href).replace("#", "");

	if(currentURL.includes("?")){
		var params = (currentURL).split("?")[1].split("&");
		var paramDict = {};

		$.each(params, function(i, value){
			var values = value.split("=");
			paramDict[values[0]] = values[1];
		});

		return paramDict;
	}
	else{
		return null;
	}
}

//Capitalizes the first letter of each word
function toTitleCase(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//Log text or an object to the console (quicker for testing)
function print(value){
	console.log(value);
}