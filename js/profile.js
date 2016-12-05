fillInUserProfile();

function fillInUserProfile(){
	$("#profile-name").text(userData.username);

	var userRating = userData.rating;

	for(var i = 0; i < parseInt(userRating); i++){
		$("#rating-stars").append("<i class='fa fa-star'></i>");
	}

	for(var i = 0; i < (5-parseInt(userRating)); i++){
		$("#rating-stars").append("<i class='fa fa-star-o'></i>");
	}

	$("#profile-points").text(userData.points);
	$("#profile-amount").text("$" + (userData.amount));
	$("#profile-type").text(userData.type);
	$("#profile-pic").attr("src", "images/" + userData.image);

	var ratings = userData.ratings;

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

function editProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html("<input value='" + $(".editable:eq(" + i + ")").text() + "'>");
	}
	$("#edit").hide();
	$("#save").show();
	$("#pro-pic").show();
}
function saveProfile(){
	for(var i = 0; i < $(".editable").length;i++){
		$(".editable:eq(" + i + ")").html($(".editable:eq(" + i + ") input").val());
	}
	$("#save").hide();
	$("#pro-pic").hide();
	$("#edit").show();
}