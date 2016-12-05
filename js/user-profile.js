var data = {};

$.post("data/users.txt", function(response){
	var jsonObj = JSON.parse(response);
	var username = getParamValue("profile");

	if(jsonObj[username] != undefined){
		data = jsonObj[username];
		fillInUserProfile();
	}
});

function fillInUserProfile(){
	$("#profile-name").text(data.username);

	var userRating = data.rating;

	for(var i = 0; i < parseInt(userRating); i++){
		$("#rating-stars").append("<i class='fa fa-star'></i>");
	}

	for(var i = 0; i < (5-parseInt(userRating)); i++){
		$("#rating-stars").append("<i class='fa fa-star-o'></i>");
	}

	$("#profile-points").text(data.points);
	$("#profile-amount").text("$" + (data.amount).toFixed(2));
	$("#profile-type").text(data.type);
	$("#profile-pic").attr("src", "images/" + data.image);

	var ratings = data.ratings;

	$.each(ratings, function(i, value){
		var tableRow = $("<tr></tr>");
		tableRow.append("<td>" + ratings[i].username + "</td>");
		tableRow.append("<td>" + ratings[i].comment + "</td>");

		var rating = ratings[i].rating;
		var starCell = $("<td></td>");

		for(var i = 0; i < parseInt(rating); i++){
			starCell.append("<i class='fa fa-star'></i>");
		}

		for(var i = 0; i < (5-parseInt(rating)); i++){
			starCell.append("<i class='fa fa-star-o'></i>");
		}

		tableRow.append(starCell);

		$("#rating-table").append(tableRow);
	});
}