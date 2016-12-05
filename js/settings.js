//Change the form label based on what account type the user chose
function updateBalance(checkBoxState){
	//Check box checked
	if(checkBoxState){
		$("#balance").text("Amount you want to buy:");
	}
	else{
		$("#balance").text("Amount you want to sell:");
	}
}

//Update which settings pane is being displayed
function updateContent(buttonElement, setting){
	$("#section-1 a").removeClass("active");
	$(buttonElement).addClass("active");
	$("#section-2 .settings-window").hide();
	$("#" + setting + "-settings").show();
}

//Change the save button when it is clicked
$(".save-button").click(function(){
	$(this).prop('disabled', true);
	$(this).text("Saved!");
	setTimeout(function(){ 
		$(this).prop('disabled', false);
		$(this).text("Save Changes");
	}, 2000);
});

//Update the check box on page load
updateBalance();