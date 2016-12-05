//Simulate a message being sent
function sendMessage(){
	var message = $("#message-text").val();
	$("#message-text").val("");
	$(".message-box").append("<div class='right bg-gray w3-btn message text-right'>" + message + "</div>");
	$('.message-box').stop().animate({
		scrollTop: $('.message-box')[0].scrollHeight
	}, 800);
}

//Scroll the message box down after sending a new message
$('.message-box').stop().animate({
	scrollTop: $('.message-box')[0].scrollHeight
}, 800);

//Change the name over the messages when a different thread is clicked
$(".message-list-item").click(function(){
	//Get the name that was clicked
	var clickedName = $(this).find(".message-name").text();

	//Change the current thread to the name that was clicked
	$("#current-thread").text(clickedName);

	//Remove the "clicked" class from all threads
	$(".message-list-item").removeClass("w3-gray padding");

	//Add the clicked class to the thread that was clicked
	$(this).addClass("w3-gray padding");
});