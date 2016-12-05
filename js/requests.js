
$(".change-button").click(function(){
	$(this).parent().parent().slideUp(1000, function(){
		$(this).prev("hr").remove();
		$(this).remove();
	});
});