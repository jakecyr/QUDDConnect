var loadModalURL = "includes/transactions-modals.html";
var loadModalCallback = function(response){
	$("body").append(response);
};

//Load the modals from another file
$.post(loadModalURL, loadModalCallback);

//Update the stars when one is clicked
function updateRating(starClicked){
	$("#star-container i").removeClass("fa-star fa-star-o");

	for(var i = 1; i <=  starClicked; i++){
		$("#star-" + i).addClass("fa-star");
	}

	for(var i = (starClicked+1); i <= 5; i++){
		$("#star-" + i).addClass("fa-star-o");
	}
}

//Set the "rate" button to "rated"
function saveRating(){
	$("#rated").attr("disabled", "disabled").text("Rated");
}