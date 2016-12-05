//Update the text box based on the check box state
function updateBalance(checkBoxState){
	if(checkBoxState){
		$("#type").text("Buying:");
	}
	else{
		$("#type").text("Selling:");
	}
}

//Update the text box based on the check box state when the page is loaded
updateBalance();