//Add each friend the current user has to the page
$.each(userData.friends, function(i, value){
	print(value);
	var newFriend = $(".friend-template");
	newFriend.find(".name").text(value.username);
	newFriend.find("img").attr("src", "images/" + value.image);
	newFriend.find(".name-link").attr("onclick", "addParam('profile', '" + value.short + "');loadPage('user.html');")
	$("#friend-container").append("<hr>" + newFriend.html());
});

//Update the count of friends in the header
updateCount();

//Remove the friend from the page and update the count
function blockFriend(buttonElement){
	$(buttonElement).text('Blocked');
	$(buttonElement).parent().parent().fadeOut(1000, function(){
		$(this).prev("hr").remove();
		$(this).remove();
		updateCount();
	});
}

//Remove the friend from the page and update the count
function removeFriend(buttonElement){
	$(buttonElement).parent().parent().slideUp(1000, function(){
		$(this).prev("hr").remove();
		$(this).remove();
		updateCount();
	});
}

// Update the number of friends count
function updateCount(){
	//Get the number of friend sections subtracting the template section
	var newCount = $(".friend").length - 1;

	if(newCount > 0){
		//Update the count
		$(".count").text(newCount);
	}
	else{
		//Tell the user they have no other friends
		$("#friend-container h4").html("You have no friends");
	}
}