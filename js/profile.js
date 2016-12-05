fillInUserProfile();

//Fill in the user profile with data from the data/data.txt file
function fillInUserProfile(){

	//Set the username
	$("#profile-name").text(userData.username);

	//Get the user rating
	var userRating = userData.rating;

	//Add full stars up to the user's rating
	for(var i = 0; i < parseInt(userRating); i++){
		$("#rating-stars").append("<i class='fa fa-star'></i>");
	}

	//Add blank stars from the user's rating to 5
	for(var i = 0; i < (5-parseInt(userRating)); i++){
		$("#rating-stars").append("<i class='fa fa-star-o'></i>");
	}

	//Update the number of points
	$("#profile-points").text(userData.points);

	//Update the amount of money the user is selling/buying
	$("#profile-amount").text("$" + (userData.amount));

	//Update the user's profile type
	$("#profile-type").text(userData.type);

	//Update the profile picture
	$("#profile-pic").attr("src", "images/" + userData.image);

	//Get all of the ratings
	var ratings = userData.ratings;

	//For each rating, add it to the page
	$.each(ratings, function(i, value){

		//Create a new table row element
		var tableRow = $("<tr></tr>");

		//Add the username to the row
		tableRow.append("<td>" + ratings[i].username + "</td>");

		//Add the comment to the row
		tableRow.append("<td>" + ratings[i].comment + "</td>");

		//Get the numerical rating
		var rating = ratings[i].rating;

		//Create a cell to contain the stars
		var starCell = $("<td></td>");

		//Add stars up to the user's rating
		for(var i = 0; i < parseInt(rating); i++){
			starCell.append("<i class='fa fa-star'></i>");
		}

		//Add blank stars from the user's rating to 5
		for(var i = 0; i < (5-parseInt(rating)); i++){
			starCell.append("<i class='fa fa-star-o'></i>");
		}

		//Append the star cell to the new row
		tableRow.append(starCell);

		//Append to the new row to the table
		$("#rating-table").append(tableRow);
	});
}

//Change all of the user's profile information text items into input boxes for editing
function editProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html("<input value='" + $(".editable:eq(" + i + ")").text() + "'>");
	}
	$("#edit").hide();
	$("#save").show();
	$("#pro-pic").show();
}

//Save all of the profile edits and change the input boxes back into text items
function saveProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html($(".editable:eq(" + i + ") input").val());
	}
	$("#save").hide();
	$("#pro-pic").hide();
	$("#edit").show();
}