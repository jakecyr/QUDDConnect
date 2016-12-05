var data = {};

//Get the data for the user profile chosen
$.post("data/users.txt", function(response){
	var jsonObj = JSON.parse(response);

	//Get the username from the URL
	var username = getParamValue("profile");

	if(jsonObj[username] != undefined){
		data = jsonObj[username];
		fillInUserProfile();
	}
});

//Fill in the user profile with the data received from the data/users.txt file
function fillInUserProfile(){
	//Set the username
	$("#profile-name").text(data.username);

	//Get the user's numerical rating
	var userRating = data.rating;

	//Add stars up to the user's rating
	for(var i = 0; i < parseInt(userRating); i++){
		$("#rating-stars").append("<i class='fa fa-star'></i>");
	}

	//Add blank stars from the user's rating to 5
	for(var i = 0; i < (5-parseInt(userRating)); i++){
		$("#rating-stars").append("<i class='fa fa-star-o'></i>");
	}

	//Add the user's point value
	$("#profile-points").text(data.points);

	//Add the user's amount they are looking to buy/sell
	$("#profile-amount").text("$" + data.amount);

	//Add the user's account type
	$("#profile-type").text(data.type);

	//Display the user's profile picture
	$("#profile-pic").attr("src", "images/" + data.image);

	//Get all ratings for the current user
	var ratings = data.ratings;

	//Display each rating on the page
	$.each(ratings, function(i, value){

		//Create a new row a new rating
		var tableRow = $("<tr></tr>");

		//Add the rater's name
		tableRow.append("<td>" + ratings[i].username + "</td>");

		//Add the rater's comment
		tableRow.append("<td>" + ratings[i].comment + "</td>");

		//Get the rating
		var rating = ratings[i].rating;

		//Create a new cell to hold the star icons
		var starCell = $("<td></td>");
		
		//Add stars up to the user's rating
		for(var i = 0; i < parseInt(rating); i++){
			starCell.append("<i class='fa fa-star'></i>");
		}

		//Add blank stars from the user's rating to 5
		for(var i = 0; i < (5-parseInt(rating)); i++){
			starCell.append("<i class='fa fa-star-o'></i>");
		}

		//Append the star cell to the new rating row
		tableRow.append(starCell);

		//Append the current rating to the page
		$("#rating-table").append(tableRow);
	});
}