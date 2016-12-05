function sendMessage(){
	var message = $("#message-text").val();
	$("#message-text").val("");
	$(".message-box").append("<div class='right bg-gray w3-btn message text-right'>" + message + "</div>");
	$('.message-box').stop().animate({
		scrollTop: $('.message-box')[0].scrollHeight
	}, 800);

}

$('.message-box').stop().animate({
	scrollTop: $('.message-box')[0].scrollHeight
}, 800);